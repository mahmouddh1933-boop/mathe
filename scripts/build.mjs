import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');
// This small project uses only named declarations and local, single-line imports.
// Reject new module syntax rather than silently emitting a broken standalone app.
const modules = [];
for (const path of ['src/curriculum.js', 'src/questions.js', 'src/lessons.js', 'src/app.js']) {
  const source = (await read(path))
    .replace(/^import \{[^\n]+\} from '\.\/(?:curriculum|questions|lessons)\.js';\r?\n/gm, '')
    .replace(/^export (?=(?:const|function)\b)/gm, '');
  if (/^\s*(?:import|export)\b/m.test(source)) throw new Error(`Unsupported module syntax in ${path}`);
  modules.push(source);
}
const css = (await read('src/style.css')).replace(/<\/style/gi, '<\\/style');
const js = ('(() => {\n"use strict";\n' + modules.join('\n') + '\n})();').replace(/<\/script/gi, '<\\/script');
const html = (await read('src/index.template.html'))
  .replace('/* INLINE_STYLES */', () => css)
  .replace('/* INLINE_APP */', () => js);
if (process.argv.includes('--check')) {
  if (await read('index.html') !== html) {
    console.error('index.html ist veraltet. Bitte npm run build ausführen.');
    process.exitCode = 1;
  } else console.log('Standalone-index.html entspricht den Quelldateien.');
} else {
  await writeFile(new URL('index.html', root), html);
  console.log('Standalone-App erstellt:', fileURLToPath(new URL('index.html', root)));
}
