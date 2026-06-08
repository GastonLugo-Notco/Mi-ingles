// ─── CLASES ──────────────────────────────────────────────────────────────────
const INITIAL_CLASSES = [
  {
    id:1, date:"2025-04-01", titulo:"Primera toma de contacto — frases básicas",
    vocab:[
      {en:"Hello / Hi there",pron:"",es:"Hola"},
      {en:"See you",pron:"",es:"Hasta luego / Nos vemos"},
      {en:"This is a piece of cake",pron:"",es:"Esto es pan comido (muy fácil)"},
      {en:"Long time no see",pron:"",es:"Cuánto tiempo sin vernos"},
      {en:"road",pron:"/roud/",es:"camino / calle / ruta"}
    ],
    gramatica:[],
    correcciones:[{wrong:"she don't like it",right:"she doesn't like it"}],
    frases:[
      {en:"Hello = Hi there",es:"Son equivalentes"},
      {en:"This is a piece of cake",es:"Está tirado / Es muy fácil"},
      {en:"Long time no see",es:"Cuánto tiempo sin vernos"}
    ]
  },
  {
    id:2, date:"2025-04-06", titulo:"Partes de la casa, estaciones y Present Simple",
    vocab:[
      {en:"bedroom",pron:"",es:"dormitorio"},{en:"bathroom",pron:"/bázrum/",es:"baño"},
      {en:"kitchen",pron:"",es:"cocina"},{en:"living room",pron:"",es:"sala de estar"},
      {en:"dining room",pron:"",es:"comedor"},{en:"balcony",pron:"",es:"balcón"},
      {en:"garden",pron:"",es:"jardín"},{en:"yard",pron:"/iárd/",es:"patio"},
      {en:"front yard",pron:"",es:"patio delantero"},{en:"back yard",pron:"",es:"patio trasero"},
      {en:"terrace",pron:"/térris/",es:"terraza"},{en:"garage",pron:"/garásh/ (US)",es:"garaje"},
      {en:"flat / apartment",pron:"",es:"departamento"},{en:"autumn / fall",pron:"/ódom/",es:"otoño"},
      {en:"winter",pron:"",es:"invierno"},{en:"spring",pron:"",es:"primavera"},
      {en:"summer",pron:"",es:"verano"},{en:"seasons",pron:"",es:"estaciones del año"}
    ],
    gramatica:[{titulo:"Present Simple — preguntas y respuestas cortas",formula:"Do you swim?  →  Yes, I do. / No, I don't.\nDoes she paint?  →  Yes, she does. / No, she doesn't.",ejemplos:["Do you like your flat? — Yes, I do!","Does Euge have two balconies? — Yes, she does."]}],
    correcciones:[],
    frases:[{en:"I like it very much",es:"Me gusta mucho"},{en:"flat = apartment",es:"departamento (ambas correctas)"}]
  },
  {
    id:3, date:"2025-04-08", titulo:"Pronombres, Verb To Be (presente y pasado)",
    vocab:[
      {en:"What does ... mean?",pron:"",es:"¿Qué significa ...?"},
      {en:"mean",pron:"",es:"significar"},
      {en:"more or less / so so",pron:"",es:"más o menos"},
      {en:"also / too",pron:"/ólso/",es:"también"},
      {en:"this / that / these / those",pron:"/dis/ /dat/ /di-is/ /dóus/",es:"este/ese/estos/esos"}
    ],
    gramatica:[
      {titulo:"Pronombres personales",formula:"I · you · she · he · it · we · you · they",ejemplos:["I am 29 years old.","They came from Paraguay."]},
      {titulo:"Verb To Be — presente",formula:"I am / You are / He·She·It is / We·You·They are",ejemplos:["I am your student.","She is a professor."]},
      {titulo:"Verb To Be — pasado",formula:"I was / You were / He·She·It was / We·You·They were",ejemplos:["I was born in Lanús.","Where were you born?"]}
    ],
    correcciones:[
      {wrong:"i bad the week",right:"This week is a bit bad."},
      {wrong:"I am hate the Winter",right:"I hate winter. (sin 'am', sin 'the')"}
    ],
    frases:[
      {en:"When's your birthday?",es:"¿Cuándo es tu cumpleaños?"},
      {en:"I was born in Lanús.",es:"Nací en Lanús."},
      {en:"Not much",es:"No mucho"}
    ]
  },
  {
    id:4, date:"2025-04-10", titulo:"Entrenamiento, ubicación y Present Perfect vs Past Simple",
    vocab:[
      {en:"strength training",pron:"",es:"entrenamiento de fuerza"},
      {en:"blocks (from my house)",pron:"",es:"cuadras de mi casa"},
      {en:"husband",pron:"",es:"esposo / marido"},
      {en:"wonderful",pron:"",es:"maravilloso/a"},
      {en:"a few",pron:"",es:"algunos pocos"},
      {en:"a lot of / lots of / tons of",pron:"",es:"un montón de"},
      {en:"actually",pron:"/ákshuali/",es:"en realidad (NO actualmente)"},
      {en:"nowadays",pron:"",es:"actualmente / hoy en día"},
      {en:"coincidence",pron:"",es:"casualidad"},
      {en:"there / here / over there / over here",pron:"",es:"allá / aquí / por allá / por aquí"}
    ],
    gramatica:[{titulo:"Present Perfect vs Past Simple",formula:"I HAVE studied Chinese.  →  sin fecha → efecto presente\nI studied Chinese IN 2011.  →  fecha específica → Past Simple",ejemplos:["I have lived here for 5 years. (y sigo)","She studied in 2011. (año específico)"]}],
    correcciones:[
      {wrong:"I train in four streets the house",right:"I train four blocks from my house."},
      {wrong:"where does 'husband' mean?",right:"WHAT does 'husband' mean?"},
      {wrong:"is casuality",right:"it's a coincidence"}
    ],
    frases:[
      {en:"No worries!",es:"¡No pasa nada!"},
      {en:"Don't rush",es:"No te apures"},
      {en:"I train four blocks from my house",es:"Entreno a cuatro cuadras de mi casa"}
    ]
  },
  {
    id:5, date:"2025-04-14", titulo:"Barrio, because/because of y vocabulario cotidiano",
    vocab:[
      {en:"neighbourhood",pron:"",es:"barrio"},{en:"quiet",pron:"/kuáiet/",es:"tranquilo/a"},
      {en:"landscape",pron:"",es:"paisaje"},{en:"during",pron:"",es:"durante"},
      {en:"because",pron:"",es:"porque (+ frase)"},{en:"because of",pron:"",es:"a causa de (+ sustantivo)"},
      {en:"close to / near",pron:"",es:"cerca de"},{en:"work out",pron:"",es:"hacer ejercicio físico"}
    ],
    gramatica:[{titulo:"BECAUSE vs BECAUSE OF",formula:"because + frase completa\nbecause of + sustantivo",ejemplos:["She's tired because she worked.","She's tired because of work."]}],
    correcciones:[
      {wrong:"i had morning (agitada)",right:"I had a hectic / busy morning."},
      {wrong:"all times drink wine",right:"We drink wine all the time."}
    ],
    frases:[
      {en:"I totally agree!",es:"¡Estoy totalmente de acuerdo!"},
      {en:"It has a nice view",es:"Tiene una linda vista"},
      {en:"I came back home",es:"Volví a casa"}
    ]
  },
  {
    id:6, date:"2025-04-17", titulo:"Viaje a Perú, formas de futuro y comparaciones",
    vocab:[
      {en:"neither",pron:"/níder/",es:"yo tampoco (Me neither)"},
      {en:"flavourful / tasty",pron:"",es:"sabroso"},
      {en:"vegetarian",pron:"",es:"vegetariano/a"},
      {en:"similar to",pron:"",es:"similar a"},{en:"different from",pron:"",es:"diferente de"},
      {en:"slang",pron:"",es:"lunfardo / jerga"},
      {en:"busy",pron:"/bísi/",es:"ocupado/a"},{en:"useful",pron:"/iús-ful/",es:"útil"},
      {en:"I have no idea / No clue",pron:"",es:"No tengo idea"}
    ],
    gramatica:[{titulo:"Futuro: Will vs Going to vs Present Continuous",formula:"WILL        → decisión en el momento / predicción sin evidencia\nGOING TO    → plan ya decidido / predicción con evidencia\nPRES. CONT. → agenda ya confirmada (hora y lugar)",ejemplos:["'Someone at the door' → 'I'll go and see.' (will ahora)","I'm going to travel to Peru. (plan previo)","I'm seeing my friend tomorrow. (turno arreglado)"]}],
    correcciones:[
      {wrong:"i choose peru for gastronomic",right:"I chose Peru for its gastronomy."},
      {wrong:"it is very saborous",right:"it is very flavourful / tasty"},
      {wrong:"do meat animal",right:"everything has meat in it"}
    ],
    frases:[
      {en:"Where are you staying?",es:"¿Dónde van a alojarse?"},
      {en:"Miraflores is similar to San Isidro.",es:"Miraflores es similar a San Isidro."},
      {en:"Me neither.",es:"Yo tampoco."}
    ]
  },
  {
    id:7, date:"2025-05-11", titulo:"Clima, bored vs boring, escaleras y comidas",
    vocab:[
      {en:"bored",pron:"",es:"aburrido (cómo ME siento)"},
      {en:"boring",pron:"",es:"aburrido (cómo ES algo/alguien)"},
      {en:"sunbathing",pron:"",es:"tomar sol"},
      {en:"downstairs / upstairs",pron:"",es:"abajo / arriba (de la escalera)"},
      {en:"stairs",pron:"/sters/",es:"escalera(s)"},
      {en:"main",pron:"/méin/",es:"principal"},
      {en:"meat",pron:"/mit/",es:"carne"},{en:"meet",pron:"/mit/",es:"reunirse"},
      {en:"meal",pron:"/mil/",es:"comida del día (desayuno, almuerzo, cena)"},
      {en:"food",pron:"",es:"comida (los productos)"},
      {en:"dish",pron:"",es:"plato (de comida)"},{en:"plate",pron:"",es:"plato (el objeto)"},
      {en:"in comparison with",pron:"",es:"en comparación con"}
    ],
    gramatica:[{titulo:"BORED vs BORING",formula:"BORED   = cómo te SENTÍS vos\nBORING  = cómo ES algo o alguien",ejemplos:["I feel bored in math classes.","Math is boring!"]}],
    correcciones:[
      {wrong:"i see (lo vi recién)",right:"I have just seen it."},
      {wrong:"I had fear my wifi",right:"I was afraid my wifi signal got lost."}
    ],
    frases:[
      {en:"The cold is getting on my nerves",es:"El frío me está enloqueciendo"},
      {en:"I flew downstairs",es:"Bajé las escaleras volando (muy rápido)"},
      {en:"It is a great destination",es:"Es un gran destino"}
    ]
  },
  {
    id:8, date:"2025-05-14", titulo:"Deportes, rutinas y Present Simple completo",
    vocab:[
      {en:"lungs",pron:"",es:"pulmones"},{en:"brave",pron:"",es:"valiente"},
      {en:"have breakfast",pron:"",es:"desayunar"},{en:"breakfast",pron:"",es:"desayuno"},
      {en:"have lunch",pron:"",es:"almorzar"},{en:"lunch",pron:"",es:"almuerzo"},
      {en:"have dinner",pron:"",es:"cenar"},{en:"dinner",pron:"",es:"cena"},
      {en:"snack",pron:"",es:"merienda"},{en:"teeth",pron:"/tiz/",es:"dientes"},
      {en:"sweet",pron:"",es:"dulce"},{en:"salty",pron:"",es:"salado"},
      {en:"bitter",pron:"",es:"amargo"},{en:"bittersweet",pron:"",es:"agridulce"}
    ],
    gramatica:[{titulo:"Present Simple — estructura completa",formula:"(+) I go. / She travelS.\n(−) I DON'T go. / He DOESN'T travel.\n(?) DO I go? / DOES he travel?",ejemplos:["You speak German. / You don't speak German. / Do you speak German?","It rains a lot. / It doesn't rain. / Does it rain?"]}],
    correcciones:[
      {wrong:"i swim did twenty years",right:"I have been swimming for twenty years."},
      {wrong:"I tired (vengo de entrenar)",right:"I just came back from training."}
    ],
    frases:[
      {en:"I used to swim when I was a kid.",es:"Solía nadar cuando era chico."},
      {en:"My favourite breakfast is avocado toast.",es:"Mi desayuno favorito es tostada con palta."}
    ]
  },
  {
    id:9, date:"2025-05-18", titulo:"Rutina matutina y WHAT como sujeto",
    vocab:[
      {en:"brush my teeth",pron:"",es:"cepillarme los dientes"},
      {en:"wake up / woke up",pron:"",es:"despertarse / me desperté"},
      {en:"what makes your day",pron:"",es:"qué te alegra el día"},
      {en:"passion / passions",pron:"",es:"pasión / pasiones"}
    ],
    gramatica:[{titulo:"WHAT como sujeto (sin auxiliar)",formula:"WHAT + VERB + objeto  (WHAT es el sujeto = no va auxiliar)\nWHAT MAKES your day?\nWHAT HAPPENED?",ejemplos:["What makes you happy? (NO 'What does make...')","What happened last night?"]}],
    correcciones:[
      {wrong:"and Do you the.... days Euge?",right:"What makes your day, Euge?"},
      {wrong:"I (arranque) the morning sunbathe",right:"I started my morning with sunbathing."}
    ],
    frases:[
      {en:"What's the first thing you do after waking up?",es:"¿Cuál es lo primero que hacés al despertarte?"},
      {en:"Just waking up in the morning makes my day",es:"Con solo despertarme ya me alegra el día"}
    ]
  },
  {
    id:10, date:"2025-05-21", titulo:"Rutinas, sleep, ansiedad y vocabulario cotidiano",
    vocab:[
      {en:"totally agree",pron:"",es:"totalmente de acuerdo"},
      {en:"anxious",pron:"/án-shus/",es:"ansioso/a"},
      {en:"anxiety",pron:"/an-sáie-ti/",es:"ansiedad"},
      {en:"You are right / wrong",pron:"",es:"Tenés razón / Estás equivocado"},
      {en:"per night / per day",pron:"",es:"por noche / por día"}
    ],
    gramatica:[{titulo:"ACTUALLY vs NOWADAYS",formula:"actually   = en realidad (NO actualmente)\nnowadays   = actualmente / hoy en día",ejemplos:["Actually, I don't like winter. (En realidad...)","Nowadays everyone uses smartphones. (Hoy en día...)"]}],
    correcciones:[
      {wrong:"i sleep entry 6 to 8 hours",right:"I sleep between 6 and 8 hours."},
      {wrong:"i watch stremming",right:"I watch streaming / content on YouTube."}
    ],
    frases:[
      {en:"I feel anxious",es:"Me siento ansioso/a"},
      {en:"I decided to sleep because I could",es:"Decidí dormir porque podía"},
      {en:"How many hours do you sleep per night?",es:"¿Cuántas horas dormís por noche?"}
    ]
  },
  {
    id:11, date:"2025-05-25", titulo:"Fórmula 1, sueños y motivación",
    vocab:[
      {en:"pilot / driver",pron:"",es:"piloto"},
      {en:"race",pron:"",es:"carrera"},
      {en:"effort",pron:"",es:"esfuerzo"},
      {en:"make a dream come true",pron:"",es:"hacer realidad un sueño"},
      {en:"sleepy / kind of sleepy",pron:"",es:"con sueño / medio con sueño"},
      {en:"several",pron:"",es:"varios / muchos"},
      {en:"again",pron:"/egén/",es:"otra vez / de nuevo"}
    ],
    gramatica:[],
    correcciones:[
      {wrong:"is the big pilot",right:"He's a great driver / pilot."},
      {wrong:"other the reason the take classes",right:"Another reason for taking classes is..."},
      {wrong:"i don't like very fanatic the football",right:"I'm not a huge football fan."}
    ],
    frases:[
      {en:"It is very important to have dreams",es:"Es muy importante tener sueños"},
      {en:"You know what I mean?",es:"¿Sabés lo que quiero decir?"},
      {en:"These are the most important things to make a dream come true",es:"Estas son las cosas más importantes para cumplir un sueño"}
    ]
  },
  {
    id:12, date:"2025-06-02", titulo:"Trabajo, emprendimiento y Present Continuous",
    vocab:[
      {en:"entrepreneur",pron:"",es:"emprendedor"},
      {en:"gastronomic project",pron:"",es:"proyecto gastronómico"},
      {en:"know the ropes",pron:"",es:"conocer el trabajo / saber cómo funciona"},
      {en:"I am upset",pron:"",es:"estoy molesto/a"},
      {en:"woke up",pron:"",es:"me desperté (past de wake up)"}
    ],
    gramatica:[{titulo:"Present Continuous — uso",formula:"AM / IS / ARE + verb + ING\nI AM working now. / We ARE having a class.",ejemplos:["I am learning English with Euge.","He is speaking in English right now."]}],
    correcciones:[
      {wrong:"i am work 8 o 9 hours",right:"I work 8 or 9 hours per day."},
      {wrong:"i missing the class",right:"I missed the class. / I miss the classes."}
    ],
    frases:[
      {en:"I am leading the improvements project",es:"Estoy liderando el proyecto de mejoras"},
      {en:"To give him time to know the ropes",es:"Para darle tiempo de aprender cómo funciona todo"},
      {en:"What time did you wake up today?",es:"¿A qué hora te despertaste hoy?"}
    ]
  },
  {
    id:13, date:"2025-06-03", titulo:"Tecnología, trabajo de Fer y adjetivos antes del sustantivo",
    vocab:[
      {en:"afraid",pron:"",es:"con miedo (I'm afraid = tengo miedo)"},
      {en:"light technician",pron:"",es:"técnico de luces"},
      {en:"on tour",pron:"",es:"de gira"},
      {en:"talented",pron:"",es:"talentoso/a"},
      {en:"come / came",pron:"/kam/ /kéim/",es:"venir / vine-vino"},
      {en:"ate",pron:"/éit/",es:"comí/comió (past de eat)"}
    ],
    gramatica:[{titulo:"Adjetivo + Sustantivo (orden en inglés)",formula:"En inglés el ADJETIVO va ANTES del sustantivo:",ejemplos:["VEGAN PRODUCTS (no 'products vegan')","BIG HOUSE · BLUE CAR · AMAZING VIEW · INCREDIBLE JOB"]}],
    correcciones:[
      {wrong:"tener miedo = HAVE FEAR",right:"En inglés: I AM AFRAID (to be + afraid)"},
      {wrong:"is the biutiful possibility",right:"it's A BEAUTIFUL possibility"},
      {wrong:"does he dedicate profesional?",right:"What does your husband do for a living?"}
    ],
    frases:[
      {en:"I'm afraid",es:"Tengo miedo (NO: I have fear)"},
      {en:"What does your husband do for a living?",es:"¿A qué se dedica tu esposo?"},
      {en:"I had to cook for dinner",es:"Tuve que cocinar para cenar"}
    ]
  },
  {
    id:14, date:"2025-06-04", titulo:"Present Perfect completo, HAVE TO y preposiciones",
    vocab:[
      {en:"humid / humidity",pron:"",es:"húmedo / humedad"},
      {en:"behind",pron:"/bijáind/",es:"detrás"},
      {en:"depends on",pron:"",es:"depende de"},
      {en:"cough",pron:"/kaf/",es:"tos / toser"},
      {en:"have to",pron:"",es:"tener que / deber"},
      {en:"still / yet",pron:"",es:"todavía / ya (en preguntas)"}
    ],
    gramatica:[
      {titulo:"Present Perfect Simple — estructura completa",formula:"(+) I HAVE worked.  /  She HAS worked.\n(?) HAVE you worked?  /  HAS she worked?\n(−) I HAVEN'T worked.  /  She HASN'T worked.\n\nPalabras clave: ever · never · already · yet · just · for · since",ejemplos:["Have you ever watched F1 races? No, I haven't.","I have studied English with Euge for two months."]},
      {titulo:"HAVE TO — obligación",formula:"have to + verb (base form) = tener que\nYou HAVE TO study. / She HAS TO work.\nI HAD TO cook. (pasado)",ejemplos:["You have to practice every day.","I had to cook for dinner."]}
    ],
    correcciones:[
      {wrong:"it is day very humedity",right:"It is a very humid day. / There is a lot of humidity."},
      {wrong:"i like it watch the race",right:"I like watching the races."}
    ],
    frases:[
      {en:"Have you ever watched F1 races?",es:"¿Alguna vez viste carreras de F1?"},
      {en:"I am still writing it.",es:"Todavía la estoy escribiendo."},
      {en:"There is a book ON the table.",es:"Hay un libro SOBRE la mesa."},
      {en:"It depends ON you.",es:"Depende DE vos."}
    ]
  },
  {
    id:15, date:"2025-06-08", titulo:"Londres, clima, Present Perfect con FOR y posesivo con apóstrofe",
    vocab:[
      {en:"sunlight",pron:"",es:"luz del sol"},
      {en:"mood",pron:"",es:"estado de ánimo"},
      {en:"influence / affect",pron:"",es:"influir / afectar"},
      {en:"degree",pron:"",es:"grado (temperatura)"},
      {en:"30 degrees",pron:"",es:"30 grados"},
      {en:"kitten",pron:"",es:"gato bebé"},
      {en:"puppy",pron:"",es:"perro bebé"},
      {en:"favourite / favorite",pron:"",es:"favorito (UK/US)"},
      {en:"flat (British) / apartment (American)",pron:"",es:"departamento"},
      {en:"rooms",pron:"",es:"habitaciones / ambientes"},
      {en:"not for all the money in the world",pron:"",es:"ni por toda la plata del mundo"}
    ],
    gramatica:[
      {titulo:"Present Perfect con FOR — duración hasta ahora",formula:"I HAVEN'T SEEN the sunlight FOR many days.\n(algo del pasado que continúa hasta hoy)\n\n⚠ El verbo siguiente va en 3ra columna (participio):\nsee → saw → SEEN\nhave → had → HAD\ngo → went → GONE",ejemplos:["I haven't seen the sunlight for many days.","I have lived here for 5 years. (y sigo viviendo)"]},
      {titulo:"Posesivo con apóstrofe ('s)",formula:"Euge's house  =  la casa de Euge\nGastón's trip  =  el viaje de Gastón\nOur friend's wedding  =  el casamiento de nuestro amigo\nThe cat's name is Efraín  =  El nombre del gato es Efraín",ejemplos:["The cat's name is Efraín.","Marco's choice was that name."]}
    ],
    correcciones:[
      {wrong:"more lees, becouse i haven't see the ray sun",right:"I haven't SEEN the sunlight FOR many days."},
      {wrong:"how many time you lived in London?",right:"How LONG did you LIVE in London?"},
      {wrong:"why? what has London the Good?",right:"What does London have that is so good?"},
      {wrong:"how long distance leeds the London?",right:"How far is it FROM London TO Leeds?"},
      {wrong:"the only like for me england is",right:"The only thing I like FROM England is..."},
      {wrong:"not money in the world",right:"Not FOR all the money in the world"},
      {wrong:"my dream is live six months",right:"My dream is TO LIVE six months in Argentina..."},
      {wrong:"so live in the summer all the year",right:"SO I CAN live in summer all year long"}
    ],
    frases:[
      {en:"The weather influences / affects my mood",es:"El clima influye / afecta mi estado de ánimo"},
      {en:"Not for all the money in the world",es:"Ni por toda la plata del mundo"},
      {en:"How long did you live in London?",es:"¿Cuánto tiempo viviste en Londres?"},
      {en:"How far is it from London to Leeds?",es:"¿Qué tan lejos está de Londres a Leeds?"},
      {en:"I lived there for 5 months.",es:"Viví allí 5 meses."},
      {en:"I was 22.",es:"Tenía 22 años."},
      {en:"Do you live in a flat or in a house?",es:"¿Vivís en un departamento o en una casa?"},
      {en:"How many rooms does your house have?",es:"¿Cuántos ambientes tiene tu casa?"},
      {en:"The cat's name is Efraín",es:"El nombre del gato es Efraín"},
      {en:"favourite (UK) = favorite (US)",es:"favorito — dos ortografías correctas"}
    ]
  }
];

