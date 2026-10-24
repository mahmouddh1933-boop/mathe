const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || '/tmp/mathe-browser/node_modules/playwright-core/index.mjs');
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH || '/usr/bin/chromium',headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
try {
const page=await browser.newPage({viewport:{width:1440,height:1100}});page.setDefaultTimeout(10000);
const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto(process.env.BASE_URL || 'http://127.0.0.1:3000');await page.waitForSelector('.studio-hero');await page.screenshot({path:'/tmp/mathe-v2-desktop.png',fullPage:true});
await page.locator('#grade-select').selectOption('7');await page.locator('[data-nav="topics"]').first().click();await page.locator('#topic-search').fill('gleichungen');await page.locator('[data-topic="equation"]').click();
await page.locator('.explanation-card').first().waitFor();assert.equal(await page.locator('.rail-item[data-stage="1"]').isDisabled(),true);
const examples=[];for(let i=0;i<3;i++){await page.locator(`.example-tabs [data-example="${i}"]`).click();examples.push(await page.locator('.example-body h3').innerText());assert.equal(await page.locator('.worked-steps li').count(),3);}assert.equal(new Set(examples).size,3);
await page.screenshot({path:'/tmp/mathe-v2-lesson.png',fullPage:true});
await page.locator('[data-learning-action="begin"]').click();assert.equal(await page.locator('.training-steps input').count(),1);
await page.locator('#learning-form button[type="submit"]').click();await page.getByRole('alert').filter({hasText:'Bitte fülle'}).waitFor();
await page.locator('[data-learning-action="reveal"]').click();await page.locator('.revealed-solution').waitFor();assert.match(await page.locator('.stage-counter').innerText(),/^0/);await page.locator('[data-learning-action="next-task"]').click();
for(let stage=0;stage<4;stage++){
 for(let item=0;item<3;item++){
  const prompt=await page.locator('.learning-task>h2').innerText();const m=prompt.match(/(\d+)x \+ (\d+) = (\d+)/);assert.ok(m,prompt);const a=+m[1],b=+m[2],c=+m[3];const answers=[c-b,(c-b)/a,c];
  const inputs=page.locator('.training-steps input');assert.equal(await inputs.count(),stage<=1?1:stage===2?2:3);
  if(stage===3){assert.equal(await page.locator('.training-steps .step-equation').first().innerText(),'');await page.locator('#scratchpad').fill('Mein eigener Rechenweg.');}
  for(const input of await inputs.all()){const i=Number((await input.getAttribute('name')).split('-')[1]);await input.fill(String(answers[i]));}
  if(item===0){await inputs.first().fill('99999');await page.locator('#learning-form button[type="submit"]').click();await page.locator('.step-wrong').waitFor();const input=page.locator('.step-wrong input').first(),i=Number((await input.getAttribute('name')).split('-')[1]);await input.fill(String(answers[i]));}
  await page.locator('#learning-form button[type="submit"]').click();await page.locator('.learning-success').waitFor();
  if(item<2)await page.locator('[data-learning-action="next-task"]').click();
 }
 if(stage<3)await page.locator('[data-learning-action="advance"]').click();
}
const p=await page.evaluate(()=>JSON.parse(localStorage.getItem('mathe-entdecken-v1')).learning['7:equation']);assert.deepEqual(p.passed,[3,3,3,3]);assert.equal(p.correct,12);
await page.reload();await page.locator('[data-nav="topics"]').first().click();await page.locator('[data-topic="equation"]').click();assert.equal(await page.locator('.rail-item.finished').count(),4);
await page.locator('[data-nav="quiz"]').first().click();await page.locator('#quiz-form button[type="submit"]').click();for(let i=0;i<10;i++){await page.locator('[data-action="skip"]').click();await page.locator('[data-action="next"]').click();}await page.locator('.result-score').waitFor();assert.equal(await page.locator('.result-list details').count(),10);
await page.locator('[data-nav="repeat"]').first().click();await page.locator('[data-action="repeat"]').click();await page.locator('.question-title').waitFor();
await page.locator('[data-nav="progress"]').first().click();await page.locator('[data-action="reset"]').click();await page.locator('[data-action="cancel-reset"]').click();assert.equal(await page.locator('dialog').count(),0);
await page.setViewportSize({width:390,height:844});await page.locator('.mobile-menu').click();await page.locator('[data-nav="home"]').first().click();await page.screenshot({path:'/tmp/mathe-v2-mobile.png',fullPage:true});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
await page.locator('.mobile-menu').click();await page.locator('[data-nav="topics"]').first().click();await page.locator('[data-topic="equation"]').click();await page.screenshot({path:'/tmp/mathe-v2-mobile-lesson.png',fullPage:true});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
await page.locator('.mobile-menu').click();await page.locator('#grade-select').selectOption('6');await page.locator('.mobile-menu').click();await page.locator('[data-nav="topics"]').first().click();await page.locator('[data-topic="percent"]').click();await page.locator('[data-lab="a"]').fill('50');await page.locator('[data-lab="a"]').dispatchEvent('input');assert.match(await page.locator('#lab-output').innerText(),/50 % von 100 = 50/);
await page.locator('[data-learning-action="begin"]').click();await page.screenshot({path:'/tmp/mathe-v2-mobile-training.png',fullPage:true});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
assert.deepEqual(errors,[]);console.log('Browser passed: 3 distinct examples, locked stages, empty/wrong/correct answers, revealed answers do not advance, all four stages (12 tasks), saved mastery, quiz, repetition, reset cancel, interactive lab, mobile layouts.');
} finally {await browser.close();}
