// ─── STORAGE ─────────────────────────────────────────────────────────────────
const KEY = 'miingles_v3';

function dbLoad() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return { classes: [...INITIAL_CLASSES], errors: [] };
}
function dbSave(db) { localStorage.setItem(KEY, JSON.stringify(db)); }

let DB = dbLoad();

// ─── STATE ────────────────────────────────────────────────────────────────────
let currentView = 'home';
let practiceState = null;
let openGuide = null;

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Nav buttons
  document.querySelectorAll('.nav-btn[data-view]').forEach(btn => {
    btn.addEventListener('click', () => showView(btn.dataset.view));
  });

  // Add class
  document.getElementById('btn-add-class').addEventListener('click', openModal);
  document.getElementById('btn-cancel').addEventListener('click', closeModal);
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('btn-process').addEventListener('click', processClass);
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });

  // Mobile menu
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });

  render();
});

// ─── ROUTING ─────────────────────────────────────────────────────────────────
function showView(view) {
  currentView = view;
  practiceState = null;
  openGuide = null;
  document.getElementById('sidebar').classList.remove('open');
  document.querySelectorAll('.nav-btn[data-view]').forEach(b => {
    b.classList.toggle('active', b.dataset.view === view);
  });
  render();
}

function render() {
  updateSidebar();
  updateCounts();
  const content = document.getElementById('main-content');
  const title = document.getElementById('view-title');
  const actions = document.getElementById('top-actions');
  actions.innerHTML = '';

  const views = {
    home:     ['Mis clases',              renderHome],
    vocab:    ['Todo el vocabulario',     renderVocab],
    grammar:  ['Gramática',               renderGrammar],
    errors:   ['Mis errores frecuentes',  renderErrors],
    guides:   ['Guías de estudio',        renderGuides],
    phrases:  ['Frases útiles',           renderPhrases],
    practice: ['Flashcards',              renderPractice],
    quiz:     ['Quiz',                    renderQuiz],
  };

  const [t, fn] = views[currentView] || views.home;
  title.textContent = t;
  fn(content, actions);
}

function updateSidebar() {
  const container = document.getElementById('sidebar-classes');
  if (!DB.classes.length) { container.innerHTML = ''; return; }
  const sorted = [...DB.classes].sort((a,b) => new Date(b.date) - new Date(a.date));
  container.innerHTML = sorted.map(c => `
    <div class="class-item" onclick="jumpToClass(${c.id})">
      <div class="class-item-date">${fmtDate(c.date)}</div>
      <div class="class-item-sub">${c.titulo}</div>
    </div>`).join('');
}

function updateCounts() {
  document.getElementById('cnt-classes').textContent = DB.classes.length;
  const v = DB.classes.flatMap(c => c.vocab||[]).length;
  document.getElementById('cnt-vocab').textContent = v;
  document.getElementById('cnt-errors').textContent = DB.errors.length;
}

