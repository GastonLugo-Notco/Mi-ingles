// ─── GUÍAS COMPLETAS (reemplaza GUIDES en data.js) ───────────────────────────
const GUIDES = [
  {
    id:"rutina10", emoji:"⏱️", title:"Rutina de 10 minutos por día", source:"Bono 2 — La Rutina de 10 Minutos al Día",
    desc:"Método realista para aprender inglés sin tener tiempo. Consistencia diaria supera a las sesiones largas.",
    sections:[
      {title:"Por qué 10 minutos funciona",items:[
        {label:"La ciencia detrás",text:"La consistencia diaria supera ampliamente a las sesiones largas y esporádicas. El cerebro consolida el aprendizaje durante el sueño y necesita exposición frecuente."},
        {label:"El efecto acumulativo",text:"10 minutos diarios durante un año = más de 60 horas de práctica enfocada. Equivale a un curso intensivo completo, distribuido para que el cerebro absorba cada lección."},
        {label:"Regla de oro",text:"No negociar los 10 minutos. Sin importar qué tan ocupado estés, estos 10 minutos son innegociables. Son tu inversión diaria en tu futuro."}
      ]},
      {title:"La Fórmula 3-3-2-2 (estructura fija diaria)",items:[
        {label:"0-3 min → INPUT (Escuchar)",text:"Escuchar un audio, canción o diálogo corto sin interrupciones. Identificar palabras conocidas. Opciones: canción (coro/verso), audio de guía, diálogo corto, video de YouTube/TikTok. No importa entender todo."},
        {label:"3-6 min → REPETICIÓN ACTIVA (Shadowing)",text:"Repetir en voz alta las frases identificadas imitando ritmo y entonación. Repite la misma frase al menos 5 veces antes de pasar a la siguiente. Grábate una vez por semana para comparar."},
        {label:"6-8 min → PRODUCCIÓN (Hablar)",text:"Crear 3 frases propias usando las palabras nuevas. Responder una pregunta guía en voz alta. Lunes: 'What did you do this morning?' / Martes: 'What do you like about your job?' / Miércoles: 'Describe your home in 3 sentences.'"},
        {label:"8-10 min → REVISIÓN RÁPIDA",text:"Releer las frases del día. Escuchar el audio brevemente. Marcar el checklist: ☑ Escuché ☑ Repetí en voz alta ☑ Creé frases propias ☑ Revisé."}
      ]},
      {title:"Rutina semanal inteligente",items:[
        {label:"Lunes-Viernes",text:"Rutina base 3-3-2-2. Cada día con un enfoque diferente: frases nuevas, diálogo corto, video corto, canción con shadowing, repaso semanal."},
        {label:"Sábado — Inmersión ligera (20-30 min opcionales)",text:"Ver un episodio corto con subtítulos en inglés (Friends, The Office). O escuchar una playlist en inglés mientras cocinás/ejercitás. O leer 5 páginas de la guía."},
        {label:"Domingo — Revisión semanal",text:"Repetir frases de la semana en voz alta. Grabar audio de 1-2 minutos. Comparar con el audio de la semana anterior. Preparar material para el lunes."}
      ]},
      {title:"Cómo usar música para aprender",items:[
        {label:"El proceso de 5 pasos",text:"1) Elegir canción · 2) Escuchar sin letra · 3) Leer la letra mientras escuchás · 4) Subrayar frases útiles · 5) Usarlas en conversación."},
        {label:"Frases extraíbles de canciones famosas",text:"'I'm in love with the shape of you' → adaptás: 'I'm in love with this city / this idea' / 'Never mind, I'll find someone like you' → adaptás: 'Never mind, let's try something else' / 'I've been losing sleep' → 'I've been losing sleep thinking about this project'"},
        {label:"Consejo clave",text:"Elegí frases que puedas adaptar a tu vida real. Una frase que usás en conversación se memoriza 10 veces más rápido que una que solo leés."}
      ]},
      {title:"Plan B — Días extremadamente ocupados",items:[
        {label:"La rutina mínima de 5 minutos",text:"0-2 min: Escuchar una canción en inglés con atención activa. 2-4 min: Repetir el coro o una frase 5 veces en voz alta. 4-5 min: Decir 2 frases propias en inglés en voz alta."},
        {label:"Regla de oro del Plan B",text:"Nunca usar el Plan B dos días seguidos. Es un recurso de emergencia. Si lo usás el lunes, el martes volvés a la rutina completa sin negociación."},
        {label:"Por qué no saltearse días",text:"Saltearse un día rompe el ciclo de consolidación neurológica. Dos días seguidos y el cerebro empieza a 'olvidar' las conexiones recién formadas."}
      ]},
      {title:"Errores comunes que debes evitar",items:[
        {label:"Solo leer, nunca hablar",text:"Leer en inglés es útil, pero no desarrolla la habilidad oral. Hablar en voz alta es obligatorio en cada sesión, sin excepciones."},
        {label:"No hablar en voz alta",text:"Repetir mentalmente NO activa los mismos circuitos cerebrales. El movimiento físico de tu boca y la escucha de tu propia voz son componentes esenciales del aprendizaje motor del idioma."},
        {label:"No repetir suficiente",text:"Una frase nueva necesita entre 10 y 20 repeticiones en contextos diferentes para quedar en la memoria a largo plazo."},
        {label:"Buscar la perfección antes de hablar",text:"La fluidez se desarrolla hablando, no estudiando. Habla desde el día uno, aunque cometas errores. Los errores son el camino, no el obstáculo."}
      ]}
    ]
  },
  {
    id:"pronunciacion", emoji:"🗣️", title:"Guía Maestra de Pronunciación", source:"Bono 3 — De principiante a avanzado en 60 días",
    desc:"5 módulos completos: sonidos esenciales, diptongos, ritmo, acento, y entrenamiento intensivo con trabalenguas.",
    sections:[
      {title:"Módulo 1 — Principios fundamentales",items:[
        {label:"El inglés no se pronuncia como se escribe",text:"El sistema ortográfico inglés refleja pronunciaciones históricas que cambiaron. La letra 'a' puede sonar como en cat /æ/, cake /eɪ/, car /ɑː/ o about /ə/. Aceptá esta realidad y enfocate en los sonidos, no en las letras."},
        {label:"Ritmo acentual vs. silábico",text:"El español tiene ritmo silábico (cada sílaba igual). El inglés tiene ritmo acentual: algunas sílabas son largas y fuertes, otras se reducen drásticamente. No basta pronunciar correctamente cada sonido — también debés saber cuáles sílabas enfatizar."},
        {label:"Sonidos que no existen en español",text:"'th' de think /θ/ · 'th' de this /ð/ · 'æ' de cat · 'r' americana (lengua hacia atrás sin tocar el paladar) · 'h' aspirada (soplo de aire suave, no 'j' española)"}
      ]},
      {title:"Vocales cortas vs largas (crítico)",items:[
        {label:"ship /ʃɪp/ vs sheep /ʃiːp/",text:"Vocal CORTA /ɪ/: relajada, labios sin tensión. LARGA /iː/: labios estirados como si sonrieras. Practica alternando: ship-sheep-ship-sheep hasta sentir la diferencia muscular."},
        {label:"live /lɪv/ vs leave /liːv/",text:"Vocal CORTA /ɪ/: rápida. LARGA /iː/: sostenida. 'Live' = vivir. 'Leave' = irse. Error muy frecuente."},
        {label:"full /fʊl/ vs fool /fuːl/",text:"Vocal CORTA /ʊ/: labios redondeados pero relajados. LARGA /uː/: más pronunciada y sostenida."},
        {label:"Instrucción de práctica",text:"Repetí cada par mínimo 10 veces en voz alta grabándote. La clave está en la DURACIÓN y la TENSIÓN MUSCULAR, no solo en el sonido."}
      ]},
      {title:"Consonantes problemáticas para hispanohablantes",items:[
        {label:"th sorda /θ/ — think, three, bath",text:"Error común: pronunciar como 't' o 's'. Corrección: coloca la PUNTA DE LA LENGUA ENTRE LOS DIENTES superiores e inferiores y soplá aire SIN vibrar las cuerdas vocales. Práctica: 'th-th-think'"},
        {label:"th sonora /ð/ — this, the, that",text:"Misma posición que /θ/ pero VIBRANDO las cuerdas vocales. Sentí la vibración en la lengua. Práctica: 'th-th-this'. Usá un espejo para ver la posición de la lengua."},
        {label:"v /v/ — van, very, love",text:"Error: pronunciar como 'b'. Corrección: MORDÉ SUAVEMENTE el labio inferior con los dientes superiores y vibrá. No cerrés los labios."},
        {label:"r inglesa /r/ — red, right, car",text:"Error: usar la 'r' española vibrante. Corrección: doblá la lengua hacia atrás SIN TOCAR el paladar. Los labios se redondean ligeramente."}
      ]},
      {title:"Módulo 2 — Diptongos principales",items:[
        {label:"/eɪ/ — day, cake, rain",text:"Comenzá con /e/ (como en 'mesa') y deslizá hacia /ɪ/. Los labios se estiran al final."},
        {label:"/aɪ/ — my, time, fly",text:"Comenzá con boca muy abierta /a/ y cerrá hacia /ɪ/. Similar al diptongo 'ai' en español."},
        {label:"/ɔɪ/ — boy, coin, noise",text:"Comenzá con /ɔ/ (labios redondeados) y deslizá hacia /ɪ/. Similar al 'oi' en 'hoy'."},
        {label:"/aʊ/ — now, house, out",text:"Comenzá con boca abierta /a/ y redoneá los labios hacia /ʊ/."},
        {label:"/oʊ/ — go, home, know",text:"Comenzá con /o/ y deslizá hacia /ʊ/. Los labios se redondean progresivamente."},
        {label:"Instrucción",text:"Practicá cada diptongo exagerando el movimiento de la boca. Grábate diciendo: day-my-boy-now-go-here-there. Escuchá si el deslizamiento entre los dos sonidos es fluido."}
      ]},
      {title:"Terminaciones -ed y -s (errores muy frecuentes)",items:[
        {label:"Terminación -ed: /t/ /d/ /ɪd/",text:"/t/ después de consonante SORDA (p,k,f,s): worked /wɜːrkt/, laughed /læft/ · /d/ después de consonante SONORA o vocal: played /pleɪd/, called /kɔːld/ · /ɪd/ después de /t/ o /d/: wanted /ˈwɒntɪd/, needed /ˈniːdɪd/"},
        {label:"Terminación -s: /s/ /z/ /ɪz/",text:"/s/ después de consonante SORDA (p,t,k,f,θ): cats /kæts/, books /bʊks/ · /z/ después de consonante SONORA o vocal: dogs /dɒgz/, cars /kɑːrz/ · /ɪz/ después de sibilantes (s,z,sh,ch,j): buses /ˈbʌsɪz/, watches /ˈwɒtʃɪz/"},
        {label:"Práctica",text:"Lee en voz alta: worked (t), played (d), wanted (ɪd) / cats (s), dogs (z), buses (ɪz). Repetí cada grupo 5 veces sin parar hasta que salga automático."}
      ]},
      {title:"Módulo 3 — Ritmo, énfasis y habla conectada",items:[
        {label:"Word stress — acento en la palabra",text:"Algunas palabras CAMBIAN DE SIGNIFICADO según dónde va el acento: REcord (sustantivo: disco) vs reCORD (verbo: grabar) / PREsent (regalo) vs preSENT (presentar) / PERmit (documento) vs perMIT (permitir). ¡El acento cambia todo!"},
        {label:"Sentence stress — énfasis en la oración",text:"Las palabras de CONTENIDO (sustantivos, verbos, adjetivos, adverbios) reciben énfasis. Las de FUNCIÓN (artículos, preposiciones, pronombres, auxiliares) se reducen. 'I WANT to BUY a NEW CAR' — 'to' y 'a' casi desaparecen."},
        {label:"Connected speech — habla conectada (formas reducidas)",text:"'want to' → 'wanna' /ˈwɒnə/ · 'going to' → 'gonna' /ˈgɒnə/ · 'kind of' → 'kinda' /ˈkaɪndə/ · 'did you' → 'didja' /ˈdɪdʒə/ · 'have to' → 'hafta' /ˈhæftə/. NOTA: Apropiadas en contexto informal. En escrito formal, siempre usá las formas completas."}
      ]},
      {title:"Módulo 4 — Palabras difíciles y diferencias UK vs US",items:[
        {label:"Palabras que casi todos pronuncian mal",text:"schedule: /ˈʃedjuːl/ (UK) / /ˈskedjuːl/ (US) · though /ðoʊ/ (la 'gh' es muda, rima con 'go') · tough /tʌf/ (la 'gh' suena /f/, rima con 'stuff') · comfortable /ˈkʌmftəbəl/ (3 sílabas, no 4) · entrepreneur /ˌɒntrəprəˈnɜːr/ · business /ˈbɪznɪs/ (la 'u' suena /ɪ/) · colonel /ˈkɜːrnəl/ (se pronuncia 'kernel') · debt /det/ (la 'b' es muda) · subtle /ˈsʌtəl/ (la 'b' es muda)"},
        {label:"UK vs US — diferencias principales",text:"schedule: UK /ˈʃedjuːl/ vs US /ˈskedjuːl/ · La 'r' post-vocálica: UK no la pronuncia, US sí (car: UK /kɑː/ vs US /kɑːr/) · T intervocálica: UK clara vs US suave como 'd' (water: UK /ˈwɔːtə/ vs US /ˈwɔːɾər/) · Recomendación: elegí una variedad y sé consistente."}
      ]},
      {title:"Módulo 5 — Trabalenguas fonéticos",items:[
        {label:"She sells seashells by the seashore.",text:"Objetivo: contraste /ʃ/ (sh) vs /s/. Fundamental para hispanohablantes que confunden estos sonidos."},
        {label:"The thirty-three thieves thought that they thrilled the throne throughout Thursday.",text:"Objetivo: sonido /θ/ (th sorda). El más importante para hispanohablantes."},
        {label:"Whether the weather be fine or whether the weather be not.",text:"Objetivo: contraste /θ/ (th sorda) vs /ð/ (th sonora). La diferencia entre 'think' y 'this'."},
        {label:"Red lorry, yellow lorry.",text:"Objetivo: sonido /r/ inglés en diferentes posiciones. Muy difícil para hispanohablantes."},
        {label:"Rubber baby buggy bumpers.",text:"Objetivo: consonante /b/ y vocal /ʌ/. Práctica de la vocal central del inglés."},
        {label:"Instrucción de práctica",text:"Elegí 2 trabalenguas por semana. Practicá cada uno 3 veces lento, 3 veces a velocidad media y 3 veces rápido. Grábate en la versión rápida. El objetivo es la PRECISIÓN a cualquier velocidad, no la velocidad."}
      ]}
    ]
  },
  {
    id:"frases", emoji:"💬", title:"100+ Frases para Conversaciones Reales", source:"Bono 4 — Por situación con pronunciación IPA",
    desc:"Frases con IPA completo organizadas por situación: trabajo, gimnasio, restaurante, médico, vecinos, transporte y más.",
    sections:[
      {title:"En el trabajo",items:[
        {label:"Can you help me with this? /kæn juː help miː wɪð ðɪs/",text:"¿Podés ayudarme con esto?"},
        {label:"I'll send you the email. /aɪl send juː ðə ˈiːmeɪl/",text:"Te voy a enviar el correo."},
        {label:"Let's schedule a meeting. /lets ˈskedjuːl ə ˈmiːtɪŋ/",text:"Programemos una reunión."},
        {label:"I'm working on it. /aɪm ˈwɜːrkɪŋ ɒn ɪt/",text:"Estoy trabajando en eso."},
        {label:"I'll get back to you. /aɪl get bæk tuː juː/",text:"Te respondo luego."},
        {label:"When is the deadline? /wen ɪz ðə ˈdedlaɪn/",text:"¿Cuándo es la fecha límite?"},
        {label:"I need more time. /aɪ niːd mɔːr taɪm/",text:"Necesito más tiempo."},
        {label:"I'll take care of it. /aɪl teɪk keər ɒv ɪt/",text:"Yo me encargo."},
        {label:"That makes sense. /ðæt meɪks sens/",text:"Tiene sentido."},
        {label:"Could you repeat that, please? /kʊd juː rɪˈpiːt ðæt pliːz/",text:"¿Podrías repetir eso, por favor?"}
      ]},
      {title:"En el restaurante",items:[
        {label:"Can I see the menu? /kæn aɪ siː ðə ˈmenjuː/",text:"¿Puedo ver el menú?"},
        {label:"I'd like to order, please. /aɪd laɪk tuː ˈɔːrdər pliːz/",text:"Me gustaría ordenar, por favor."},
        {label:"What do you recommend? /wɒt duː juː ˌrekəˈmend/",text:"¿Qué recomienda?"},
        {label:"Is this dish spicy? /ɪz ðɪs dɪʃ ˈspaɪsi/",text:"¿Este plato es picante?"},
        {label:"I'm allergic to nuts. /aɪm əˈlɜːrdʒɪk tuː nʌts/",text:"Soy alérgico/a a los frutos secos."},
        {label:"Can I have the bill? /kæn aɪ hæv ðə bɪl/",text:"¿Me traés la cuenta?"},
        {label:"Everything was delicious! /ˈevriθɪŋ wɒz dɪˈlɪʃəs/",text:"¡Todo estuvo delicioso!"},
        {label:"Could we get separate checks? /kʊd wiː get ˈsepərɪt tʃeks/",text:"¿Podemos pagar por separado?"},
        {label:"This is not what I ordered. /ðɪs ɪz nɒt wɒt aɪ ˈɔːrdərd/",text:"Esto no es lo que pedí."}
      ]},
      {title:"En el gimnasio",items:[
        {label:"Is this machine free? /ɪz ðɪs məˈʃiːn friː/",text:"¿Esta máquina está libre?"},
        {label:"How many sets are you doing? /haʊ ˈmeni sets ɑːr juː ˈduːɪŋ/",text:"¿Cuántas series vas a hacer?"},
        {label:"Can I work in with you? /kæn aɪ wɜːrk ɪn wɪð juː/",text:"¿Puedo alternar el ejercicio con vos?"},
        {label:"What's your workout routine? /wɒts jɔːr ˈwɜːrkaʊt ruːˈtiːn/",text:"¿Cuál es tu rutina de entrenamiento?"},
        {label:"I come here three times a week. /aɪ kʌm hɪər θriː taɪmz ə wiːk/",text:"Vengo aquí tres veces a la semana."},
        {label:"Keep going, you've got this! /kiːp ˈgoʊɪŋ juːv gɒt ðɪs/",text:"¡Seguí, vos podés!"}
      ]},
      {title:"En el médico",items:[
        {label:"I don't feel well. /aɪ dəʊnt fiːl wel/",text:"No me siento bien."},
        {label:"I have a headache. /aɪ hæv ə ˈhedeɪk/",text:"Tengo dolor de cabeza."},
        {label:"It hurts here. /ɪt hɜːrts hɪər/",text:"Me duele aquí."},
        {label:"I've been feeling like this for two days. /aɪv biːn ˈfiːlɪŋ laɪk ðɪs fər tuː deɪz/",text:"Me siento así hace dos días."},
        {label:"I'm allergic to penicillin. /aɪm əˈlɜːrdʒɪk tuː ˌpenɪˈsɪlɪn/",text:"Soy alérgico/a a la penicilina."},
        {label:"Is it serious? /ɪz ɪt ˈsɪəriəs/",text:"¿Es grave?"},
        {label:"Where is the nearest pharmacy? /weər ɪz ðə ˈnɪərɪst ˈfɑːrməsi/",text:"¿Dónde está la farmacia más cercana?"}
      ]},
      {title:"Haciendo nuevos amigos",items:[
        {label:"Nice to meet you! /naɪs tuː miːt juː/",text:"¡Mucho gusto!"},
        {label:"What do you do? /wɒt duː juː duː/",text:"¿A qué te dedicás?"},
        {label:"Where are you from originally? /weər ɑːr juː frɒm əˈrɪdʒɪnəli/",text:"¿De dónde sos originalmente?"},
        {label:"I totally agree with you. /aɪ ˈtəʊtəli əˈgriː wɪð juː/",text:"Estoy totalmente de acuerdo con vos."},
        {label:"We should hang out sometime. /wiː ʃʊd hæŋ aʊt ˈsʌmtaɪm/",text:"Deberíamos salir algún día."},
        {label:"I'm glad we met! /aɪm glæd wiː met/",text:"¡Me alegra que nos hayamos conocido!"}
      ]},
      {title:"Situaciones cotidianas",items:[
        {label:"I'm running late. /aɪm ˈrʌnɪŋ leɪt/",text:"Voy con retraso."},
        {label:"Never mind. /ˈnevər maɪnd/",text:"No importa / Olvidalo."},
        {label:"Could you say that more slowly? /kʊd juː seɪ ðæt mɔːr ˈsləʊli/",text:"¿Podrías decirlo más despacio?"},
        {label:"No worries! /nəʊ ˈwʌriz/",text:"¡Sin problema!"},
        {label:"I'll be right back. /aɪl biː raɪt bæk/",text:"Ahora vuelvo."},
        {label:"Let me think about it. /let miː θɪŋk əˈbaʊt ɪt/",text:"Déjame pensarlo."},
        {label:"I know what you mean. /aɪ nəʊ wɒt juː miːn/",text:"Entiendo lo que querés decir."}
      ]},
      {title:"En el transporte público",items:[
        {label:"Does this bus go downtown? /dʌz ðɪs bʌs goʊ ˈdaʊntaʊn/",text:"¿Este autobús va al centro?"},
        {label:"How long does it take? /haʊ lɒŋ dʌz ɪt teɪk/",text:"¿Cuánto tiempo tarda?"},
        {label:"Where do I get off? /weər duː aɪ get ɒf/",text:"¿Dónde me bajo?"},
        {label:"Is this seat taken? /ɪz ðɪs siːt ˈteɪkən/",text:"¿Está ocupado este asiento?"},
        {label:"I'm lost. Can you help me? /aɪm lɒst kæn juː help miː/",text:"Estoy perdido/a. ¿Puede ayudarme?"}
      ]}
    ]
  },
  {
    id:"miedo", emoji:"🎤", title:"Perdé el miedo a hablar inglés", source:"Bono 5 — Método práctico con entrenamiento de 7 días",
    desc:"Las 5 raíces del miedo, técnicas comprobadas de desensibilización y un plan progresivo de 30 días.",
    sections:[
      {title:"Las 5 raíces del miedo",items:[
        {label:"1. Miedo a equivocarse",text:"'Si digo algo mal, la gente pensará que soy ignorante.' La realidad: nadie deja de comunicarse por un error gramatical. Los errores SON el método de aprendizaje."},
        {label:"2. Miedo a la burla",text:"'Se van a reír de mi pronunciación.' En la mayoría de contextos reales, las personas valoran el esfuerzo. La burla existe casi solo en nuestra imaginación."},
        {label:"3. Miedo a no sonar perfecto",text:"'Quiero sonar como un nativo antes de hablar.' Este estándar imposible se convierte en una excusa permanente para no empezar."},
        {label:"4. Comparación con nativos",text:"Compararte con alguien que aprendió el idioma desde que nació es una trampa. No es una comparación justa ni útil."},
        {label:"5. Parálisis por sobrepensar",text:"'Antes de hablar, traduzco mentalmente, reviso la gramática y... el momento pasa.' Pensar demasiado es el enemigo directo de la comunicación fluida."}
      ]},
      {title:"La verdad sobre la fluidez",items:[
        {label:"El mito más caro",text:"'Cuando mi inglés sea mejor, empezaré a hablar.' Esta frase ha mantenido a millones de personas en silencio durante años."},
        {label:"La realidad",text:"La fluidez no llega ANTES de hablar. Llega COMO CONSECUENCIA de hablar. Cada conversación que evitás es un entrenamiento que perdés."},
        {label:"Principio fundamental",text:"La fluidez no elimina el miedo. La EXPOSICIÓN sí."}
      ]},
      {title:"La escalera del miedo — 5 niveles",items:[
        {label:"Nivel 1: Hablar solo/a (diario 5 min)",text:"Describí en voz alta lo que ves en tu habitación: 'This is my desk. There is a lamp...' Sin audiencia, sin presión. Objetivo: eliminar el silencio interno."},
        {label:"Nivel 2: Grabarte (3 veces por semana)",text:"Grabarte 1 minuto describiendo tu día. Escucharte después. Notá UNA cosa que hiciste bien, no la lista de errores."},
        {label:"Nivel 3: Enviar audio a alguien (2 veces por semana)",text:"Mandar un mensaje de voz en inglés a un amigo. 'Hey! Just practicing my English today.' El objetivo es enviarlo, no que respondan en inglés."},
        {label:"Nivel 4: Conversación corta planificada (1 vez por semana)",text:"Acordar con alguien hablar en inglés 10 minutos sobre un tema elegido de antemano."},
        {label:"Nivel 5: Conversación espontánea",text:"Responder en inglés sin preparación previa. En clase, en el trabajo, en una tienda."}
      ]},
      {title:"Entrenamiento de 7 días",items:[
        {label:"Día 1 — Leer 10 frases en voz alta",text:"Lee cada frase con volumen normal, con pausa de 3 segundos: 'I don't need to be perfect to communicate.' / 'Every mistake helps me improve.' / 'My accent is part of who I am.' / 'I choose to speak instead of staying silent.'"},
        {label:"Día 2 — Grabarte 1 minuto",text:"Tema: 'Describe tu rutina de la mañana en inglés.' Frases de apoyo: 'I wake up at _____.' / 'Then I _____.' / 'After that I _____.' Usá la grabadora del celular. No pares el audio aunque te equivoques."},
        {label:"Día 3 — Repetir el audio original",text:"Escuchá el audio del Día 2. Luego grabate de nuevo con el mismo tema. Objetivo: más FLUIDEZ que ayer, no más perfección."},
        {label:"Día 4 — Mini monólogo (2 minutos)",text:"Tema: 'Hablá sobre por qué estás aprendiendo inglés, qué situaciones te generan más miedo y qué esperás lograr.' Hablar libremente durante 2 minutos sin pausar el audio."},
        {label:"Día 5 — Simular una conversación",text:"Grabate haciendo DOS roles en una situación de tienda: Persona A pregunta algo, Persona B responde. Hacé los dos roles vos. Pausá 3 segundos entre turnos."},
        {label:"Día 6 — Enviar audio a alguien real",text:"Mensaje sugerido: 'Hey! I'm practicing my English. I wanted to send you a message in English today. Hope you're having a great day!' Enviarlo SIN escucharlo antes."},
        {label:"Día 7 — Conversación real de 3 minutos",text:"Con una persona real: en persona, videollamada o apps como Tandem/HelloTalk. Tema libre. Si te bloqueás: 'Sorry, let me think for a second.' o 'How do you say _____ in English?'"}
      ]},
      {title:"Frases de emergencia para no quedarte en blanco",items:[
        {label:"No encontrás la palabra",text:"'I don't know the exact word, but it's like...'"},
        {label:"Necesitás tiempo para pensar",text:"'Let me think about that for a second...'"},
        {label:"No entendiste",text:"'Sorry, could you repeat that more slowly?'"},
        {label:"Querés confirmar",text:"'So you mean...?' o 'If I understand correctly...'"},
        {label:"Te bloqueaste",text:"'Anyway, what I was trying to say is...'"},
        {label:"Cometiste un error",text:"'Well, something like that — you know what I mean.'"},
        {label:"Querés ganar tiempo",text:"'That's a great question. I think...'"}
      ]},
      {title:"Frases bloqueantes → reemplazos",items:[
        {label:"❌ 'Voy a sonar mal.'",text:"✅ 'I am going to practice. Sounding imperfect is part of learning.'"},
        {label:"❌ 'No estoy listo/a todavía.'",text:"✅ 'Practicing IS being ready. There is no other way to prepare.'"},
        {label:"❌ 'Me van a juzgar.'",text:"✅ 'Most people respect the effort of speaking another language.'"},
        {label:"❌ 'Los nativos hablan demasiado rápido.'",text:"✅ 'I can ask them to repeat. I have tools to handle this.'"},
        {label:"❌ 'Nunca voy a hablar como ellos.'",text:"✅ 'I don't need to speak like them. I need to communicate. And I can do that.'"},
        {label:"Instrucción",text:"Decí cada par en voz alta 3 veces: primero la frase bloqueante, luego su reemplazo. Esto construye el nuevo patrón neuronal."}
      ]}
    ]
  },
  {
    id:"entrevistas", emoji:"👔", title:"Inglés para entrevistas laborales", source:"Bono 6 — Manual de preparación profesional internacional",
    desc:"Estructura STAR, preguntas clásicas con respuestas modelo, pronunciación profesional y simulaciones de básico a corporativo.",
    sections:[
      {title:"Cómo funcionan las entrevistas en inglés",items:[
        {label:"Estructura típica",text:"1. Bienvenida (small talk) → 2. Preguntas sobre experiencia → 3. Preguntas de comportamiento ('Tell me about a time when...') → 4. Preguntas situacionales ('What would you do if...') → 5. Cierre y preguntas del candidato."},
        {label:"Diferencias culturales clave",text:"En entrevistas anglosajonas: se espera que hablés de tus logros con SEGURIDAD (no es arrogancia). Las preguntas al entrevistador son muy valoradas. Las respuestas deben ser estructuradas (STAR). El contacto visual es importante."},
        {label:"Clave cultural",text:"Decir 'I led a team of 10 people' o 'I increased sales by 30%' no es arrogancia — es exactamente lo que buscan."}
      ]},
      {title:"'Tell me about yourself' — estructura y ejemplos",items:[
        {label:"La fórmula de 4 partes (60-90 segundos)",text:"1. PRESENTE: 'Currently, I work as a...' · 2. EXPERIENCIA: 'I have X years of experience in...' · 3. LOGROS: 'In my last role, I increased/reduced/managed...' · 4. OBJETIVO: 'I'm excited about this opportunity because...'"},
        {label:"Pronunciación de frases clave",text:"currently /ˈkʌrəntli/ · experience /ɪkˈspɪəriəns/ · opportunity /ˌɒpəˈtjuːnɪti/ · excited /ɪkˈsaɪtɪd/"},
        {label:"Ejemplo — perfil emprendedor/gastronómico",text:"'Currently, I lead a gastronomic project and organize private events. I have 8 years of experience in the food industry and project management. In my project, I have successfully managed client relationships and event logistics. I'm excited about this opportunity because I want to bring my entrepreneurial skills to a structured team environment.'"},
        {label:"Regla de oro",text:"Tu presentación debe sonar como algo que DECÍS — no como algo que LEÉS. Practicala hasta que salga sin mirar el papel."}
      ]},
      {title:"Las 8 preguntas clásicas",items:[
        {label:"Why do you want this job?",text:"Estructura: 1) Algo específico de la empresa → 2) Conexión con tu experiencia → 3) Valor que podés aportar. NUNCA respuesta genérica tipo 'porque quiero crecer'."},
        {label:"Why should we hire you?",text:"Tu propuesta de valor única. Habilidad más relevante + resultado concreto que lo prueba + lo que harás por ellos."},
        {label:"What are your strengths?",text:"Fortaleza → Ejemplo específico → Resultado. NUNCA solo 'I am very responsible' sin demostración."},
        {label:"What are your weaknesses?",text:"Debilidad real (no crítica para el rol) → Lo que estás haciendo para mejorar. NUNCA 'I have no weaknesses'."},
        {label:"Where do you see yourself in 5 years?",text:"Ambición alineada con crecer DENTRO de la empresa. Respuestas vagas o demasiado ambiciosas son señales negativas."},
        {label:"Why did you leave your last job?",text:"NUNCA hablar mal del empleador anterior. Respuesta positiva orientada al futuro: 'I had achieved everything I set out to accomplish there. I'm ready for a new challenge.'"},
        {label:"Can you work under pressure?",text:"'Yes, I can' NO es suficiente. Necesitás un ejemplo concreto usando el método STAR."},
        {label:"Do you have any questions for us?",text:"NUNCA decir 'No, I'm good.' Preparar 3 preguntas: sobre el rol, el equipo y la empresa. Ej: 'What does success look like in this role in the first 90 days?'"}
      ]},
      {title:"Método STAR — estructura para respuestas",items:[
        {label:"S — Situation (15 seg)",text:"Contexto breve. 'In my previous role...' / 'When I was working at...' / 'Last year, when...'"},
        {label:"T — Task (15 seg)",text:"Tu responsabilidad específica. 'My task was to...' / 'I was in charge of...' / 'My responsibility was to...'"},
        {label:"A — Action (45 seg — LA MÁS IMPORTANTE)",text:"Las acciones que VOS tomaste. Usá 'I', no 'we'. 'I decided to...' / 'I contacted...' / 'I implemented...' / 'First, I ___. Then I ___. Finally, I ___.'"},
        {label:"R — Result (15 seg)",text:"El resultado medible. 'As a result...' / 'This led to...' / 'We achieved...' Siempre con número o impacto visible."},
        {label:"Regla STAR crítica",text:"La parte de Action debe ser el 50% de tu respuesta. El entrevistador quiere saber exactamente qué HICISTE VOS — no el equipo, no la empresa. Usá 'I' constantemente en esta sección."}
      ]},
      {title:"Vocabulario profesional con pronunciación IPA",items:[
        {label:"deadline /ˈdedlaɪn/",text:"Fecha límite. 'I always meet my deadlines.'"},
        {label:"teamwork /ˈtiːmwɜːk/",text:"Trabajo en equipo. 'I thrive in teamwork environments.'"},
        {label:"leadership /ˈliːdəʃɪp/",text:"Liderazgo. 'My leadership style is collaborative.'"},
        {label:"problem-solving /ˈprɒbləm ˌsɒlvɪŋ/",text:"Resolución de problemas. 'I have strong problem-solving skills.'"},
        {label:"achievement /əˈtʃiːvmənt/",text:"Logro. 'My greatest achievement was...'"},
        {label:"responsible for /rɪˈspɒnsɪbəl fɔː/",text:"Responsable de. 'I was responsible for 5 accounts.'"},
        {label:"I spearheaded /ˈspɪəhedɪd/ the initiative",text:"Cuando fuiste el líder o iniciador de un proyecto."},
        {label:"I streamlined /ˈstriːmlaɪnd/ the process",text:"Cuando mejoraste o simplificaste un proceso."},
        {label:"I consistently exceeded /kənˈsɪstəntli ɪkˈsiːdɪd/",text:"Cuando cumpliste metas de manera regular."}
      ]},
      {title:"Frases para entrevista por video (Zoom)",items:[
        {label:"No escuchaste la pregunta",text:"'Could you please repeat the question?' /kʊd juː pliːz rɪˈpiːt ðə ˈkwestʃən/"},
        {label:"No entendiste completamente",text:"'I'm sorry, could you clarify what you mean?' /ˈklærɪfaɪ/"},
        {label:"Problema de audio",text:"'I'm having some connection issues. Could you repeat that?' /ˈkɒnekʃən ˈɪʃuːz/"},
        {label:"Para ganar tiempo",text:"'That's a great question. Let me think about that for a moment.'"},
        {label:"Para confirmar",text:"'Just to make sure I understand — you're asking about...?'"},
        {label:"Regla de video",text:"Mirá a la CÁMARA (no a la pantalla) cuando hablás. Asentí levemente para mostrar que estás escuchando. Hablá más lento de lo normal — 130-150 palabras por minuto es ideal."}
      ]},
      {title:"Errores comunes y cómo corregirlos",items:[
        {label:"❌ Hablar demasiado",text:"✅ Respuestas de 60-90 segundos máximo. Estructura: Contexto (15s) + Acción (45s) + Resultado (15s)."},
        {label:"❌ Traducir mentalmente del español",text:"✅ Aprendé 'chunks' (bloques de frases completas). Hablá con frases enteras memorizadas, no palabra por palabra."},
        {label:"❌ 'Sorry, my English is not perfect, but I will try...'",text:"✅ NUNCA te disculpes por tu inglés. Empezá directo: 'Thank you for that question. In my experience...' Nunca menciones tu nivel de inglés."},
        {label:"❌ Responder sin estructura",text:"✅ Usá siempre transiciones: 'First...' / 'Then...' / 'As a result...' para estructurar visiblemente."},
        {label:"❌ 'I am good at leadership.' (sin ejemplo)",text:"✅ 'I demonstrated leadership when I managed a team of 8 people during a product launch, resulting in on-time delivery.'"}
      ]}
    ]
  },
  {
    id:"30dias", emoji:"📅", title:"Inglés en 30 días — Módulo 1", source:"Libro principal — Fundamentos para empezar a hablar",
    desc:"7 días de fundamentos completos: pronunciación, saludos, estructura básica, números y 10 mini conversaciones reales.",
    sections:[
      {title:"Día 1 — Pronunciación básica",items:[
        {label:"Tabla de sonidos esenciales",text:"ship /ʃɪp/ vs sheep /ʃiːp/ (vocal corta vs larga) · live /lɪv/ vs leave /liːv/ · full /fʊl/ vs fool /fuːl/ · cat /kæt/ (vocal 'æ', entre 'a' y 'e')"},
        {label:"Consejo clave",text:"La diferencia entre vocales cortas y largas puede cambiar completamente el significado de una palabra. Practicá estos pares en voz alta todos los días hasta sentir la diferencia muscular."}
      ]},
      {title:"Día 2 — Saludos formales e informales",items:[
        {label:"Hello /hɪˈloʊ/ / Hi /haɪ/",text:"Hola — Hello es formal e informal. Hi solo para amigos."},
        {label:"Good morning /gʊd ˈmɔːrnɪŋ/",text:"Buenos días — hasta el mediodía."},
        {label:"Good afternoon /gʊd ˌæftərˈnuːn/",text:"Buenas tardes — después del mediodía."},
        {label:"Good evening /gʊd ˈiːvnɪŋ/",text:"Buenas noches — al anochecer (al llegar, NO al irse)."},
        {label:"How are you? /haʊ ɑːr juː/",text:"¿Cómo estás? — formal e informal."},
        {label:"How's it going? /haʊz ɪt ˈgoʊɪŋ/",text:"¿Cómo va todo? — informal."},
        {label:"What's up? /wɒts ʌp/",text:"¿Qué hay? — muy informal, solo con amigos."},
        {label:"Nice to meet you /naɪs tuː miːt juː/",text:"Mucho gusto — primera vez que se conocen."},
        {label:"See you later /siː juː ˈleɪtər/",text:"Hasta luego — despedida informal."}
      ]},
      {title:"Día 3 — Respuestas naturales a '¿Cómo estás?'",items:[
        {label:"I'm fine, thanks. /aɪm faɪn θæŋks/",text:"Estoy bien, gracias. (respuesta formal)"},
        {label:"Pretty good! /ˈprɪti gʊd/",text:"Bastante bien. (informal)"},
        {label:"Not bad. /nɒt bæd/",text:"No está mal. (neutral)"},
        {label:"I'm great. /aɪm greɪt/",text:"Estoy excelente."},
        {label:"Same as always. /seɪm æz ˈɔːlweɪz/",text:"Igual que siempre."},
        {label:"Truco de fluidez",text:"Siempre agregá 'thanks' o 'and you?' al final. Marca una gran diferencia en la naturalidad de la conversación."}
      ]},
      {title:"Día 4 — Estructura básica: Sujeto + Verbo + Complemento",items:[
        {label:"La fórmula fundamental",text:"SUJETO + VERBO + COMPLEMENTO. En inglés este orden es casi SIEMPRE OBLIGATORIO (al revés del español donde puede variar)."},
        {label:"Tabla de ejemplos",text:"I am happy. (Yo soy/estoy feliz.) · You are ready. (Tú estás listo.) · She is a teacher. (Ella es maestra.) · We are students. (Somos estudiantes.) · It is cold today. (Hace frío hoy.)"},
        {label:"⚠ El sujeto NUNCA se omite en inglés",text:"En español decís 'Estoy bien'. En inglés SIEMPRE hay que poner el pronombre: 'I am fine.' No se puede omitir, a diferencia del español."}
      ]},
      {title:"Día 5 — Números, días y meses",items:[
        {label:"1 al 20",text:"One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve, Thirteen, Fourteen, Fifteen, Sixteen, Seventeen, Eighteen, Nineteen, Twenty"},
        {label:"Decenas",text:"30 Thirty · 40 Forty · 50 Fifty · 60 Sixty · 70 Seventy · 80 Eighty · 90 Ninety · 100 One hundred"},
        {label:"Días de la semana",text:"Monday · Tuesday · Wednesday · Thursday · Friday · Saturday · Sunday"},
        {label:"Meses del año",text:"January · February · March · April · May · June · July · August · September · October · November · December"}
      ]},
      {title:"Día 6 — 10 Mini conversaciones reales (practicá en voz alta)",items:[
        {label:"Primer encuentro",text:"A: Hi! I'm Carlos. Nice to meet you. / B: Nice to meet you too! I'm Sarah."},
        {label:"¿Cómo estás?",text:"A: Hey! How are you? / B: Pretty good, thanks! And you? / A: I'm great, thanks!"},
        {label:"El clima",text:"A: It's cold today, isn't it? / B: Yes! Very cold. I need a jacket."},
        {label:"Preguntar la hora",text:"A: Excuse me, what time is it? / B: It's three fifteen. / A: Thank you!"},
        {label:"En una tienda",text:"A: Hi, can I help you? / B: Yes, please. How much is this? / A: It's twenty dollars."},
        {label:"Hacer planes",text:"A: Are you free on Friday? / B: Yes! What's the plan? / A: Let's have lunch together."},
        {label:"En el trabajo",text:"A: Ready for the meeting? / B: Almost! Give me five minutes. / A: No problem, take your time."},
        {label:"Despedida",text:"A: It was nice talking to you! / B: You too! See you later!"}
      ]},
      {title:"Día 7 — Plan de práctica semanal",items:[
        {label:"Regla de consistencia",text:"20 minutos diarios son más efectivos que 3 horas una vez a la semana. El cerebro necesita exposición frecuente."},
        {label:"Paso 1 — Leé en voz alta",text:"Cada frase y diálogo debe leerse EN VOZ ALTA. Nunca en silencio. La pronunciación es una habilidad física — como cualquier músculo, se entrena con práctica."},
        {label:"Paso 2 — Grabate",text:"Usá el micrófono del celular. Escuchate. La incomodidad que sentís al oírte es parte del proceso."},
        {label:"Paso 3 — Repetí hasta que fluya",text:"Un diálogo por día hasta que salga automático. Luego pasás al siguiente."},
        {label:"Checklist diario",text:"☑ Escuché ☑ Repetí en voz alta ☑ Creé frases propias ☑ Me grabé ☑ Revisé lo del día anterior"}
      ]}
    ]
  }
];
