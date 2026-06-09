// ─── DB ───────────────────────────────────────────────────────────────────────
const KEY = 'miingles_v4';
function dbLoad() {
  try { const r = localStorage.getItem(KEY); if (r) return JSON.parse(r); } catch(e) {}
  return { classes: [...INITIAL_CLASSES], errors: [] };
}
function dbSave(db) { localStorage.setItem(KEY, JSON.stringify(db)); }
let DB = dbLoad();

// ─── STATE ────────────────────────────────────────────────────────────────────
let VIEW = 'home';
let PS = null;        // practice state
let GUIDE = null;     // open guide id
let TENSE = 'present-simple'; // active tense tab

// ─── BOOT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.sb-btn[data-view]').forEach(b =>
    b.addEventListener('click', () => showView(b.dataset.view)));
  document.getElementById('btn-add').addEventListener('click', openModal);
  document.getElementById('btn-cancel').addEventListener('click', closeModal);
  document.getElementById('modal-x').addEventListener('click', closeModal);
  document.getElementById('btn-process').addEventListener('click', processClass);
  document.getElementById('modal-bg').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-bg')) closeModal();
  });
  document.getElementById('menu-btn').addEventListener('click', () =>
    document.getElementById('sidebar').classList.toggle('open'));
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
  const body = document.getElementById('page-body');
  const title = document.getElementById('page-title');
  const actions = document.getElementById('top-actions');
  actions.innerHTML = '';
  const map = {
    home: ['Mis clases', renderHome],
    vocab: ['Todo el vocabulario', renderVocab],
    tenses: ['Tiempos verbales', renderTenses],
    grammar: ['Gramática', renderGrammar],
    errors: ['Mis errores frecuentes', renderErrors],
    guides: ['Guías de estudio', renderGuides],
    phrases: ['Frases útiles', renderPhrases],
    practice: ['Flashcards', renderPractice],
    quiz: ['Quiz', renderQuiz],
  };
  const [t, fn] = map[VIEW] || map.home;
  title.textContent = t;
  fn(body, actions);
}

