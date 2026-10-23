'use strict';
/**
 * Mnemosyne Companion — headless smoke suite (happy-dom).
 * Asserts that spaced-repetition progress and the chosen theme persist, and
 * that progress saved before the web-kit retrofit survives.
 *   node tests/smoke.test.js [path-to-index.html]
 */
const fs = require('fs');
const path = require('path');
const { Window } = require('happy-dom');

const root = path.join(__dirname, '..');
const file = process.argv[2] || path.join(root, 'index.html');
const html = fs.readFileSync(file, 'utf8');
const wkPath = path.join(path.dirname(file), 'web-kit.js');
const wk = fs.existsSync(wkPath) ? fs.readFileSync(wkPath, 'utf8') : '';
const inline = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const htmlNoScripts = html.replace(/<script[\s\S]*?<\/script>/g, '');
// re-expose the app's top-level lexical bindings (const/let) onto window for the test
const appJs = inline.join('\n') + "\n;try{window.__mnemo={get SRS(){return SRS;},entry:entry,saveSRS:saveSRS};}catch(e){}";

const results = [];
const ok = (n, c, e = '') => results.push({ n, p: !!c, e });

function boot(seed) {
  const w = new Window({ url: 'https://local.test/' });
  for (const [k, v] of Object.entries(seed || {})) { try { w.localStorage.setItem(k, v); } catch (e) {} }
  w.document.write(htmlNoScripts);
  if (wk) w.eval(wk);
  w.eval(appJs);
  return w;
}
function snap(w) { const o = {}; for (let i = 0; i < w.localStorage.length; i++) { const k = w.localStorage.key(i); o[k] = w.localStorage.getItem(k); } return o; }
const srs = (w, n, f) => { const s = w.__mnemo.SRS; return s[n] ? s[n][f] : undefined; };

(function main() {
  let w = boot();
  ok('app booted', !!w.document.getElementById('themeBtn'));

  // spaced-repetition progress persists
  w.__mnemo.entry(1).box = 2; w.__mnemo.entry(1).due = 123; w.__mnemo.saveSRS();
  const seed = snap(w);
  ok('SRS written to storage', Object.keys(seed).length > 0);
  let w2 = boot(seed);
  ok('SRS box persists across reload', srs(w2, 1, 'box') === 2);
  ok('SRS due persists across reload', srs(w2, 1, 'due') === 123);

  // theme persists
  let w3 = boot();
  w3.document.getElementById('themeBtn').click();
  const t = w3.document.documentElement.getAttribute('data-theme');
  ok('theme toggles', t === 'dark' || t === 'light', String(t));
  let w4 = boot(snap(w3));
  ok('theme persists across reload', w4.document.documentElement.getAttribute('data-theme') === t);

  // pre-web-kit saved data still read
  const legacy = { 'mnemosyne.srs.v1': JSON.stringify({ 5: { box: 3, due: 9, seen: 1, ok: 1 } }), 'mnemosyne.theme': 'dark' };
  let w5 = boot(legacy);
  ok('legacy SRS is read', srs(w5, 5, 'box') === 3);
  ok('legacy theme is read', w5.document.documentElement.getAttribute('data-theme') === 'dark');

  const failed = results.filter(r => !r.p);
  console.log('\n==== RESULTS ====');
  results.forEach(r => console.log(`${r.p ? 'PASS' : 'FAIL'}  ${r.n}${r.e ? '  [' + r.e + ']' : ''}`));
  console.log(`\n${results.length - failed.length}/${results.length} passed`);
  process.exit(failed.length ? 1 : 0);
})();
