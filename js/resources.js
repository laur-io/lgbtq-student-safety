const list = document.getElementById('res-list');
const catSel = document.getElementById('cat');
const confSel = document.getElementById('conf');
const search = document.getElementById('q');
document.getElementById('updated').textContent = LAST_UPDATED;

Object.entries(CATEGORIES).forEach(([k, v]) => catSel.add(new Option(v, k)));

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function confTag(c) {
  if (c === true) return '<span class="tag conf">Confidential</span>';
  if (c === false) return '<span class="tag nonconf">Not confidential</span>';
  return '<span class="tag verify">Verify confidentiality</span>';
}

function card(r) {
  const link = r.link
    ? `<a href="${esc(r.link)}" target="_blank" rel="noopener noreferrer">Visit website<span class="sr"> (opens in a new tab)</span></a>`
    : 'TODO';
  return `<article class="res">
    <h3>${esc(r.name)}</h3>
    <p>${confTag(r.confidential)} ${r.verified ? '' : '<span class="tag verify">Not yet verified</span>'}</p>
    <dl>
      <dt>Provides</dt><dd>${esc(r.provides)}</dd>
      <dt>Best for</dt><dd>${esc(r.bestFor)}</dd>
      <dt>Contact</dt><dd>${esc(r.contact)}</dd>
      ${r.email ? `<dt>Email</dt><dd><a href="mailto:${esc(r.email)}">${esc(r.email)}</a></dd>` : ''}
      <dt>Website</dt><dd>${link}</dd>
      <dt>Before contacting</dt><dd>${esc(r.know)}</dd>
    </dl>
  </article>`;
}

function render() {
  const q = search.value.trim().toLowerCase();
  const out = RESOURCES.filter(r =>
    (!catSel.value || r.category === catSel.value) &&
    (!confSel.value || String(r.confidential) === confSel.value) &&
    (!q || [r.name, r.provides, r.bestFor].join(' ').toLowerCase().includes(q))
  );
  const groups = {};
  out.forEach(r => (groups[r.category] ||= []).push(r));
  list.innerHTML = out.length
    ? Object.keys(CATEGORIES).filter(k => groups[k]).map(k =>
        `<h2>${CATEGORIES[k]}</h2>${groups[k].map(card).join('')}`).join('')
    : '<p>No resources match. Try clearing a filter.</p>';
}
[catSel, confSel, search].forEach(el => el.addEventListener('input', render));
render();
