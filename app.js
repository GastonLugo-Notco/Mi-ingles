// ─── DB ──────────────────────────────────────────────────────────────────────
const KEY = 'miingles_v5';
function dbLoad() {
  try { const r = localStorage.getItem(KEY); if (r) return JSON.parse(r); } catch(e) {}
  return { classes: JSON.parse(JSON.stringify(INITIAL_CLASSES)), errors: [] };
}
function dbSave(db) { localStorage.setItem(KEY, JSON.stringify(db)); }
let DB = dbLoad();

// ─── STATE ────────────────────────────────────────────────────────────────────
let VIEW = 'home';
let PS = null;
let GUIDE = null;
let TENSE_ID = TENSES[0].id;

// ─── BOOT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.sb-btn[data-view]').forEach(b =>
    b.addEventListener('click', () => showView(b.dataset.view)));
  document.getElementById('btn-new').addEventListener('click', openModal);
  document.getElementById('btn-cancel').addEventListener('click', closeModal);
  document.getElementById('modal-x').addEventListener('click', closeModal);
  document.getElementById('btn-process').addEventListener('click', processClass);
  document.getElementById('modal-bg').addEventListener('click', e => {
    if (e.target.id === 'modal-bg') closeModal();
  });
  document.getElementById('hamburger').addEventListener('click', () =>
    document.getElementById('sidebar').classList.toggle('open'));
  document.getElementById('sb-close').addEventListener('click', () =>
    document.getElementById('sidebar').classList.remove('open'));
  render();
});

// ─── ROUTING ─────────────────────────────────────────────────────────────────
function showView(v) {
  VIEW = v; PS = null; GUIDE = null;
  document.getElementById('sidebar').classList.remove('open');
  document.querySelectorAll('.sb-btn[data-view]').forEach(b =>
    b.classList.toggle('active', b.dataset.view === v));
  render();
}

function render() {
  updateSidebar(); updateCounts();
  const pg = document.getElementById('page');
  const title = document.getElementById('page-title');
  const actions = document.getElementById('top-actions');
  actions.innerHTML = '';

  const map = {
    home:      ['Mis clases',             renderHome],
    vocab:     ['Todo el vocabulario',    renderVocab],
    tenses:    ['Tiempos verbales',       renderTenses],
    grammar:   ['Gramática',              renderGrammar],
    errors:    ['Mis errores frecuentes', renderErrors],
    guides:    ['Guías de estudio',       renderGuides],
    phrases:   ['Frases útiles',          renderPhrases],
    flashcards:['Flashcards',             renderFlashcards],
    quiz:      ['Quiz',                   renderQuiz],
  };
  const [t, fn] = map[VIEW] || map.home;
  title.textContent = t;
  fn(pg, actions);
}

function updateSidebar() {
  const c = document.getElementById('sb-classes');
  const sorted = [...DB.classes].sort((a,b) => new Date(b.date) - new Date(a.date));
  c.innerHTML = sorted.map(cl => `
    <div class="sb-cls-item" onclick="jumpTo(${cl.id})">
      <div class="sb-cls-date">${fmtD(cl.date)}</div>
      <div class="sb-cls-name">${cl.titulo}</div>
    </div>`).join('');
}

function updateCounts() {
  document.getElementById('cnt-classes').textContent = DB.classes.length;
  document.getElementById('cnt-vocab').textContent = DB.classes.flatMap(c=>c.vocab||[]).length;
  document.getElementById('cnt-errors').textContent = DB.errors.length;
}

