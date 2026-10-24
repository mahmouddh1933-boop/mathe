import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculum, topicCount} from '../src/curriculum.js';
import {generateQuestion,isCorrect,parseNumber,solution} from '../src/questions.js';
function seeded(seed){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}
test('curriculum provides classes 1–13 and unique topic IDs within every class',()=>{
 assert.equal(Object.keys(curriculum).length,13);assert.ok(topicCount>=110);
 for(const topics of Object.values(curriculum)){assert.equal(new Set(topics.map(t=>t.id)).size,topics.length);assert.ok(topics.length>=7);for(const t of topics){assert.ok(t.rule.length>30);assert.ok(t.description);}}
});
for(const [g,topics] of Object.entries(curriculum))test(`class ${g}: all generators and response formats with 60 random cases per topic`,()=>{
 const rng=seeded(+g*2026);
 for(const t of topics)for(let i=0;i<60;i++){
  const q=generateQuestion(+g,t,{rng,format:['mixed','input','choice','truefalse'][i%4],difficulty:['easy','standard','hard'][i%3]});
  assert.ok(q.prompt.length>5, t.id);assert.ok(q.explanation.length>8,t.id);assert.equal(q.grade,+g);assert.equal(q.topicId,t.id);
  const answer=q.answers||q.answer;
  assert.equal(isCorrect(q,answer),true,`${g}:${t.id} rejects own solution ${JSON.stringify(q)}`);
  assert.ok(!solution(q).includes('NaN'));assert.ok(!solution(q).includes('Infinity'));assert.ok(!JSON.stringify(q).includes('undefined'));
  assert.equal(isCorrect(q,q.answers?q.answers.map(()=>987654321):'absichtlich falsch'),false);
  if(q.type==='choice'){
   assert.ok(q.choices.length>=2);assert.equal(new Set(q.choices.map(String)).size,q.choices.length,JSON.stringify(q));
   assert.equal(q.choices.filter(c=>isCorrect(q,c)).length,1,`not exactly one correct option ${JSON.stringify(q)}`);
  }
 }
});
test('German and international numeric input, fraction equivalence, and strict rejection',()=>{
 for(const [raw,expected]of [['1,25',1.25],['1.25',1.25],['−3',-3],[' 2 / 4 ',.5],['-3/4',-.75],['0,5/2',.25],['.5',.5]])assert.equal(parseNumber(raw),expected);
 for(const raw of ['','1/0','NaN','Infinity','2+2','2abc','1,2,3','1.000,5'])assert.ok(Number.isNaN(parseNumber(raw)),raw);
 assert.ok(isCorrect({answer:'2/4'},'0,5'));assert.ok(isCorrect({answer:'2/4'},'4/8'));assert.ok(isCorrect({answer:'1'},'1,0'));assert.ok(!isCorrect({answer:0},''));
 assert.ok(isCorrect({type:'multi',answers:[-2,0.5]},['-2','1/2']));
 assert.ok(!isCorrect({type:'multi',answers:[-2,.5]},['-2','']));
});
test('independent arithmetic checks over generated examples',()=>{
 const rng=seeded(987);
 for(let g=1;g<=4;g++)for(const id of ['add','subtract']){
  const t=curriculum[g].find(t=>t.id===id);if(!t)continue;
  for(let i=0;i<100;i++){
   const q=generateQuestion(g,t,{rng,format:'input'});const m=q.prompt.replaceAll('.','').match(/(\d+) ([+−]) (\d+)/);assert.ok(m);
   const a=Number(m[1]),b=Number(m[3]);assert.equal(q.answer,m[2]==='+'?a+b:a-b);assert.ok(q.answer>=0);assert.ok(q.answer<=([0,20,100,1000,1000000][g]));
  }
 }
 for(let i=0;i<100;i++){
  const q=generateQuestion(9,curriculum[9].find(t=>t.id==='quadratic'),{rng,format:'input'});
  const m=q.prompt.match(/x² ([+−]) (\d+)x − (\d+)/),p=(m[1]==='−'?-1:1)*Number(m[2]),c=-Number(m[3]);
  for(const x of q.answers)assert.equal(x*x+p*x+c,0);
  const s=generateQuestion(8,curriculum[8].find(t=>t.id==='systems'),{rng,format:'input'});const [a,b]=s.prompt.match(/= -?\d+/g).map(x=>Number(x.slice(2)));assert.equal(s.answers[0]+s.answers[1],a);assert.equal(2*s.answers[0]-s.answers[1],b);
 }
});
test('all six task formats are generated and variable numeric topics vary',()=>{
 const types=new Set();const rng=seeded(23);
 for(const[g,topics]of Object.entries(curriculum))for(const t of topics)for(let i=0;i<15;i++)types.add(generateQuestion(+g,t,{rng}).type);
 for(const type of ['numeric','choice','multi','order','match'])assert.ok(types.has(type));
 const prompts=new Set(Array.from({length:50},()=>generateQuestion(6,curriculum[6][1],{rng,format:'input'}).prompt));assert.ok(prompts.size>=40);
});