// ─── TIEMPOS VERBALES ─────────────────────────────────────────────────────────
const TENSES = [
  {
    id:"present-simple",
    name:"Present Simple",
    color:"#C8F04A", colorDark:"#0D0D0F",
    bgFrom:"#f0fcd0", bgTo:"#e4f5b0",
    desc:"Hábitos, rutinas, hechos y verdades generales. Lo que siempre (o nunca) hacés.",
    formulas:[
      {label:"Afirmación (+)",html:`I / you / we / they <span class='vrb'>VERB</span><br>He / she / it <span class='vrb'>VERB + S</span><br><br><span style='color:#888'>She work<span class='vrb'>s</span> · He go<span class='vrb'>es</span> · It rain<span class='vrb'>s</span></span>`},
      {label:"Pregunta (?) y Negación (−)",html:`<span class='aux'>DO</span> you work? — Yes, I <span class='aux'>do</span>.<br><span class='aux'>DOES</span> she work? — No, she <span class='neg'>doesn't</span>.<br><br>I <span class='neg'>don't</span> work.<br>She <span class='neg'>doesn't</span> work. <span class='mrk'>← sin -S</span>`}
    ],
    examples:[
      {en:"I drink mate every morning.",es:"Tomo mate todas las mañanas."},
      {en:"She works in an office.",es:"Ella trabaja en una oficina."},
      {en:"Does Vero paint? — Yes, she does.",es:"¿Vero pinta? — Sí."},
      {en:"He doesn't like winter.",es:"A él no le gusta el invierno."},
      {en:"Water boils at 100°C.",es:"El agua hierve a 100°C. (hecho)"}
    ],
    signals:["always","usually","often","every day","never","sometimes","on Mondays"],
    signalColor:"#0D7060", signalBg:"#E0F8F3",
    tip:{color:"#0D7060",bg:"#E0F8F3",text:"<b>La clave:</b> si podés reemplazar la acción por 'es su costumbre / es un hecho' → Present Simple. Y ojo: con he/she/it el verbo lleva -S, pero en la negación <b>doesn't work</b> (sin -S al verbo)."}
  },
  {
    id:"present-continuous",
    name:"Present Continuous",
    color:"#4CA8F5", colorDark:"#FFFFFF",
    bgFrom:"#d6eeff", bgTo:"#b8e0ff",
    desc:"Lo que está pasando ahora mismo, o planes ya organizados para el futuro cercano.",
    formulas:[
      {label:"Forma (+)",html:`I <span class='aux'>am</span> work<span class='vrb'>ing</span>.<br>She <span class='aux'>is</span> work<span class='vrb'>ing</span>.<br>We <span class='aux'>are</span> work<span class='vrb'>ing</span>.`},
      {label:"Pregunta (?) y Negación (−)",html:`<span class='aux'>Is</span> she working? — Yes, she <span class='aux'>is</span>.<br><span class='aux'>Are</span> you working? — No, I'm <span class='neg'>not</span>.<br>She <span class='neg'>isn't</span> / We <span class='neg'>aren't</span> working.`}
    ],
    examples:[
      {en:"I am studying right now.",es:"Estoy estudiando ahora mismo."},
      {en:"She is travelling tonight. (plan)",es:"Ella viaja esta noche. (plan confirmado)"},
      {en:"We are not eating at the moment.",es:"No estamos comiendo en este momento."},
      {en:"Are you coming tomorrow?",es:"¿Venís mañana?"}
    ],
    signals:["now","right now","at the moment","today","tonight","Look!","Listen!"],
    signalColor:"#185FA5", signalBg:"#E6F1FB",
    tip:{color:"#185FA5",bg:"#E6F1FB",text:'<b>Simple vs Continuous:</b> "I drink coffee." → hábito (siempre) / "I am drinking coffee." → ahora mismo en este instante.<br><br><b>Como futuro:</b> "I am seeing my friend tomorrow." → turno ya confirmado, tienen hora y lugar.'}
  },
  {
    id:"past-simple",
    name:"Past Simple",
    color:"#F5A623", colorDark:"#0D0D0F",
    bgFrom:"#fef3d6", bgTo:"#fde9b0",
    desc:"Acciones terminadas en el pasado, en un momento específico. Siempre se menciona cuándo.",
    formulas:[
      {label:"Afirmación (+)",html:`Verbos regulares: <span class='vrb'>VERB + ED</span><br>Verbos irregulares: forma propia<br><br>I work<span class='vrb'>ed</span> · She go<span class='vrb'>t</span> · We <span class='vrb'>went</span> · He <span class='vrb'>ate</span>`},
      {label:"Pregunta (?) y Negación (−)",html:`<span class='aux'>DID</span> you work? — Yes, I <span class='aux'>did</span>.<br>I <span class='neg'>didn't</span> work. <span class='mrk'>← verbo en BASE form</span><br><br><span class='mrk'>⚠ Con did/didn't: el verbo va en BASE FORM</span><br><span class='mrk'>"She didn't work<strike>ed</strike>"</span>`}
    ],
    examples:[
      {en:"I was born in Lanús.",es:"Nací en Lanús."},
      {en:"She came from Russia.",es:"Ella vino de Rusia."},
      {en:"We ate asado yesterday.",es:"Ayer comimos asado."},
      {en:"Did you drink wine? — Yes, I did.",es:"¿Tomaste vino? — Sí."},
      {en:"He didn't work on Sunday.",es:"Él no trabajó el domingo."}
    ],
    signals:["yesterday","last week","in 2011","ago","this morning","last year"],
    signalColor:"#7A4F00", signalBg:"#FDF3E3",
    tip:{color:"#7A4F00",bg:"#FDF3E3",text:'<b>Irregulares comunes:</b><br>go→went · come→came · see→saw · have→had · eat→ate · drink→drank · be→was/were · say→said · think→thought · buy→bought · know→knew · take→took · give→gave · get→got'}
  },
  {
    id:"past-continuous",
    name:"Past Continuous",
    color:"#9B6FE8", colorDark:"#FFFFFF",
    bgFrom:"#ede8ff", bgTo:"#ddd4ff",
    desc:"Acción que estaba en progreso en el pasado. Muy seguido aparece junto al Past Simple.",
    formulas:[
      {label:"Forma (+)",html:`I / he / she <span class='aux'>was</span> work<span class='vrb'>ing</span>.<br>You / we / they <span class='aux'>were</span> work<span class='vrb'>ing</span>.`},
      {label:"Pregunta (?) y Negación (−)",html:`<span class='aux'>Was</span> she working? — Yes, she <span class='aux'>was</span>.<br>I <span class='neg'>wasn't</span> working.<br>They <span class='neg'>weren't</span> working.`}
    ],
    examples:[
      {en:"I was sleeping at 11pm.",es:"Estaba durmiendo a las 11pm."},
      {en:"She was cooking when I arrived.",es:"Estaba cocinando cuando llegué."},
      {en:"We were talking all night.",es:"Estuvimos hablando toda la noche."}
    ],
    signals:["when","while","at 8pm","at that moment","all night"],
    signalColor:"#4A2080", signalBg:"#F0EBF8",
    tip:{color:"#4A2080",bg:"#F0EBF8",text:'<b>Combinación clásica:</b><br>"I <b>was watching</b> TV when the phone <b>rang</b>."<br>→ Acción LARGA (was watching) = Past Continuous<br>→ Acción que interrumpe (rang) = Past Simple'}
  },
  {
    id:"present-perfect",
    name:"Present Perfect",
    color:"#FF6B5B", colorDark:"#FFFFFF",
    bgFrom:"#ffe8e5", bgTo:"#ffd5d0",
    desc:"Pasado con efecto en el presente. No se menciona cuándo exactamente.",
    formulas:[
      {label:"Forma (+)",html:`I / you / we / they <span class='aux'>have</span> work<span class='vrb'>ed</span>.<br>He / she / it <span class='aux'>has</span> work<span class='vrb'>ed</span>.<br><br><span style='color:#888'>3ra columna del verbo (participio):<br>see→SEEN · go→GONE · eat→EATEN</span>`},
      {label:"Pregunta (?) y Negación (−)",html:`<span class='aux'>Have</span> you worked? — Yes, I <span class='aux'>have</span>.<br><span class='aux'>Has</span> she worked? — No, she <span class='neg'>hasn't</span>.<br><br>I <span class='neg'>haven't</span> seen the sunlight for days.<br>She <span class='neg'>hasn't</span> arrived yet.`}
    ],
    examples:[
      {en:"I have lived here for 5 years.",es:"Vivo aquí hace 5 años. (y sigo)"},
      {en:"She has never been to Perú.",es:"Ella nunca estuvo en Perú."},
      {en:"I haven't seen the sunlight for many days.",es:"Hace muchos días que no veo el sol."},
      {en:"Have you ever tried ceviche?",es:"¿Alguna vez probaste ceviche?"},
      {en:"I have already eaten.",es:"Ya comí."}
    ],
    signals:["already","yet","ever","never","for","since","just","so far","recently"],
    signalColor:"#A32D2D", signalBg:"#FCEBEB",
    tip:{color:"#A32D2D",bg:"#FCEBEB",text:'<b>Present Perfect vs Past Simple:</b><br>"I <b>studied</b> Chinese in 2011." → fecha específica → Past Simple<br>"I <b>have studied</b> Chinese." → sin fecha, efecto hoy → Present Perfect<br><br><b>FOR vs SINCE:</b> "for 3 months" (duración) / "since April" (punto de inicio)'}
  },
  {
    id:"future",
    name:"Futuro",
    color:"#1ABFA0", colorDark:"#FFFFFF",
    bgFrom:"#d6f5ef", bgTo:"#b0ece2",
    desc:"En inglés hay tres formas de hablar del futuro. Cada una tiene un uso distinto.",
    formulas:[
      {label:"WILL — decisión en el momento / predicción",html:`I / she / we <span class='aux'>will</span> + <span class='vrb'>VERB</span><br>I <span class='neg'>won't</span> work. (= will not)<br><span class='aux'>Will</span> you work? — Yes, I <span class='aux'>will</span>.`},
      {label:"GOING TO — plan decidido / evidencia visible",html:`I <span class='aux'>am going to</span> work.<br>She <span class='aux'>is going to</span> come.<br>She <span class='neg'>isn't going to</span> come.<br><span class='aux'>Are</span> you going to work?`}
    ],
    examples:[
      {en:"'Someone at the door' → 'I'll go and see.' (will)",es:"Decisión en el momento — no la planeé antes."},
      {en:"I think it will rain tomorrow. (will)",es:"Predicción sin evidencia visible."},
      {en:"I'm going to travel to Peru. (going to)",es:"Plan ya decidido previamente."},
      {en:"Look at those clouds — it's going to rain! (going to)",es:"Predicción con evidencia visible ahora."},
      {en:"I'm seeing my friend tomorrow. (pres. continuous)",es:"Cita ya confirmada, tienen hora y lugar."}
    ],
    signals:["tomorrow","next week","soon","tonight","one day","when I grow up"],
    signalColor:"#0D7060", signalBg:"#E0F8F3",
    tip:{color:"#0D7060",bg:"#E0F8F3",text:'<b>Resumen rápido:</b><br>WILL → "Ah bueno, te ayudo." (lo decidí ahora mismo)<br>GOING TO → "Ya tenía pensado ir." (plan previo)<br>PRES. CONTINUOUS → "Tenemos turno a las 6." (agenda ya armada)'}
  }
];