function jumpTo(id) {
  showView('home');
  setTimeout(() => { const el = document.getElementById('cc-'+id); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); }, 80);
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function renderHome(pg) {
  if (!DB.classes.length) {
    pg.innerHTML = `<div class="empty"><div class="empty-icon">📝</div>
      <h3>Sin clases todavía</h3>
      <p>Hacé clic en "+ Nueva clase" y pegá el chat con Euge.<br>La IA extrae todo automáticamente.</p></div>`;
    return;
  }
  const aV = DB.classes.flatMap(c=>c.vocab||[]).length;
  const aG = DB.classes.flatMap(c=>c.gramatica||[]).length;
  const aC = DB.classes.flatMap(c=>c.correcciones||[]).length;
  const sorted = [...DB.classes].sort((a,b) => new Date(b.date) - new Date(a.date));
  pg.innerHTML = `
    <div class="stats-hero">
      <div class="stat"><div class="stat-n">${DB.classes.length}</div><div class="stat-l">Clases</div></div>
      <div class="stat"><div class="stat-n">${aV}</div><div class="stat-l">Palabras</div></div>
      <div class="stat"><div class="stat-n">${aG}</div><div class="stat-l">Reglas gramática</div></div>
      <div class="stat"><div class="stat-n">${aC}</div><div class="stat-l">Correcciones</div></div>
    </div>
    <div>${sorted.map(c => classCard(c)).join('')}</div>`;
}

function classCard(c) {
  const vn=(c.vocab||[]).length, gn=(c.gramatica||[]).length, cn=(c.correcciones||[]).length, fn=(c.frases||[]).length;
  return `<div class="class-card" id="cc-${c.id}">
    <div class="cc-hd" onclick="toggleCC(${c.id})">
      <div class="cc-date">${fmtD(c.date)}</div>
      <div class="cc-info">
        <div class="cc-name">${c.titulo}</div>
        <div class="cc-meta">${vn} palabras · ${gn} gramática · ${cn} correcciones · ${fn} frases</div>
      </div>
      <div class="cc-arrow" id="arr-${c.id}">▾</div>
    </div>
    <div class="cc-body" id="ccb-${c.id}">
      <div class="itabs">
        <button class="itab on" onclick="switchTab(event,${c.id},'vocab')">📖 Vocabulario (${vn})</button>
        <button class="itab" onclick="switchTab(event,${c.id},'gram')">⚙️ Gramática (${gn})</button>
        <button class="itab" onclick="switchTab(event,${c.id},'corr')">✍️ Correcciones (${cn})</button>
        <button class="itab" onclick="switchTab(event,${c.id},'frases')">💬 Frases (${fn})</button>
      </div>
      <div class="itab-body" id="itb-${c.id}">${tabVocab(c)}</div>
      <div style="padding:0 18px 14px;display:flex;justify-content:flex-end">
        <button class="btn danger sm" onclick="delClass(${c.id})">🗑 Eliminar</button>
      </div>
    </div>
  </div>`;
}

function toggleCC(id) {
  document.getElementById('ccb-'+id).classList.toggle('open');
  document.getElementById('arr-'+id).classList.toggle('open');
}

function switchTab(evt, id, tab) {
  const c = DB.classes.find(x=>x.id===id); if(!c) return;
  evt.target.closest('.cc-body').querySelectorAll('.itab').forEach(t=>t.classList.remove('on'));
  evt.target.classList.add('on');
  const fns = {vocab:tabVocab, gram:tabGram, corr:tabCorr, frases:tabFrases};
  document.getElementById('itb-'+id).innerHTML = (fns[tab]||tabVocab)(c);
}

