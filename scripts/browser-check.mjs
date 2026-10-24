const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || '/tmp/mathe-browser/node_modules/playwright-core/index.mjs');
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH || '/usr/bin/chromium',headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1440,height:1100}});
page.setDefaultTimeout(10000);
const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto(process.env.BASE_URL || 'http://127.0.0.1:3000');await page.waitForSelector('.hero');await page.screenshot({path:'/tmp/mathe-desktop.png',fullPage:true});
await page.locator('#grade-select').selectOption('1');await page.locator('[data-start="count"]').click();
await page.locator('#answer-form .btn[type="submit"]').click();await page.getByRole('alert').filter({hasText:'Bitte gib'}).waitFor();
await page.locator('[data-action="skip"]').click();await page.locator('.feedback.learning').waitFor();
await page.locator('[data-action="exit"]').click();await page.locator('.result-score').waitFor();assert.equal(await page.locator('.result-score').innerText(),'0%');
await page.locator('.result-actions [data-nav="repeat"]').click();await page.locator('[data-action="repeat"]').click();
// Answer the exact failed question correctly using the saved task, without application internals.
const q=await page.evaluate(()=>JSON.parse(localStorage.getItem('mathe-entdecken-v1')).mistakes[0].q);
if(q.type==='choice')await page.locator('label.choice').nth(q.choices.findIndex(x=>String(x)===String(q.answer))).click();
else if(q.answers)for(let i=0;i<q.answers.length;i++){const input=page.locator(`[name="answer-${i}"]`);if(q.type==='order'||q.type==='match')await input.selectOption(String(q.answers[i]));else await input.fill(String(q.answers[i]));}
else await page.locator('[name="answer"]').fill(String(q.answer));
await page.locator('#answer-form .btn[type="submit"]').click();await page.locator('.feedback.success').waitFor();assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('mathe-entdecken-v1')).mistakes.length),0);
await page.locator('[data-action="next"]').click();await page.locator('.result-score').waitFor();
await page.reload();await page.locator('.stat strong').first().waitFor();assert.equal(await page.locator('#grade-select').inputValue(),'1');assert.equal(await page.locator('.stat strong').first().innerText(),'2');
await page.locator('[data-nav="topics"]').first().click();await page.locator('#topic-search').fill('nichtvorhanden');await page.locator('.empty-state').waitFor();await page.locator('#topic-search').fill('');
await page.locator('[data-topic="shapes"]').click();await page.locator('[data-cards="shapes"]').click();await page.locator('[data-action="reveal"]').click();assert.match(await page.locator('.flashcard p').innerText(),/Dreieck/);
await page.locator('[data-nav="quiz"]').first().click();await page.locator('#quiz-form button[type="submit"]').click();
for(let i=0;i<10;i++){await page.locator('[data-action="skip"]').click();await page.locator('[data-action="next"]').click();}
await page.locator('.result-score').waitFor();assert.equal(await page.locator('.result-list details').count(),10);
await page.locator('[data-nav="progress"]').first().click();await page.locator('[data-action="reset"]').click();await page.locator('dialog').waitFor();await page.locator('[data-action="cancel-reset"]').click();assert.equal(await page.locator('dialog').count(),0);
await page.setViewportSize({width:390,height:844});await page.locator('.mobile-menu').click();await page.locator('#grade-select').selectOption('10');await page.locator('.mobile-menu').click();await page.locator('[data-nav="home"]').first().click();await page.screenshot({path:'/tmp/mathe-mobile.png',fullPage:true});
assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'horizontal overflow on mobile');
await page.locator('.mobile-menu').click();await page.locator('[data-nav="topics"]').first().click();await page.locator('[data-topic="derivative"]').click();await page.locator('[data-start="derivative"]').click();await page.screenshot({path:'/tmp/mathe-exercise.png',fullPage:true});
assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'exercise overflow');
assert.deepEqual(errors,[]);console.log('Browser smoke passed: navigation, required input, skip, exact repetition, correct answer, persistence, search, cards, 10-question quiz, reset cancel, mobile layout.');await browser.close();