function jumpToClass(id) {
  showView('home');
  setTimeout(() => {
    const el = document.getElementById('cls-' + id);
    if (el) { el.scrollIntoView({behavior:'smooth', block:'start'}); }
  }, 80);
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function renderHome(container) {
  if (!DB.classes.length) {
    container.innerHTML = `<div class="empty"><div class="empty-emoji">📝</div>
      <h3>Todavía no hay clases cargadas</h3>
      <p>Hacé clic en "+ Nueva clase" y pegá el chat con Euge.<br>La IA va a extraer todo automáticamente.</p></div>`;
    return;
  }

  const allV = DB.classes.flatMap(c=>c.vocab||[]);
  const allC = DB.classes.flatMap(c=>c.correcciones||[]);
  const allG = DB.classes.flatMap(c=>c.gramatica||[]);

  const sorted = [...DB.classes].sort((a,b) => new Date(b.date) - new Date(a.date));

  container.innerHTML = `
    <div class="stats-row">
      <div class="stat-card"><div class="stat-num">${DB.classes.length}</div><div class="stat-lbl">Clases</div></div>
      <div class="stat-card"><div class="stat-num">${allV.length}</div><div class="stat-lbl">Palabras aprendidas</div></div>
      <div class="stat-card"><div class="stat-num">${allG.length}</div><div class="stat-lbl">Reglas de gramática</div></div>
      <div class="stat-card"><div class="stat-num">${allC.length}</div><div class="stat-lbl">Correcciones</div></div>
    </div>
    <div id="classes-list">${sorted.map(c => classCard(c)).join('')}</div>`;
}

function classCard(c) {
  const vn = (c.vocab||[]).length, gn = (c.gramatica||[]).length;
  const cn = (c.correcciones||[]).length, fn = (c.frases||[]).length;
  return `
  <div class="class-card" id="cls-${c.id}">
    <div class="class-card-header" onclick="toggleCard(${c.id})">
      <div class="date-badge">${fmtDate(c.date)}</div>
      <div class="class-card-info">
        <div class="class-card-title">${c.titulo}</div>
        <div class="class-card-meta">${vn} palabras · ${gn} gramática · ${cn} correcciones · ${fn} frases</div>
      </div>
      <div class="chevron" id="chev-${c.id}">▾</div>
    </div>
    <div class="class-card-body" id="body-${c.id}">
      <div class="inner-tabs">
        <button class="inner-tab active" onclick="switchTab(event,${c.id},'vocab')">📖 Vocabulario (${vn})</button>
        <button class="inner-tab" onclick="switchTab(event,${c.id},'gram')">⚙️ Gramática (${gn})</button>
        <button class="inner-tab" onclick="switchTab(event,${c.id},'corr')">✍️ Correcciones (${cn})</button>
        <button class="inner-tab" onclick="switchTab(event,${c.id},'frases')">💬 Frases (${fn})</button>
      </div>
      <div class="tab-content" id="tab-${c.id}">${tabVocab(c)}</div>
      <div style="padding:0 20px 16px;display:flex;justify-content:flex-end">
        <button class="btn danger sm" onclick="deleteClass(${c.id})">🗑 Eliminar clase</button>
      </div>
    </div>
  </div>`;
}

function toggleCard(id) {
  document.getElementById('body-'+id).classList.toggle('open');
  document.getElementById('chev-'+id).classList.toggle('open');
}

function switchTab(evt, id, tab) {
  const c = DB.classes.find(x=>x.id===id); if (!c) return;
  evt.target.closest('.class-card-body').querySelectorAll('.inner-tab').forEach(t=>t.classList.remove('active'));
  evt.target.classList.add('active');
  const content = document.getElementById('tab-'+id);
  const fns = {vocab: tabVocab, gram: tabGram, corr: tabCorr, frases: tabFrases};
  content.innerHTML = (fns[tab]||tabVocab)(c);
}

function tabVocab(c) {
  if (!(c.vocab||[]).length) return '<p style="color:var(--text3);font-size:13px">Sin vocabulario registrado.</p>';
  return `<table class="vocab-table">
    <thead><tr><th style="width:36%">Inglés</th><th style="width:22%">Pronunciación</th><th>Español</th></tr></thead>
    <tbody>${c.vocab.map(v=>`<tr>
      <td><span class="en-word">${v.en||''}</span></td>
      <td><span class="pron-text">${v.pron||'—'}</span></td>
      <td><span class="es-text">${v.es||''}</span></td>
    </tr>`).join('')}</tbody>
  </table>`;
}

function tabGram(c) {
  if (!(c.gramatica||[]).length) return '<p style="color:var(--text3);font-size:13px">Sin gramática registrada.</p>';
  return c.gramatica.map(g=>`
    <div class="gram-item">
      <div class="gram-title">${g.titulo||''}</div>
      ${g.formula?`<div class="formula-box">${g.formula}</div>`:''}
      ${(g.ejemplos||[]).map(e=>`<div class="gram-ex">→ ${e}</div>`).join('')}
    </div>`).join('');
}

function tabCorr(c) {
  if (!(c.correcciones||[]).length) return '<p style="color:var(--text3);font-size:13px">Sin correcciones registradas.</p>';
  return c.correcciones.map(cr=>`
    <div class="corr-row">
      <div class="wrong-box"><div class="wrong-lbl">❌ INCORRECTO</div><div class="wrong-text">${cr.wrong||''}</div></div>
      <div class="right-box"><div class="right-lbl">✅ CORRECTO</div><div class="right-text">${cr.right||''}</div></div>
    </div>`).join('');
}

function tabFrases(c) {
  if (!(c.frases||[]).length) return '<p style="color:var(--text3);font-size:13px">Sin frases registradas.</p>';
  return `<div>${c.frases.map(f=>`
    <div class="phrase-row">
      <span class="phrase-en">${f.en||''}</span>
      <span class="phrase-es">${f.es||''}</span>
    </div>`).join('')}</div>`;
}

function deleteClass(id) {
  if (!confirm('¿Eliminar esta clase?')) return;
  DB.classes = DB.classes.filter(c=>c.id!==id);
  dbSave(DB);
  render();
  showToast('Clase eliminada');
}

// ─── VOCAB VIEW ───────────────────────────────────────────────────────────────
function renderVocab(container) {
  const all = DB.classes.flatMap(c => c.vocab||[]);
  if (!all.length) {
    container.innerHTML = `<div class="empty"><div class="empty-emoji">📖</div><h3>Sin vocabulario todavía</h3><p>Cargá tu primera clase para ver todo el vocabulario aquí.</p></div>`;
    return;
  }
  container.innerHTML = `
    <div class="search-bar">
      <span class="search-icon">🔍</span>
      <input type="text" id="vsearch" placeholder="Buscar en inglés o español..." oninput="filterVocab()">
    </div>
    <div class="vocab-grid" id="vgrid">
      ${all.map(v=>`
        <div class="vocab-chip" data-en="${(v.en||'').toLowerCase()}" data-es="${(v.es||'').toLowerCase()}">
          <div class="vc-en">${v.en||''}</div>
          ${v.pron?`<div class="vc-pron">${v.pron}</div>`:''}
          <div class="vc-es">${v.es||''}</div>
        </div>`).join('')}
    </div>`;
}

function filterVocab() {
  const q = (document.getElementById('vsearch').value||'').toLowerCase();
  document.querySelectorAll('.vocab-chip').forEach(c => {
    c.style.display = (!q || c.dataset.en.includes(q) || c.dataset.es.includes(q)) ? '' : 'none';
  });
}

// ─── GRAMMAR VIEW ─────────────────────────────────────────────────────────────
function renderGrammar(container) {
  const all = DB.classes.flatMap(c => (c.gramatica||[]).map(g => ({...g, date: c.date, clase: c.titulo})));
  if (!all.length) {
    container.innerHTML = `<div class="empty"><div class="empty-emoji">⚙️</div><h3>Sin gramática todavía</h3><p>Se completa automáticamente cuando cargás tus clases.</p></div>`;
    return;
  }
  container.innerHTML = `<div class="gram-section">
    ${all.map(g=>`
      <div class="gram-card">
        <div class="gram-title">${g.titulo}</div>
        <div style="font-size:11px;color:var(--text3);margin-bottom:8px">${fmtDate(g.date)} — ${g.clase}</div>
        ${g.formula?`<div class="formula-box">${g.formula}</div>`:''}
        ${(g.ejemplos||[]).map(e=>`<div class="gram-ex">→ ${e}</div>`).join('')}
      </div>`).join('')}
  </div>`;
}

// ─── ERRORS VIEW ──────────────────────────────────────────────────────────────
function renderErrors(container) {
  const allCorr = DB.classes.flatMap(c => c.correcciones||[]);
  container.innerHTML = `
    <div style="margin-bottom:24px">
      <p style="font-size:13px;color:var(--text2);margin-bottom:14px">Tus errores de clase más un espacio para agregar los tuyos propios.</p>
      <div style="display:flex;gap:8px">
        <input type="text" id="err-inp" placeholder="Agregar error o nota personal..." style="flex:1;padding:9px 13px;border:1px solid var(--border);border-radius:8px;font-family:'DM Sans',sans-serif;font-size:13px;background:var(--bg);color:var(--text);outline:none">
        <button class="btn primary" onclick="addError()">Agregar</button>
      </div>
    </div>
    <div class="section-hdr"><h3>De mis clases con Euge</h3></div>
    ${!allCorr.length ? '<p style="color:var(--text3);font-size:13px">Sin correcciones todavía.</p>' :
      allCorr.map(cr=>`
        <div class="corr-row" style="margin-bottom:10px">
          <div class="wrong-box"><div class="wrong-lbl">❌ DIJE</div><div class="wrong-text">${cr.wrong}</div></div>
          <div class="right-box"><div class="right-lbl">✅ ES</div><div class="right-text">${cr.right}</div></div>
        </div>`).join('')}
    <div class="divider"></div>
    <div class="section-hdr"><h3>Mis notas personales</h3></div>
    <div id="personal-errors">
      ${!DB.errors.length ? '<p style="color:var(--text3);font-size:13px">Ninguna todavía.</p>' :
        DB.errors.map((e,i)=>`<span class="error-tag">${e}<span class="error-x" onclick="removeError(${i})">×</span></span>`).join('')}
    </div>`;
}

function addError() {
  const inp = document.getElementById('err-inp');
  const val = (inp.value||'').trim(); if (!val) return;
  DB.errors.push(val); dbSave(DB); inp.value='';
  renderErrors(document.getElementById('main-content'));
  updateCounts();
}

function removeError(i) {
  DB.errors.splice(i,1); dbSave(DB);
  renderErrors(document.getElementById('main-content'));
  updateCounts();
}

// ─── GUIDES VIEW ──────────────────────────────────────────────────────────────
function renderGuides(container) {
  if (openGuide) {
    const g = GUIDES.find(x=>x.id===openGuide);
    if (g) { renderGuideDetail(container, g); return; }
  }
  container.innerHTML = `
    <p style="font-size:13px;color:var(--text2);margin-bottom:20px">Material de apoyo de tus recursos de estudio.</p>
    <div class="guides-grid">
      ${GUIDES.map(g=>`
        <div class="guide-card" onclick="openGuideDetail('${g.id}')">
          <div class="guide-card-header">
            <div class="guide-emoji">${g.emoji}</div>
            <div class="guide-title">${g.title}</div>
            <div class="guide-desc">${g.desc}</div>
          </div>
          <div class="guide-footer">${g.source} · ${g.sections.length} secciones</div>
        </div>`).join('')}
    </div>`;
}

function openGuideDetail(id) {
  openGuide = id;
  const actions = document.getElementById('top-actions');
  renderGuides(document.getElementById('main-content'));
}

function renderGuideDetail(container, g) {
  const actions = document.getElementById('top-actions');
  actions.innerHTML = `<button class="btn" onclick="openGuide=null;render()">← Volver</button>`;
  container.innerHTML = `
    <div class="guide-detail">
      <h3>${g.emoji} ${g.title}</h3>
      <p style="font-size:13px;color:var(--text2);margin-bottom:20px">${g.desc}</p>
      ${g.sections.map(sec=>`
        <div class="guide-section">
          <h4>${sec.title}</h4>
          ${sec.items.map(item=>`
            <div class="guide-item">
              <strong>${item.label}</strong><br>
              <span style="color:var(--text2)">${item.text}</span>
            </div>`).join('')}
        </div>`).join('')}
    </div>`;
}

// ─── PHRASES VIEW ─────────────────────────────────────────────────────────────
function renderPhrases(container) {
  const all = DB.classes.flatMap(c => (c.frases||[]).map(f=>({...f, date:c.date})));
  if (!all.length) {
    container.innerHTML = `<div class="empty"><div class="empty-emoji">💬</div><h3>Sin frases todavía</h3><p>Se completan cuando cargás tus clases.</p></div>`;
    return;
  }
  container.innerHTML = `
    <div class="search-bar">
      <span class="search-icon">🔍</span>
      <input type="text" id="psearch" placeholder="Buscar frase..." oninput="filterPhrases()">
    </div>
    <div id="phrases-list">
      ${all.map(f=>`
        <div class="phrase-row" data-en="${(f.en||'').toLowerCase()}" data-es="${(f.es||'').toLowerCase()}">
          <span class="phrase-en">${f.en||''}</span>
          <span class="phrase-es">${f.es||''}</span>
        </div>`).join('')}
    </div>`;
}

function filterPhrases() {
  const q = (document.getElementById('psearch').value||'').toLowerCase();
  document.querySelectorAll('#phrases-list .phrase-row').forEach(r => {
    r.style.display = (!q || r.dataset.en.includes(q) || r.dataset.es.includes(q)) ? '' : 'none';
  });
}

// ─── PRACTICE (FLASHCARDS) ────────────────────────────────────────────────────
function renderPractice(container) {
  const allVocab = DB.classes.flatMap(c => c.vocab||[]);
  if (!allVocab.length) {
    container.innerHTML = `<div class="empty"><div class="empty-emoji">🎯</div><h3>Sin vocabulario para practicar</h3><p>Cargá al menos una clase primero.</p></div>`;
    return;
  }

  if (!practiceState || practiceState.view !== 'fc') {
    container.innerHTML = `
      <div class="practice-wrap">
        <p style="font-size:13px;color:var(--text2);margin-bottom:20px">${allVocab.length} palabras disponibles. Elegí el modo:</p>
        <div class="mode-grid">
          <div class="mode-card" onclick="startFC('normal')">
            <div class="mode-emoji">🃏</div>
            <div class="mode-name">Inglés → Español</div>
            <div class="mode-desc">Ves la palabra en inglés y recordás el español.</div>
          </div>
          <div class="mode-card" onclick="startFC('reverse')">
            <div class="mode-emoji">🔄</div>
            <div class="mode-name">Español → Inglés</div>
            <div class="mode-desc">Ves el español y recordás cómo se dice en inglés.</div>
          </div>
        </div>
      </div>`;
    return;
  }

  const {cards, idx, score, mode} = practiceState;

  if (idx >= cards.length) {
    container.innerHTML = `
      <div class="practice-wrap">
        <div class="score-box">
          <div class="score-num">✓</div>
          <h3 style="font-family:'Instrument Serif',serif;font-size:22px;margin:12px 0 6px">¡Repasaste todo!</h3>
          <p class="score-sub">${cards.length} tarjetas · ${score} las sabías</p>
          <div style="display:flex;gap:10px;justify-content:center;margin-top:22px">
            <button class="btn" onclick="practiceState=null;renderPractice(document.getElementById('main-content'))">← Volver</button>
            <button class="btn primary" onclick="startFC('${mode}')">Repetir</button>
          </div>
        </div>
      </div>`;
    return;
  }

  const card = cards[idx];
  const isRev = mode === 'reverse';
  const q = isRev ? card.es : card.en;
  const a = isRev ? card.en : card.es;

  container.innerHTML = `
    <div class="practice-wrap">
      <div class="progress-bar"><div class="progress-fill" style="width:${(idx/cards.length)*100}%"></div></div>
      <p style="font-size:12px;color:var(--text3);text-align:center;margin-bottom:18px">${idx+1} de ${cards.length}</p>
      <div class="flashcard" id="fc-card" onclick="flipFC()">
        <div class="fc-hint">${isRev?'Español → Inglés':'Inglés → Español'}</div>
        <div class="fc-word">${q}</div>
        <div class="fc-answer" id="fc-ans">${a}</div>
        ${card.pron?`<div class="fc-pron" id="fc-pron">${card.pron}</div>`:''}
        <div class="fc-tap">Tocá para ver →</div>
      </div>
      <div class="fc-actions" id="fc-btns" style="display:none">
        <button class="fc-btn bad" onclick="nextFC(false)">😕 No la sabía</button>
        <button class="fc-btn good" onclick="nextFC(true)">😊 La sabía</button>
      </div>
      <div style="text-align:center;margin-top:14px">
        <button class="btn sm" onclick="practiceState=null;renderPractice(document.getElementById('main-content'))">← Salir</button>
      </div>
    </div>`;
}

function startFC(mode) {
  const all = DB.classes.flatMap(c=>c.vocab||[]);
  practiceState = { view:'fc', mode, cards:[...all].sort(()=>Math.random()-.5), idx:0, score:0 };
  renderPractice(document.getElementById('main-content'));
}

function flipFC() {
  document.getElementById('fc-ans').style.display = 'block';
  const pron = document.getElementById('fc-pron');
  if (pron) pron.style.display = 'block';
  document.getElementById('fc-card').querySelector('.fc-tap').style.display = 'none';
  document.getElementById('fc-btns').style.display = 'flex';
}

function nextFC(knew) {
  if (knew) practiceState.score++;
  practiceState.idx++;
  renderPractice(document.getElementById('main-content'));
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
function renderQuiz(container) {
  const allVocab = DB.classes.flatMap(c => c.vocab||[]);
  if (allVocab.length < 4) {
    container.innerHTML = `<div class="empty"><div class="empty-emoji">❓</div><h3>Necesitás al menos 4 palabras</h3><p>Cargá más clases para activar el quiz.</p></div>`;
    return;
  }

  if (!practiceState || practiceState.view !== 'quiz') {
    container.innerHTML = `
      <div class="practice-wrap">
        <p style="font-size:13px;color:var(--text2);margin-bottom:20px">Quiz con ${allVocab.length} palabras. Elegís la traducción correcta entre 4 opciones.</p>
        <div style="text-align:center">
          <button class="btn primary" onclick="startQuiz()">Empezar quiz</button>
        </div>
      </div>`;
    return;
  }

  const {cards, idx, score} = practiceState;

  if (idx >= cards.length) {
    const pct = Math.round((score/cards.length)*100);
    container.innerHTML = `
      <div class="practice-wrap">
        <div class="score-box">
          <div class="score-num">${pct}%</div>
          <h3 style="font-family:'Instrument Serif',serif;font-size:22px;margin:12px 0 6px">${pct>=70?'¡Muy bien!':'Seguí practicando'}</h3>
          <p class="score-sub">Acertaste ${score} de ${cards.length}</p>
          <div style="display:flex;gap:10px;justify-content:center;margin-top:22px">
            <button class="btn" onclick="practiceState=null;renderQuiz(document.getElementById('main-content'))">← Volver</button>
            <button class="btn primary" onclick="startQuiz()">Repetir</button>
          </div>
        </div>
      </div>`;
    return;
  }

  const card = cards[idx];
  const distractors = allVocab.filter(v=>v!==card).sort(()=>Math.random()-.5).slice(0,3);
  const opts = [...distractors.map(v=>v.es), card.es].sort(()=>Math.random()-.5);

  container.innerHTML = `
    <div class="practice-wrap">
      <div class="progress-bar"><div class="progress-fill" style="width:${(idx/cards.length)*100}%"></div></div>
      <p style="font-size:12px;color:var(--text3);text-align:center;margin-bottom:18px">${idx+1} de ${cards.length} · Puntaje: ${score}</p>
      <div class="quiz-card">
        <div class="quiz-q">¿Qué significa <strong>"${card.en}"</strong>?</div>
        <div class="quiz-opts">
          ${opts.map(o=>`<button class="quiz-opt" onclick="answerQuiz(this,'${esc(o)}','${esc(card.es)}')">${o}</button>`).join('')}
        </div>
      </div>
    </div>`;
}

function startQuiz() {
  const all = DB.classes.flatMap(c=>c.vocab||[]);
  practiceState = { view:'quiz', cards:[...all].sort(()=>Math.random()-.5), idx:0, score:0 };
  renderQuiz(document.getElementById('main-content'));
}

function answerQuiz(btn, chosen, correct) {
  document.querySelectorAll('.quiz-opt').forEach(b => {
    b.classList.add('disabled'); b.onclick = null;
    if (b.textContent.trim() === correct) b.classList.add('correct');
  });
  if (chosen === correct) { btn.classList.add('correct'); practiceState.score++; }
  else btn.classList.add('wrong');
  setTimeout(() => { practiceState.idx++; renderQuiz(document.getElementById('main-content')); }, 1300);
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
function openModal() {
  document.getElementById('inp-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('inp-chat').value = '';
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

async function processClass() {
  const date = document.getElementById('inp-date').value;
  const chat = document.getElementById('inp-chat').value.trim();
  if (!date || !chat) { showToast('Completá la fecha y el contenido'); return; }

  const btn = document.getElementById('btn-process');
  btn.textContent = '⏳ Procesando...'; btn.disabled = true;

  try {
    const parsed = await callClaude(chat);
    const newClass = {
      id: Date.now(), date,
      titulo: parsed.titulo || 'Clase',
      vocab: parsed.vocab || [],
      gramatica: parsed.gramatica || [],
      correcciones: parsed.correcciones || [],
      frases: parsed.frases || []
    };
    DB.classes.push(newClass);
    dbSave(DB);
    closeModal();
    showToast('✓ Clase guardada correctamente');
    render();
  } catch(e) {
    showToast('Error al procesar. Intentá de nuevo.');
    console.error(e);
  }
  btn.textContent = '✨ Procesar y guardar'; btn.disabled = false;
}

async function callClaude(chatText) {
  const prompt = `Analizá este chat de una clase de inglés y extraé el contenido estructurado.
Respondé SOLO con JSON válido, sin texto extra, sin backticks, sin markdown.

Formato exacto:
{
  "titulo": "tema principal de la clase en pocas palabras",
  "vocab": [{"en":"palabra en inglés","pron":"pronunciación o vacío","es":"traducción al español"}],
  "gramatica": [{"titulo":"nombre de la regla","formula":"la estructura gramatical","ejemplos":["ejemplo 1","ejemplo 2"]}],
  "correcciones": [{"wrong":"lo que dijo mal el alumno","right":"cómo se dice correctamente"}],
  "frases": [{"en":"frase en inglés","es":"traducción"}]
}

Si algo no aparece en el chat, poné el array vacío [].

CHAT:
${chatText}`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }]
    })
  });
  const data = await res.json();
  const text = (data.content||[]).map(b=>b.text||'').join('');
  return JSON.parse(text.replace(/```json|```/g,'').trim());
}

// ─── UTILS ────────────────────────────────────────────────────────────────────
function fmtDate(d) {
  const [y,m,day] = d.split('-');
  const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  return `${parseInt(day)} ${months[parseInt(m)-1]} ${y}`;
}

function esc(s) { return (s||'').replace(/'/g,"\\'"); }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}