function tabVocab(c) {
  if(!(c.vocab||[]).length) return '<p style="color:var(--ink3);font-size:13px">Sin vocabulario.</p>';
  return `<table class="vtbl"><thead><tr>
    <th style="width:36%">Inglés</th><th style="width:22%">Pronunciación</th><th>Español</th>
  </tr></thead><tbody>
    ${c.vocab.map(v=>`<tr>
      <td><span class="v-en">${v.en||''}</span></td>
      <td><span class="v-pron">${v.pron||'—'}</span></td>
      <td><span class="v-es">${v.es||''}</span></td>
    </tr>`).join('')}
  </tbody></table>`;
}
function tabGram(c) {
  if(!(c.gramatica||[]).length) return '<p style="color:var(--ink3);font-size:13px">Sin gramática.</p>';
  return c.gramatica.map(g=>`<div class="gram-item">
    <div class="gram-title">${g.titulo}</div>
    ${g.formula?`<div class="formula">${g.formula}</div>`:''}
    ${(g.ejemplos||[]).map(e=>`<div class="gram-ex">→ ${e}</div>`).join('')}
  </div>`).join('');
}
function tabCorr(c) {
  if(!(c.correcciones||[]).length) return '<p style="color:var(--ink3);font-size:13px">Sin correcciones.</p>';
  return c.correcciones.map(cr=>`<div class="corr-pair">
    <div class="wrong"><div class="wrong-lbl">❌ Incorrecto</div><div class="wrong-txt">${cr.wrong}</div></div>
    <div class="right"><div class="right-lbl">✅ Correcto</div><div class="right-txt">${cr.right}</div></div>
  </div>`).join('');
}
function tabFrases(c) {
  if(!(c.frases||[]).length) return '<p style="color:var(--ink3);font-size:13px">Sin frases.</p>';
  return `<div>${c.frases.map(f=>`<div class="phrase-row"><span class="ph-en">${f.en}</span><span class="ph-es">${f.es}</span></div>`).join('')}</div>`;
}
function delClass(id) {
  if(!confirm('¿Eliminar esta clase?')) return;
  DB.classes = DB.classes.filter(c=>c.id!==id); dbSave(DB); render(); toast('Clase eliminada');
}

// ─── VOCAB ────────────────────────────────────────────────────────────────────
function renderVocab(pg) {
  const all = DB.classes.flatMap(c=>c.vocab||[]);
  if(!all.length) { pg.innerHTML=`<div class="empty"><div class="empty-icon">📖</div><h3>Sin vocabulario</h3><p>Cargá tu primera clase para ver todo el vocabulario aquí.</p></div>`; return; }
  pg.innerHTML = `
    <div class="search-wrap"><span class="search-icon">🔍</span>
      <input type="text" id="vs" placeholder="Buscar en inglés o español..." oninput="filterV()">
    </div>
    <div class="vocab-grid" id="vg">
      ${all.map(v=>`<div class="vc" data-en="${(v.en||'').toLowerCase()}" data-es="${(v.es||'').toLowerCase()}">
        <div class="vc-en">${v.en||''}</div>
        ${v.pron?`<div class="vc-pron">${v.pron}</div>`:''}
        <div class="vc-es">${v.es||''}</div>
      </div>`).join('')}
    </div>`;
}
function filterV() {
  const q=(document.getElementById('vs').value||'').toLowerCase();
  document.querySelectorAll('.vc').forEach(c=>{c.style.display=(!q||c.dataset.en.includes(q)||c.dataset.es.includes(q))?'':'none';});
}

// ─── TENSES ───────────────────────────────────────────────────────────────────
function renderTenses(pg) {
  const t = TENSES.find(x=>x.id===TENSE_ID)||TENSES[0];
  pg.innerHTML = `
    <div class="tense-nav">
      ${TENSES.map(x=>`<button class="tpill${x.id===TENSE_ID?' on':''}" onclick="setTense('${x.id}')">${x.name}</button>`).join('')}
    </div>
    <div class="tense-hero" style="background:linear-gradient(135deg,${t.bgFrom},${t.bgTo})">
      <div class="th-tag">Tiempo verbal</div>
      <div class="th-name">${t.name}</div>
      <div class="th-desc">${t.desc}</div>
    </div>
    <div class="tense-grid">
      ${t.formulas.map(f=>`<div class="tense-card">
        <div class="tc-lbl">${f.label}</div>
        <div class="tc-formula">${f.html}</div>
      </div>`).join('')}
    </div>
    <div class="ex-title">Ejemplos</div>
    ${t.examples.map(e=>`<div class="ex-row"><div class="ex-en">${e.en}</div><div class="ex-es">${e.es}</div></div>`).join('')}
    <div style="margin-top:18px">
      <div class="ex-title">Palabras clave que avisan que es ${t.name}</div>
      <div class="sig-row">${t.signals.map(s=>`<span class="sig" style="background:${t.signalBg};color:${t.signalColor}">${s}</span>`).join('')}</div>
    </div>
    <div class="tip-block" style="background:${t.tip.bg};border-color:${t.tip.color};color:${t.tip.color}">${t.tip.text}</div>`;
}
function setTense(id) { TENSE_ID = id; renderTenses(document.getElementById('page')); }

