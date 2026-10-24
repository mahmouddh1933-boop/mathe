import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculum} from '../src/curriculum.js';
import {lessonGuides,workedTask,gapIndices,checkLearning,learningStages} from '../src/lessons.js';
const seeded=n=>()=>{n=(Math.imul(n,1664525)+1013904223)>>>0;return n/4294967296;};
for(const [grade,topics] of Object.entries(curriculum))test(`class ${grade}: authored explanations and all four learning stages for every topic`,()=>{
 const rng=seeded(Number(grade)*1983);
 for(const topic of topics){
  const guide=lessonGuides[topic.id];assert.ok(guide,topic.id);
  for(const field of ['idea','method','pitfall'])assert.ok(guide[field]?.length>90,`${topic.id}: ${field} insufficient explanation`);
  const prompts=new Set();
  for(let i=0;i<30;i++){
   const task=workedTask(Number(grade),topic,{rng,easy:i%2===0});prompts.add(task.prompt);
   assert.ok(task.steps.length>=2);assert.ok(task.prompt.length>15);assert.equal(task.grade,Number(grade));
   for(const step of task.steps){assert.ok(step.label);assert.ok(step.before);assert.ok(step.why.length>15);assert.ok(typeof step.value==='number'?Number.isFinite(step.value):step.value.length>0);}
   for(const stage of learningStages){
    const gaps=gapIndices(task,stage.id,rng),answers=Object.fromEntries(gaps.map(i=>[i,String(task.steps[i].value)]));
    assert.equal(new Set(gaps).size,gaps.length);assert.ok(gaps.every(i=>i>=0&&i<task.steps.length));
    assert.deepEqual(checkLearning(task,gaps,answers),gaps.map(()=>true));
    assert.deepEqual(checkLearning(task,gaps,{}),gaps.map(()=>false));
    const broken={...answers,[gaps[0]]:'falsch'};assert.equal(checkLearning(task,gaps,broken)[0],false);
    if(stage.id==='warmup')assert.deepEqual(gaps,[task.steps.length-1]);
    if(stage.id==='one')assert.equal(gaps.length,1);
    if(stage.id==='many')assert.ok(gaps.length>=2);
    if(stage.id==='solo')assert.equal(gaps.length,task.steps.length);
   }
  }
  assert.ok(prompts.size>=3,`${topic.id} does not offer at least three varied examples`);
 }
});
test('independent checks of new worked examples for arithmetic, equations, finance and probability',()=>{
 const find=id=>Object.values(curriculum).flat().find(t=>t.id===id);
 const rng=seeded(73);
 for(let i=0;i<100;i++){
  for(const grade of [1,2,3,4])for(const id of ['add','subtract']){
   const q=workedTask(grade,find(id),{rng});const nums=q.prompt.match(/Berechne ([\d.]+) ([+−]) (\d+)/);const a=Number(nums[1].replaceAll('.','')),b=Number(nums[3]);
   assert.equal(q.steps.at(-1).value,nums[2]==='+'?a+b:a-b);assert.ok(q.steps.at(-1).value>=0);assert.ok(q.steps.every(s=>s.value>=0));
   if(grade===1)assert.ok(q.steps.at(-1).value<=20);
  }
  const eq=workedTask(7,find('equation'),{rng}),m=eq.prompt.match(/(\d+)x \+ (\d+) = (\d+)/);assert.equal(+m[1]*eq.steps[1].value + +m[2],+m[3]);assert.equal(eq.steps[0].value,+m[3]- +m[2]);
  const interest=workedTask(8,find('interest'),{rng}),im=interest.prompt.match(/(\d+) €.*?zu (\d+) %/);assert.equal(interest.steps.at(-1).value,+((+im[1]*(1+Number(im[2])/100)**2).toFixed(2)));
  const prob=workedTask(8,find('compound'),{rng});const vals=prob.prompt.match(/(\d+) rote und (\d+) blaue/);const expected=(+vals[1]/(+vals[1]+ +vals[2]))**2;const[a,b]=prob.steps.at(-1).value.split('/').map(Number);assert.ok(Math.abs(a/b-expected)<1e-9);
 }
});
