(function () {
  var input = document.getElementById('q');
  if (!input) return;
  var out = document.getElementById('search-results'),
      status = document.getElementById('search-status'),
      src = document.currentScript.getAttribute('data-src'),
      posts = null, pending = false;

  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function mark(text, re) {
    var frag = document.createDocumentFragment(), last = 0, m;
    re.lastIndex = 0;
    while ((m = re.exec(text))) {
      if (m[0] === '') { re.lastIndex++; continue; }
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      var el = document.createElement('mark'); el.textContent = m[0]; frag.appendChild(el);
      last = m.index + m[0].length;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    return frag;
  }

  function render() {
    var terms = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    out.textContent = '';
    if (!terms.length) { status.textContent = ''; document.body.classList.remove('searching'); return; }
    document.body.classList.add('searching');
    var re = new RegExp(terms.map(esc).join('|'), 'gi');
    var hits = posts.filter(function (p) {
      var s = (p.title + ' ' + p.content).toLowerCase();
      return terms.every(function (t) { return s.indexOf(t) > -1; });
    });
    status.textContent = hits.length
      ? '\u201c' + input.value.trim() + '\u201d 검색 결과 ' + hits.length + '개'
      : '\u201c' + input.value.trim() + '\u201d에 맞는 글이 없습니다. 다른 단어로 찾아보세요.';
    hits.forEach(function (p) {
      var li = document.createElement('li'), a = document.createElement('a'),
          t = document.createElement('time'), d = document.createElement('p');
      a.href = p.url; a.appendChild(mark(p.title, re));
      t.textContent = p.date;
      var lower = p.content.toLowerCase(), at = -1;
      terms.forEach(function (x) { var i = lower.indexOf(x); if (i > -1 && (at < 0 || i < at)) at = i; });
      if (at > -1) {
        var from = Math.max(0, at - 36);
        d.appendChild(mark((from ? '\u2026' : '') + p.content.slice(from, from + 140) + '\u2026', re));
      }
      li.appendChild(a); li.appendChild(t); if (at > -1) li.appendChild(d);
      out.appendChild(li);
    });
  }

  function run() {
    if (posts) return render();
    if (pending) return;
    pending = true;
    fetch(src).then(function (r) { return r.json(); }).then(function (j) { posts = j.map(function (p) { p.content = p.content.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/\s+/g, ' ').trim(); return p; }); pending = false; render(); })
      .catch(function () { pending = false; status.textContent = '검색 데이터를 불러오지 못했습니다. 잠시 뒤 다시 시도해 주세요.'; });
  }

  input.addEventListener('input', run);
  input.addEventListener('keydown', function (e) { if (e.key === 'Escape') { input.value = ''; render(); } });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== input && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      e.preventDefault(); input.focus();
    }
  });
})();
