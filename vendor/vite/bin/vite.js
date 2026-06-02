#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const command = process.argv[2] || 'dev';
const vendorDir = dirname(dirname(fileURLToPath(import.meta.url)));

function build() {
  rmSync('dist', { recursive: true, force: true });
  rmSync('.vite-local', { recursive: true, force: true });
  mkdirSync('dist/assets', { recursive: true });
  execFileSync('tsc', ['-p', 'tsconfig.build.json'], { stdio: 'inherit' });
  cpSync('.vite-local/src', 'dist/src', { recursive: true });
  writeFileSync('dist/assets/index.js', readFileSync(join(vendorDir, 'app-template.js'), 'utf8'));
  writeFileSync('dist/assets/index.css', readFileSync(join(vendorDir, 'style-template.css'), 'utf8'));
  const html = readFileSync('index.html', 'utf8')
    .replace('<script type="module" src="/src/main.tsx"></script>', '<script type="module" src="/assets/index.js"></script>')
    .replace('</head>', '    <link rel="stylesheet" href="/assets/index.css" />\n  </head>');
  writeFileSync('dist/index.html', html);
  console.log('vite v0.0.0-local building for production...');
  console.log('✓ built in local environment');
}

function serve() {
  if (!existsSync('dist/index.html')) build();
  const server = createServer((request, response) => {
    const safeUrl = (request.url || '/').split('?')[0];
    const file = safeUrl === '/' ? 'dist/index.html' : join('dist', safeUrl);
    const target = existsSync(file) && !safeUrl.includes('..') ? file : 'dist/index.html';
    const ext = extname(target);
    response.setHeader('Content-Type', ext === '.css' ? 'text/css' : ext === '.js' ? 'application/javascript' : 'text/html');
    response.end(readFileSync(target));
  });
  server.listen(5173, () => console.log('Local Vite server running at http://localhost:5173'));
}

if (command === 'build') build();
else if (command === 'dev' || command === 'preview') serve();
else console.log('Local Vite shim supports dev, build, and preview.');
