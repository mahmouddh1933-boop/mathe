import assert from 'node:assert/strict';
import { readFile, copyFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || '/tmp/mathe-browser/node_modules/playwright-core/index.mjs');
// Test the distributed file alone, away from all source files. The cloud browser
// blocks file: navigation by policy, so load that exact HTML with setContent.
const dir = await mkdtemp(join(tmpdir(), 'Mathe einzeln '));
let browser;
try {
  const file = join(dir, 'index.html');
  await copyFile(new URL('../index.html', import.meta.url), file);
  const html = await readFile(file, 'utf8');
  assert.ok(!/<script\b[^>]*\bsrc\s*=|<link\b[^>]*\bhref\s*=/i.test(html));
  browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const page = await browser.newPage();
  const errors = [], requests = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('request', r => requests.push(r.url()));
  // about:blank does not permit localStorage, exercising the in-memory fallback.
  await page.setContent(html);
  await page.locator('.studio-hero').waitFor();
  assert.equal(await page.locator('.studio-hero').evaluate(e => getComputedStyle(e).backgroundColor), 'rgb(234, 228, 245)');
  await page.locator('#grade-select').selectOption('6');
  await page.locator('[data-nav="quiz"]').first().click();
  await page.locator('#quiz-form button[type="submit"]').click();
  for (let i=0; i<10; i++) {
    await page.locator('[data-action="skip"]').click();
    await page.locator('.feedback.learning').waitFor();
    await page.locator('[data-action="next"]').click();
  }
  assert.equal(await page.locator('.result-list details').count(), 10);
  await page.locator('[data-nav="progress"]').first().click();
  assert.equal(await page.locator('.stat strong').first().innerText(), '10');
  await page.locator('#grade-select').selectOption('7');
  await page.locator('[data-nav="topics"]').first().click();
  await page.locator('[data-topic="equation"]').click();
  await page.locator('[data-learning-action="begin"]').click();
  const prompt=await page.locator('.learning-task>h2').innerText();
  const rhs=Number(prompt.match(/= (\d+)/)[1]);
  await page.locator('.training-steps input').fill(String(rhs));
  await page.locator('#learning-form button[type="submit"]').click();
  await page.locator('.learning-success').waitFor();
  assert.match(await page.locator('.stage-counter').innerText(),/^1/);
  await page.setViewportSize({ width:390, height:844 });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  assert.deepEqual(errors, []);
  assert.deepEqual(requests, [], 'Standalone file must not request modules, styles, or external resources');
  console.log('Standalone HTML passed: copied file, embedded styles, no network requests, quiz, explanations, learning task and stage progress without storage, mobile layout. Direct file: navigation is blocked by the cloud browser policy and was not claimed as tested.');
} finally {
  await browser?.close();
  await rm(dir, { recursive:true, force:true });
}