// ─── GRAMMAR ──────────────────────────────────────────────────────────────────
function renderGrammar(pg) {
  const all = DB.classes.flatMap(c=>(c.gramatica||[]).map(g=>({...g,date:c.date,clase:c.titulo})));
  if(!all.length) { pg.innerHTML=`<div class="empty"><div class="empty-icon">⚙️</div><h3>Sin gramática</h3></div>`; return; }
  pg.innerHTML = `<div>${all.map(g=>`<div class="gram-full">
    <div class="gram-src">${fmtD(g.date)} · ${g.clase}</div>
    <div class="gram-title">${g.titulo}</div>
    ${g.formula?`<div class="formula">${g.formula}</div>`:''}
    ${(g.ejemplos||[]).map(e=>`<div class="gram-ex">→ ${e}</div>`).join('')}
  </div>`).join('')}</div>`;
}

// ─── ERRORS ───────────────────────────────────────────────────────────────────
function renderErrors(pg) {
  const all = DB.classes.flatMap(c=>c.correcciones||[]);
  pg.innerHTML = `
    <div style="margin-bottom:22px">
      <p style="font-size:13px;color:var(--ink3);margin-bottom:12px">Correcciones de clase + tus notas personales.</p>
      <div style="display:flex;gap:8px">
        <input id="ei" type="text" class="inp" placeholder="Agregar nota personal..." style="flex:1">
        <button class="btn teal" onclick="addErr()">Agregar</button>
      </div>
    </div>
    <div class="sec-hdr"><h3>De mis clases con Euge</h3></div>
    ${!all.length?'<p style="color:var(--ink3);font-size:13px">Sin correcciones todavía.</p>':
      all.map(cr=>`<div class="corr-pair" style="margin-bottom:10px">
        <div class="wrong"><div class="wrong-lbl">❌ Dije</div><div class="wrong-txt">${cr.wrong}</div></div>
        <div class="right"><div class="right-lbl">✅ Es</div><div class="right-txt">${cr.right}</div></div>
      </div>`).join('')}
    <div class="divider"></div>
    <div class="sec-hdr"><h3>Mis notas personales</h3></div>
    <div id="pe">${!DB.errors.length?'<p style="color:var(--ink3);font-size:13px">Ninguna todavía.</p>':
      DB.errors.map((e,i)=>`<span class="etag">${e}<span class="etag-x" onclick="delErr(${i})">×</span></span>`).join('')}
    </div>`;
}
function addErr(){const i=document.getElementById('ei');const v=(i.value||'').trim();if(!v)return;DB.errors.push(v);dbSave(DB);i.value='';renderErrors(document.getElementById('page'));updateCounts();}
function delErr(i){DB.errors.splice(i,1);dbSave(DB);renderErrors(document.getElementById('page'));updateCounts();}

