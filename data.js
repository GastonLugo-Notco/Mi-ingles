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
  },
  {
    id:19, date:"2025-06-24", titulo:"Emojis, trabajo de Notco, partido y palabras expresivas",
    vocab:[
      {en:"darkness",pron:"",es:"oscuridad"},
      {en:"common",pron:"",es:"común / normal"},
      {en:"weird",pron:"",es:"raro / extraño"},
      {en:"still",pron:"",es:"todavía / aún"},
      {en:"waiting",pron:"",es:"esperando (NOT 'londing')"},
      {en:"looking for a job",pron:"",es:"buscando trabajo"},
      {en:"amazing",pron:"",es:"increíble / asombroso"},
      {en:"astonishing",pron:"",es:"asombroso"},
      {en:"stunning",pron:"",es:"impresionante"},
      {en:"awesome",pron:"",es:"genial / increíble"},
      {en:"enthusiastic",pron:"",es:"entusiasmado/a"},
      {en:"relaxing",pron:"",es:"relajante (adjetivo)"},
      {en:"oven / stove",pron:"",es:"horno"},
      {en:"leaf",pron:"",es:"hoja (de árbol o planta)"},
      {en:"leaves",pron:"",es:"hojas (plural de leaf)"},
      {en:"priorities",pron:"",es:"prioridades"},
      {en:"enjoy it",pron:"",es:"disfrutalo"}
    ],
    gramatica:[
      {titulo:"Gerundio después de preposición o verbo",
       formula:"It is strange TAKING the class at this time.\n(NOT: 'it is strange TO TAKE' después de 'strange')\nI am looking FOR A JOB. (NOT 'searching working')",
       ejemplos:["It is strange taking the class at this time.","I am looking for a job.","More relaxing (NOT 'more relax')"]},
      {titulo:"Sinónimos expresivos para 'increíble'",
       formula:"amazing · astonishing · stunning · awesome · wonderful · incredible · magnificent",
       ejemplos:["What an amazing match!","The game was absolutely stunning.","That was awesome!"]}
    ],
    correcciones:[
      {wrong:"it is stranger the class this hours",right:"It is strange TAKING THE CLASS AT THIS TIME."},
      {wrong:"more relax",right:"more relaxING (adjetivo: relajante)"},
      {wrong:"we continuos sin information",right:"We are still without any news."},
      {wrong:"speaking week comming",right:"They said maybe next week."},
      {wrong:"i am very relax, londing",right:"I am very relaxed, waiting."},
      {wrong:"in the moment i searching working",right:"I am looking for a job."},
      {wrong:"you are watch match?",right:"Did you watch the match? (past simple)"},
      {wrong:"very late nigth",right:"very late AT night"},
      {wrong:"on satudary match and sanday race",right:"On Saturday the match / On Sunday the F1 race"}
    ],
    frases:[
      {en:"It is strange taking the class at this time.",es:"Es raro tomar la clase a esta hora."},
      {en:"We are still without any news.",es:"Todavía estamos sin novedades."},
      {en:"They said maybe next week.",es:"Dijeron que quizás la semana que viene."},
      {en:"Don't get anxious, please.",es:"No te pongas ansioso, por favor."},
      {en:"I am looking for a job.",es:"Estoy buscando trabajo."},
      {en:"Don't try to do two things at once.",es:"No intentes hacer dos cosas a la vez."},
      {en:"Enjoy it!",es:"¡Disfrutalo!"},
      {en:"The potato pie has to be in the oven for an hour.",es:"El pastel de papa tiene que estar en el horno una hora."},
      {en:"A thousand leaves of potato.",es:"Mil hojas de papa (nombre del plato)."}
    ]
  },
  {
    id:20, date:"2025-06-25", titulo:"Despedida de Notco, artículos y descripciones personales",
    vocab:[
      {en:"farewell",pron:"",es:"despedida"},
      {en:"strange / weird",pron:"/guíerd/",es:"raro / extraño"},
      {en:"cycle",pron:"",es:"ciclo"},
      {en:"period",pron:"",es:"período / etapa"},
      {en:"salad",pron:"",es:"ensalada"},
      {en:"meal",pron:"",es:"comida (del día)"},
      {en:"dinner",pron:"",es:"cena"},
      {en:"dessert",pron:"/disért/",es:"postre"},
      {en:"desert",pron:"/désert/",es:"desierto"},
      {en:"acid",pron:"",es:"ácido"},
      {en:"hard working",pron:"",es:"trabajador/a"},
      {en:"creative",pron:"",es:"creativo/a"},
      {en:"moody",pron:"",es:"temperamental (un minuto bien, al siguiente enojado)"},
      {en:"cheerful",pron:"",es:"alegre"},
      {en:"extrovert / introvert",pron:"",es:"extrovertido / introvertido"},
      {en:"strangers",pron:"",es:"desconocidos"},
      {en:"upside down",pron:"",es:"al revés / boca abajo"},
      {en:"already",pron:"",es:"ya (algo que ya ocurrió)"},
      {en:"not yet",pron:"",es:"todavía no"},
      {en:"solved",pron:"",es:"resuelto"}
    ],
    gramatica:[
      {titulo:"Artículos: THE vs A/AN",
       formula:"THE = el/la/los/las (algo específico, ya conocido)\nA/AN = un/una (algo nuevo, no específico)\n\nThe problem I told you about is already solved. (ese problema específico)\nI saw A nice dog in the garden. (un perro cualquiera)",
       ejemplos:["The lemon (ese limón específico) / A lemon (un limón cualquiera)","I go to my parents' house. (la casa específica de mis padres)"]},
      {titulo:"Verb To Be — respuestas cortas afirmativas y negativas",
       formula:"Is your house small? No, it ISN'T.\nAre you married? No, I'M NOT.\nAre Tom and Nick at home? Yes, they ARE.\nIs the Argentine flag red? No, it ISN'T.\nAre we German? No, we AREN'T.",
       ejemplos:["Is the lemon acid? Yes, it is.","Are you ready? No, I'm not."]},
      {titulo:"Present Perfect para experiencias y estados continuos",
       formula:"I HAVE BEEN feeling for a long time that my cycle is over.\n(algo que empezó en el pasado y sigue hasta hoy)\n\nhave been + verb-ING = he estado...",
       ejemplos:["I have been feeling that my cycle at Notco is over.","I have been getting ready for it."]}
    ],
    correcciones:[
      {wrong:"i don't sad, but is stranger",right:"I am NOT sad, but IT'S STRANGE."},
      {wrong:"i feel at time what the finish cycle in notco so i the prepare",right:"I have been feeling for a long time that my period at Notco is over, so I have been getting ready for it."},
      {wrong:"more less, a finish the clase i go to office",right:"More or less. After the class I go to the office."},
      {wrong:"more late we do after office de despedida",right:"Later we have a farewell gathering after the office."},
      {wrong:"i sent information for whatsapp",right:"I will send you the info by WhatsApp."}
    ],
    frases:[
      {en:"Do you have a hard day ahead?",es:"¿Tenés un día difícil por delante?"},
      {en:"I have been feeling for a long time that my cycle is over.",es:"Hace tiempo que siento que mi ciclo terminó."},
      {en:"I have been getting ready for it.",es:"Me he estado preparando para eso."},
      {en:"I am not sad, but it's strange.",es:"No estoy triste, pero es raro."},
      {en:"The problem I told you about is already solved.",es:"El problema del que te hablé ya está resuelto."},
      {en:"I saw a nice dog in the garden yesterday.",es:"Ayer vi un lindo perro en el jardín."},
      {en:"I consider myself a cheerful person.",es:"Me considero una persona alegre."},
      {en:"I am extrovert with friends and introvert with strangers.",es:"Soy extrovertido con amigos e introvertido con desconocidos."},
      {en:"Depending on...",es:"Depende de..."},
      {en:"Not yet.",es:"Todavía no."}
    ]
  },
  {
    id:21, date:"2025-06-30", titulo:"Presentación del libro, leyenda del hilo rojo y vocabulario narrativo",
    vocab:[
      {en:"presentation",pron:"",es:"presentación"},
      {en:"mess",pron:"",es:"desastre / caos (estado de un lugar)"},
      {en:"chaos / chaotic",pron:"",es:"caos / caótico"},
      {en:"writer",pron:"",es:"escritor/a"},
      {en:"topic",pron:"",es:"tema"},
      {en:"thread",pron:"",es:"hilo"},
      {en:"the red thread",pron:"",es:"el hilo rojo"},
      {en:"legend",pron:"",es:"leyenda"},
      {en:"invisible",pron:"",es:"invisible"},
      {en:"connects / links",pron:"",es:"une / conecta"},
      {en:"tense",pron:"",es:"tensionar / tensar"},
      {en:"stretch",pron:"",es:"estirar"},
      {en:"broken",pron:"",es:"roto / cortado"},
      {en:"fictional",pron:"",es:"ficticio / de ficción"},
      {en:"publisher",pron:"",es:"editorial"},
      {en:"flyer",pron:"",es:"volante / folleto"},
      {en:"remind",pron:"",es:"recordar (a alguien algo)"},
      {en:"all the contrary",pron:"",es:"todo lo contrario"},
      {en:"the girl next door",pron:"",es:"la chica de al lado (expresión)"},
      {en:"one flat is empty",pron:"",es:"un departamento está vacío"}
    ],
    gramatica:[
      {titulo:"Posesivo con apóstrofe — repaso",
       formula:"my friend's book  →  el libro de mi amigo\nEuge's book  →  el libro de Euge\nI go to my parents' house  →  voy a la casa de mis padres",
       ejemplos:["What is your friend's book about?","The publisher's office is in Mendoza."]},
      {titulo:"Contrario: 'all the contrary'",
       formula:"I don't get angry easily — all the contrary.\n= No me enojo fácilmente — todo lo contrario.\n\nSometimes / All the contrary → expresiones de contraste",
       ejemplos:["Is she shy? All the contrary, she's very outgoing.","I don't dislike it — all the contrary, I love it."]}
    ],
    correcciones:[
      {wrong:"in saturday a friend presentation a book in my sum of building",right:"On Saturday a friend of mine made his book presentation at my building."},
      {wrong:"i organation for event",right:"I organized the event."},
      {wrong:"yesterday i am not in my house, so my house today is caos",right:"Yesterday I was not at home, so my house today is a MESS."},
      {wrong:"the topic is hilo red",right:"The topic of the book is THE RED THREAD."},
      {wrong:"the book is inspration in legend the red thread",right:"The book is inspired by the legend of the red thread."},
      {wrong:"tell his expirience whith love a traves the fiction",right:"It tells his own experience in love through fiction."},
      {wrong:"you konw legend the red thread?",right:"Do you know the Red Thread legend?"},
      {wrong:"exist an red theared invisible what link to the peaple for resto the life",right:"The legend says there is an invisible red thread which connects people for the rest of their lives."},
      {wrong:"i have more information. the Publisher it is in mendoza",right:"I have more information. The publisher IS in Mendoza."}
    ],
    frases:[
      {en:"The legend says there is an invisible red thread which connects people.",es:"La leyenda dice que existe un hilo rojo invisible que une a las personas."},
      {en:"That thread can tense or stretch, but can never get broken.",es:"Ese hilo puede tensionarse o estirarse, pero nunca puede romperse."},
      {en:"The book tells his own experience in love through fiction.",es:"El libro cuenta su propia experiencia en el amor a través de la ficción."},
      {en:"There is a real part and a fictional part.",es:"Hay una parte real y una parte ficticia."},
      {en:"Remind me please, I don't remember it very well.",es:"Recordámelo por favor, no lo recuerdo muy bien."},
      {en:"I don't get angry easily — all the contrary.",es:"No me enojo fácilmente — todo lo contrario."},
      {en:"Sometimes / All the contrary",es:"A veces / Todo lo contrario"},
      {en:"My hair is chaotic.",es:"Mi pelo está caótico."},
      {en:"One flat is empty.",es:"Un departamento está vacío."},
      {en:"The girl next door.",es:"La chica de al lado."}
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

// ─── GUÍAS COMPLETAS ─────────────────────────────────────────────────────────
const GUIDES = [
  {
    id:"rutina", emoji:"⏱️", title:"Rutina de 10 minutos por día",
    source:"Bono 2", desc:"El método realista para aprender inglés sin tener tiempo. Consistencia diaria supera a sesiones largas.",
    sections:[
      {title:"La fórmula 3-3-2-2 (estructura diaria fija)",items:[
        {label:"0-3 min → INPUT: Escuchar",text:"Escuchá un audio, canción o diálogo corto sin interrupciones. Identificá palabras conocidas. No importa entender todo. Opciones: canción (repetí el coro), audio de la guía, diálogo corto, video de YouTube/TikTok."},
        {label:"3-6 min → REPETICIÓN ACTIVA: Shadowing",text:"Repetí en voz alta las frases identificadas imitando el ritmo y la entonación. Repetí la misma frase al menos 5 veces antes de pasar a la siguiente. Una vez por semana, grabate para comparar."},
        {label:"6-8 min → PRODUCCIÓN: Hablar",text:"Creá 3 frases propias con las palabras nuevas. Respondé una pregunta guía en voz alta.\nLunes: 'What did you do this morning?' / Martes: 'What do you like about your job?' / Miércoles: 'Describe your home in 3 sentences.' / Jueves: 'What are your plans for the weekend?' / Viernes: 'Tell me about someone you admire.'"},
        {label:"8-10 min → REVISIÓN RÁPIDA",text:"Releé las frases del día. Escuchá el audio brevemente. Marcá el checklist: ☑ Escuché ☑ Repetí en voz alta ☑ Creé frases propias ☑ Revisé."}
      ]},
      {title:"Plan de 30 días (resumen de las 4 semanas)",items:[
        {label:"Semana 1 — Frases Básicas (días 1-7)",text:"Presentaciones, saludos, números, familia, lugares. Objetivo: hablar sobre vos mismo con confianza."},
        {label:"Semana 2 — Conversaciones (días 8-14)",text:"Hacer preguntas, expresar gustos, hablar del trabajo, planes y futuro, opinar, contar historias."},
        {label:"Semana 3 — Situaciones Reales (días 15-21)",text:"Restaurante, trabajo, viajes, compras, teléfono, emergencias. Objetivo: manejar situaciones cotidianas."},
        {label:"Semana 4 — Fluidez (días 22-30)",text:"Conectores, hablar más rápido, monólogo de 2 minutos, expresiones idiomáticas, storytelling, evaluación final."}
      ]},
      {title:"Reglas de oro",items:[
        {label:"No negociar los 10 minutos",text:"Sin importar qué tan ocupado estés, estos 10 minutos son innegociables. 10 min diarios × 365 días = +60 horas de práctica enfocada."},
        {label:"Plan B para días imposibles (5 minutos)",text:"0-2 min: Escuchá una canción con atención. 2-4 min: Repetí el coro 5 veces en voz alta. 4-5 min: Decí 2 frases propias. Nunca uses el Plan B dos días seguidos."},
        {label:"Errores comunes a evitar",text:"1) Solo leer, nunca hablar. 2) No hablar en voz alta (repetir mentalmente no activa los mismos circuitos). 3) No repetir suficiente (una frase necesita 10-20 repeticiones para quedar). 4) Saltarse días. 5) Buscar la perfección antes de hablar."},
        {label:"Tabla de canciones útiles",text:"'Shape of You' → 'I'm in love with...' (adaptable) / 'Someone Like You' → 'Never mind...' / 'Counting Stars' → 'I've been losing sleep thinking about...' / 'Shallow' → 'Tell me something about...'"}
      ]}
    ]
  },
  {
    id:"pronunciacion", emoji:"🗣️", title:"Guía Maestra de Pronunciación",
    source:"Bono 3", desc:"5 módulos: sonidos esenciales, diptongos, ritmo, acento y entrenamiento intensivo con trabalenguas.",
    sections:[
      {title:"Módulo 1 — Fundamentos",items:[
        {label:"Principio clave: No se pronuncia como se escribe",text:"La 'a' puede sonar: cat /æ/ · cake /eɪ/ · car /ɑː/ · about /ə/. El español tiene ritmo silábico (cada sílaba igual). El inglés tiene ritmo acentual: algunas sílabas son largas y fuertes, otras se reducen drásticamente."},
        {label:"Vocales cortas vs largas — los pares más importantes",text:"ship /ʃɪp/ vs sheep /ʃiːp/ — Corta: labios relajados. Larga: estirar como una sonrisa.\nlive /lɪv/ vs leave /liːv/ — Corta: rápida. Larga: sostenida.\nfull /fʊl/ vs fool /fuːl/ — Corta: labios redondeados pero relajados.\nhat /hæt/ vs hate /heɪt/ — Corta: boca muy abierta. Larga: diptongo."},
        {label:"Consonantes problemáticas para hispanohablantes",text:"th sorda /θ/ (think, three, bath): lengua ENTRE los dientes, soplar SIN vibrar. Error: pronunciar como 't' o 's'.\nth sonora /ð/ (this, the, that): mismo que /θ/ pero VIBRANDO las cuerdas. Error: pronunciar como 'd'.\nv /v/ (van, very, love): MORDER el labio inferior con los dientes superiores y vibrar. Error: pronunciar como 'b'.\nr inglesa /r/ (red, right): doblar la lengua hacia atrás SIN tocar el paladar. Error: usar la 'r' española."}
      ]},
      {title:"Módulo 2 — Diptongos y terminaciones",items:[
        {label:"Los 8 diptongos principales",text:"/eɪ/ day, cake, rain — comenzá con /e/ y deslizá hacia /ɪ/.\n/aɪ/ my, time, fly — comenzá con boca abierta /a/ y cerrá hacia /ɪ/.\n/ɔɪ/ boy, coin, noise — comenzá con /ɔ/ y deslizá hacia /ɪ/.\n/aʊ/ now, house, out — comenzá con /a/ y redondeá los labios hacia /ʊ/.\n/oʊ/ go, home, know — comenzá con /o/ y deslizá hacia /ʊ/.\n/ɪə/ here, ear, fear — comenzá con /ɪ/ y abrí hacia /ə/."},
        {label:"Terminación -ED: 3 pronunciaciones",text:"/t/ después de consonante SORDA (p,k,f,s): worked /wɜːrkt/, laughed /læft/\n/d/ después de consonante SONORA o vocal: played /pleɪd/, called /kɔːld/\n/ɪd/ después de /t/ o /d/: wanted /ˈwɒntɪd/, needed /ˈniːdɪd/"},
        {label:"Terminación -S: 3 pronunciaciones",text:"/s/ después de consonante sorda (p,t,k,f): cats /kæts/, books /bʊks/\n/z/ después de consonante sonora o vocal: dogs /dɒgz/, cars /kɑːrz/\n/ɪz/ después de sibilantes (s,z,sh,ch): buses /ˈbʌsɪz/, watches /ˈwɒtʃɪz/"},
        {label:"Palabras que casi todos pronuncian mal",text:"comfortable /ˈkʌmftəbəl/ — 3 sílabas, no 4\nvegetable /ˈvedʒtəbəl/ — 3 sílabas, la 2ª 'e' desaparece\ninteresting /ˈɪntrɪstɪŋ/ — 3 sílabas, no 4\ndifferent /ˈdɪfrənt/ — 2 sílabas en habla natural\nbusiness /ˈbɪznɪs/ — la 'u' suena /ɪ/\ncolonel /ˈkɜːrnəl/ — se pronuncia 'kernel', la 'l' es muda\ndebt /det/ — la 'b' es completamente muda\nsubttle /ˈsʌtəl/ — la 'b' es completamente muda"}
      ]},
      {title:"Módulo 3 — Ritmo, énfasis y habla conectada",items:[
        {label:"Word stress: el acento cambia el significado",text:"REcord (sustantivo: disco) vs reCORD (verbo: grabar)\nPREsent (regalo) vs preSENT (presentar)\nPERmit (permiso) vs perMIT (permitir)\nOBject (objeto) vs obJECT (objetar)\nRegla general: sustantivos de 2 sílabas → acento en la 1ª. Verbos de 2 sílabas → acento en la 2ª."},
        {label:"Sentence stress: qué palabras enfatizar",text:"Las palabras de CONTENIDO (sustantivos, verbos, adjetivos, adverbios) reciben énfasis. Las de FUNCIÓN (artículos, preposiciones, pronombres, auxiliares) se reducen.\n'I WANT to BUY a NEW CAR.' — 'to' y 'a' casi desaparecen.\n'I didn't say HE stole it' vs 'I didn't say he STOLE it' — el énfasis cambia el mensaje."},
        {label:"Connected speech: formas reducidas del habla natural",text:"want to → wanna /ˈwɒnə/\ngoing to → gonna /ˈgɒnə/\nkind of → kinda /ˈkaɪndə/\ndid you → didja /ˈdɪdʒə/\nhave to → hafta /ˈhæftə/\nout of → outta /ˈaʊtə/\nNOTA: Estas formas son para comprensión y habla informal. En contextos formales o escritura, siempre usá las formas completas."}
      ]},
      {title:"Módulo 4 — Pronunciación avanzada y diferencias UK vs US",items:[
        {label:"Diferencias UK vs US principales",text:"Vocal /ɑː/ vs /æ/: bath UK /bɑːθ/ vs US /bæθ/\nR post-vocálica: UK no la pronuncia (car /kɑː/), US sí (car /kɑːr/)\nT intervocálica: UK clara, US suave como 'd' (water: UK /ˈwɔːtə/ vs US /ˈwɔːɾər/)\nschedule: UK /ˈʃedjuːl/ vs US /ˈskedjuːl/ — la diferencia más famosa\nRecomendación: elegí UNA variedad y sé consistente. El inglés americano es más común en medios; el británico en contextos académicos."},
        {label:"Reducción del acento: técnicas avanzadas",text:"Shadowing: escuchá a un hablante nativo y repetí exactamente al mismo tiempo. 15 min diarios durante 30 días producen resultados notables.\nGrabación y comparación: grabate leyendo un texto, luego compará con un nativo leyendo el mismo. Identificá diferencias específicas.\nLectura en voz alta: mínimo 10 min diarios. Enfocate en el ritmo y el acento oracional, no solo en los sonidos individuales."}
      ]},
      {title:"Módulo 5 — Trabalenguas fonéticos (practicá en voz alta)",items:[
        {label:"She sells seashells by the seashore.",text:"Objetivo: contraste /ʃ/ (sh) vs /s/. Fundamental para hispanohablantes."},
        {label:"The thirty-three thieves thought that they thrilled the throne throughout Thursday.",text:"Objetivo: sonido /θ/ (th sorda). El más importante para hispanohablantes."},
        {label:"Whether the weather be fine or whether the weather be not.",text:"Objetivo: contraste /θ/ (th sorda) vs /ð/ (th sonora). Diferencia entre 'think' y 'this'."},
        {label:"Red lorry, yellow lorry.",text:"Objetivo: sonido /r/ inglés en diferentes posiciones. Muy difícil para hispanohablantes."},
        {label:"Rubber baby buggy bumpers.",text:"Objetivo: consonante /b/ y vocal /ʌ/. La vocal central del inglés."},
        {label:"Six slippery snails slid slowly seaward.",text:"Objetivo: grupos consonánticos /sl/, /sn/. Práctica de clusters iniciales."},
        {label:"Instrucción",text:"Elegí 2 trabalenguas por semana. Practicá cada uno 3 veces lento, 3 a velocidad media y 3 rápido. Grabate en la versión rápida. El objetivo es la PRECISIÓN a cualquier velocidad, no la velocidad."}
      ]}
    ]
  },
  {
    id:"frases", emoji:"💬", title:"100+ Frases para Conversaciones Reales",
    source:"Bono 4", desc:"10 situaciones con IPA completo: trabajo, vecinos, escuela, supermercado, restaurante, gimnasio, transporte, médico, amigos y cotidiano.",
    sections:[
      {title:"En el trabajo (15 frases)",items:[
        {label:"Can you help me with this? /kæn juː help miː wɪð ðɪs/",text:"¿Podés ayudarme con esto?"},
        {label:"I'll send you the email. /aɪl send juː ðə ˈiːmeɪl/",text:"Te voy a enviar el correo."},
        {label:"Let's schedule a meeting. /lets ˈskedjuːl ə ˈmiːtɪŋ/",text:"Programemos una reunión."},
        {label:"I'm working on it. /aɪm ˈwɜːrkɪŋ ɒn ɪt/",text:"Estoy trabajando en eso."},
        {label:"When is the deadline? /wen ɪz ðə ˈdedlaɪn/",text:"¿Cuándo es la fecha límite?"},
        {label:"I'll get back to you. /aɪl get bæk tuː juː/",text:"Te respondo luego."},
        {label:"That makes sense. /ðæt meɪks sens/",text:"Tiene sentido."},
        {label:"Could you repeat that, please? /kʊd juː rɪˈpiːt ðæt pliːz/",text:"¿Podrías repetir eso?"},
        {label:"I need more time. /aɪ niːd mɔːr taɪm/",text:"Necesito más tiempo."},
        {label:"I'll take care of it. /aɪl teɪk keər ɒv ɪt/",text:"Yo me encargo."}
      ]},
      {title:"Con vecinos (15 frases)",items:[
        {label:"How long have you lived here? /haʊ lɒŋ hæv juː lɪvd hɪər/",text:"¿Cuánto tiempo llevás viviendo aquí?"},
        {label:"Nice weather today, isn't it? /naɪs ˈweðər təˈdeɪ ˈɪznt ɪt/",text:"Buen tiempo hoy, ¿verdad?"},
        {label:"Let me know if you need anything. /let miː nəʊ ɪf juː niːd ˈeniθɪŋ/",text:"Decime si necesitás algo."},
        {label:"Sorry about the noise. /ˈsɒri əˈbaʊt ðə nɔɪz/",text:"Disculpá por el ruido."},
        {label:"We should get together sometime. /wiː ʃʊd get təˈgeðər ˈsʌmtaɪm/",text:"Deberíamos juntarnos algún día."},
        {label:"See you around! /siː juː əˈraʊnd/",text:"¡Hasta luego!"},
        {label:"Take care! /teɪk keər/",text:"¡Cuidate!"}
      ]},
      {title:"En el restaurante (15 frases)",items:[
        {label:"Can I see the menu? /kæn aɪ siː ðə ˈmenjuː/",text:"¿Puedo ver el menú?"},
        {label:"I'd like to order, please. /aɪd laɪk tuː ˈɔːrdər pliːz/",text:"Me gustaría ordenar, por favor."},
        {label:"What do you recommend? /wɒt duː juː ˌrekəˈmend/",text:"¿Qué recomendás?"},
        {label:"Is this dish spicy? /ɪz ðɪs dɪʃ ˈspaɪsi/",text:"¿Este plato es picante?"},
        {label:"I'm allergic to nuts. /aɪm əˈlɜːrdʒɪk tuː nʌts/",text:"Soy alérgico/a a los frutos secos."},
        {label:"Can I have the bill? /kæn aɪ hæv ðə bɪl/",text:"¿Me traés la cuenta?"},
        {label:"Everything was delicious! /ˈevriθɪŋ wɒz dɪˈlɪʃəs/",text:"¡Todo estuvo delicioso!"},
        {label:"Could we get separate checks? /kʊd wiː get ˈsepərɪt tʃeks/",text:"¿Podemos pagar por separado?"},
        {label:"This is not what I ordered. /ðɪs ɪz nɒt wɒt aɪ ˈɔːrdərd/",text:"Esto no es lo que pedí."}
      ]},
      {title:"En el gimnasio (15 frases)",items:[
        {label:"Is this machine free? /ɪz ðɪs məˈʃiːn friː/",text:"¿Esta máquina está libre?"},
        {label:"How many sets are you doing? /haʊ ˈmeni sets ɑːr juː ˈduːɪŋ/",text:"¿Cuántas series vas a hacer?"},
        {label:"Can I work in with you? /kæn aɪ wɜːrk ɪn wɪð juː/",text:"¿Puedo alternar el ejercicio con vos?"},
        {label:"What's your workout routine? /wɒts jɔːr ˈwɜːrkaʊt ruːˈtiːn/",text:"¿Cuál es tu rutina de entrenamiento?"},
        {label:"I come here three times a week. /aɪ kʌm hɪər θriː taɪmz ə wiːk/",text:"Vengo aquí tres veces a la semana."},
        {label:"Keep going, you've got this! /kiːp ˈgoʊɪŋ juːv gɒt ðɪs/",text:"¡Seguí, vos podés!"}
      ]},
      {title:"En el médico (15 frases)",items:[
        {label:"I don't feel well. /aɪ dəʊnt fiːl wel/",text:"No me siento bien."},
        {label:"I have a headache. /aɪ hæv ə ˈhedeɪk/",text:"Tengo dolor de cabeza."},
        {label:"It hurts here. /ɪt hɜːrts hɪər/",text:"Me duele aquí."},
        {label:"I've been feeling like this for two days. /aɪv biːn ˈfiːlɪŋ laɪk ðɪs fər tuː deɪz/",text:"Me siento así hace dos días."},
        {label:"I'm allergic to penicillin. /aɪm əˈlɜːrdʒɪk tuː ˌpenɪˈsɪlɪn/",text:"Soy alérgico/a a la penicilina."},
        {label:"Is it serious? /ɪz ɪt ˈsɪəriəs/",text:"¿Es grave?"},
        {label:"Where is the nearest pharmacy? /weər ɪz ðə ˈnɪərɪst ˈfɑːrməsi/",text:"¿Dónde está la farmacia más cercana?"}
      ]},
      {title:"Haciendo nuevos amigos (15 frases)",items:[
        {label:"Nice to meet you! /naɪs tuː miːt juː/",text:"¡Mucho gusto!"},
        {label:"What do you do? /wɒt duː juː duː/",text:"¿A qué te dedicás?"},
        {label:"Where are you from originally? /weər ɑːr juː frɒm əˈrɪdʒɪnəli/",text:"¿De dónde sos originalmente?"},
        {label:"I totally agree with you. /aɪ ˈtəʊtəli əˈgriː wɪð juː/",text:"Estoy totalmente de acuerdo con vos."},
        {label:"We should hang out sometime. /wiː ʃʊd hæŋ aʊt ˈsʌmtaɪm/",text:"Deberíamos salir algún día."},
        {label:"I'm glad we met! /aɪm glæd wiː met/",text:"¡Me alegra que nos hayamos conocido!"}
      ]},
      {title:"Situaciones cotidianas (15 frases)",items:[
        {label:"I'm running late. /aɪm ˈrʌnɪŋ leɪt/",text:"Voy con retraso."},
        {label:"Never mind. /ˈnevər maɪnd/",text:"No importa / Olvidalo."},
        {label:"Could you say that more slowly? /kʊd juː seɪ ðæt mɔːr ˈsləʊli/",text:"¿Podrías decirlo más despacio?"},
        {label:"No worries! /nəʊ ˈwʌriz/",text:"¡Sin problema!"},
        {label:"I'll be right back. /aɪl biː raɪt bæk/",text:"Ahora vuelvo."},
        {label:"Let me think about it. /let miː θɪŋk əˈbaʊt ɪt/",text:"Déjame pensarlo."},
        {label:"I know what you mean. /aɪ nəʊ wɒt juː miːn/",text:"Entiendo lo que querés decir."},
        {label:"Not for all the money in the world.",text:"Ni por toda la plata del mundo. /nɒt fər ɔːl ðə ˈmʌni ɪn ðə wɜːld/"}
      ]}
    ]
  },
  {
    id:"miedo", emoji:"🎤", title:"Perdé el miedo a hablar inglés",
    source:"Bono 5", desc:"Método práctico: las 5 raíces del miedo, la escalera de desensibilización y entrenamiento real de 7 días.",
    sections:[
      {title:"Las 5 raíces del miedo",items:[
        {label:"1. Miedo a equivocarse",text:"'Si digo algo mal, la gente pensará que soy ignorante.' La realidad: nadie deja de comunicarse por un error gramatical. El error ES el método de aprendizaje."},
        {label:"2. Miedo a la burla",text:"'Se van a reír de mi pronunciación.' En la mayoría de contextos reales, las personas valoran el esfuerzo. La burla existe casi solo en nuestra imaginación."},
        {label:"3. Miedo a no sonar perfecto",text:"'Quiero sonar como un nativo antes de hablar.' Este estándar imposible se convierte en excusa permanente para no empezar."},
        {label:"4. Comparación con nativos",text:"Compararte con alguien que aprendió el idioma desde que nació no es justo ni útil. El 90% de hablantes de inglés en el mundo NO son nativos."},
        {label:"5. Parálisis por sobrepensar",text:"'Traduzco mentalmente, reviso la gramática y... el momento pasa.' Pensar demasiado es el enemigo directo de la comunicación fluida."}
      ]},
      {title:"La escalera del miedo — 5 niveles progresivos",items:[
        {label:"Nivel 1 — Hablar solo/a (diario 5 min)",text:"Describí en voz alta lo que ves en tu habitación: 'This is my desk. There is a lamp...' Sin audiencia, sin presión. Objetivo: eliminar el silencio interno."},
        {label:"Nivel 2 — Grabarte (3 veces por semana)",text:"Grabate 1 minuto describiendo tu día. Escuchate después. Notá UNA cosa que hiciste bien — no la lista de errores."},
        {label:"Nivel 3 — Enviar audio a alguien (2 veces por semana)",text:"Mandá un mensaje de voz en inglés a un amigo. 'Hey! Just practicing my English today.' El objetivo es enviarlo, no que respondan en inglés."},
        {label:"Nivel 4 — Conversación corta planificada (1 vez por semana)",text:"Acordá con alguien hablar en inglés 10 minutos sobre un tema elegido de antemano."},
        {label:"Nivel 5 — Conversación espontánea",text:"Respondé en inglés sin preparación previa. En clase, en el trabajo, en una tienda."}
      ]},
      {title:"Entrenamiento de 7 días",items:[
        {label:"Día 1 — Leer 10 frases en voz alta",text:"Con pausa de 3 segundos entre cada una: 'I don't need to be perfect to communicate.' / 'Every mistake helps me improve.' / 'My accent is part of who I am.' / 'I choose to speak instead of staying silent.' No leas en tu cabeza — tu boca debe moverse."},
        {label:"Día 2 — Grabarte 1 minuto",text:"Tema: tu rutina de la mañana en inglés. 'I wake up at ___.' / 'Then I ___.' / 'After that I ___.' No pares el audio aunque cometas errores."},
        {label:"Día 3 — Repetir el audio original",text:"Escuchá el audio del Día 2, luego grabate de nuevo. Más fluidez, no más perfección. El objetivo es menos pausas, no menos errores."},
        {label:"Día 4 — Mini monólogo (2 minutos)",text:"Tema libre: por qué aprendés inglés, qué situaciones te dan miedo, qué esperás lograr. Sin parar el audio durante 2 minutos."},
        {label:"Día 5 — Simular una conversación",text:"Grabate haciendo DOS roles: Persona A pregunta, Persona B responde. Hacé los dos roles vos. Pausá 3 segundos entre turnos."},
        {label:"Día 6 — Enviar audio a alguien real",text:"'Hey! I'm practicing my English. I wanted to send you a message in English today. Hope you're having a great day!' Enviarlo SIN escucharlo antes."},
        {label:"Día 7 — Conversación real de 3 minutos",text:"Con una persona real: en persona, videollamada, o apps como Tandem/HelloTalk. Tema libre. Si te bloqueás: 'Sorry, let me think for a second.' o 'How do you say _____ in English?'"}
      ]},
      {title:"Frases de emergencia y reprogramación mental",items:[
        {label:"Frases de emergencia (memorizalas)",text:"No encontrás la palabra → 'I don't know the exact word, but it's like...'\nNecesitás tiempo → 'Let me think about that for a second...'\nNo entendiste → 'Sorry, could you repeat that more slowly?'\nTe bloqueaste → 'Anyway, what I was trying to say is...'\nCometiste un error → 'Well, something like that — you know what I mean.'\nGanás tiempo → 'That's a great question. I think...'"},
        {label:"Reemplazos mentales (decílos en voz alta 3 veces)",text:"❌ 'Voy a sonar mal.' → ✅ 'I am going to practice. Sounding imperfect is part of learning.'\n❌ 'No estoy listo todavía.' → ✅ 'Practicing IS being ready. There is no other way to prepare.'\n❌ 'Me van a juzgar.' → ✅ 'Most people respect the effort of speaking another language.'\n❌ 'Nunca voy a hablar como ellos.' → ✅ 'I don't need to speak like them. I need to communicate. And I can do that.'"}
      ]}
    ]
  },
  {
    id:"entrevistas", emoji:"👔", title:"Inglés para entrevistas laborales",
    source:"Bono 6", desc:"Manual completo: estructura STAR, 8 preguntas clásicas con respuestas modelo, vocabulario profesional con IPA y 5 simulaciones.",
    sections:[
      {title:"Estructura de una entrevista en inglés",items:[
        {label:"El orden típico",text:"1. Bienvenida (small talk) → 2. 'Tell me about yourself' → 3. Preguntas de experiencia → 4. Preguntas de comportamiento ('Tell me about a time when...') → 5. Preguntas situacionales ('What would you do if...') → 6. Cierre y preguntas del candidato."},
        {label:"Diferencias culturales clave",text:"En entrevistas anglosajonas: se espera que hablés de tus logros con SEGURIDAD (no es arrogancia). Las preguntas al entrevistador son muy valoradas. Las respuestas deben ser estructuradas (STAR). El contacto visual es importante.\nClave: 'I led a team of 10 people' o 'I increased sales by 30%' no es arrogancia — es exactamente lo que buscan."}
      ]},
      {title:"Tell me about yourself — estructura de 4 partes",items:[
        {label:"Fórmula Presente → Experiencia → Logros → Objetivo (60-90 segundos)",text:"PRESENTE: 'Currently, I work as a...' (tu rol actual)\nEXPERIENCIA: 'I have X years of experience in...' (tu trayectoria)\nLOGROS: 'In my last role, I increased/reduced/managed...' (un resultado con número)\nOBJETIVO: 'I'm excited about this opportunity because...' (por qué esta empresa)"},
        {label:"Ejemplo — perfil emprendedor/gastronómico",text:"'Currently, I lead a gastronomic project and organize private events. I have 8 years of experience in the food industry and project management. In my project, I have successfully managed client relationships and event logistics. I'm excited about this opportunity because I want to bring my entrepreneurial skills to a structured team environment.'"},
        {label:"Pronunciación IPA de frases clave",text:"currently /ˈkʌrəntli/ · experience /ɪkˈspɪəriəns/ · opportunity /ˌɒpəˈtjuːnɪti/ · excited /ɪkˈsaɪtɪd/ · achievement /əˈtʃiːvmənt/ · responsible for /rɪˈspɒnsɪbəl fɔː/"}
      ]},
      {title:"Las 8 preguntas clásicas",items:[
        {label:"Why do you want this job?",text:"ESTRUCTURA: 1. Algo específico de la empresa → 2. Conexión con tu experiencia → 3. Valor que podés aportar. NUNCA respuesta genérica tipo 'porque quiero crecer'."},
        {label:"Why should we hire you?",text:"Tu propuesta de valor única: habilidad + resultado concreto que la prueba + lo que harás por ellos. NUNCA modestia excesiva."},
        {label:"What are your strengths?",text:"Fortaleza → Ejemplo específico → Resultado. NUNCA solo 'I am very responsible' sin demostración."},
        {label:"What are your weaknesses?",text:"Debilidad real (no crítica para el rol) + lo que estás haciendo para mejorar. NUNCA 'I have no weaknesses'."},
        {label:"Where do you see yourself in 5 years?",text:"Ambición alineada con crecer DENTRO de la empresa. Respuestas vagas o demasiado ambiciosas son señales negativas."},
        {label:"Why did you leave your last job?",text:"NUNCA hablar mal del empleador anterior. Respuesta orientada al futuro: 'I had achieved everything I set out to accomplish there. I'm ready for a new challenge.'"},
        {label:"Can you work under pressure?",text:"'Yes, I can' NO es suficiente. Necesitás un ejemplo concreto usando el método STAR."},
        {label:"Do you have any questions for us?",text:"NUNCA decir 'No, I'm good.' Preparar 3 preguntas: sobre el rol, el equipo y la empresa. Ej: 'What does success look like in this role in the first 90 days?'"}
      ]},
      {title:"Método STAR",items:[
        {label:"S — Situation (15 seg): contexto breve",text:"'In my previous role...' / 'When I was working at...' / 'Last year, when...'"},
        {label:"T — Task (15 seg): tu responsabilidad",text:"'My task was to...' / 'I was in charge of...' / 'My responsibility was to...'"},
        {label:"A — Action (45 seg): LO MÁS IMPORTANTE",text:"Las acciones que VOS tomaste. Usá 'I', no 'we'. 'I decided to...' / 'I contacted...' / 'I implemented...' / 'First, I ___. Then I ___. Finally, I ___.'\nREGLA CRÍTICA: La parte de Action debe ser el 50% de tu respuesta."},
        {label:"R — Result (15 seg): resultado medible",text:"'As a result...' / 'This led to...' / 'We achieved...' Siempre con número o impacto visible."}
      ]},
      {title:"Frases de alto impacto y errores comunes",items:[
        {label:"Frases que te distinguen (con IPA)",text:"'I spearheaded the initiative...' /ˈspɪəhedɪd/ — cuando fuiste el líder\n'I streamlined the process...' /ˈstriːmlaɪnd/ — cuando mejoraste algo\n'I consistently exceeded...' /kənˈsɪstəntli/ — cuando cumpliste metas\n'I thrive in fast-paced environments...' — para mostrar adaptabilidad"},
        {label:"Errores comunes y cómo corregirlos",text:"❌ Hablar más de 2 minutos → ✅ Estructura: Contexto(15s)+Acción(45s)+Resultado(15s)\n❌ 'Sorry, my English is not perfect...' → ✅ NUNCA te disculpes. Empezá: 'Thank you for that question. In my experience...'\n❌ 'I am good at leadership.' (sin ejemplo) → ✅ 'I demonstrated leadership when I managed 8 people during a product launch, resulting in on-time delivery.'"},
        {label:"Preguntas para hacerle al entrevistador",text:"Sobre el rol: 'What does success look like in this role in the first 90 days?'\nSobre el equipo: 'Can you tell me about the team I would be working with?'\nSobre la empresa: 'What are the company's main priorities for this year?'\nSobre el proceso: 'What are the next steps in the selection process?'"}
      ]}
    ]
  },
  {
    id:"30dias-m1", emoji:"📅", title:"Inglés en 30 días — Módulo 1",
    source:"Libro principal", desc:"Los primeros 7 días: pronunciación, saludos, respuestas naturales, estructura S+V+C, números y 10 mini conversaciones reales.",
    sections:[
      {title:"Día 1 — Pronunciación básica",items:[
        {label:"Los pares mínimos más importantes",text:"ship /ʃɪp/ vs sheep /ʃiːp/ → vocal CORTA vs LARGA\nlive /lɪv/ vs leave /liːv/ → corta: vivir / larga: irse\nfull /fʊl/ vs fool /fuːl/ → corta: lleno / larga: tonto\nhat /hæt/ vs hate /heɪt/ → corta: sombrero / larga: odiar"},
        {label:"Consejo clave",text:"La diferencia entre vocales cortas y largas puede cambiar completamente el significado. Practicá estos pares en voz alta todos los días hasta sentir la diferencia muscular en la boca."}
      ]},
      {title:"Día 2 — Saludos formales e informales",items:[
        {label:"Hello /hɪˈloʊ/ / Hi /haɪ/",text:"Hola — Hello es formal e informal. Hi solo para amigos."},
        {label:"Good morning /gʊd ˈmɔːrnɪŋ/",text:"Buenos días — hasta el mediodía."},
        {label:"Good afternoon /gʊd ˌæftərˈnuːn/",text:"Buenas tardes — después del mediodía."},
        {label:"Good evening /gʊd ˈiːvnɪŋ/",text:"Buenas noches — al anochecer (al LLEGAR, no al irse)."},
        {label:"How are you? /haʊ ɑːr juː/",text:"¿Cómo estás? — formal e informal."},
        {label:"How's it going? /haʊz ɪt ˈgoʊɪŋ/",text:"¿Cómo va todo? — informal."},
        {label:"What's up? /wɒts ʌp/",text:"¿Qué hay? — muy informal, solo con amigos."},
        {label:"Nice to meet you. /naɪs tuː miːt juː/",text:"Mucho gusto — primera vez que se conocen."},
        {label:"See you later. /siː juː ˈleɪtər/",text:"Hasta luego — despedida informal."}
      ]},
      {title:"Día 3 — Respuestas naturales",items:[
        {label:"I'm fine, thanks. /aɪm faɪn θæŋks/",text:"Estoy bien, gracias. (respuesta formal)"},
        {label:"Pretty good! /ˈprɪti gʊd/",text:"Bastante bien. (informal)"},
        {label:"Not bad. /nɒt bæd/",text:"No está mal. (neutral)"},
        {label:"I'm great. /aɪm greɪt/",text:"Estoy excelente."},
        {label:"Same as always. /seɪm æz ˈɔːlweɪz/",text:"Igual que siempre."},
        {label:"Truco de fluidez",text:"Siempre agregá 'thanks' o 'and you?' al final. 'Pretty good, thanks! And you?' — esa pequeña adición marca una gran diferencia en la naturalidad."}
      ]},
      {title:"Día 4 — Estructura S+V+C",items:[
        {label:"La fórmula fundamental del inglés",text:"SUJETO + VERBO + COMPLEMENTO. En inglés este orden es casi siempre obligatorio (al revés del español donde puede variar).\nI am happy. · You are ready. · She is a teacher. · We are students. · They are friends. · It is cold today."},
        {label:"⚠️ El sujeto NUNCA se omite en inglés",text:"En español decís 'Estoy bien'. En inglés SIEMPRE hay que poner el pronombre: 'I am fine.' No se puede omitir."}
      ]},
      {title:"Día 5 — Números, días y meses",items:[
        {label:"Números 1-20",text:"One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve, Thirteen, Fourteen, Fifteen, Sixteen, Seventeen, Eighteen, Nineteen, Twenty"},
        {label:"Decenas",text:"30 Thirty · 40 Forty · 50 Fifty · 60 Sixty · 70 Seventy · 80 Eighty · 90 Ninety · 100 One hundred · 1000 One thousand /záusen/"},
        {label:"Días de la semana",text:"Monday · Tuesday · Wednesday · Thursday · Friday · Saturday · Sunday"},
        {label:"Meses del año",text:"January · February · March · April · May · June · July · August · September · October · November · December"}
      ]},
      {title:"Día 6 — 10 Mini conversaciones reales (practicá en voz alta)",items:[
        {label:"Diálogo 1 — Primer encuentro",text:"A: Hi! I'm Carlos. Nice to meet you.\nB: Nice to meet you too! I'm Sarah."},
        {label:"Diálogo 2 — ¿Cómo estás?",text:"A: Hey! How are you?\nB: Pretty good, thanks! And you?\nA: I'm great, thanks!"},
        {label:"Diálogo 3 — El clima",text:"A: It's cold today, isn't it?\nB: Yes! Very cold. I need a jacket."},
        {label:"Diálogo 4 — Preguntar la hora",text:"A: Excuse me, what time is it?\nB: It's three fifteen. A: Thank you!"},
        {label:"Diálogo 5 — En una tienda",text:"A: Hi, can I help you?\nB: Yes, please. How much is this?\nA: It's twenty dollars."},
        {label:"Diálogo 6 — Hacer planes",text:"A: Are you free on Friday?\nB: Yes! What's the plan?\nA: Let's have lunch together."},
        {label:"Diálogo 7 — En el trabajo",text:"A: Good morning! Ready for the meeting?\nB: Almost! Give me five minutes.\nA: No problem, take your time."},
        {label:"Diálogo 8 — Despedida",text:"A: It was nice talking to you!\nB: You too! See you later!"}
      ]},
      {title:"Día 7 — Plan de práctica semanal",items:[
        {label:"Regla de consistencia",text:"20 minutos diarios son más efectivos que 3 horas una vez a la semana. El cerebro necesita exposición frecuente."},
        {label:"Paso 1 — Leé en voz alta",text:"Cada frase y diálogo debe leerse EN VOZ ALTA. Nunca en silencio. La pronunciación es una habilidad física."},
        {label:"Paso 2 — Grabate",text:"Usá el micrófono del celular. Escuchate. La incomodidad que sentís al oírte es parte del proceso."},
        {label:"Paso 3 — Repetí hasta que fluya",text:"Un diálogo por día hasta que salga automático. Luego pasás al siguiente."},
        {label:"Checklist de la semana 1",text:"☑ Pronunciación y pares mínimos practicados\n☑ 10 saludos memorizados\n☑ Respuestas comunes dominadas\n☑ Estructura S+V+C aplicada\n☑ Números y fechas aprendidos\n☑ 10 diálogos practicados\n☑ Grabación personal completada"}
      ]}
    ]
  },
  {
    id:"30dias-m2", emoji:"📅", title:"Inglés en 30 días — Módulo 2",
    source:"Libro principal", desc:"Días 8-15: presentación completa, presente simple, hacer preguntas y conversaciones más complejas.",
    sections:[
      {title:"Día 8 — Presentación personal completa",items:[
        {label:"Fórmula: Nombre + Origen + Ocupación + Gustos",text:"'My name is Gastón. I'm from Lomas de Zamora, Buenos Aires. I work in the food industry and I'm an entrepreneur. I love Formula 1, training and gastronomy.'"},
        {label:"Vocabulario esencial de presentación",text:"I'm from... → Soy de...\nI work as a... → Trabajo como...\nI'm in charge of... → Estoy a cargo de...\nI've been working here for... → Llevo trabajando aquí...\nI'm passionate about... → Me apasiona..."}
      ]},
      {title:"Días 9-10 — Hacer y responder preguntas",items:[
        {label:"Preguntas con DO/DOES (Present Simple)",text:"Do you work every day? → Yes, I do. / No, I don't.\nDoes she like coffee? → Yes, she does. / No, she doesn't.\nWhat do you do for a living? → ¿A qué te dedicás?"},
        {label:"Preguntas con DID (Past Simple)",text:"Did you go to the gym? → Yes, I did. / No, I didn't.\nWhat did you do yesterday? → ¿Qué hiciste ayer?"},
        {label:"Preguntas con HAVE (Present Perfect)",text:"Have you ever been to London? → Yes, I have. / No, I haven't.\nHow long have you been learning English? → ¿Cuánto tiempo llevás aprendiendo inglés?"}
      ]},
      {title:"Días 11-12 — Hablar de tu vida cotidiana",items:[
        {label:"Rutinas con Present Simple",text:"I wake up at 7. → Me levanto a las 7.\nI usually have breakfast at 8. → Generalmente desayuno a las 8.\nI train three times a week. → Entreno tres veces por semana.\nI go to bed at midnight. → Me acuesto a medianoche."},
        {label:"Conectores de tiempo útiles",text:"first → primero · then → luego · after that → después de eso · finally → finalmente · usually → generalmente · sometimes → a veces · always → siempre · never → nunca"}
      ]},
      {title:"Días 13-15 — Conversaciones más complejas",items:[
        {label:"Expresar opiniones",text:"I think... → Creo que...\nIn my opinion... → En mi opinión...\nI agree / I disagree. → Estoy de acuerdo / No estoy de acuerdo.\nI totally agree! → ¡Estoy totalmente de acuerdo!\nI'm not sure about that. → No estoy muy seguro de eso."},
        {label:"Contar historias (storytelling)",text:"Last week... / Last month... → La semana pasada... / El mes pasado...\nFirst, ... → Primero,...\nThen, ... → Luego,...\nFinally, ... → Finalmente,...\nIt was amazing/terrible because... → Fue increíble/terrible porque...\nI ended up... → Terminé..."}
      ]}
    ]
  }
];
