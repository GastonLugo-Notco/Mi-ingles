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
  },
  {
    id:16, date:"2025-06-11", titulo:"Noticias del trabajo, this/that/these/those y hope",
    vocab:[
      {en:"expectant",pron:"",es:"expectante"},
      {en:"announcement",pron:"",es:"anuncio"},
      {en:"restructuring",pron:"",es:"reestructuración"},
      {en:"worried",pron:"",es:"preocupado/a"},
      {en:"positive mindset",pron:"",es:"mentalidad positiva"},
      {en:"hope",pron:"",es:"esperanza"},
      {en:"hopefully",pron:"",es:"con suerte / ojalá"},
      {en:"to think ahead",pron:"",es:"pensar hacia adelante / planificar"},
      {en:"go ahead",pron:"",es:"adelante"},
      {en:"these",pron:"/di-is/",es:"estos/estas (cerca, plural)"},
      {en:"those",pron:"/dóus/",es:"esos/esas (lejos, plural)"},
      {en:"difficult",pron:"/dífi-klt/",es:"difícil"}
    ],
    gramatica:[
      {titulo:"THIS / THAT / THESE / THOSE",formula:"THIS  → esto/esta (singular, cerca)\nTHAT  → eso/esa (singular, lejos)\nTHESE → estos/estas (plural, cerca)\nTHOSE → esos/esas (plural, lejos)",ejemplos:["I have this photo, look! (cerca, singular)","Do you like that house, the last one in the block? (lejos, singular)","These cats are very beautiful. (cerca, plural)"]}
    ],
    correcciones:[
      {wrong:"I am expectante",right:"I am EXPECTANT"},
      {wrong:"yesterday announced that notco is sold",right:"Yesterday THERE WAS AN ANNOUNCEMENT ABOUT NOTCO BEING SOLD TO..."},
      {wrong:"(fue) very fast the comunication",right:"The communication WAS very fast."},
      {wrong:"and today (brindar) more information",right:"and today THEY WILL BRING more information"},
      {wrong:"because is restruction very big",right:"because the work positions will be reduced significantly"},
      {wrong:"i am Little worrie",right:"I am a little worried"},
      {wrong:"that breaking news is serius",right:"That breaking news is serious"}
    ],
    frases:[
      {en:"I am 100% certain we will be OK.",es:"Estoy 100% seguro de que vamos a estar bien."},
      {en:"It is so sad.",es:"Es tan triste."},
      {en:"Before the bad news, we still have hope.",es:"Antes de la mala noticia, todavía tenemos esperanza."},
      {en:"Hopefully, I will get the job soon.",es:"Con suerte, voy a conseguir el trabajo pronto."}
    ]
  },
  {
    id:17, date:"2025-06-16", titulo:"Rutinas, libros de Euge y emphasis con DO",
    vocab:[
      {en:"sleepy",pron:"",es:"con sueño / dormido"},
      {en:"third",pron:"",es:"tercero"},
      {en:"to wake up feeling like working",pron:"",es:"despertarse con ganas de trabajar"},
      {en:"locked",pron:"",es:"encerrado/a"},
      {en:"dark story",pron:"",es:"historia oscura"},
      {en:"bullying",pron:"",es:"acoso escolar"},
      {en:"secondary (school)",pron:"",es:"secundaria"},
      {en:"inspired in real life",pron:"",es:"inspirado en la vida real"},
      {en:"trial",pron:"",es:"juicio"},
      {en:"domestic violence",pron:"",es:"violencia doméstica"},
      {en:"psychological",pron:"",es:"psicológico"},
      {en:"paranormal",pron:"",es:"paranormal"},
      {en:"reviews",pron:"",es:"reseñas / críticas"},
      {en:"publisher",pron:"",es:"editorial"},
      {en:"You're welcome",pron:"",es:"De nada (moderno)"},
      {en:"Don't mention it",pron:"",es:"De nada (antiguo)"},
      {en:"blankets",pron:"",es:"mantas"},
      {en:"slept",pron:"",es:"dormí/dormiste (pasado de sleep)"}
    ],
    gramatica:[
      {titulo:"Emphasis con DO/DOES (énfasis)",formula:"I love you. → neutro\nI DO love you. → énfasis, lo digo en serio\nI do believe you. = I REALLY believe you.",ejemplos:["I DO love you.","I do believe you. (= I really believe you.)"]},
      {titulo:"have breakfast / lunch / dinner",formula:"have breakfast = desayunar\nhave lunch = almorzar\nhave dinner = cenar",ejemplos:["Do you have breakfast every day?","I first brush my teeth, then I have breakfast."]}
    ],
    correcciones:[
      {wrong:"i am cold and sleep",right:"I am cold and SLEEPY"},
      {wrong:"what (de que tema trata) you new book?",right:"What topic is your book about?"},
      {wrong:"your book is inspiration in life real?",right:"Is your book inspired in real life?"},
      {wrong:"i think you write topic more quait",right:"I think you wrote QUIETER TOPICS"},
      {wrong:"i firt brash my teeth",right:"I first brush my teeth"}
    ],
    frases:[
      {en:"You wake up feeling like working.",es:"Te despertás con ganas de trabajar."},
      {en:"Both activities are heaven for me.",es:"Las dos actividades son el cielo para mí."},
      {en:"I followed the trial and wanted to write about it.",es:"Seguí el juicio y quise escribir sobre eso."},
      {en:"You are welcome.",es:"De nada. (forma moderna)"},
      {en:"Don't mention it.",es:"De nada. (forma antigua)"},
      {en:"What do you do for a living?",es:"¿A qué te dedicás?"}
    ]
  },
  {
    id:18, date:"2025-06-18", titulo:"Frío extremo, descripciones con adjetivos y Verb To Be completo",
    vocab:[
      {en:"freezing cold",pron:"",es:"un frío que cala los huesos"},
      {en:"blankets",pron:"",es:"mantas"},
      {en:"air conditioning",pron:"",es:"aire acondicionado"},
      {en:"a bag of hot water",pron:"",es:"una bolsa de agua caliente"},
      {en:"an 80-year-old man",pron:"",es:"un hombre de 80 años"},
      {en:"to incorporate",pron:"",es:"incorporar"},
      {en:"winter holidays",pron:"",es:"vacaciones de invierno"},
      {en:"comfortable",pron:"",es:"cómodo"},
      {en:"as time goes by",pron:"",es:"con el paso del tiempo"},
      {en:"mountains",pron:"",es:"montañas"},
      {en:"one hundred / one thousand",pron:"/záusen/",es:"cien / mil"},
      {en:"lawyer",pron:"",es:"abogado/a"}
    ],
    gramatica:[
      {titulo:"Orden de adjetivos antes del sustantivo (regla importante)",formula:"Lo que describe SIEMPRE va ADELANTE del sustantivo en inglés:\n'I am AN 80-YEAR-OLD sir' (NO 'I am sir 80 years')",ejemplos:["I am an 80-year-old man.","It is very difficult TO incorporate. (no 'incorpotate')"]},
      {titulo:"Verb To Be — afirmación, negación y pregunta (todas las personas)",formula:"I am / I am not / Am I?\nYou are / You aren't / Are you?\nHe-She-It is / isn't / Is he-she-it?\nWe are / We aren't / Are we?",ejemplos:["I am young. / I am not young. / Am I young?","He is a lawyer. / He isn't a lawyer. / Is he a lawyer?","It is sunny today. / It isn't sunny today. / Is it sunny today?"]},
      {titulo:"Present Simple — repaso completo con DO/DOES",formula:"I go shopping. / I don't go shopping. / Do you go shopping?\nShe writes books. / She doesn't write books. / Does she write books?",ejemplos:["Do you go shopping sometimes? Yes, I do.","Does she write books? Yes, she does."]}
    ],
    correcciones:[
      {wrong:"and air condition",right:"air CONDITIONING"},
      {wrong:"blankets and bag hot wáter",right:"blankets and a bag OF hot water"},
      {wrong:"i am sir 80 years",right:"I am AN 80-YEAR-OLD sir"},
      {wrong:"is very dificult incorpotate",right:"It is very difficult TO incorporate"},
      {wrong:"in Winter i dont go to the home",right:"In winter I don't want to go anywhere / go out"},
      {wrong:"i don't months especific",right:"I don't have specific months. It depends on many things, so I decide as time goes by."},
      {wrong:"the holidays if my dreams in winter",right:"The holidays of my dreams in winter WOULD BE in Europe in summer"}
    ],
    frases:[
      {en:"We needed two blankets!",es:"¡Necesitamos dos mantas!"},
      {en:"Winter is coming!",es:"¡Se viene el invierno!"},
      {en:"It is more comfortable staying home.",es:"Es más cómodo quedarse en casa."},
      {en:"What was the weather like?",es:"¿Cómo estaba el clima?"},
      {en:"Which cities did you visit?",es:"¿Qué ciudades visitaste?"},
      {en:"Is she Italian? Yes, she is.",es:"¿Ella es italiana? Sí."}
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