// ─── GUIDES ───────────────────────────────────────────────────────────────────
function renderGuides(pg, actions) {
  if (GUIDE) {
    const g = GUIDES.find(x=>x.id===GUIDE);
    if (g) {
      document.getElementById('top-actions').innerHTML = `<button class="btn ghost" onclick="GUIDE=null;render()">← Volver</button>`;
      pg.innerHTML = `<div class="g-detail">
        <div class="g-detail-title">${g.emoji} ${g.title}</div>
        <div class="g-detail-desc">${g.desc}</div>
        ${g.sections.map(s=>`<div class="g-sec">
          <div class="g-sec-title">${s.title}</div>
          ${s.items.map(it=>`<div class="g-item">
            <strong>${it.label}</strong>
            <div class="g-item-txt">${it.text.replace(/\n/g,'<br>')}</div>
          </div>`).join('')}
        </div>`).join('')}
      </div>`; return;
    }
  }
  pg.innerHTML = `
    <p style="font-size:13px;color:var(--ink3);margin-bottom:18px">Todo el contenido de tus libros y recursos de estudio.</p>
    <div class="guides-grid">
      ${GUIDES.map(g=>`<div class="gcard" onclick="GUIDE='${g.id}';render()">
        <div class="gcard-icon">${g.emoji}</div>
        <div class="gcard-name">${g.title}</div>
        <div class="gcard-desc">${g.desc}</div>
        <div class="gcard-src">${g.source} · ${g.sections.length} secciones</div>
      </div>`).join('')}
    </div>`;
}

// ─── PHRASES ──────────────────────────────────────────────────────────────────
function renderPhrases(pg) {
  const all = DB.classes.flatMap(c=>(c.frases||[]).map(f=>({...f})));
  if(!all.length) { pg.innerHTML=`<div class="empty"><div class="empty-icon">💬</div><h3>Sin frases</h3></div>`; return; }
  pg.innerHTML = `
    <div class="search-wrap"><span class="search-icon">🔍</span>
      <input type="text" id="ps" placeholder="Buscar frase..." oninput="filterP()">
    </div>
    <div id="pl">${all.map(f=>`<div class="phrase-row" data-en="${(f.en||'').toLowerCase()}" data-es="${(f.es||'').toLowerCase()}">
      <span class="ph-en">${f.en}</span><span class="ph-es">${f.es}</span>
    </div>`).join('')}</div>`;
}
function filterP(){const q=(document.getElementById('ps').value||'').toLowerCase();document.querySelectorAll('#pl .phrase-row').forEach(r=>{r.style.display=(!q||r.dataset.en.includes(q)||r.dataset.es.includes(q))?'':'none';});}

