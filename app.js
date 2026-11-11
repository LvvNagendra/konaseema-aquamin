(() => {
  'use strict';
  /* ---- WhatsApp contacts: every enquiry can go to these numbers + the group ---- */
  const WA_NUMBERS = [
    { num: '919966590280', label: '+91 99665 90280' },
    { num: '919666754456', label: '+91 96667 54456' },
    { num: '919948043969', label: '+91 99480 43969' }
  ];
  const WA_GROUP = 'https://chat.whatsapp.com/ISWdOqMF14p33Z9w6kcQQ2';
  const WA = WA_NUMBERS[0].num;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const waLink = text => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
  const byId = id => PRODUCTS.find(p => p.id === id);

  PRODUCTS.sort((p, q) => (q.range ? 1 : 0) - (p.range ? 1 : 0));

  /* =========================================================
     Language
     ========================================================= */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } }
  };
  const urlLang = new URLSearchParams(location.search).get('lang');   // ?lang=te opens in Telugu (shareable link)
  let lang = (urlLang || store.get('lang')) === 'te' ? 'te' : 'en';   // English is the default
  const t = key => (I18N[lang] && I18N[lang][key]) ?? I18N.en[key] ?? key;
  const catLabel = cat => lang === 'te' ? (CATEGORY_TE[cat] || CATEGORIES[cat].label) : CATEGORIES[cat].label;
  const L = (p, field) => (lang === 'te' && p.te && p.te[field]) || p[field];   // localized product field
  const catColor = cat => (CATEGORIES[cat] || {}).color || '#0c75a8';

  function applyStaticText() {
    document.documentElement.lang = lang;
    document.body.classList.toggle('lang-te', lang === 'te');
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    $$('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  }

  /* =========================================================
     Icons & product pack illustrations (vector = sharp on any screen)
     ========================================================= */
  const ICONS = {
    pond: '<path d="M3 15c2 0 2-1.5 4.5-1.5S9.5 15 12 15s2.5-1.5 4.5-1.5S19 15 21 15M3 19c2 0 2-1.5 4.5-1.5S9.5 19 12 19s2.5-1.5 4.5-1.5S19 19 21 19"/><circle cx="8" cy="7" r="2"/><circle cx="15" cy="5" r="1.4"/><circle cx="16" cy="10" r="1.8"/>',
    mineral: '<path d="M12 3 4 8v8l8 5 8-5V8z"/><path d="m4 8 8 5 8-5M12 13v8"/>',
    feed: '<path d="M5 11h14l-1.5 9h-11z"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    disinfect: '<path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6z"/><path d="M9 12l2 2 4-4"/>',
    oxygen: '<circle cx="9" cy="14" r="5"/><circle cx="17" cy="7" r="3"/><circle cx="18" cy="16" r="1.6"/>',
    fish: '<path d="M3 12c3-5 9-6 13-3l4-3v12l-4-3c-4 3-10 2-13-3z"/><circle cx="8" cy="11" r=".8"/>',
    chemical: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7 15h10"/>'
  };
  const icon = (cat, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[cat] || ICONS.pond}</svg>`;

  /* ---------- Product pack artwork (matches the KONASEEMA range pack design) ---------- */
  function packType(p) {
    const s = p.pack.toLowerCase(), n = parseFloat(s) || 0;
    if (/lt|ltr|litre/.test(s)) return n >= 5 ? 'can' : 'bottle';
    if (/kg/.test(s)) return n >= 10 ? 'bag' : (n >= 5 ? 'bucket' : 'pouch');
    if (/gm|g\b/.test(s)) return 'pouch';
    return 'bag';
  }
  function splitName(name) {
    const words = name.split(' ');
    if (words.length < 2) return [name];
    let best = 1, diff = 1e9;
    for (let i = 1; i < words.length; i++) {
      const d = Math.abs(words.slice(0, i).join(' ').length - words.slice(i).join(' ').length);
      if (d < diff) { diff = d; best = i; }
    }
    return [words.slice(0, best).join(' '), words.slice(best).join(' ')];
  }
  /* body = container outline, area = printable front [x, y, w, h], extra = cap / lid / seals */
  const SHAPES = {
    pouch:  { body: 'M36 26H164L168 232Q168 240 160 240H40Q32 240 32 232Z', area: [33, 30, 134, 210],
              extra: c => `<path d="M36 12H164V30H36Z" fill="${c}"/><path d="M36 12H164V30H36Z" fill="url(#crimp)" opacity=".5"/><circle cx="100" cy="20" r="3.2" fill="#fff" opacity=".9"/>` },
    bag:    { body: 'M30 26Q100 16 170 26L176 230Q100 242 24 230Z', area: [26, 24, 148, 212],
              extra: c => `<path d="M30 14Q100 4 170 14V28Q100 18 30 28Z" fill="${c}"/><path d="M30 14Q100 4 170 14V28Q100 18 30 28Z" fill="url(#crimp)" opacity=".5"/>` },
    bucket: { body: 'M32 52H168L161 234Q160 241 152 241H48Q40 241 39 234Z', area: [33, 52, 134, 189],
              extra: c => `<rect x="25" y="28" width="150" height="20" rx="6" fill="${c}"/><rect x="25" y="28" width="150" height="7" rx="3.5" fill="#fff" opacity=".22"/><rect x="29" y="46" width="142" height="7" rx="2" fill="#e4ecf1"/>` },
    bottle: { body: 'M50 80Q50 56 82 54H118Q150 56 150 80V230Q150 240 140 240H60Q50 240 50 230Z', area: [50, 70, 100, 170],
              extra: c => `<rect x="78" y="14" width="44" height="26" rx="6" fill="${c}"/><rect x="74" y="36" width="52" height="9" rx="3" fill="${c}" opacity=".75"/><rect x="84" y="44" width="32" height="12" fill="#e6eef2"/>` },
    can:    { body: 'M28 76Q28 58 46 58H154Q172 58 172 76V230Q172 240 162 240H38Q28 240 28 230Z', area: [28, 62, 144, 178],
              extra: c => `<path d="M100 58V40Q100 30 110 30H146Q156 30 156 40V58" fill="none" stroke="${c}" stroke-width="12" stroke-linejoin="round"/><rect x="40" y="40" width="34" height="20" rx="4" fill="${c}"/>` }
  };
  function packSVG(p) {
    const c = catColor(p.cat), id = 'g' + p.id.replace(/\W/g, '');
    const type = packType(p), shape = SHAPES[type];
    const [x, y, w, h] = shape.area, cx = x + w / 2, B = y + h;
    const fit = (len, size, max) => len * size * 0.58 > max ? `textLength="${max.toFixed(1)}" lengthAdjust="spacingAndGlyphs"` : '';
    // header lockup
    const lockW = w * 0.8, lockH = lockW / 6.4, lockY = y + (type === 'bottle' || type === 'can' ? 14 : 8);
    // product name (two-tone, italic, like the range packs)
    const lines = splitName(p.name);
    const longest = Math.max(...lines.map(l => l.length));
    const fs = Math.min(w * 0.19, (w * 0.9) / (longest * 0.64));
    let ny = lockY + lockH + 5 + fs * 0.92;
    const nameSvg = lines.map((l, i) => `<text x="${cx}" y="${(ny + i * fs * 0.98).toFixed(1)}" text-anchor="middle" class="pk-name" font-size="${fs.toFixed(1)}" fill="${i === lines.length - 1 && lines.length > 1 ? c : '#0b2d5c'}" ${fit(l.length, fs * 1.08, w * 0.92)}>${esc(l)}</text>`).join('');
    const nameEnd = ny + (lines.length - 1) * fs * 0.98;
    const swY = nameEnd + 5;
    // ribbon with product type
    const tag = p.tag.toUpperCase(), rH = 12, rW = Math.min(w * 0.88, tag.length * 4.3 + 18), rY = swY + 6;
    const hl = p.compNote || (Array.isArray(p.comp[0]) ? `${p.comp[0][0]} ${p.comp[0][1]}` : p.comp[0]);
    const hlY = rY + rH + 8.5;
    // lower colour wave
    const yw = Math.max(hlY + 6, y + h * 0.56);
    const low = B - yw;
    const er = Math.min(w * 0.16, low * 0.27), ex = x + w * 0.24, ey = yw + low * 0.4;
    const netBoxW = Math.max(30, w * 0.3), netBoxH = 19, nbx = x + w - netBoxW - 7, nby = B - netBoxH - 9;
    const bx = x + w * 0.47, bMax = x + w - 6 - bx - 9;
    const room = Math.max(0, Math.floor((nby - 4 - (yw + 13)) / 12));
    const bens = p.benefits.slice(0, Math.min(3, room));
    const net = (p.pack.match(/^[^,&]*?\d[\d.]*\s*[a-z]+/i) || [''])[0].trim();
    return `<svg class="pack-svg" viewBox="0 0 200 250" role="img" aria-label="${esc(p.name)} — KONASEEMA product pack">
      <defs>
        <clipPath id="${id}c"><path d="${shape.body}"/></clipPath>
        <linearGradient id="${id}w" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="#062b4c"/></linearGradient>
        <linearGradient id="${id}t" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#e9f0f5"/></linearGradient>
        <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".18" stop-color="#fff" stop-opacity="0"/><stop offset=".85" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></linearGradient>
      </defs>
      <ellipse cx="100" cy="243" rx="76" ry="6" fill="#062b4c" opacity=".16"/>
      ${shape.extra(c)}
      <g clip-path="url(#${id}c)">
        <rect x="0" y="0" width="200" height="250" fill="url(#${id}t)"/>
        <path d="M0 ${yw + 4}C55 ${yw - 18} 125 ${yw + 22} 200 ${yw - 12}V250H0Z" fill="url(#${id}w)"/>
        <path d="M0 ${yw + 4}C55 ${yw - 18} 125 ${yw + 22} 200 ${yw - 12}" fill="none" stroke="#f2b632" stroke-width="3"/>
        <path d="M0 ${yw + 9}C55 ${yw - 13} 125 ${yw + 27} 200 ${yw - 7}" fill="none" stroke="#fff" stroke-width="1" opacity=".6"/>
        <image href="assets/brand-lockup-sm.webp" x="${cx - lockW / 2}" y="${lockY}" width="${lockW}" height="${lockH}" preserveAspectRatio="xMidYMid meet"/>
        ${nameSvg}
        <path d="M${cx - w * 0.36} ${swY + 2}Q${cx} ${swY - 3} ${cx + w * 0.38} ${swY}" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
        <rect x="${cx - rW / 2}" y="${rY}" width="${rW}" height="${rH}" rx="${rH / 2}" fill="url(#${id}w)"/>
        <text x="${cx}" y="${rY + 8.4}" text-anchor="middle" class="pk-rib" ${fit(tag.length, 6, rW - 10)}>${esc(tag)}</text>
        ${hl ? `<text x="${cx}" y="${hlY}" text-anchor="middle" class="pk-hl" ${fit(hl.length + 2, 5.6, w * 0.86)}>(${esc(hl)})</text>` : ''}
        <circle cx="${ex}" cy="${ey}" r="${er + 3}" fill="#fff" opacity=".22"/>
        <circle cx="${ex}" cy="${ey}" r="${er}" fill="#fff"/>
        <g transform="translate(${ex - er * 0.62} ${ey - er * 0.62}) scale(${(er * 1.24 / 24).toFixed(3)})" fill="none" stroke="${c}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${ICONS[p.cat] || ICONS.pond}</g>
        <circle cx="${ex + er + 4}" cy="${ey - er * 0.9}" r="2.4" fill="#fff" opacity=".7"/>
        <circle cx="${ex - er - 3}" cy="${ey + er * 0.6}" r="1.6" fill="#fff" opacity=".6"/>
        ${bens.map((b, i) => { const ty = yw + 15 + i * 12; return `<circle cx="${bx}" cy="${ty - 2}" r="3.6" fill="#fff"/><path d="M${bx - 1.7} ${ty - 2}l1.2 1.2 2.3-2.4" stroke="${c}" stroke-width="1.1" fill="none" stroke-linecap="round"/><text x="${bx + 6}" y="${ty}" class="pk-ben" ${fit(b.length, 5, bMax)}>${esc(b)}</text>`; }).join('')}
        ${net ? `<rect x="${nbx}" y="${nby}" width="${netBoxW}" height="${netBoxH}" rx="4" fill="#fff"/><text x="${nbx + netBoxW / 2}" y="${nby + 6.5}" text-anchor="middle" class="pk-nw">Net ${/l/i.test(net) ? 'Volume' : 'Weight'}</text><text x="${nbx + netBoxW / 2}" y="${nby + 15.5}" text-anchor="middle" class="pk-nv" ${fit(net.length, 8, netBoxW - 4)}>${esc(net)}</text>` : ''}
        <text x="${x + 7}" y="${B - 15}" class="pk-phone">☎ 99665 90280</text>
        <text x="${x + 7}" y="${B - 8.5}" class="pk-addr" ${fit(22, 4.3, nbx - x - 10)}>Lingampalli, Hyderabad</text>
        <rect x="0" y="0" width="200" height="250" fill="url(#${id}g)"/>
      </g>
    </svg>`;
  }
  const productVisual = (p, cls) => p.img
    ? `<img class="${cls}-photo" src="${p.img}" alt="${esc(p.name)} pack" loading="lazy">`
    : packSVG(p);

  /* =========================================================
     Shared renderers
     ========================================================= */
  function compHTML(p, withNote = true) {
    const isTable = p.comp.some(c => Array.isArray(c));
    const body = isTable
      ? `<dl class="comp-table">${p.comp.map(c => Array.isArray(c)
          ? `<div><dt>${esc(c[0])}</dt><dd>${esc(c[1])}</dd></div>`
          : `<div><dt>${esc(c)}</dt><dd></dd></div>`).join('')}</dl>`
      : `<ul class="comp-chips">${p.comp.map(c => `<li>${esc(c)}</li>`).join('')}</ul>`;
    const note = withNote && L(p, 'compNote') ? `<p class="comp-note">${esc(L(p, 'compNote'))}</p>` : '';
    return body + note;
  }
  const listHTML = (arr, cls) => `<ul class="${cls}">${arr.map(b => `<li>${esc(b)}</li>`).join('')}</ul>`;
  const enquireMsg = p => `${t('wa.hello')},\nI would like price and availability for ${p.name} (${p.pack}).`;
  const counts = PRODUCTS.reduce((a, p) => (a[p.cat] = (a[p.cat] || 0) + 1, a), {});

  /* ---------- Featured ---------- */
  function renderFeatured() {
    $('#featureList').innerHTML = PRODUCTS.filter(p => p.featured).map(p => `
      <article class="feature reveal" style="--c:${catColor(p.cat)}">
        <div class="feature-media">
          <span class="feature-tag">${esc(catLabel(p.cat))}</span>
          ${productVisual(p, 'feature')}
          <div class="feature-pack"><small>${esc(t('sec.pack'))}</small><b>${esc(p.pack)}</b></div>
        </div>
        <div class="feature-main">
          <header>
            <span class="feature-sub">${esc(L(p, 'tag'))}</span>
            <h3>${esc(p.name)}</h3>
            ${L(p, 'compNote') ? `<p class="feature-strength">${esc(L(p, 'compNote'))}</p>` : ''}
          </header>
          <div class="feature-body">
            <section class="fb-comp"><h4>${esc(t('sec.comp'))}</h4>${compHTML(p, false)}</section>
            <section><h4>${esc(t('sec.benefits'))}</h4>${listHTML(L(p, 'benefits'), 'check-list')}</section>
            <section class="feature-dose"><h4>${esc(t('sec.dosage'))}</h4>${listHTML(L(p, 'dosage'), 'dose-list')}</section>
          </div>
          <div class="feature-actions">
            <a class="btn btn-wa" href="${waLink(enquireMsg(p))}" target="_blank" rel="noopener"><svg viewBox="0 0 32 32" aria-hidden="true"><use href="#wa-icon"/></svg> ${esc(t('btn.wa'))}</a>
            ${DOSE_CALC[p.id] ? `<button type="button" class="btn btn-outline" data-calc="${p.id}">${esc(t('btn.calc'))}</button>` : ''}
          </div>
        </div>
      </article>`).join('');
  }

  /* ---------- Benefit ribbon (scrolling) ---------- */
  const RIB_ICONS = [
    '<path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6z"/><path d="M9 12l2 2 4-4"/>',
    '<path d="M3 20h18M6 16v-4M10 16V9M14 16v-6M18 16V5"/>',
    '<path d="M12 3c3 4.5 6 8 6 11a6 6 0 0 1-12 0c0-3 3-6.5 6-11z"/>',
    '<circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="20" r="2"/><path d="M7 7l3 3M17 7l-3 3M12 15v3"/>',
    '<ellipse cx="12" cy="6" rx="7" ry="2.5"/><path d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4M5 14v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4"/>',
    '<path d="M12 12c0-3 2-5 5-5a5 5 0 0 1 0 10H9a6 6 0 0 1 0-12"/>',
    '<path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7"/>',
    '<path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8z"/>'
  ];
  function renderRibbon() {
    const items = RIB_ICONS.map((ic, i) => `<span class="rib-item"><span class="rib-ic"><svg viewBox="0 0 24 24" aria-hidden="true">${ic}</svg></span>${esc(t('rib.' + (i + 1)))}</span>`).join('');
    $('#ribbonTrack').innerHTML = `<div class="rib-set">${items}</div><div class="rib-set" aria-hidden="true">${items}</div>`;
  }

  /* ---------- KONASEEMA range shelf (5 real packs) ---------- */
  function renderRange() {
    $('#rangeShelf').innerHTML = PRODUCTS.filter(p => p.range).sort((p, q) => (q.id === 'min-power') - (p.id === 'min-power')).map(p => `
      <button type="button" class="range-pack" data-open="${p.id}" style="--c:${catColor(p.cat)}">
        <img src="${p.img}" alt="${esc(p.name)} pack" loading="lazy">
        <b>${esc(p.name)}</b><small>${esc(L(p, 'tag'))}</small>
      </button>`).join('');
  }

  /* ---------- Catalogue ---------- */
  let activeFilter = 'all';
  function renderFilters() {
    $('#filterRow').innerHTML = `<button type="button" class="filter-btn" data-filter="all">${esc(t('filter.all'))} <span>${PRODUCTS.length}</span></button>` +
      Object.keys(CATEGORIES).map(k => `<button type="button" class="filter-btn" data-filter="${k}" style="--c:${catColor(k)}">${icon(k)}${esc(catLabel(k))} <span>${counts[k] || 0}</span></button>`).join('');
    $$('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === activeFilter));
  }
  function renderGrid() {
    $('#productGrid').innerHTML = PRODUCTS.map(p => {
      const preview = p.comp.slice(0, 3).map(c => Array.isArray(c) ? c[0] : c).join(' · ');
      const searchText = [p.name, p.tag, L(p, 'tag'), CATEGORIES[p.cat].label, CATEGORY_TE[p.cat], ...p.comp.flat(), ...p.benefits].join(' ').toLowerCase();
      return `<article class="product-card" data-cat="${p.cat}" data-search="${esc(searchText)}" style="--c:${catColor(p.cat)}">
        <button type="button" class="card-hit" data-open="${p.id}" aria-label="${esc(p.name)} — ${esc(t('card.details'))}"></button>
        <div class="card-img">${productVisual(p, 'card')}${p.featured ? `<span class="card-star">★ ${esc(t('card.featured'))}</span>` : ''}</div>
        <div class="card-body">
          <span class="card-cat">${icon(p.cat)}${esc(catLabel(p.cat))}</span>
          <h3>${esc(p.name)}</h3>
          <p class="card-tag">${esc(L(p, 'tag'))}</p>
          <p class="card-comp"><b>${esc(t('card.comp'))}:</b> ${esc(preview)}${p.comp.length > 3 ? ` +${p.comp.length - 3} ${esc(t('card.more'))}` : ''}</p>
          <div class="card-foot"><span class="card-pack">${esc(p.pack)}</span><span class="card-more">${esc(t('card.details'))} <span aria-hidden="true">→</span></span></div>
        </div>
      </article>`;
    }).join('');
    applyFilters();
  }
  function applyFilters() {
    const q = $('#search').value.trim().toLowerCase();
    let shown = 0;
    $$('.product-card').forEach(card => {
      const ok = (activeFilter === 'all' || card.dataset.cat === activeFilter) && (!q || card.dataset.search.includes(q));
      card.hidden = !ok; if (ok) shown++;
    });
    $('#emptyMsg').hidden = shown > 0;
  }
  function setFilter(f) {
    activeFilter = f;
    $$('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === f));
    applyFilters();
  }
  $('#filterRow').addEventListener('click', e => { const b = e.target.closest('.filter-btn'); if (b) setFilter(b.dataset.filter); });
  $('#search').addEventListener('input', applyFilters);
  $('#resetFilters').addEventListener('click', () => { $('#search').value = ''; setFilter('all'); });

  /* ---------- Problem finder ---------- */
  let activeProblem = null;
  function renderFinder() {
    $('#problemChips').innerHTML = PROBLEMS.map(pr =>
      `<button type="button" class="chip${pr.id === activeProblem ? ' active' : ''}" data-problem="${pr.id}" aria-pressed="${pr.id === activeProblem}">${esc(pr[lang] || pr.en)}</button>`).join('');
    const pr = PROBLEMS.find(x => x.id === activeProblem);
    $('#finderResult').innerHTML = !pr ? `<p class="finder-empty">${esc(t('finder.pick'))}</p>` :
      `<div class="mini-list">${pr.products.map(byId).filter(Boolean).map(p => `
        <button type="button" class="mini-card" data-open="${p.id}" style="--c:${catColor(p.cat)}">
          <span class="mini-img">${productVisual(p, 'mini')}</span>
          <span class="mini-txt"><b>${esc(p.name)}</b><small>${esc(L(p, 'tag'))}</small></span>
          <span class="mini-go" aria-hidden="true">→</span>
        </button>`).join('')}</div>`;
  }
  $('#problemChips').addEventListener('click', e => {
    const b = e.target.closest('[data-problem]'); if (!b) return;
    activeProblem = activeProblem === b.dataset.problem ? null : b.dataset.problem;
    renderFinder();
  });

  /* ---------- Dosage calculator ---------- */
  const calcIds = Object.keys(DOSE_CALC).filter(byId);
  function fmtQty(v, unit) {
    let u = unit;
    if (unit === 'g' && v >= 1000) { v /= 1000; u = 'kg'; }
    if (unit === 'ml' && v >= 1000) { v /= 1000; u = 'L'; }
    const n = v >= 100 ? Math.round(v) : Math.round(v * 100) / 100;
    return { n: n.toLocaleString('en-IN'), u };
  }
  const range = (a, b, unit) => {
    const x = fmtQty(a, unit), y = fmtQty(b, unit);
    return a === b ? `${x.n} ${x.u}` : (x.u === y.u ? `${x.n} – ${y.n} ${y.u}` : `${x.n} ${x.u} – ${y.n} ${y.u}`);
  };
  function renderCalcOptions() {
    const sel = $('#calcProduct'), cur = sel.value || calcIds[0];
    sel.innerHTML = calcIds.map(id => `<option value="${id}">${esc(byId(id).name)}</option>`).join('');
    sel.value = cur;
  }
  function calc() {
    const id = $('#calcProduct').value, r = DOSE_CALC[id], p = byId(id);
    if (!r || !p) return;
    const area = Math.max(0, parseFloat($('#calcArea').value) || 0);
    const depthIn = $('#calcDepth');
    depthIn.closest('label').classList.toggle('muted', !r.depth);
    const depth = r.depth ? Math.max(0, parseFloat(depthIn.value) || 0) : 1;
    const f = area * depth;
    const perUnit = `${r.min === r.max ? r.min : r.min + '–' + r.max} ${r.unit} / acre${r.depth ? ' @ 1 m' : ''}`;
    $('#calcResult').innerHTML = `
      <div class="calc-main" style="--c:${catColor(p.cat)}">
        <span>${esc(t('calc.need'))} · ${esc(t('calc.regular'))}</span>
        <strong>${esc(range(r.min * f, r.max * f, r.unit))}</strong>
        <small>${esc(t('calc.basis'))}: ${esc(perUnit)}${r.depth ? '' : ' · ' + esc(t('calc.depthNa'))}</small>
      </div>
      ${r.stress ? `<div class="calc-extra"><span>${esc(t('calc.stress'))}</span><b>${esc(range(r.stress * f, r.stress * f, r.unit))}</b></div>` : ''}
      ${r.prep ? `<div class="calc-extra"><span>${esc(t('calc.prep'))}</span><b>${esc(range(r.prep * f, r.prep * f, r.unit))}</b></div>` : ''}
      <a class="btn btn-wa btn-block" target="_blank" rel="noopener" href="${waLink(`${t('wa.hello')},\nI need ${p.name} for ${area} acre(s)${r.depth ? `, ${depth} m depth` : ''} — about ${range(r.min * f, r.max * f, r.unit)}. Please share price.`)}"><svg viewBox="0 0 32 32" aria-hidden="true"><use href="#wa-icon"/></svg> ${esc(t('btn.wa'))}</a>`;
  }
  $('#calcForm').addEventListener('input', calc);
  $('#calcForm').addEventListener('click', e => {
    const b = e.target.closest('[data-step]'); if (!b) return;
    const input = b.parentElement.querySelector('input');
    const step = parseFloat(b.dataset.step), min = parseFloat(input.min) || 0, max = parseFloat(input.max) || 1e6;
    input.value = Math.min(max, Math.max(min, Math.round(((parseFloat(input.value) || 0) + step) * 10) / 10));
    calc();
  });
  function openCalcFor(id) {
    $('#calcProduct').value = id; calc();
    closeModals();
    $('#tools').scrollIntoView({ behavior: 'smooth' });
  }

  /* ---------- Reviews ---------- */
  function renderReviews() {
    $('#reviewGrid').innerHTML = REVIEWS.map(r => `
      <figure class="review-card reveal">
        <div class="review-top"><span class="stars" aria-label="${r.rating} / 5">${'★'.repeat(r.rating)}<i>${'★'.repeat(5 - r.rating)}</i></span>
          ${r.sample ? `<span class="sample-badge">${esc(t('rev.sample'))}</span>` : ''}</div>
        <blockquote>“${esc(lang === 'te' && r.textTe ? r.textTe : r.text)}”</blockquote>
        <figcaption>
          <span class="avatar" aria-hidden="true">${esc((r.name || '?').trim()[0])}</span>
          <span><b>${esc(r.name)}</b><small>${esc(r.place)}${r.species ? ' · ' + esc(r.species) : ''}</small></span>
          ${r.product ? `<span class="review-product">${esc(r.product)}</span>` : ''}
        </figcaption>
      </figure>`).join('');
  }

  /* ---------- Selects / chips used by forms ---------- */
  function renderFormBits() {
    const opts = PRODUCTS.map(p => `<option>${esc(p.name)}</option>`).join('');
    const ps = $('#productSelect'), pv = ps.value;
    ps.innerHTML = `<option value="">${esc(t('form.general'))}</option>` + opts; ps.value = pv;
    const rs = $('#reviewProduct'), rv = rs.value;
    rs.innerHTML = `<option value="">—</option>` + opts; rs.value = rv;
    const checked = new Set($$('#formProblems input:checked').map(i => i.value));
    $('#formProblems').innerHTML = PROBLEMS.map(pr =>
      `<label><input type="checkbox" value="${esc(pr.en)}"${checked.has(pr.en) ? ' checked' : ''}><span>${esc(pr[lang] || pr.en)}</span></label>`).join('');
    $('#footerCats').innerHTML = Object.keys(CATEGORIES).map(k => `<li><a href="#products" data-foot-cat="${k}">${esc(catLabel(k))}</a></li>`).join('');
  }
  $('#footerCats').addEventListener('click', e => { const a = e.target.closest('[data-foot-cat]'); if (a) setFilter(a.dataset.footCat); });

  /* =========================================================
     Modals
     ========================================================= */
  let lastFocus = null;
  function openModal(m) {
    lastFocus = document.activeElement;
    m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    const panel = $('.modal-panel', m); panel.scrollTop = 0; panel.focus();
  }
  function closeModals() {
    const open = $$('.modal.open'); if (!open.length) return;
    open.forEach(m => { m.classList.remove('open'); m.setAttribute('aria-hidden', 'true'); });
    document.body.classList.remove('no-scroll');
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  }
  function openProduct(id) {
    const p = byId(id); if (!p) return;
    $('#modalContent').innerHTML = `
      <div class="modal-hero" style="--c:${catColor(p.cat)}">
        <div class="modal-img">${productVisual(p, 'modal')}</div>
        <div><span class="modal-label">${esc(catLabel(p.cat))}</span><h3 id="modalTitle">${esc(p.name)}</h3><p class="modal-sub">${esc(L(p, 'tag'))}</p>
          <span class="modal-pack">${esc(t('sec.pack'))}: <b>${esc(p.pack)}</b></span></div>
      </div>
      <div class="modal-grid" style="--c:${catColor(p.cat)}">
        <section class="m-comp"><h4>${esc(t('sec.comp'))}</h4>${compHTML(p)}</section>
        <section><h4>${esc(t('sec.benefits'))}</h4>${listHTML(L(p, 'benefits'), 'check-list')}</section>
        <section><h4>${esc(t('sec.dosage'))}</h4>${listHTML(L(p, 'dosage'), 'dose-list')}</section>
      </div>
      <div class="modal-actions">
        <a class="btn btn-wa" href="${waLink(enquireMsg(p))}" target="_blank" rel="noopener"><svg viewBox="0 0 32 32" aria-hidden="true"><use href="#wa-icon"/></svg> ${esc(t('btn.wa'))}</a>
        ${DOSE_CALC[p.id] ? `<button type="button" class="btn btn-outline" data-calc="${p.id}">${esc(t('btn.calc'))}</button>` : ''}
      </div>`;
    openModal($('#productModal'));
  }
  document.addEventListener('click', e => {
    const o = e.target.closest('[data-open]'); if (o) { openProduct(o.dataset.open); return; }
    const c = e.target.closest('[data-calc]'); if (c) { openCalcFor(c.dataset.calc); return; }
    if (e.target.closest('[data-close]')) closeModals();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModals(); });

  /* =========================================================
     WhatsApp chooser: send the same message to any of the 3 numbers, or share it in the group
     ========================================================= */
  const waModal = $('#waModal');
  let waText = '';
  function openWaChooser(text) {
    waText = text || `${t('wa.hello')},\nI would like to know more about your products.`;
    $('#waPreview').textContent = waText;
    $('#waNumbers').innerHTML = WA_NUMBERS.map((n, i) => `
      <a class="wa-choice" href="https://wa.me/${n.num}?text=${encodeURIComponent(waText)}" target="_blank" rel="noopener" data-wa-choice>
        <span class="wa-choice-ic"><svg viewBox="0 0 32 32" aria-hidden="true"><use href="#wa-icon"/></svg></span>
        <span class="wa-choice-txt"><b>${esc(n.label)}</b><small>WhatsApp ${i + 1}</small></span>
        <span class="wa-choice-go" aria-hidden="true">→</span>
      </a>`).join('');
    $('#waGroupNote').textContent = t('wa.groupNote');
    closeModals();
    openModal(waModal);
  }
  waModal.addEventListener('click', e => {
    const c = e.target.closest('[data-wa-choice]');
    if (c) { c.classList.add('done'); c.querySelector('.wa-choice-go').textContent = '✓ ' + t('wa.opened'); }
  });
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; } catch { /* fallback below */ }
    const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch { ok = false; }
    ta.remove(); return ok;
  }
  $('#waGroupBtn').addEventListener('click', async () => {
    const win = window.open(WA_GROUP, '_blank', 'noopener');   // open first so pop-up blockers allow it
    const ok = await copyText(waText);
    $('#waGroupNote').textContent = ok ? '✓ ' + t('wa.copied') : t('wa.groupNote');
    if (!win) location.href = WA_GROUP;
  });
  $('#waCopyBtn').addEventListener('click', async () => {
    const ok = await copyText(waText);
    $('#waCopyBtn').textContent = ok ? '✓ ' + t('wa.copiedShort') : t('wa.copy');
  });
  // Every WhatsApp link on the page opens the chooser instead of a single number
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="https://wa.me/"]');
    if (!a || a.hasAttribute('data-wa-choice')) return;
    e.preventDefault();
    const q = a.getAttribute('href').split('?text=')[1];
    openWaChooser(q ? decodeURIComponent(q) : '');
  }, true);

  /* =========================================================
     Enquiry form (2 steps -> WhatsApp)
     ========================================================= */
  const form = $('#enquiryForm');
  const F = form.elements;
  const cleanPhone = v => { let d = v.replace(/\D/g, ''); if (d.length === 12 && d.startsWith('91')) d = d.slice(2); if (d.length === 11 && d.startsWith('0')) d = d.slice(1); return d; };
  const setErr = (k, msg) => { const el = $(`[data-err="${k}"]`, form); el.textContent = msg || ''; el.closest('.field').classList.toggle('invalid', !!msg); };
  function goStep(n) {
    $$('.step', form).forEach(s => { s.hidden = s.dataset.step !== String(n); });
    $$('.steps li', form).forEach((li, i) => { li.classList.toggle('active', i < n); li.classList.toggle('done', i < n - 1); });
    $('#formOk').hidden = true;
  }
  function validateStep1() {
    let ok = true;
    if (!F.name.value.trim()) { setErr('name', t('err.name')); ok = false; } else setErr('name');
    if (!/^[6-9]\d{9}$/.test(cleanPhone(F.phone.value))) { setErr('phone', t('err.phone')); ok = false; } else setErr('phone');
    if (!ok) $('.field.invalid input', form)?.focus();
    return ok;
  }
  $('#toStep2').addEventListener('click', () => { if (validateStep1()) { goStep(2); F.species[0].focus(); } });
  $('#backStep1').addEventListener('click', () => goStep(1));
  F.name.addEventListener('input', () => F.name.value.trim() && setErr('name'));
  F.phone.addEventListener('input', () => /^[6-9]\d{9}$/.test(cleanPhone(F.phone.value)) && setErr('phone'));
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateStep1()) { goStep(1); return; }
    const typeLabels = { price: 'Price enquiry', dosage: 'Dosage advice', dealer: 'Dealership', bulk: 'Bulk order' };
    const problems = $$('#formProblems input:checked').map(i => i.value);
    const lines = [
      `*New enquiry — KONASEEMA AQUAMIN website*`,
      `Enquiry: ${typeLabels[F.type.value]}`,
      `Name: ${F.name.value.trim()}`,
      `Mobile: +91 ${cleanPhone(F.phone.value)}`,
      (F.village.value.trim() || F.district.value.trim()) && `Location: ${[F.village.value.trim(), F.district.value.trim()].filter(Boolean).join(', ')}`,
      `Species: ${F.species.value}`,
      F.area.value && `Pond area: ${F.area.value} acre(s)`,
      F.doc.value && `DOC: ${F.doc.value} days`,
      problems.length && `Problems: ${problems.join(', ')}`,
      `Product: ${F.product.value || 'Please suggest'}`,
      F.message.value.trim() && `Message: ${F.message.value.trim()}`,
      `Preferred language: ${lang === 'te' ? 'Telugu' : 'English'}`
    ].filter(Boolean);
    openWaChooser(lines.join('\n'));
    const ok = $('#formOk'); ok.textContent = '✓ ' + t('form.ok'); ok.hidden = false;
  });
  $$('[data-type-link]').forEach(a => a.addEventListener('click', () => {
    const r = $(`input[name="type"][value="${a.dataset.typeLink}"]`, form); if (r) r.checked = true;
    goStep(1);
  }));

  /* ---------- Review form -> WhatsApp ---------- */
  $('#openReview').addEventListener('click', () => openModal($('#reviewModal')));
  $('#reviewForm').addEventListener('submit', e => {
    e.preventDefault();
    const R = e.target.elements;
    if (!R.name.value.trim() || !R.text.value.trim()) { $('#rvErr').textContent = t('err.name'); return; }
    $('#rvErr').textContent = '';
    const msg = [`*New farmer review — website*`, `Name: ${R.name.value.trim()}`, R.place.value.trim() && `Place: ${R.place.value.trim()}`,
      `Rating: ${'★'.repeat(+R.rating.value)} (${R.rating.value}/5)`, R.product.value && `Product: ${R.product.value}`, `Review: ${R.text.value.trim()}`].filter(Boolean).join('\n');
    e.target.reset();
    openWaChooser(msg);
  });

  /* =========================================================
     Navigation, header, scroll effects
     ========================================================= */
  const menuToggle = $('#menuToggle'), mainNav = $('#mainNav');
  const setMenu = open => {
    mainNav.classList.toggle('open', open); menuToggle.classList.toggle('active', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  };
  menuToggle.addEventListener('click', () => setMenu(!mainNav.classList.contains('open')));
  mainNav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });

  const header = $('.site-header'), toTop = $('#toTop');
  const onScroll = () => {
    header.classList.toggle('scrolled', scrollY > 10);
    toTop.classList.toggle('show', scrollY > 900);
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  // Highlight the nav link for the section on screen
  const navLinks = $$('.main-nav a:not(.nav-cta)');
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle('current', a.getAttribute('href') === '#' + en.target.id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    ['home', 'products', 'tools', 'reviews', 'about', 'contact'].forEach(id => { const s = document.getElementById(id); if (s) spy.observe(s); });
  }

  // Gentle reveal on scroll
  let ioAlive = false;
  const revealObs = 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches
    ? new IntersectionObserver(es => { ioAlive = true; es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); revealObs.unobserve(en.target); } }); }, { threshold: 0.08 })
    : null;
  // Safety net: if the observer never reports (old/embedded browsers), show everything.
  setTimeout(() => { if (!ioAlive) $$('.reveal').forEach(el => el.classList.add('in')); }, 2000);
  function watchReveal() {
    $$('.reveal:not(.in)').forEach(el => revealObs ? revealObs.observe(el) : el.classList.add('in'));
  }

  /* =========================================================
     Render everything (re-runs on language change)
     ========================================================= */
  function renderAll() {
    applyStaticText();
    renderFeatured();
    renderRange();
    renderRibbon();
    renderFilters();
    renderGrid();
    renderFinder();
    renderCalcOptions(); calc();
    renderReviews();
    renderFormBits();
    watchReveal();
  }
  $$('[data-lang]').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.lang === lang) return;
    lang = b.dataset.lang; store.set('lang', lang);
    renderAll();
  }));

  /* ---------- Decorative bubbles ---------- */
  $$('.bubbles').forEach(box => {
    box.innerHTML = Array.from({ length: 16 }, () => {
      const s = 6 + Math.random() * 22;
      return `<span style="left:${(Math.random() * 100).toFixed(1)}%;width:${s.toFixed(0)}px;height:${s.toFixed(0)}px;animation-duration:${(9 + Math.random() * 10).toFixed(1)}s;animation-delay:-${(Math.random() * 18).toFixed(1)}s"></span>`;
    }).join('');
  });

  /* ---------- Count-up hero numbers ---------- */
  function countUp(el) {
    const m = el.textContent.trim().match(/^(\d+)(.*)$/); if (!m) return;
    const end = +m[1], suffix = m[2], t0 = performance.now(), dur = 1400;
    const step = now => {
      const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(end * e) + suffix;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) setTimeout(() => $$('.hero-stats dt').forEach(countUp), 300);

  $$('.section-head, .tool-card, .trust-item, .why-media, .why-copy, .range-banner, .range-shelf').forEach(el => el.classList.add('reveal'));
  $('#statProducts').textContent = PRODUCTS.length;
  $('#year').textContent = new Date().getFullYear();
  renderAll();
})();