// ─── GUÍAS ────────────────────────────────────────────────────────────────────
const GUIDES = [
  {
    id:"rutina10", emoji:"⏱️", title:"Rutina de 10 minutos por día", source:"Bono 2",
    desc:"El método realista para aprender inglés sin tener tiempo. Consistencia diaria.",
    sections:[
      {title:"La fórmula 3-3-2-2",items:[
        {label:"0-3 min → INPUT",text:"Escuchá un audio, canción o diálogo corto. Identificá palabras conocidas. No importa entender todo."},
        {label:"3-6 min → REPETICIÓN ACTIVA",text:"Repetí en voz alta. Hacé shadowing: imitá ritmo y entonación del hablante nativo."},
        {label:"6-8 min → PRODUCCIÓN",text:"Creá 3 frases propias usando las palabras nuevas. Respondé una pregunta guía en voz alta."},
        {label:"8-10 min → REVISIÓN",text:"Releé las frases del día. Escuchá el audio nuevamente. Marcá el checklist."}
      ]},
      {title:"Regla de oro",items:[
        {label:"No negociar los 10 minutos",text:"Sin importar qué tan ocupado estés, estos 10 minutos son innegociables."},
        {label:"Por qué funciona",text:"10 min diarios durante 1 año = más de 60 horas de práctica enfocada. El cerebro consolida durante el sueño."}
      ]}
    ]
  },
  {
    id:"pronunciacion", emoji:"🗣️", title:"Guía de pronunciación", source:"Bono 3",
    desc:"De principiante a avanzado. Sonidos, ritmo, entonación y fluidez.",
    sections:[
      {title:"Principio clave",items:[
        {label:"En inglés no se pronuncia como se escribe",text:"Enfocate en los SONIDOS, no en las letras. La 'a' puede sonar como en cat /æ/, cake /eɪ/, car /ɑː/ o about /ə/."},
        {label:"Ritmo acentual",text:"El inglés enfatiza ciertas sílabas y reduce otras. Hay que saber cuáles enfatizar para sonar natural."}
      ]},
      {title:"Pronunciaciones de clase con Euge",items:[
        {label:"bathroom /bázrum/",text:"No pronunciar la 'th' como 't'"},
        {label:"autumn /ódom/",text:"La 'mn' final es muda"},
        {label:"interesting /íntrestin/",text:"3 sílabas, no 4"},
        {label:"actually /ákshuali/",text:"En realidad (no actualmente)"},
        {label:"anxious /án-shus/",text:"No es 'ánksius'"},
        {label:"meat/meet/meal → /mit/ /mit/ /mil/",text:"Suenan casi igual, significan cosas diferentes"},
        {label:"cough /kaf/",text:"La 'gh' es muda, suena como 'kaf'"}
      ]}
    ]
  },
  {
    id:"frases", emoji:"💬", title:"100+ Frases para conversaciones reales", source:"Bono 4",
    desc:"Frases por situación: trabajo, gimnasio, restaurante, médico y más.",
    sections:[
      {title:"En el trabajo",items:[
        {label:"Could you help me with this?",text:"¿Podés ayudarme con esto?"},
        {label:"I need more time to finish this.",text:"Necesito más tiempo para terminar esto."},
        {label:"Let me check and get back to you.",text:"Déjame revisar y te digo."},
        {label:"I'm working on it.",text:"Lo estoy trabajando / Estoy en eso."},
        {label:"I'm leading the project.",text:"Estoy liderando el proyecto."}
      ]},
      {title:"Situaciones cotidianas",items:[
        {label:"I'm afraid...",text:"Tengo miedo... / Lamentablemente..."},
        {label:"Don't worry / No worries",text:"No te preocupes / No pasa nada"},
        {label:"What does ... mean?",text:"¿Qué significa ...?"},
        {label:"Can you speak more slowly?",text:"¿Podés hablar más despacio?"},
        {label:"Not for all the money in the world",text:"Ni por toda la plata del mundo"}
      ]}
    ]
  },
  {
    id:"miedo", emoji:"🎤", title:"Perdé el miedo a hablar inglés", source:"Bono 5",
    desc:"Método práctico para dejar de pensar y empezar a hablar.",
    sections:[
      {title:"Las 5 raíces del miedo",items:[
        {label:"1. Miedo al error",text:"El error ES el método. Equivocarse es aprender."},
        {label:"2. Miedo al acento",text:"Tu acento es tu identidad, no tu defecto."},
        {label:"3. Bloqueo mental",text:"El cerebro evita lo que genera incomodidad. Se entrena con exposición."},
        {label:"4. Perfeccionismo",text:"Esperás saber todo antes de hablar. La fluidez se construye hablando."},
        {label:"5. Falta de exposición",text:"Cuanto más te exponés, menos miedo tenés."}
      ]},
      {title:"Entrenamiento 7 días",items:[
        {label:"Día 1",text:"Hablá 1 minuto en inglés solo, sin parar. No importa si está mal."},
        {label:"Día 2",text:"Describí lo que ves a tu alrededor en inglés."},
        {label:"Día 3",text:"Grabate respondiendo '¿Cómo estuvo tu día?' en inglés."},
        {label:"Día 4",text:"Pensá en inglés durante 10 minutos sin traducir."},
        {label:"Día 5",text:"Mirá un video en inglés sin subtítulos y resumilo."},
        {label:"Día 6",text:"Pedí algo en inglés en una situación real."},
        {label:"Día 7",text:"Grabate contando algo que aprendiste esta semana."}
      ]}
    ]
  },
  {
    id:"entrevistas", emoji:"👔", title:"Inglés para entrevistas laborales", source:"Bono 6",
    desc:"Cómo responder con confianza. Método STAR y vocabulario profesional.",
    sections:[
      {title:"Método STAR",items:[
        {label:"S — Situation",text:"Describí el contexto. 'I was working as a team leader when...'"},
        {label:"T — Task",text:"Tu responsabilidad. 'My task was to...'"},
        {label:"A — Action",text:"Qué hiciste. 'I decided to... / I implemented...'"},
        {label:"R — Result",text:"El resultado. 'As a result, we improved...'"}
      ]},
      {title:"Frases clave",items:[
        {label:"Tell me about yourself",text:"'I have been working in [field] for [X] years. I specialize in [area].'"},
        {label:"What are your strengths?",text:"'I'm a strong communicator and I'm very organized.'"},
        {label:"Do you have any questions?",text:"'What does a typical day look like in this role?'"}
      ]}
    ]
  },
  {
    id:"30dias", emoji:"📅", title:"Inglés en 30 días — Módulo 1", source:"Libro principal",
    desc:"Fundamentos: pronunciación, saludos, estructura básica, números y mini conversaciones.",
    sections:[
      {title:"Día 2 — Saludos",items:[
        {label:"Hello / Hi",text:"Hola — Hello formal e informal. Hi más informal."},
        {label:"How are you? / How's it going?",text:"¿Cómo estás? / ¿Cómo va todo?"},
        {label:"Nice to meet you",text:"Mucho gusto — primera vez que se conocen."},
        {label:"See you later",text:"Hasta luego — informal."}
      ]},
      {title:"Día 3 — Respuestas naturales",items:[
        {label:"I'm fine, thanks.",text:"Estoy bien, gracias."},
        {label:"Pretty good!",text:"Bastante bien. (informal)"},
        {label:"Not bad.",text:"No está mal. (neutral)"},
        {label:"Truco",text:"Siempre agregá 'and you?' para mantener la conversación."}
      ]},
      {title:"Día 6 — Mini conversaciones",items:[
        {label:"Primer encuentro",text:"A: Hi! I'm Carlos. Nice to meet you. / B: Nice to meet you too!"},
        {label:"El clima",text:"A: It's cold today, isn't it? / B: Yes! Very cold. I need a jacket."},
        {label:"En el trabajo",text:"A: Ready for the meeting? / B: Almost! Give me five minutes. / A: No problem, take your time."}
      ]}
    ]
  }
];
