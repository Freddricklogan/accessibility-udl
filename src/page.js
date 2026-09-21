/* Page widgets for accessibility-udl, moved from inline script blocks by the Learning Resource Kit converter.
   Runs as an ES module after the document is parsed; the kit mounts the shell and quiz separately. */

// ---- Accessibility self-audit scorer ----
var cks = document.querySelectorAll('#checklist .ck');
function scoreAudit(){
  var s = 0;
  cks.forEach(function(c){ if(c.classList.contains('on')) s += parseInt(c.dataset.w, 10); });
  s = Math.min(100, s);
  document.getElementById('auditFill').style.width = s + '%';
  var v = document.getElementById('auditVerdict');
  if(s === 0){ v.textContent = 'Check the practices your materials already meet'; v.style.color = 'var(--lr-muted)'; }
  else if(s < 40){ v.textContent = s + '% — Emerging: start with headings, alt text & link text'; v.style.color = 'var(--lr-bad)'; }
  else if(s < 75){ v.textContent = s + '% — Developing: add captions, contrast & keyboard checks'; v.style.color = 'var(--lr-warn)'; }
  else if(s < 100){ v.textContent = s + '% — Strong: close the remaining gaps, then test with real AT'; v.style.color = 'var(--lr-good)'; }
  else { v.textContent = '100% — Comprehensive coverage; verify with real users & assistive tech'; v.style.color = 'var(--lr-good)'; }
}
// Native checkboxes carry the state; the .on class only drives the visual box.
cks.forEach(function(c){
  var input = c.querySelector('.ck-input');
  input.addEventListener('change', function(){
    c.classList.toggle('on', input.checked);
    scoreAudit();
  });
});
scoreAudit();

// ---- Color contrast checker ----
// Parse a #rgb or #rrggbb hex string into [r,g,b] (0-255), or null if invalid.
function parseHex(str){
  if(typeof str !== 'string') return null;
  var h = str.trim().replace(/^#/, '');
  if(/^[0-9a-fA-F]{3}$/.test(h)){
    h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
  }
  if(!/^[0-9a-fA-F]{6}$/.test(h)) return null;
  return [
    parseInt(h.slice(0,2),16),
    parseInt(h.slice(2,4),16),
    parseInt(h.slice(4,6),16)
  ];
}
// WCAG relative luminance from an [r,g,b] triple (0-255).
function relLuminance(rgb){
  var lin = rgb.map(function(v){
    var s = v/255;
    return s <= 0.03928 ? s/12.92 : Math.pow((s+0.055)/1.055, 2.4);
  });
  return 0.2126*lin[0] + 0.7152*lin[1] + 0.0722*lin[2];
}
// WCAG contrast ratio between two [r,g,b] triples.
function contrastRatio(rgb1, rgb2){
  var l1 = relLuminance(rgb1), l2 = relLuminance(rgb2);
  var lighter = Math.max(l1, l2), darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
function normalizeHex(str){
  var rgb = parseHex(str);
  if(!rgb) return null;
  return '#' + rgb.map(function(v){ return ('0'+v.toString(16)).slice(-2); }).join('');
}
var fgHex = document.getElementById('fgHex'),
    bgHex = document.getElementById('bgHex'),
    fgColor = document.getElementById('fgColor'),
    bgColor = document.getElementById('bgColor');
function markPass(el, ok){
  el.textContent = ok ? '✓ Pass' : '✗ Fail';
  el.style.color = ok ? 'var(--lr-good)' : 'var(--lr-bad)';
  el.style.fontWeight = '700';
}
function updateContrast(){
  var fg = parseHex(fgHex.value), bg = parseHex(bgHex.value);
  var out = document.getElementById('ratioOut');
  var sw = document.getElementById('swatch');
  if(!fg || !bg){
    out.textContent = 'Enter valid hex colors';
    out.style.color = 'var(--lr-warn)';
    ['aaNormal','aaLarge','aaaNormal','aaaLarge','uiPass'].forEach(function(id){
      var e = document.getElementById(id); e.textContent = '—'; e.style.color = 'var(--lr-muted)';
    });
    return;
  }
  var ratio = contrastRatio(fg, bg);
  var rounded = Math.round(ratio * 100) / 100;
  out.textContent = rounded.toFixed(2) + ':1';
  out.style.color = 'var(--lr-accent2)';
  markPass(document.getElementById('aaNormal'),  ratio >= 4.5);
  markPass(document.getElementById('aaLarge'),   ratio >= 3);
  markPass(document.getElementById('aaaNormal'), ratio >= 7);
  markPass(document.getElementById('aaaLarge'),  ratio >= 4.5);
  markPass(document.getElementById('uiPass'),    ratio >= 3);
  var fgN = normalizeHex(fgHex.value), bgN = normalizeHex(bgHex.value);
  sw.style.color = fgN;
  sw.style.background = bgN;
}
function syncFromText(textEl, colorEl){
  var n = normalizeHex(textEl.value);
  if(n) colorEl.value = n;
  updateContrast();
}
function syncFromPicker(colorEl, textEl){
  textEl.value = colorEl.value;
  updateContrast();
}
if(fgHex && bgHex){
  fgHex.addEventListener('input', function(){ syncFromText(fgHex, fgColor); });
  bgHex.addEventListener('input', function(){ syncFromText(bgHex, bgColor); });
  fgColor.addEventListener('input', function(){ syncFromPicker(fgColor, fgHex); });
  bgColor.addEventListener('input', function(){ syncFromPicker(bgColor, bgHex); });
  updateContrast();
}