function updateSidebar() {
  const c = document.getElementById('sb-classes');
  if (!DB.classes.length) { c.innerHTML = ''; return; }
  const sorted = [...DB.classes].sort((a,b) => new Date(b.date)-new Date(a.date));
  c.innerHTML = sorted.map(cl => `
    <div class="cls-item" onclick="jumpTo(${cl.id})">
      <div class="cls-item-date">${fmtD(cl.date)}</div>
      <div class="cls-item-sub">${cl.titulo}</div>
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
function renderHome(el) {
  if (!DB.classes.length) {
    el.innerHTML = `<div class="empty"><div class="empty-icon">📝</div><h3>Sin clases todavía</h3><p>Hacé clic en "+ Nueva clase" y pegá el chat con Euge.<br>La IA extrae todo automáticamente.</p></div>`;
    return;
  }
  const aV = DB.classes.flatMap(c=>c.vocab||[]).length;
  const aG = DB.classes.flatMap(c=>c.gramatica||[]).length;
  const aC = DB.classes.flatMap(c=>c.correcciones||[]).length;
  const sorted = [...DB.classes].sort((a,b)=>new Date(b.date)-new Date(a.date));
  el.innerHTML = `
    <div class="stats-row">
      <div class="stat-card"><div class="stat-n">${DB.classes.length}</div><div class="stat-l">Clases</div></div>
      <div class="stat-card"><div class="stat-n">${aV}</div><div class="stat-l">Palabras</div></div>
      <div class="stat-card"><div class="stat-n">${aG}</div><div class="stat-l">Reglas gramática</div></div>
      <div class="stat-card"><div class="stat-n">${aC}</div><div class="stat-l">Correcciones</div></div>
    </div>
    <div>${sorted.map(c=>classCard(c)).join('')}</div>`;
}

function classCard(c) {
  const vn=(c.vocab||[]).length, gn=(c.gramatica||[]).length, cn=(c.correcciones||[]).length, fn=(c.frases||[]).length;
  return `<div class="class-card" id="cc-${c.id}">
    <div class="cc-header" onclick="toggleCC(${c.id})">
      <div class="cc-date">${fmtD(c.date)}</div>
      <div class="cc-info">
        <div class="cc-title">${c.titulo}</div>
        <div class="cc-meta">${vn} palabras · ${gn} gramática · ${cn} correcciones · ${fn} frases</div>
      </div>
      <div class="cc-chev" id="chev-${c.id}">▾</div>
    </div>
    <div class="cc-body" id="ccb-${c.id}">
      <div class="itabs">
        <button class="itab active" onclick="switchIT(event,${c.id},'vocab')">📖 Vocabulario (${vn})</button>
        <button class="itab" onclick="switchIT(event,${c.id},'gram')">⚙️ Gramática (${gn})</button>
        <button class="itab" onclick="switchIT(event,${c.id},'corr')">✍️ Correcciones (${cn})</button>
        <button class="itab" onclick="switchIT(event,${c.id},'frases')">💬 Frases (${fn})</button>
      </div>
      <div class="itab-body" id="itb-${c.id}">${tabVocab(c)}</div>
      <div style="padding:0 20px 14px;display:flex;justify-content:flex-end">
        <button class="btn btn-danger btn-sm" onclick="delClass(${c.id})">🗑 Eliminar</button>
      </div>
    </div>
  </div>`;
}

function toggleCC(id) {
  document.getElementById('ccb-'+id).classList.toggle('open');
  document.getElementById('chev-'+id).classList.toggle('open');
}

function switchIT(evt, id, tab) {
  const c = DB.classes.find(x=>x.id===id); if(!c) return;
  evt.target.closest('.cc-body').querySelectorAll('.itab').forEach(t=>t.classList.remove('active'));
  evt.target.classList.add('active');
  const fns = {vocab:tabVocab, gram:tabGram, corr:tabCorr, frases:tabFrases};
  document.getElementById('itb-'+id).innerHTML = (fns[tab]||tabVocab)(c);
}

function tabVocab(c) {
  if(!(c.vocab||[]).length) return '<p style="color:var(--muted);font-size:13px">Sin vocabulario.</p>';
  return `<table class="vtable"><thead><tr><th style="width:36%">Inglés</th><th style="width:22%">Pronunciación</th><th>Español</th></tr></thead><tbody>
    ${c.vocab.map(v=>`<tr><td><span class="v-en">${v.en||''}</span></td><td><span class="v-pron">${v.pron||'—'}</span></td><td><span class="v-es">${v.es||''}</span></td></tr>`).join('')}
  </tbody></table>`;
}
function tabGram(c) {
  if(!(c.gramatica||[]).length) return '<p style="color:var(--muted);font-size:13px">Sin gramática.</p>';
  return c.gramatica.map(g=>`<div class="gram-item"><div class="gram-ttl">${g.titulo}</div>${g.formula?`<div class="formula-box">${g.formula}</div>`:''} ${(g.ejemplos||[]).map(e=>`<div class="gram-ex">→ ${e}</div>`).join('')}</div>`).join('');
}
function tabCorr(c) {
  if(!(c.correcciones||[]).length) return '<p style="color:var(--muted);font-size:13px">Sin correcciones.</p>';
  return c.correcciones.map(cr=>`<div class="corr-pair"><div class="wrong-box"><div class="wrong-lbl">❌ Incorrecto</div><div class="wrong-text">${cr.wrong}</div></div><div class="right-box"><div class="right-lbl">✅ Correcto</div><div class="right-text">${cr.right}</div></div></div>`).join('');
}
function tabFrases(c) {
  if(!(c.frases||[]).length) return '<p style="color:var(--muted);font-size:13px">Sin frases.</p>';
  return `<div>${c.frases.map(f=>`<div class="phrase-row"><span class="p-en">${f.en}</span><span class="p-es">${f.es}</span></div>`).join('')}</div>`;
}
function delClass(id) {
  if(!confirm('¿Eliminar esta clase?')) return;
  DB.classes = DB.classes.filter(c=>c.id!==id); dbSave(DB); render(); toast('Clase eliminada');
}

// ─── VOCAB ────────────────────────────────────────────────────────────────────
function renderVocab(el) {
  const all = DB.classes.flatMap(c=>c.vocab||[]);
  if(!all.length) { el.innerHTML=`<div class="empty"><div class="empty-icon">📖</div><h3>Sin vocabulario todavía</h3><p>Cargá tu primera clase.</p></div>`; return; }
  el.innerHTML = `
    <div class="search-wrap"><span class="search-icon">🔍</span>
      <input type="text" id="vs" placeholder="Buscar en inglés o español..." oninput="filterV()">
    </div>
    <div class="vocab-grid" id="vg">
      ${all.map(v=>`<div class="vocab-chip" data-en="${(v.en||'').toLowerCase()}" data-es="${(v.es||'').toLowerCase()}">
        <div class="vc-en">${v.en||''}</div>${v.pron?`<div class="vc-pron">${v.pron}</div>`:''}
        <div class="vc-es">${v.es||''}</div></div>`).join('')}
    </div>`;
}
function filterV() {
  const q=(document.getElementById('vs').value||'').toLowerCase();
  document.querySelectorAll('.vocab-chip').forEach(c=>{c.style.display=(!q||c.dataset.en.includes(q)||c.dataset.es.includes(q))?'':'none';});
}

// ─── TENSES ───────────────────────────────────────────────────────────────────
function renderTenses(el) {
  const t = TENSES.find(x=>x.id===TENSE) || TENSES[0];
  el.innerHTML = `
    <div class="tenses-nav">
      ${TENSES.map(t=>`<button class="tense-pill${t.id===TENSE?' active':''}" onclick="setTense('${t.id}')">${t.name}</button>`).join('')}
    </div>
    <div class="tense-panel active">
      <div class="tense-hero" style="background:linear-gradient(135deg,${t.bgFrom},${t.bgTo})">
        <div class="tense-hero-label">Tiempo verbal</div>
        <div class="tense-hero-name" style="color:${t.colorDark==='#FFFFFF'?'#0D0D0F':t.colorDark}">${t.name}</div>
        <div class="tense-hero-desc">${t.desc}</div>
      </div>

      <div class="tense-grid">
        ${t.formulas.map(f=>`
          <div class="tense-card">
            <div class="tense-card-title">${f.label}</div>
            <div class="tense-formula">${f.html}</div>
          </div>`).join('')}
      </div>

      <div class="tense-examples">
        <div class="tense-ex-title">Ejemplos</div>
        ${t.examples.map(e=>`
          <div class="tense-ex-row">
            <div class="tense-ex-en">${e.en}</div>
            <div class="tense-ex-es">${e.es}</div>
          </div>`).join('')}
      </div>

      <div class="tense-ex-title">Palabras clave que avisan que es ${t.name}</div>
      <div class="signals-row">
        ${t.signals.map(s=>`<span class="signal-chip" style="background:${t.signalBg};color:${t.signalColor}">${s}</span>`).join('')}
      </div>

      <div class="tip-box" style="background:${t.tip.bg};border-color:${t.tip.color};color:${t.tip.color==='#FFFFFF'?'#0D0D0F':t.tip.color}">
        ${t.tip.text}
      </div>
    </div>`;
}
function setTense(id) { TENSE=id; renderTenses(document.getElementById('page-body')); }

// ─── GRAMMAR ──────────────────────────────────────────────────────────────────
function renderGrammar(el) {
  const all = DB.classes.flatMap(c=>(c.gramatica||[]).map(g=>({...g,date:c.date,clase:c.titulo})));
  if(!all.length){el.innerHTML=`<div class="empty"><div class="empty-icon">⚙️</div><h3>Sin gramática todavía</h3></div>`;return;}
  el.innerHTML=`<div>${all.map(g=>`
    <div class="gram-card-full">
      <div class="gram-card-src">${fmtD(g.date)} · ${g.clase}</div>
      <div class="gram-ttl">${g.titulo}</div>
      ${g.formula?`<div class="formula-box">${g.formula}</div>`:''}
      ${(g.ejemplos||[]).map(e=>`<div class="gram-ex">→ ${e}</div>`).join('')}
    </div>`).join('')}</div>`;
}

// ─── ERRORS ───────────────────────────────────────────────────────────────────
function renderErrors(el) {
  const all = DB.classes.flatMap(c=>c.correcciones||[]);
  el.innerHTML=`
    <div style="margin-bottom:22px">
      <p style="font-size:13px;color:var(--muted);margin-bottom:12px">Correcciones de clase + tus notas personales.</p>
      <div style="display:flex;gap:8px">
        <input id="ei" type="text" placeholder="Agregar nota personal..." style="flex:1;padding:9px 13px;border:1.5px solid var(--border);border-radius:var(--r-sm);font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;background:var(--paper);color:var(--ink);outline:none">
        <button class="btn btn-lime" onclick="addErr()">Agregar</button>
      </div>
    </div>
    <div class="sec-hdr"><h3>De mis clases con Euge</h3></div>
    ${!all.length?'<p style="color:var(--muted);font-size:13px">Sin correcciones todavía.</p>':
      all.map(cr=>`<div class="corr-pair" style="margin-bottom:10px">
        <div class="wrong-box"><div class="wrong-lbl">❌ Dije</div><div class="wrong-text">${cr.wrong}</div></div>
        <div class="right-box"><div class="right-lbl">✅ Es</div><div class="right-text">${cr.right}</div></div>
      </div>`).join('')}
    <div class="divider"></div>
    <div class="sec-hdr"><h3>Mis notas personales</h3></div>
    <div id="pe">${!DB.errors.length?'<p style="color:var(--muted);font-size:13px">Ninguna todavía.</p>':
      DB.errors.map((e,i)=>`<span class="err-tag">${e}<span class="err-x" onclick="delErr(${i})">×</span></span>`).join('')}
    </div>`;
}
function addErr(){const i=document.getElementById('ei');const v=(i.value||'').trim();if(!v)return;DB.errors.push(v);dbSave(DB);i.value='';renderErrors(document.getElementById('page-body'));updateCounts();}
function delErr(i){DB.errors.splice(i,1);dbSave(DB);renderErrors(document.getElementById('page-body'));updateCounts();}

// ─── GUIDES ───────────────────────────────────────────────────────────────────
function renderGuides(el, actions) {
  if(GUIDE){
    const g=GUIDES.find(x=>x.id===GUIDE);
    if(g){
      document.getElementById('top-actions').innerHTML=`<button class="btn" onclick="GUIDE=null;render()">← Volver</button>`;
      el.innerHTML=`<div class="guide-detail">
        <div class="guide-detail-title">${g.emoji} ${g.title}</div>
        <div class="guide-detail-desc">${g.desc}</div>
        ${g.sections.map(s=>`<div class="guide-sec">
          <div class="guide-sec-title">${s.title}</div>
          ${s.items.map(it=>`<div class="guide-item"><strong>${it.label}</strong><div class="guide-item-text">${it.text}</div></div>`).join('')}
        </div>`).join('')}
      </div>`;return;
    }
  }
  el.innerHTML=`<p style="font-size:13px;color:var(--muted);margin-bottom:18px">Material de apoyo de tus libros y recursos.</p>
    <div class="guides-grid">
      ${GUIDES.map(g=>`<div class="guide-card" onclick="GUIDE='${g.id}';render()">
        <div class="guide-emoji">${g.emoji}</div>
        <div class="guide-name">${g.title}</div>
        <div class="guide-desc">${g.desc}</div>
        <div class="guide-src">${g.source} · ${g.sections.length} secciones</div>
      </div>`).join('')}
    </div>`;
}

// ─── PHRASES ──────────────────────────────────────────────────────────────────
function renderPhrases(el) {
  const all=DB.classes.flatMap(c=>(c.frases||[]).map(f=>({...f,date:c.date})));
  if(!all.length){el.innerHTML=`<div class="empty"><div class="empty-icon">💬</div><h3>Sin frases todavía</h3></div>`;return;}
  el.innerHTML=`
    <div class="search-wrap"><span class="search-icon">🔍</span>
      <input type="text" id="ps" placeholder="Buscar frase..." oninput="filterP()">
    </div>
    <div id="pl">${all.map(f=>`<div class="phrase-row" data-en="${(f.en||'').toLowerCase()}" data-es="${(f.es||'').toLowerCase()}"><span class="p-en">${f.en}</span><span class="p-es">${f.es}</span></div>`).join('')}</div>`;
}
function filterP(){const q=(document.getElementById('ps').value||'').toLowerCase();document.querySelectorAll('#pl .phrase-row').forEach(r=>{r.style.display=(!q||r.dataset.en.includes(q)||r.dataset.es.includes(q))?'':'none';});}

// ─── PRACTICE ─────────────────────────────────────────────────────────────────
function renderPractice(el) {
  const all=DB.classes.flatMap(c=>c.vocab||[]);
  if(!all.length){el.innerHTML=`<div class="empty"><div class="empty-icon">🃏</div><h3>Sin vocabulario para practicar</h3></div>`;return;}
  if(!PS||PS.view!=='fc'){
    el.innerHTML=`<div class="practice-wrap">
      <p style="font-size:13px;color:var(--muted);margin-bottom:18px">${all.length} palabras disponibles. Elegí el modo:</p>
      <div class="mode-grid">
        <div class="mode-card" onclick="startFC('normal')"><div class="mode-emoji">🃏</div><div class="mode-name">Inglés → Español</div><div class="mode-desc">Ves la palabra en inglés y recordás el español.</div></div>
        <div class="mode-card" onclick="startFC('reverse')"><div class="mode-emoji">🔄</div><div class="mode-name">Español → Inglés</div><div class="mode-desc">Ves el español y recordás cómo se dice en inglés.</div></div>
      </div></div>`;return;
  }
  const{cards,idx,score,mode}=PS;
  if(idx>=cards.length){
    el.innerHTML=`<div class="practice-wrap"><div class="score-box"><div class="score-big">✓</div><h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;margin:12px 0 6px">¡Repasaste todo!</h3><p class="score-sub">${cards.length} tarjetas · ${score} las sabías</p>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:22px">
        <button class="btn" onclick="PS=null;renderPractice(document.getElementById('page-body'))">← Volver</button>
        <button class="btn btn-lime" onclick="startFC('${mode}')">Repetir</button>
      </div></div></div>`;return;
  }
  const card=cards[idx];const isR=mode==='reverse';
  const q=isR?card.es:card.en; const a=isR?card.en:card.es;
  el.innerHTML=`<div class="practice-wrap">
    <div class="prog-bar"><div class="prog-fill" style="width:${(idx/cards.length)*100}%"></div></div>
    <p style="font-size:12px;color:var(--muted);text-align:center;margin-bottom:16px">${idx+1} de ${cards.length}</p>
    <div class="flashcard" id="fcc" onclick="flipFC()">
      <div class="fc-hint">${isR?'Español → Inglés':'Inglés → Español'}</div>
      <div class="fc-word">${q}</div>
      <div class="fc-answer" id="fca">${a}</div>
      ${card.pron?`<div class="fc-pron" id="fcp">${card.pron}</div>`:''}
      <div class="fc-tap">Tocá para ver →</div>
    </div>
    <div class="fc-actions" id="fcact" style="display:none">
      <button class="fc-bad" onclick="nextFC(false)">😕 No la sabía</button>
      <button class="fc-good" onclick="nextFC(true)">😊 La sabía</button>
    </div>
    <div style="text-align:center;margin-top:14px">
      <button class="btn btn-sm" onclick="PS=null;renderPractice(document.getElementById('page-body'))">← Salir</button>
    </div></div>`;
}
function startFC(mode){const all=DB.classes.flatMap(c=>c.vocab||[]);PS={view:'fc',mode,cards:[...all].sort(()=>Math.random()-.5),idx:0,score:0};renderPractice(document.getElementById('page-body'));}
function flipFC(){document.getElementById('fca').style.display='block';const p=document.getElementById('fcp');if(p)p.style.display='block';document.getElementById('fcc').querySelector('.fc-tap').style.display='none';document.getElementById('fcact').style.display='flex';}
function nextFC(k){if(k)PS.score++;PS.idx++;renderPractice(document.getElementById('page-body'));}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
function renderQuiz(el) {
  const all=DB.classes.flatMap(c=>c.vocab||[]);
  if(all.length<4){el.innerHTML=`<div class="empty"><div class="empty-icon">🎯</div><h3>Necesitás al menos 4 palabras</h3></div>`;return;}
  if(!PS||PS.view!=='quiz'){
    el.innerHTML=`<div class="practice-wrap"><p style="font-size:13px;color:var(--muted);margin-bottom:20px">Quiz con ${all.length} palabras. 4 opciones, con puntaje al final.</p>
      <div style="text-align:center"><button class="btn btn-lime" onclick="startQuiz()">Empezar quiz</button></div></div>`;return;
  }
  const{cards,idx,score}=PS;
  if(idx>=cards.length){
    const pct=Math.round((score/cards.length)*100);
    el.innerHTML=`<div class="practice-wrap"><div class="score-box"><div class="score-big">${pct}%</div><h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;margin:12px 0 6px">${pct>=70?'¡Muy bien!':'Seguí practicando'}</h3><p class="score-sub">Acertaste ${score} de ${cards.length}</p>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:22px">
        <button class="btn" onclick="PS=null;renderQuiz(document.getElementById('page-body'))">← Volver</button>
        <button class="btn btn-lime" onclick="startQuiz()">Repetir</button>
      </div></div></div>`;return;
  }
  const card=cards[idx];
  const dist=all.filter(v=>v!==card).sort(()=>Math.random()-.5).slice(0,3);
  const opts=[...dist.map(v=>v.es),card.es].sort(()=>Math.random()-.5);
  el.innerHTML=`<div class="practice-wrap">
    <div class="prog-bar"><div class="prog-fill" style="width:${(idx/cards.length)*100}%"></div></div>
    <p style="font-size:12px;color:var(--muted);text-align:center;margin-bottom:16px">${idx+1} de ${cards.length} · Puntaje: ${score}</p>
    <div class="quiz-card">
      <div class="quiz-q">¿Qué significa <strong>"${card.en}"</strong>?</div>
      <div class="quiz-opts">${opts.map(o=>`<button class="quiz-opt" onclick="answerQ(this,'${esc(o)}','${esc(card.es)}')">${o}</button>`).join('')}</div>
    </div></div>`;
}
function startQuiz(){const all=DB.classes.flatMap(c=>c.vocab||[]);PS={view:'quiz',cards:[...all].sort(()=>Math.random()-.5),idx:0,score:0};renderQuiz(document.getElementById('page-body'));}
function answerQ(btn,chosen,correct){
  document.querySelectorAll('.quiz-opt').forEach(b=>{b.classList.add('disabled');b.onclick=null;if(b.textContent.trim()===correct)b.classList.add('correct');});
  if(chosen===correct){btn.classList.add('correct');PS.score++;}else btn.classList.add('wrong');
  setTimeout(()=>{PS.idx++;renderQuiz(document.getElementById('page-body'));},1300);
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
function openModal(){document.getElementById('inp-date').value=new Date().toISOString().split('T')[0];document.getElementById('inp-chat').value='';document.getElementById('modal-bg').classList.add('open');}
function closeModal(){document.getElementById('modal-bg').classList.remove('open');}

async function processClass() {
  const date=document.getElementById('inp-date').value;
  const chat=document.getElementById('inp-chat').value.trim();
  if(!date||!chat){toast('Completá la fecha y el chat');return;}
  
  // Check API key
  const apiKey = localStorage.getItem('anthropic_key') || '';
  if (!apiKey) {
    const key = prompt('Para procesar clases automáticamente necesitás tu API key de Anthropic.\nObtené una gratis en console.anthropic.com\n\nPegá tu API key acá:');
    if (!key) { toast('Cancelado. Sin API key no se puede procesar automáticamente.'); return; }
    localStorage.setItem('anthropic_key', key.trim());
    window.ANTHROPIC_KEY = key.trim();
  } else {
    window.ANTHROPIC_KEY = apiKey;
  }
  
  const btn=document.getElementById('btn-process');
  btn.textContent='⏳ Procesando con IA...';btn.disabled=true;
  try {
    const parsed=await callClaude(chat);
    const nc={id:Date.now(),date,titulo:parsed.titulo||'Clase',vocab:parsed.vocab||[],gramatica:parsed.gramatica||[],correcciones:parsed.correcciones||[],frases:parsed.frases||[]};
    DB.classes.push(nc);dbSave(DB);closeModal();toast('✓ Clase guardada correctamente');render();
  } catch(e){
    console.error(e);
    toast('Error al procesar. Verificá tu API key en Configuración.');
  }
  btn.textContent='✨ Procesar y guardar';btn.disabled=false;
}

async function callClaude(chatText) {
  const prompt=`Analizá este chat de clase de inglés y extraé el contenido estructurado.
Respondé SOLO con JSON válido, sin texto extra, sin backticks, sin markdown.
Formato exacto:
{"titulo":"tema principal en pocas palabras","vocab":[{"en":"palabra en inglés","pron":"pronunciación IPA o vacío","es":"traducción al español"}],"gramatica":[{"titulo":"nombre de la regla","formula":"la estructura gramatical","ejemplos":["ejemplo 1","ejemplo 2"]}],"correcciones":[{"wrong":"lo que dijo mal el alumno","right":"cómo se dice correctamente"}],"frases":[{"en":"frase en inglés","es":"traducción"}]}
Si algo no aparece, poné el array vacío []. Incluí pronunciación IPA cuando sea posible.
CHAT:\n${chatText}`;
  
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": window.ANTHROPIC_KEY || "",
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        messages: [{role:"user", content: prompt}]
      })
    });
    if (!res.ok) throw new Error('API error: ' + res.status);
    const data = await res.json();
    const text = (data.content||[]).map(b=>b.text||'').join('');
    const clean = text.replace(/```json|```/g,'').trim();
    return JSON.parse(clean);
  } catch(e) {
    console.error('Claude API error:', e);
    throw e;
  }
}

// ─── UTILS ────────────────────────────────────────────────────────────────────
function fmtD(d){const[y,m,day]=d.split('-');const ms=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];return `${parseInt(day)} ${ms[parseInt(m)-1]} ${y}`;}
function esc(s){return(s||'').replace(/'/g,"\\'");}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2800);}