// ─── FLASHCARDS ───────────────────────────────────────────────────────────────
function renderFlashcards(pg) {
  const all = DB.classes.flatMap(c=>c.vocab||[]);
  if(!all.length) { pg.innerHTML=`<div class="empty"><div class="empty-icon">🃏</div><h3>Sin vocabulario para practicar</h3><p>Cargá al menos una clase primero.</p></div>`; return; }
  if(!PS||PS.view!=='fc') {
    pg.innerHTML = `<div class="practice-wrap">
      <p style="font-size:13px;color:var(--ink3);margin-bottom:18px">${all.length} palabras disponibles.</p>
      <div class="mode-grid">
        <div class="mode-card" onclick="startFC('normal')"><div class="mc-icon">🃏</div><div class="mc-name">Inglés → Español</div><div class="mc-desc">Ves la palabra en inglés y recordás el español.</div></div>
        <div class="mode-card" onclick="startFC('reverse')"><div class="mc-icon">🔄</div><div class="mc-name">Español → Inglés</div><div class="mc-desc">Ves el español y recordás cómo se dice en inglés.</div></div>
      </div></div>`; return;
  }
  const {cards,idx,score,mode} = PS;
  if (idx >= cards.length) {
    pg.innerHTML = `<div class="practice-wrap"><div class="score-wrap">
      <div class="score-big">✓</div>
      <h3 style="font-size:20px;font-weight:800;margin:12px 0 5px">¡Repasaste todo!</h3>
      <p class="score-sub">${cards.length} tarjetas · ${score} las sabías</p>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:20px">
        <button class="btn ghost" onclick="PS=null;renderFlashcards(document.getElementById('page'))">← Volver</button>
        <button class="btn teal" onclick="startFC('${mode}')">Repetir</button>
      </div></div></div>`; return;
  }
  const card = cards[idx]; const isR = mode==='reverse';
  pg.innerHTML = `<div class="practice-wrap">
    <div class="prog-bar"><div class="prog-fill" style="width:${(idx/cards.length)*100}%"></div></div>
    <p class="prog-txt">${idx+1} de ${cards.length}</p>
    <div class="flashcard" id="fcc" onclick="flipFC()">
      <div class="fc-hint">${isR?'Español → Inglés':'Inglés → Español'}</div>
      <div class="fc-word">${isR?card.es:card.en}</div>
      <div class="fc-ans" id="fca">${isR?card.en:card.es}</div>
      ${card.pron?`<div class="fc-pron" id="fcp">${card.pron}</div>`:''}
      <div class="fc-tap">Tocá para ver →</div>
    </div>
    <div class="fc-btns" id="fcact" style="display:none">
      <button class="fc-bad" onclick="nextFC(false)">😕 No la sabía</button>
      <button class="fc-good" onclick="nextFC(true)">😊 La sabía</button>
    </div>
    <div style="text-align:center;margin-top:14px">
      <button class="btn ghost sm" onclick="PS=null;renderFlashcards(document.getElementById('page'))">← Salir</button>
    </div></div>`;
}
function startFC(mode){const all=DB.classes.flatMap(c=>c.vocab||[]);PS={view:'fc',mode,cards:[...all].sort(()=>Math.random()-.5),idx:0,score:0};renderFlashcards(document.getElementById('page'));}
function flipFC(){document.getElementById('fca').style.display='block';const p=document.getElementById('fcp');if(p)p.style.display='block';document.getElementById('fcc').querySelector('.fc-tap').style.display='none';document.getElementById('fcact').style.display='flex';}
function nextFC(k){if(k)PS.score++;PS.idx++;renderFlashcards(document.getElementById('page'));}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
function renderQuiz(pg) {
  const all = DB.classes.flatMap(c=>c.vocab||[]);
  if(all.length<4) { pg.innerHTML=`<div class="empty"><div class="empty-icon">🎯</div><h3>Necesitás al menos 4 palabras</h3></div>`; return; }
  if(!PS||PS.view!=='quiz') {
    pg.innerHTML=`<div class="practice-wrap">
      <p style="font-size:13px;color:var(--ink3);margin-bottom:20px">Quiz con ${all.length} palabras. Elegís la traducción correcta entre 4 opciones.</p>
      <div style="text-align:center"><button class="btn teal" onclick="startQuiz()">▶ Empezar quiz</button></div>
    </div>`; return;
  }
  const {cards,idx,score} = PS;
  if(idx>=cards.length){
    const pct=Math.round((score/cards.length)*100);
    pg.innerHTML=`<div class="practice-wrap"><div class="score-wrap">
      <div class="score-big">${pct}%</div>
      <h3 style="font-size:20px;font-weight:800;margin:12px 0 5px">${pct>=70?'¡Muy bien!':'Seguí practicando'}</h3>
      <p class="score-sub">Acertaste ${score} de ${cards.length}</p>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:20px">
        <button class="btn ghost" onclick="PS=null;renderQuiz(document.getElementById('page'))">← Volver</button>
        <button class="btn teal" onclick="startQuiz()">Repetir</button>
      </div></div></div>`; return;
  }
  const card=cards[idx];
  const dist=all.filter(v=>v!==card).sort(()=>Math.random()-.5).slice(0,3);
  const opts=[...dist.map(v=>v.es),card.es].sort(()=>Math.random()-.5);
  pg.innerHTML=`<div class="practice-wrap">
    <div class="prog-bar"><div class="prog-fill" style="width:${(idx/cards.length)*100}%"></div></div>
    <p class="prog-txt">${idx+1} de ${cards.length} · Puntaje: ${score}</p>
    <div class="quiz-card">
      <div class="quiz-q">¿Qué significa <strong>"${card.en}"</strong>?</div>
      <div class="quiz-opts">${opts.map(o=>`<button class="quiz-opt" onclick="answerQ(this,'${esc(o)}','${esc(card.es)}')">${o}</button>`).join('')}</div>
    </div></div>`;
}
function startQuiz(){const all=DB.classes.flatMap(c=>c.vocab||[]);PS={view:'quiz',cards:[...all].sort(()=>Math.random()-.5),idx:0,score:0};renderQuiz(document.getElementById('page'));}
function answerQ(btn,chosen,correct){
  document.querySelectorAll('.quiz-opt').forEach(b=>{b.classList.add('disabled');b.onclick=null;if(b.textContent.trim()===correct)b.classList.add('correct');});
  if(chosen===correct){btn.classList.add('correct');PS.score++;}else btn.classList.add('wrong');
  setTimeout(()=>{PS.idx++;renderQuiz(document.getElementById('page'));},1300);
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
function openModal(){document.getElementById('inp-date').value=new Date().toISOString().split('T')[0];document.getElementById('inp-chat').value='';document.getElementById('modal-bg').classList.add('open');}
function closeModal(){document.getElementById('modal-bg').classList.remove('open');}

async function processClass() {
  const date=document.getElementById('inp-date').value;
  const chat=document.getElementById('inp-chat').value.trim();
  if(!date||!chat){toast('Completá la fecha y el chat');return;}
  const apiKey = localStorage.getItem('anthropic_key')||'';
  if(!apiKey){
    const k=prompt('Para procesar clases automáticamente necesitás tu API key de Anthropic.\nObtené una en console.anthropic.com\n\nPegá tu API key acá:');
    if(!k){toast('Cancelado.');return;}
    localStorage.setItem('anthropic_key',k.trim());
    window.ANTHROPIC_KEY=k.trim();
  } else { window.ANTHROPIC_KEY=apiKey; }
  const btn=document.getElementById('btn-process');
  btn.textContent='⏳ Procesando...';btn.disabled=true;
  try {
    const parsed=await callClaude(chat);
    const nc={id:Date.now(),date,titulo:parsed.titulo||'Clase',vocab:parsed.vocab||[],gramatica:parsed.gramatica||[],correcciones:parsed.correcciones||[],frases:parsed.frases||[]};
    DB.classes.push(nc);dbSave(DB);closeModal();toast('✓ Clase guardada correctamente');render();
  } catch(e){toast('Error al procesar. Verificá tu API key.');console.error(e);}
  btn.textContent='✨ Procesar y guardar';btn.disabled=false;
}

async function callClaude(chatText) {
  const prompt=`Analizá este chat de clase de inglés. Respondé SOLO con JSON válido, sin texto extra, sin backticks.
{"titulo":"tema principal en pocas palabras","vocab":[{"en":"","pron":"pronunciación IPA o vacío","es":""}],"gramatica":[{"titulo":"","formula":"","ejemplos":[]}],"correcciones":[{"wrong":"","right":""}],"frases":[{"en":"","es":""}]}
Si algo no aparece, poné []. Incluí pronunciación IPA cuando sea posible.
CHAT:\n${chatText}`;
  const res=await fetch("https://api.anthropic.com/v1/messages",{
    method:"POST",
    headers:{"Content-Type":"application/json","x-api-key":window.ANTHROPIC_KEY||"","anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},
    body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:2000,messages:[{role:"user",content:prompt}]})
  });
  if(!res.ok) throw new Error('API error '+res.status);
  const data=await res.json();
  const text=(data.content||[]).map(b=>b.text||'').join('');
  return JSON.parse(text.replace(/```json|```/g,'').trim());
}

// ─── UTILS ────────────────────────────────────────────────────────────────────
function fmtD(d){const[y,m,day]=d.split('-');const ms=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];return`${parseInt(day)} ${ms[parseInt(m)-1]} ${y}`;}
function esc(s){return(s||'').replace(/'/g,"\\'");}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2800);}
