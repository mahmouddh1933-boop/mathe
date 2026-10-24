import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { dirname, resolve, sep, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = dirname(fileURLToPath(import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.json': 'application/json' };
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + sep) || (!['/index.html','/src/app.js','/src/curriculum.js','/src/questions.js','/src/style.css'].includes(pathname) && pathname !== '/')) { res.writeHead(404); res.end('Nicht gefunden'); return; }
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff', 'Cache-Control':'no-cache' }); res.end(data);
  } catch { res.writeHead(404); res.end('Nicht gefunden'); }
});
server.listen(Number(process.env.PORT || 3000), '0.0.0.0', () => console.log('Mathe entdecken läuft auf Port ' + (process.env.PORT || 3000)));
