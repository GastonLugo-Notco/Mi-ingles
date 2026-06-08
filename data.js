// ─── DATOS DE CLASES ─────────────────────────────────────────────────────────
const INITIAL_CLASSES = [
  {
    id: 1, date: "2025-04-01",
    titulo: "Primera toma de contacto — frases básicas",
    vocab: [
      {en:"Hello / Hi there",pron:"",es:"Hola"},
      {en:"See you",pron:"",es:"Hasta luego / Nos vemos"},
      {en:"This is a piece of cake",pron:"",es:"Esto es pan comido (muy fácil)"},
      {en:"Long time no see",pron:"",es:"Cuánto tiempo sin vernos"},
      {en:"road",pron:"/roud/",es:"camino / calle / ruta"}
    ],
    gramatica: [],
    correcciones: [
      {wrong:"she don't like it",right:"she doesn't like it"}
    ],
    frases: [
      {en:"Hello = Hi there",es:"Son equivalentes, ambas significan 'Hola'"},
      {en:"See you",es:"Nos vemos / Chau"},
      {en:"This is a piece of cake",es:"Está tirado / Es muy fácil"},
      {en:"Long time no see",es:"Cuánto tiempo sin vernos"}
    ]
  },
  {
    id: 2, date: "2025-04-06",
    titulo: "Partes de la casa, estaciones y Present Simple",
    vocab: [
      {en:"bedroom",pron:"",es:"dormitorio"},
      {en:"bathroom",pron:"/bázrum/",es:"baño"},
      {en:"kitchen",pron:"",es:"cocina"},
      {en:"living room",pron:"",es:"sala de estar"},
      {en:"dining room",pron:"",es:"comedor"},
      {en:"balcony",pron:"",es:"balcón"},
      {en:"garden",pron:"",es:"jardín"},
      {en:"yard",pron:"/iárd/",es:"patio"},
      {en:"front yard",pron:"",es:"patio delantero"},
      {en:"back yard",pron:"",es:"patio trasero"},
      {en:"terrace",pron:"/térris/",es:"terraza"},
      {en:"garage",pron:"/garásh/ (US) / /gárich/ (UK)",es:"garaje"},
      {en:"flat / apartment",pron:"",es:"departamento"},
      {en:"autumn / fall",pron:"/ódom/",es:"otoño"},
      {en:"winter",pron:"",es:"invierno"},
      {en:"spring",pron:"",es:"primavera"},
      {en:"summer",pron:"",es:"verano"},
      {en:"seasons",pron:"",es:"estaciones del año"},
      {en:"think",pron:"",es:"pensar"},
      {en:"sink",pron:"",es:"pileta / fregadero"},
      {en:"song / sing",pron:"",es:"canción / cantar"}
    ],
    gramatica: [
      {titulo:"Present Simple — preguntas y respuestas cortas",
       formula:"Do you swim?  →  Yes, I do. / No, I don't.\nDoes she paint?  →  Yes, she does. / No, she doesn't.",
       ejemplos:["Do you like your flat? — Yes, I do!","Does Euge have two balconies? — Yes, she does."]}
    ],
    correcciones: [],
    frases: [
      {en:"I like it very much",es:"Me gusta mucho"},
      {en:"flat = apartment",es:"departamento (ambas palabras son correctas)"},
      {en:"I have two balconies",es:"Tengo dos balcones (she/he → has)"},
      {en:"fallen soldier / fallen angel",es:"soldado caído / ángel caído (uso de 'fall')"}
    ]
  },
  {
    id: 3, date: "2025-04-08",
    titulo: "Pronombres, Verb To Be (presente y pasado)",
    vocab: [
      {en:"What does ... mean?",pron:"",es:"¿Qué significa ...?"},
      {en:"mean",pron:"",es:"significar"},
      {en:"more or less / so so",pron:"",es:"más o menos"},
      {en:"Not bad",pron:"",es:"No tan bien / regular"},
      {en:"also / too",pron:"/ólso/",es:"también"},
      {en:"this month",pron:"/dis/",es:"este mes"},
      {en:"that month",pron:"",es:"ese mes"},
      {en:"these months",pron:"/di-is/",es:"estos meses"},
      {en:"those months",pron:"/dóus/",es:"esos meses"}
    ],
    gramatica: [
      {titulo:"Pronombres personales",
       formula:"I = yo\nyou = vos / tú\nShe = ella\nHe = él\nit = eso (cosas/animales)\nWe = nosotros/as\nyou = ustedes\nthey = ellos / ellas",
       ejemplos:["I am 29 years old.","They came from Paraguay."]},
      {titulo:"Verb To Be — presente",
       formula:"I am\nYou are\nHe / She / It is\nWe are\nYou are\nThey are",
       ejemplos:["I am your student.","She is a professor."]},
      {titulo:"Verb To Be — pasado",
       formula:"I was\nYou were\nHe / She / It was\nWe were\nYou were\nThey were",
       ejemplos:["I was born in Lanús.","Where were you born?"]}
    ],
    correcciones: [
      {wrong:"i bad the week",right:"This week is a bit bad."},
      {wrong:"I am hate the Winter",right:"I hate winter. (sin 'am', sin 'the')"}
    ],
    frases: [
      {en:"When's your birthday?",es:"¿Cuándo es tu cumpleaños?"},
      {en:"I was born in Lanús.",es:"Nací en Lanús."},
      {en:"Where were you born?",es:"¿Dónde naciste?"},
      {en:"Not much",es:"No mucho"},
      {en:"Look at THOSE cars",es:"Mirá ESOS autos (demostrativo)"}
    ]
  },
  {
    id: 4, date: "2025-04-10",
    titulo: "Entrenamiento, ubicación y Present Perfect vs Past Simple",
    vocab: [
      {en:"strength training",pron:"",es:"entrenamiento de fuerza"},
      {en:"blocks (from my house)",pron:"",es:"cuadras (de mi casa)"},
      {en:"husband",pron:"",es:"esposo / marido"},
      {en:"wonderful",pron:"",es:"maravilloso/a"},
      {en:"a few",pron:"",es:"algunos pocos / algunas pocas"},
      {en:"a lot of / lots of / tons of",pron:"",es:"un montón de"},
      {en:"a type of / a kind of / a sort of",pron:"",es:"un tipo de"},
      {en:"there / here",pron:"",es:"allá / aquí"},
      {en:"over there / over here",pron:"",es:"por allá / por aquí"},
      {en:"actually",pron:"/ákshuali/",es:"en realidad"},
      {en:"nowadays / in these days",pron:"",es:"actualmente"},
      {en:"department",pron:"/dipártment/",es:"departamento / área"},
      {en:"interesting",pron:"/íntrestin/",es:"interesante"},
      {en:"events",pron:"/ivénts/",es:"eventos"},
      {en:"would",pron:"/wud/",es:"condicional (would go = iría)"},
      {en:"worked",pron:"/uórkt/",es:"trabajé / trabajado"},
      {en:"coincidence",pron:"",es:"casualidad"}
    ],
    gramatica: [
      {titulo:"Present Perfect vs Past Simple",
       formula:"I HAVE studied Chinese.  →  sin fecha, efecto en el presente\nI studied Chinese IN 2011.  →  fecha específica → Past Simple",
       ejemplos:["I have lived here for 5 years. (y sigo viviendo)","She studied in 2011. (año específico)"]}
    ],
    correcciones: [
      {wrong:"I train in four streets the house",right:"I train four blocks from my house."},
      {wrong:"where does 'husband' mean?",right:"WHAT does 'husband' mean?"},
      {wrong:"is casuality",right:"it's a coincidence"}
    ],
    frases: [
      {en:"No worries!",es:"¡No pasa nada!"},
      {en:"Don't rush",es:"No te apures"},
      {en:"I train at home",es:"Entreno en casa"},
      {en:"I train four blocks from my house",es:"Entreno a cuatro cuadras de mi casa"}
    ]
  },
  {
    id: 5, date: "2025-04-14",
    titulo: "Barrio, because/because of y vocabulario cotidiano",
    vocab: [
      {en:"neighbourhood",pron:"",es:"barrio"},
      {en:"quiet",pron:"/kuáiet/",es:"tranquilo/a"},
      {en:"nice view",pron:"",es:"linda vista"},
      {en:"landscape",pron:"",es:"paisaje"},
      {en:"during",pron:"",es:"durante"},
      {en:"because",pron:"",es:"porque (+ frase completa)"},
      {en:"because of",pron:"",es:"a causa de (+ sustantivo)"},
      {en:"close to / near",pron:"",es:"cerca de"},
      {en:"work out",pron:"",es:"hacer ejercicio físico"},
      {en:"sometimes",pron:"",es:"a veces"},
      {en:"fourteen",pron:"",es:"catorce"},
      {en:"floor",pron:"",es:"piso / planta"}
    ],
    gramatica: [
      {titulo:"BECAUSE vs BECAUSE OF",
       formula:"because + frase completa\nbecause of + sustantivo",
       ejemplos:["She's tired because she worked all day.","She's tired because of work."]}
    ],
    correcciones: [
      {wrong:"i had morning (agitada)",right:"I had a hectic / busy morning."},
      {wrong:"all times drink wine",right:"We drink wine all the time."},
      {wrong:"i extration the blood",right:"I had a blood test."}
    ],
    frases: [
      {en:"I totally agree!",es:"¡Estoy totalmente de acuerdo!"},
      {en:"Can you describe your neighbourhood?",es:"¿Podés describir tu barrio?"},
      {en:"It is quiet",es:"Es tranquilo"},
      {en:"It has a nice view",es:"Tiene una linda vista"},
      {en:"You like the highest floors because of the view",es:"Te gustan los pisos más altos por la vista"},
      {en:"I came back home",es:"Volví a casa"}
    ]
  },
  {
    id: 6, date: "2025-04-17",
    titulo: "Viaje a Perú, formas de futuro y comparaciones",
    vocab: [
      {en:"neither",pron:"/níder/",es:"yo tampoco (Me neither)"},
      {en:"gastronomy",pron:"",es:"gastronomía"},
      {en:"flavourful / tasty",pron:"",es:"sabroso"},
      {en:"influence",pron:"",es:"influencia"},
      {en:"vegetarian",pron:"",es:"vegetariano/a"},
      {en:"similar to",pron:"",es:"similar a"},
      {en:"different from",pron:"",es:"diferente de"},
      {en:"slang",pron:"",es:"lunfardo / jerga"},
      {en:"busy",pron:"/bísi/",es:"ocupado/a"},
      {en:"useful",pron:"/iús-ful/",es:"útil"},
      {en:"listeners",pron:"/líseners/",es:"oyentes"},
      {en:"listen",pron:"/lísen/",es:"escuchar"},
      {en:"I have no idea / No clue",pron:"",es:"No tengo idea"}
    ],
    gramatica: [
      {titulo:"Futuro: Will vs Going to vs Present Continuous",
       formula:"WILL       → decisión en el momento / predicción sin evidencia\nGOING TO   → plan decidido antes / predicción con evidencia visible\nPRES. CONT. → agenda ya confirmada (hora y lugar)",
       ejemplos:["'Someone at the door' → 'I'll go and see.' (will: decisión ahora mismo)","I'm going to travel to Peru. (plan previo, ya decidido)","I'm seeing my friend tomorrow. (turno ya arreglado)"]}
    ],
    correcciones: [
      {wrong:"i choose peru for gastronomic",right:"I chose Peru for its gastronomy."},
      {wrong:"it is very saborous",right:"it is very flavourful / tasty"},
      {wrong:"do meat animal",right:"everything has meat in it"},
      {wrong:"i don't know peru",right:"I've never been to Peru."}
    ],
    frases: [
      {en:"Where are you staying?",es:"¿Dónde van a alojarse?"},
      {en:"Miraflores is similar to San Isidro.",es:"Miraflores es similar a San Isidro."},
      {en:"Miraflores is different from San Isidro.",es:"Miraflores es diferente de San Isidro."},
      {en:"Me neither.",es:"Yo tampoco."},
      {en:"We are travelling tonight",es:"Viajamos esta noche. (plan confirmado)"}
    ]
  },
  {
    id: 7, date: "2025-05-11",
    titulo: "Clima, bored vs boring, escaleras y comidas",
    vocab: [
      {en:"bored",pron:"",es:"aburrido (cómo ME siento)"},
      {en:"boring",pron:"",es:"aburrido (cómo ES algo)"},
      {en:"sunbathing",pron:"",es:"tomar sol"},
      {en:"downstairs",pron:"",es:"abajo (escalera abajo)"},
      {en:"upstairs",pron:"",es:"arriba (escalera arriba)"},
      {en:"stairs",pron:"/sters/",es:"escalera(s)"},
      {en:"main",pron:"/méin/",es:"principal"},
      {en:"mean",pron:"/min/",es:"significar"},
      {en:"meaning",pron:"",es:"significado"},
      {en:"meat",pron:"/mit/",es:"carne"},
      {en:"meet",pron:"/mit/",es:"reunión / reunirse"},
      {en:"meal",pron:"/mil/",es:"comida del día (desayuno, almuerzo, cena)"},
      {en:"food",pron:"",es:"comida (los productos)"},
      {en:"dish",pron:"",es:"plato (de comida)"},
      {en:"plate",pron:"",es:"plato (el objeto)"},
      {en:"sunlight",pron:"",es:"luz del sol"},
      {en:"the cold is getting on my nerves",pron:"",es:"el frío me está enloqueciendo"},
      {en:"in comparison with",pron:"",es:"en comparación con"},
      {en:"destination",pron:"",es:"destino"},
      {en:"I missed the classes",pron:"",es:"Extrañé / me perdí las clases"}
    ],
    gramatica: [
      {titulo:"BORED vs BORING",
       formula:"BORED = describe cómo TE SENTÍS vos\nBORING = describe cómo ES algo o alguien",
       ejemplos:["I feel bored in math classes. (me siento aburrido)","Math is boring! (la materia es aburrida)"]}
    ],
    correcciones: [
      {wrong:"don't worry (no se si se dice asi)",right:"Don't worry. ✓ ¡Está bien! También: No worries."},
      {wrong:"i see (lo vi recién)",right:"I have just seen it. (con Present Perfect + just)"},
      {wrong:"I had fear my wifi",right:"I was afraid my wifi signal got lost."}
    ],
    frases: [
      {en:"The cold is getting on my nerves",es:"El frío me está enloqueciendo / sacando de quicio"},
      {en:"The cold is driving me crazy",es:"El frío me está volviendo loco"},
      {en:"I flew downstairs",es:"Bajé las escaleras volando (muy rápido)"},
      {en:"Believe me!",es:"¡Creéme!"},
      {en:"In comparison with Bs As",es:"En comparación con Bs As"},
      {en:"It is a great destination",es:"Es un gran destino"},
      {en:"low prices",es:"precios bajos"}
    ]
  },
  {
    id: 8, date: "2025-05-14",
    titulo: "Deportes, rutinas, Present Simple completo y comidas del día",
    vocab: [
      {en:"lungs",pron:"",es:"pulmones"},
      {en:"brave",pron:"",es:"valiente"},
      {en:"admire",pron:"",es:"admirar"},
      {en:"nutrition / diet",pron:"",es:"alimentación / dieta"},
      {en:"swimming",pron:"",es:"natación"},
      {en:"have breakfast",pron:"",es:"desayunar"},
      {en:"breakfast",pron:"",es:"desayuno"},
      {en:"have lunch",pron:"",es:"almorzar"},
      {en:"lunch",pron:"",es:"almuerzo"},
      {en:"have dinner",pron:"",es:"cenar"},
      {en:"dinner",pron:"",es:"cena"},
      {en:"snack",pron:"",es:"merienda / snack"},
      {en:"the five o'clock tea",pron:"",es:"la merienda (expresión inglesa clásica)"},
      {en:"teeth",pron:"/tiz/",es:"dientes"},
      {en:"tooth",pron:"/tuz/",es:"diente"},
      {en:"feet",pron:"/fit/",es:"pies"},
      {en:"foot",pron:"/fut/",es:"pie"},
      {en:"sweet",pron:"",es:"dulce"},
      {en:"salty",pron:"",es:"salado"},
      {en:"bitter",pron:"",es:"amargo"},
      {en:"bittersweet",pron:"",es:"agridulce"},
      {en:"avocado toast",pron:"",es:"tostada con palta"},
      {en:"pudding",pron:"",es:"budín"},
      {en:"daily",pron:"",es:"diariamente / del día"}
    ],
    gramatica: [
      {titulo:"Present Simple — estructura completa",
       formula:"(+) I go to bed.    /    She travelS every month.\n(−) I DON'T go.    /    He DOESN'T travel.\n(?) DO I go?       /    DOES he travel?",
       ejemplos:["You speak German. / You don't speak German. / Do you speak German?","It rains a lot. / It doesn't rain. / Does it rain a lot?","They eat croissants. / They don't eat. / Do they eat croissants?"]}
    ],
    correcciones: [
      {wrong:"i swim did twenty years",right:"I have been swimming for twenty years. / I have swum for 20 years."},
      {wrong:"yes, and more lees the dificult",right:"It was more or less difficult / It wasn't that easy."},
      {wrong:"I tired (vengo de entrenar)",right:"I just came back from training. / I just finished training."}
    ],
    frases: [
      {en:"I used to swim when I was a kid.",es:"Solía nadar cuando era chico."},
      {en:"You have good lungs!",es:"¡Tenés buenos pulmones!"},
      {en:"Training and nutrition are very important in my life.",es:"El entrenamiento y la alimentación son muy importantes en mi vida."},
      {en:"My favourite breakfast is avocado toast.",es:"Mi desayuno favorito es tostada con palta."},
      {en:"No later than 1pm",es:"No más tarde de la 1pm"}
    ]
  },
  {
    id: 9, date: "2025-05-18",
    titulo: "Rutina matutina, comidas, dientes, pies y gustos del día",
    vocab: [
      {en:"sunlight enters the window",pron:"",es:"la luz del sol entra por la ventana"},
      {en:"brush my teeth",pron:"",es:"cepillarme los dientes"},
      {en:"wake up",pron:"",es:"despertarse"},
      {en:"waking up",pron:"",es:"al despertarse"},
      {en:"what makes your day",pron:"",es:"qué te alegra el día"},
      {en:"meditation",pron:"",es:"meditación"},
      {en:"passion",pron:"",es:"pasión"},
      {en:"passions",pron:"",es:"pasiones"}
    ],
    gramatica: [
      {titulo:"WHAT como sujeto (sin auxiliar)",
       formula:"WHAT + VERB + objeto  (no lleva auxiliar porque WHAT es el sujeto)\nWHAT MAKES your day?  →  ¿Qué te alegra el día?\nWHAT HAPPENED?  →  ¿Qué pasó?",
       ejemplos:["What makes you happy? (no 'What does make you...')","What happened last night?"]}
    ],
    correcciones: [
      {wrong:"and Do you the.... days Euge?",right:"What makes your day, Euge?"},
      {wrong:"Beatiful passion",right:"Beautiful passions (plural)"},
      {wrong:"I (arranque) the morning sunbathe",right:"I started my morning with sunbathing."}
    ],
    frases: [
      {en:"What's the first thing you do after waking up?",es:"¿Cuál es lo primero que hacés al despertarte?"},
      {en:"The first thing I do is brushing my teeth",es:"Lo primero que hago es cepillarme los dientes"},
      {en:"Just waking up in the morning makes my day",es:"Con solo despertarme ya me alegra el día"},
      {en:"I don't have breakfast daily",es:"No desayuno todos los días"},
      {en:"We had a snack together yesterday",es:"Ayer merendamos juntos"},
      {en:"What time do you wake up?",es:"¿A qué hora te despertás?"}
    ]
  },
  {
    id: 10, date: "2025-05-21",
    titulo: "Rutinas, sleep, ansiedad y vocabulario cotidiano",
    vocab: [
      {en:"totally agree",pron:"",es:"totalmente de acuerdo"},
      {en:"half an hour ago",pron:"",es:"hace media hora"},
      {en:"anxious",pron:"/án-shus/",es:"ansioso/a"},
      {en:"anxiety",pron:"/an-sáie-ti/",es:"ansiedad"},
      {en:"You are right",pron:"",es:"Tenés razón"},
      {en:"You are wrong",pron:"",es:"Estás equivocado/a"},
      {en:"Come right here / Come over here",pron:"",es:"Vení acá"},
      {en:"type of / sort of / kind of",pron:"",es:"tipo de (sinónimos)"},
      {en:"many things / a lot of things",pron:"",es:"muchas cosas"},
      {en:"per night",pron:"",es:"por noche"},
      {en:"per day",pron:"",es:"por día"}
    ],
    gramatica: [
      {titulo:"ACTUALLY vs NOWADAYS (error frecuente de hispanohablantes)",
       formula:"actually = en realidad (NOT 'actualmente')\nnowadays / in these days = actualmente / hoy en día",
       ejemplos:["Actually, I don't like winter. (En realidad, no me gusta el invierno)","Nowadays, everyone uses smartphones. (Hoy en día, todos usan smartphones)"]}
    ],
    correcciones: [
      {wrong:"totally agree (no se si es asi)",right:"I totally agree. ✓ ¡Perfecto!"},
      {wrong:"i sleep entry 6 to 8 hours",right:"I sleep between 6 and 8 hours."},
      {wrong:"i watch stremming",right:"I watch streaming. / I watch content on YouTube."}
    ],
    frases: [
      {en:"I feel anxious",es:"Me siento ansioso/a"},
      {en:"How many hours do you sleep per night?",es:"¿Cuántas horas dormís por noche?"},
      {en:"I decided to sleep because I could",es:"Decidí dormir porque podía"},
      {en:"The most important thing is...",es:"Lo más importante es..."},
      {en:"I got single words, but not a general idea",es:"Entendí palabras sueltas, pero no la idea general"},
      {en:"The speaking was very fast",es:"El habla era muy rápida"}
    ]
  },
  {
    id: 11, date: "2025-05-25",
    titulo: "Fórmula 1, sueños y vocabulario de motivación",
    vocab: [
      {en:"pilot / driver",pron:"",es:"piloto"},
      {en:"race",pron:"",es:"carrera"},
      {en:"effort",pron:"",es:"esfuerzo"},
      {en:"dream",pron:"",es:"sueño"},
      {en:"make a dream come true",pron:"",es:"hacer realidad un sueño"},
      {en:"lost",pron:"",es:"perdido (past de 'lose')"},
      {en:"loser",pron:"",es:"perdedor"},
      {en:"sleepy",pron:"",es:"con sueño / somnoliento"},
      {en:"kind of sleepy",pron:"",es:"medio con sueño"},
      {en:"clean",pron:"",es:"limpio"},
      {en:"several",pron:"",es:"varios / muchos"},
      {en:"okay / OK",pron:"/okéi/",es:"okey"},
      {en:"minutes",pron:"/mínits/",es:"minutos"},
      {en:"again",pron:"/egén/",es:"otra vez / de nuevo"},
      {en:"idea",pron:"/aidía/",es:"idea"}
    ],
    gramatica: [],
    correcciones: [
      {wrong:"i don't like very fanatic the football",right:"I'm not a huge football fan."},
      {wrong:"is the big pilot",right:"He's a great driver / pilot."},
      {wrong:"other the reason the take classes",right:"Another reason for taking classes is..."},
      {wrong:"and why not work the future in F1",right:"And why not, working in Formula 1 one day."}
    ],
    frases: [
      {en:"It is very important to have dreams",es:"Es muy importante tener sueños"},
      {en:"You know what I mean?",es:"¿Sabés lo que quiero decir? / ¿Me entendés?"},
      {en:"I mean...",es:"Quiero decir... / Me refiero a..."},
      {en:"These are the most important things to make a dream come true",es:"Estas son las cosas más importantes para hacer realidad un sueño"},
      {en:"Another reason for taking classes is to understand F1",es:"Otra razón para tomar clases es entender la F1"}
    ]
  },
  {
    id: 12, date: "2025-06-02",
    titulo: "Trabajo, emprendimiento y Present Continuous",
    vocab: [
      {en:"entrepreneur",pron:"",es:"emprendedor"},
      {en:"gastronomic project",pron:"",es:"proyecto gastronómico"},
      {en:"private events",pron:"",es:"eventos privados"},
      {en:"leader",pron:"",es:"líder"},
      {en:"project",pron:"",es:"proyecto"},
      {en:"improvements",pron:"",es:"mejoras"},
      {en:"daily tasks",pron:"",es:"tareas diarias"},
      {en:"know the ropes",pron:"",es:"conocer el trabajo / saber cómo funciona todo"},
      {en:"I am upset",pron:"",es:"estoy molesto/a"},
      {en:"wake up",pron:"",es:"despertarse"},
      {en:"woke up",pron:"",es:"me desperté (past de wake up)"},
      {en:"would",pron:"/wud/",es:"condicional"}
    ],
    gramatica: [
      {titulo:"Present Continuous — uso y forma",
       formula:"AM / IS / ARE + verb + ING\nI AM working now.\nWe ARE having a class.\nHe IS speaking in English.",
       ejemplos:["I am learning English with Euge.","We are having a class right now."]}
    ],
    correcciones: [
      {wrong:"i am work 8 o 9 hours",right:"I work 8 or 9 hours per day."},
      {wrong:"i am the leader the projet",right:"I am leading the improvements project."},
      {wrong:"i missing the class",right:"I missed the class. / I miss the classes."},
      {wrong:"he is very lost",right:"He's very lost / He doesn't know the ropes yet."}
    ],
    frases: [
      {en:"I am leading the improvements project",es:"Estoy liderando el proyecto de mejoras"},
      {en:"To give him time to know the ropes",es:"Para darle tiempo de aprender cómo funciona todo"},
      {en:"I am an entrepreneur and have a gastronomic project",es:"Soy emprendedor y tengo un proyecto gastronómico"},
      {en:"What time did you wake up today?",es:"¿A qué hora te despertaste hoy?"},
      {en:"I woke up at 8am",es:"Me desperté a las 8am"},
      {en:"How many hours did you sleep?",es:"¿Cuántas horas dormiste?"}
    ]
  },
  {
    id: 13, date: "2025-06-03",
    titulo: "Tecnología, trabajo de Fer, frases con COME y adjetivos",
    vocab: [
      {en:"afraid",pron:"",es:"con miedo (I'm afraid = tengo miedo)"},
      {en:"wifi signal",pron:"",es:"señal de wifi"},
      {en:"optic fiber",pron:"",es:"fibra óptica"},
      {en:"light technician",pron:"",es:"técnico de luces"},
      {en:"on tour",pron:"",es:"de gira"},
      {en:"concert",pron:"",es:"concierto"},
      {en:"talented",pron:"",es:"talentoso/a"},
      {en:"cabin",pron:"",es:"cabina"},
      {en:"vegan",pron:"",es:"vegano/a"},
      {en:"come (present)",pron:"/kam/",es:"venir"},
      {en:"came (past)",pron:"/kéim/",es:"vine / vino"},
      {en:"quickly / fast",pron:"",es:"rápidamente / rápido"},
      {en:"ate",pron:"/éit/",es:"comí / comió (past de eat)"}
    ],
    gramatica: [
      {titulo:"Adjetivo + Sustantivo (orden en inglés)",
       formula:"En inglés el ADJETIVO va ANTES del sustantivo (al revés que en español):",
       ejemplos:["VEGAN PRODUCTS (no 'products vegan')","BIG HOUSE / BLUE CAR / EXPENSIVE SCHOOL","AMAZING VIEW / INCREDIBLE JOB / DANGEROUS PLACE"]}
    ],
    correcciones: [
      {wrong:"i had fear my wifi",right:"I was afraid my wifi signal got lost."},
      {wrong:"tener miedo = HAVE FEAR",right:"En inglés se dice: I AM AFRAID (verbo to be + afraid)"},
      {wrong:"is the biutiful possibility",right:"it's A BEAUTIFUL possibility"},
      {wrong:"and i the sale products vegan",right:"and I sell vegan products."},
      {wrong:"does he dedicate profesional?",right:"What does your husband do for a living?"}
    ],
    frases: [
      {en:"I'm afraid",es:"Tengo miedo (NO: I have fear)"},
      {en:"What does your husband do for a living?",es:"¿A qué se dedica tu esposo?"},
      {en:"He has been working in music for 20 years",es:"Lleva 20 años trabajando en la música"},
      {en:"He started when he was 20 years old",es:"Empezó cuando tenía 20 años"},
      {en:"I think he can get tickets for some shows.",es:"Creo que puede conseguir entradas para algunos shows."},
      {en:"Yesterday when we finished the class, I went to the office quickly.",es:"Ayer cuando terminamos la clase, fui a la oficina rápido."},
      {en:"I had to cook for dinner",es:"Tuve que cocinar para cenar"}
    ]
  },
  {
    id: 14, date: "2025-06-04",
    titulo: "Fórmula 1, Present Perfect Simple completo y HAVE TO",
    vocab: [
      {en:"humid",pron:"",es:"húmedo"},
      {en:"humidity",pron:"",es:"humedad"},
      {en:"wet",pron:"",es:"mojado"},
      {en:"analyze",pron:"",es:"analizar"},
      {en:"metrics",pron:"",es:"métricas"},
      {en:"strategy",pron:"",es:"estrategia"},
      {en:"tournament",pron:"",es:"torneo"},
      {en:"behind",pron:"/bijáind/",es:"detrás"},
      {en:"depends on",pron:"",es:"depende de"},
      {en:"cough",pron:"/kaf/",es:"tos / toser"},
      {en:"have to",pron:"",es:"deber hacer / tener que"},
      {en:"still",pron:"",es:"todavía / aún"},
      {en:"yet",pron:"",es:"todavía / ya (en preguntas)"}
    ],
    gramatica: [
      {titulo:"Present Perfect Simple — estructura completa",
       formula:"(+) I HAVE worked.  /  She HAS worked.\n(?) HAVE you worked?  /  HAS she worked?\n(−) I HAVEN'T worked.  /  She HASN'T worked.\n\nPalabras clave: ever · never · already · yet · just · for · since",
       ejemplos:["Have you ever watched F1 races? No, I haven't.","I have studied English with Euge for two months now.","Have you finished it? No, I haven't. I am still writing it."]},
      {titulo:"HAVE TO — obligación",
       formula:"have to + verb (base form) = tener que / deber\nYou HAVE TO study.\nShe HAS TO work.",
       ejemplos:["I had to cook for dinner. (Past: had to)","You have to practice every day."]}
    ],
    correcciones: [
      {wrong:"it is day very humedity",right:"It is a very humid day. / There is a lot of humidity today."},
      {wrong:"i like it watch the race (solo)",right:"I like watching the races alone."},
      {wrong:"me marea el have ahí",right:"'Have you ever...?' = Present Perfect para preguntar por experiencias de vida"}
    ],
    frases: [
      {en:"Have you ever watched F1 races?",es:"¿Alguna vez viste carreras de F1?"},
      {en:"No, I haven't.",es:"No, no lo hice / nunca lo hice."},
      {en:"I have written a novel for a long time.",es:"Llevo mucho tiempo escribiendo una novela."},
      {en:"I am still writing it.",es:"Todavía la estoy escribiendo."},
      {en:"I mean it",es:"Lo digo en serio"},
      {en:"What do you mean?",es:"¿Qué querés decir?"},
      {en:"I didn't mean that",es:"No quise decir eso"},
      {en:"There is a book ON the table.",es:"Hay un libro SOBRE la mesa."},
      {en:"It depends ON you.",es:"Depende DE vos. (ON, no de)"}
    ]
  }
];

// ─── GUÍAS (de los PDFs) ─────────────────────────────────────────────────────
const GUIDES = [
  {
    id: "rutina10",
    emoji: "⏱️",
    title: "Rutina de 10 minutos por día",
    desc: "El método realista para aprender inglés sin tener tiempo. Consistencia diaria.",
    source: "Bono 2",
    sections: [
      {
        title: "La fórmula 3-3-2-2",
        items: [
          {label:"0-3 min → INPUT", text:"Escuchá un audio, canción o diálogo corto. Identificá palabras conocidas. No importa entender todo."},
          {label:"3-6 min → REPETICIÓN ACTIVA", text:"Repetí en voz alta las frases identificadas. Hacé shadowing: imitá ritmo y entonación del hablante."},
          {label:"6-8 min → PRODUCCIÓN", text:"Creá 3 frases propias usando las palabras nuevas. Respondé una pregunta guía en voz alta."},
          {label:"8-10 min → REVISIÓN", text:"Releé las frases del día. Escuchá el audio nuevamente. Marcá el checklist diario."}
        ]
      },
      {
        title: "Opciones para los 3 minutos de INPUT",
        items: [
          {label:"Opción A — Canción", text:"Elegí una parte específica (coro o verso) y repetila."},
          {label:"Opción B — Audio de guía", text:"Seguí el texto mientras escuchás para conectar sonido y escritura."},
          {label:"Opción C — Diálogo corto", text:"Identificá el contexto: ¿dónde están? ¿qué quieren?"},
          {label:"Opción D — Video corto", text:"YouTube o TikTok en inglés sin subtítulos primero."}
        ]
      },
      {
        title: "Regla de oro",
        items: [
          {label:"No negociar los 10 minutos", text:"Sin importar qué tan ocupado estés, estos 10 minutos son innegociables. Son tu inversión diaria en tu futuro."},
          {label:"Por qué funciona", text:"10 minutos diarios durante un año = más de 60 horas de práctica. El cerebro consolida durante el sueño y necesita exposición frecuente."}
        ]
      }
    ]
  },
  {
    id: "pronunciacion",
    emoji: "🗣️",
    title: "Guía de pronunciación",
    desc: "De principiante a avanzado. Sonidos, ritmo, entonación y fluidez para hispanohablantes.",
    source: "Bono 3",
    sections: [
      {
        title: "Principio clave",
        items: [
          {label:"En inglés no se pronuncia como se escribe", text:"El sistema ortográfico inglés refleja pronunciaciones históricas que cambiaron. Enfocate en aprender los SONIDOS, no en descifrar las letras."},
          {label:"Ritmo acentual vs. silábico", text:"El español es de ritmo silábico (cada sílaba igual). El inglés es de ritmo acentual: algunas sílabas son largas y fuertes, otras se reducen. Hay que saber cuáles enfatizar."},
          {label:"Sonidos que no existen en español", text:"La 'th' de think, la 'æ' de cat. Requieren práctica consciente de la posición de lengua y labios."}
        ]
      },
      {
        title: "Vocales que confunden a hispanohablantes",
        items: [
          {label:"ship /ɪ/ vs sheep /iː/", text:"Vocal CORTA /ɪ/ vs LARGA /iː/ — error: pronunciar ship como sheep"},
          {label:"live /ɪ/ vs leave /iː/", text:"Vocal CORTA vs LARGA — error: confundir live con leave"},
          {label:"full /ʊ/ vs fool /uː/", text:"Vocal CORTA vs LARGA — error: pronunciar full como fool"},
          {label:"La 'a' tiene múltiples sonidos", text:"cat /æ/, cake /eɪ/, car /ɑː/, about /ə/ — una sola letra, cuatro sonidos distintos"}
        ]
      },
      {
        title: "Pronunciaciones de las clases con Euge",
        items: [
          {label:"bathroom", text:"/bázrum/ — no pronunciar la 'th' como 't'"},
          {label:"autumn", text:"/ódom/ — la 'mn' final es muda"},
          {label:"yard", text:"/iárd/"},
          {label:"terrace", text:"/térris/"},
          {label:"garage (US)", text:"/garásh/ — (UK) /gárich/"},
          {label:"this / these / those", text:"/dis/ · /di-is/ · /dóus/"},
          {label:"interesting", text:"/íntrestin/ — 3 sílabas, no 4"},
          {label:"actually", text:"/ákshuali/"},
          {label:"department", text:"/dipártment/"},
          {label:"events", text:"/ivénts/"},
          {label:"quiet", text:"/kuáiet/"},
          {label:"also", text:"/ólso/"},
          {label:"busy", text:"/bísi/"},
          {label:"useful", text:"/iús-ful/"},
          {label:"listeners", text:"/líseners/"},
          {label:"anxious", text:"/án-shus/"},
          {label:"anxiety", text:"/an-sáie-ti/"},
          {label:"behind", text:"/bijáind/"},
          {label:"stairs", text:"/sters/"},
          {label:"main", text:"/méin/"},
          {label:"meat / meet / meal", text:"/mit/ · /mit/ · /mil/ — suenan igual o muy parecido"}
        ]
      }
    ]
  },
  {
    id: "frases",
    emoji: "💬",
    title: "100+ Frases para conversaciones reales",
    desc: "Frases organizadas por situación: trabajo, gimnasio, restaurante, médico y más.",
    source: "Bono 4",
    sections: [
      {
        title: "En el trabajo",
        items: [
          {label:"Could you help me with this?", text:"¿Podés ayudarme con esto?"},
          {label:"I need more time to finish this.", text:"Necesito más tiempo para terminar esto."},
          {label:"Let me check and get back to you.", text:"Déjame revisar y te digo."},
          {label:"I'll send you an email with the details.", text:"Te mando un email con los detalles."},
          {label:"Can we schedule a meeting?", text:"¿Podemos programar una reunión?"},
          {label:"I'm working on it.", text:"Lo estoy trabajando / Estoy en eso."},
          {label:"I'm leading the project.", text:"Estoy liderando el proyecto."}
        ]
      },
      {
        title: "En el gimnasio",
        items: [
          {label:"How many sets do you have left?", text:"¿Cuántas series te quedan?"},
          {label:"Can I work in with you?", text:"¿Me dejás usar esto mientras descansás?"},
          {label:"I do strength training.", text:"Hago entrenamiento de fuerza."},
          {label:"I've been training for 20 years.", text:"Llevo 20 años entrenando."},
          {label:"Do you work out every day?", text:"¿Entrenás todos los días?"}
        ]
      },
      {
        title: "En el restaurante",
        items: [
          {label:"Can I see the menu, please?", text:"¿Me podés traer el menú, por favor?"},
          {label:"I'd like to order...", text:"Quisiera pedir..."},
          {label:"Is this dish vegetarian?", text:"¿Este plato es vegetariano?"},
          {label:"Can I have the bill, please?", text:"¿Me traés la cuenta, por favor?"},
          {label:"It's delicious / flavourful.", text:"Está delicioso / sabroso."}
        ]
      },
      {
        title: "Haciendo nuevos amigos",
        items: [
          {label:"Nice to meet you!", text:"¡Mucho gusto!"},
          {label:"What do you do for a living?", text:"¿A qué te dedicás?"},
          {label:"I'm an entrepreneur.", text:"Soy emprendedor."},
          {label:"Where are you from?", text:"¿De dónde sos?"},
          {label:"Long time no see!", text:"¡Cuánto tiempo!"},
          {label:"How have you been?", text:"¿Cómo estuviste?"}
        ]
      },
      {
        title: "Situaciones cotidianas",
        items: [
          {label:"I'm afraid...", text:"Tengo miedo... / Lamentablemente..."},
          {label:"Don't worry / No worries", text:"No te preocupes / No pasa nada"},
          {label:"I'll be right back.", text:"Ya vuelvo."},
          {label:"Could you repeat that, please?", text:"¿Podés repetir eso, por favor?"},
          {label:"What does ... mean?", text:"¿Qué significa ...?"},
          {label:"Can you speak more slowly?", text:"¿Podés hablar más despacio?"}
        ]
      }
    ]
  },
  {
    id: "miedo",
    emoji: "🎤",
    title: "Perdé el miedo a hablar inglés",
    desc: "Método práctico para dejar de pensar y empezar a hablar. Entrenamiento de 7 días.",
    source: "Bono 5",
    sections: [
      {
        title: "Las 5 raíces del miedo",
        items: [
          {label:"1. Miedo al error", text:"Creés que equivocarte es un fracaso. En realidad, el error ES el método de aprendizaje."},
          {label:"2. Miedo al acento", text:"Tu acento es tu identidad, no tu defecto. Los hablantes nativos valoran el esfuerzo, no la perfección."},
          {label:"3. Bloqueo mental", text:"El cerebro evita lo que genera incomodidad. Hablar en público en otro idioma activa esa alarma."},
          {label:"4. Perfeccionismo", text:"Esperás saber todo antes de hablar. La fluidez se construye hablando, no estudiando en silencio."},
          {label:"5. Falta de exposición", text:"Cuanto más te exponés, menos miedo tenés. No hay atajos."}
        ]
      },
      {
        title: "Principio fundamental",
        items: [
          {label:"La fluidez no elimina el miedo. La exposición sí.", text:"Este libro te expone progresivamente hasta que hablar inglés sea más natural que callarte."},
          {label:"La pronunciación es una habilidad física", text:"Como cualquier músculo, se entrena con práctica. Leé en voz alta, grabate, escuchate."}
        ]
      },
      {
        title: "Entrenamiento 7 días",
        items: [
          {label:"Día 1", text:"Hablá 1 minuto en inglés solo, sin parar. No importa si está mal."},
          {label:"Día 2", text:"Describí lo que ves a tu alrededor en inglés."},
          {label:"Día 3", text:"Grabate respondiendo '¿Cómo estuvo tu día?' en inglés."},
          {label:"Día 4", text:"Pensá en inglés durante 10 minutos (sin traducir)."},
          {label:"Día 5", text:"Mirá un video en inglés sin subtítulos y resumilo."},
          {label:"Día 6", text:"Participá en una situación real: pedí algo en inglés."},
          {label:"Día 7", text:"Grabate contando algo que aprendiste esta semana."}
        ]
      }
    ]
  },
  {
    id: "entrevistas",
    emoji: "👔",
    title: "Inglés para entrevistas laborales",
    desc: "Cómo responder con confianza y claridad. Método STAR, vocabulario profesional y simulaciones.",
    source: "Bono 6",
    sections: [
      {
        title: "Estructura típica de una entrevista",
        items: [
          {label:"1. Bienvenida", text:"Small talk inicial. 'How are you?' / 'Did you find the place okay?'"},
          {label:"2. Preguntas sobre experiencia", text:"'Tell me about yourself.' / 'What have you done in your previous role?'"},
          {label:"3. Preguntas de comportamiento", text:"'Tell me about a time when...' (usan el pasado)"},
          {label:"4. Preguntas situacionales", text:"'What would you do if...' (usan condicional)"},
          {label:"5. Cierre", text:"'Do you have any questions for us?'"}
        ]
      },
      {
        title: "Método STAR para responder",
        items: [
          {label:"S — Situation", text:"Describí el contexto. 'I was working as a team leader when...'"},
          {label:"T — Task", text:"Explicá tu responsabilidad. 'My task was to...'"},
          {label:"A — Action", text:"Describí qué hiciste. 'I decided to... / I implemented...'"},
          {label:"R — Result", text:"Mencioná el resultado. 'As a result, we improved... / The project was completed...'"}
        ]
      },
      {
        title: "Frases clave profesionales",
        items: [
          {label:"Tell me about yourself", text:"'I have been working in [field] for [X] years. I specialize in [area].'"},
          {label:"What are your strengths?", text:"'I'm a strong communicator and I'm very organized.'"},
          {label:"Why do you want this job?", text:"'I'm passionate about [area] and I believe I can contribute to...'"},
          {label:"Where do you see yourself in 5 years?", text:"'I see myself growing within the company and taking on more responsibilities.'"},
          {label:"Do you have any questions?", text:"'What does a typical day look like in this role?'"}
        ]
      },
      {
        title: "Errores comunes en entrevistas",
        items: [
          {label:"Hablar demasiado rápido por los nervios", text:"Respirá, pausá. Los entrevistadores valoran la claridad."},
          {label:"Decir 'I don't know' y quedarse callado", text:"Mejor: 'That's a great question. Let me think for a moment...'"},
          {label:"No dar ejemplos concretos", text:"Usá el método STAR siempre que puedas."},
          {label:"Hablar solo del pasado", text:"Conectá tu experiencia con el futuro: 'I've done X, and now I want to...'"},
          {label:"No hacer preguntas al final", text:"Siempre preparé 2-3 preguntas. Muestra interés genuino."}
        ]
      }
    ]
  }
];

// ─── GUÍA EXTRA: Inglés en 30 Días — Módulo 1 ────────────────────────────────
GUIDES.push({
  id: "30dias",
  emoji: "📅",
  title: "Inglés en 30 días — Módulo 1",
  desc: "Fundamentos completos: pronunciación, saludos, estructura, números y mini conversaciones reales.",
  source: "Libro principal",
  sections: [
    {
      title: "Día 1 — Pronunciación: vocales cortas vs largas",
      items: [
        {label:"ship /ɪ/ vs sheep /iː/", text:"Vocal CORTA → ship. Vocal LARGA → sheep. Error común: pronunciar ship como sheep."},
        {label:"live /ɪ/ vs leave /iː/", text:"Vocal CORTA → live (vivir). Vocal LARGA → leave (irse). Error: confundirlas."},
        {label:"full /ʊ/ vs fool /uː/", text:"Vocal CORTA → full (lleno). Vocal LARGA → fool (tonto). Error: acortar la vocal."},
        {label:"Regla de oro", text:"La diferencia entre vocales cortas y largas puede cambiar completamente el significado. Practicá estos pares en voz alta todos los días."},
        {label:"En inglés no se pronuncia como se escribe", text:"La letra 'a' puede sonar como en cat /æ/, cake /eɪ/, car /ɑː/ o about /ə/. Enfocate en los sonidos, no en las letras."}
      ]
    },
    {
      title: "Día 2 — Saludos formales e informales",
      items: [
        {label:"Hello / Hi", text:"Hola — Hello es formal e informal. Hi es más informal, con amigos."},
        {label:"Good morning", text:"Buenos días — hasta el mediodía. Formal."},
        {label:"Good afternoon", text:"Buenas tardes — después del mediodía."},
        {label:"Good evening", text:"Buenas noches — al anochecer (al llegar, no al irse)."},
        {label:"How are you?", text:"¿Cómo estás? — formal e informal."},
        {label:"How's it going?", text:"¿Cómo va todo? — informal."},
        {label:"What's up?", text:"¿Qué hay? — muy informal, solo con amigos."},
        {label:"Nice to meet you", text:"Mucho gusto — primera vez que se conocen."},
        {label:"See you later", text:"Hasta luego — despedida informal."}
      ]
    },
    {
      title: "Día 3 — Respuestas naturales a '¿Cómo estás?'",
      items: [
        {label:"I'm fine, thanks.", text:"Estoy bien, gracias. (respuesta formal)"},
        {label:"Pretty good!", text:"Bastante bien. (informal)"},
        {label:"Not bad.", text:"No está mal. (neutral)"},
        {label:"I'm tired.", text:"Estoy cansado/a."},
        {label:"I'm great.", text:"Estoy excelente."},
        {label:"Not so good.", text:"No muy bien."},
        {label:"Same as always.", text:"Igual que siempre."},
        {label:"Truco de fluidez", text:"Siempre agregá 'thanks' o 'and you?' al final. Marca una gran diferencia en la naturalidad."}
      ]
    },
    {
      title: "Día 4 — Estructura básica: Sujeto + Verbo + Complemento",
      items: [
        {label:"La fórmula fundamental", text:"SUJETO + VERBO + COMPLEMENTO. En inglés este orden es casi siempre obligatorio (a diferencia del español)."},
        {label:"I am happy.", text:"Yo soy/estoy feliz. — I = sujeto, am = verbo, happy = complemento."},
        {label:"You are ready.", text:"Tú estás listo/a."},
        {label:"She is a teacher.", text:"Ella es maestra."},
        {label:"We are students.", text:"Somos estudiantes."},
        {label:"It is cold today.", text:"Hace frío hoy."},
        {label:"⚠ El sujeto NUNCA se omite en inglés", text:"En español decís 'Estoy bien'. En inglés siempre hay que poner el pronombre: 'I am fine.' No se puede omitir."}
      ]
    },
    {
      title: "Día 5 — Números, días y meses",
      items: [
        {label:"1 al 10", text:"One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten"},
        {label:"11 al 20", text:"Eleven, Twelve, Thirteen, Fourteen, Fifteen, Sixteen, Seventeen, Eighteen, Nineteen, Twenty"},
        {label:"Decenas", text:"30 Thirty · 40 Forty · 50 Fifty · 60 Sixty · 70 Seventy · 80 Eighty · 90 Ninety · 100 One hundred"},
        {label:"Días de la semana", text:"Monday · Tuesday · Wednesday · Thursday · Friday · Saturday · Sunday"},
        {label:"Meses del año", text:"January · February · March · April · May · June · July · August · September · October · November · December"}
      ]
    },
    {
      title: "Día 6 — Mini conversaciones reales (practicá en voz alta)",
      items: [
        {label:"Primer encuentro", text:"A: Hi! I'm Carlos. Nice to meet you. / B: Nice to meet you too! I'm Sarah."},
        {label:"¿Cómo estás?", text:"A: Hey! How are you? / B: Pretty good, thanks! And you? / A: I'm great, thanks!"},
        {label:"Despedida", text:"A: It was nice talking to you! / B: You too! See you later!"},
        {label:"Preguntar la hora", text:"A: Excuse me, what time is it? / B: It's three fifteen. / A: Thank you!"},
        {label:"En una tienda", text:"A: Hi, can I help you? / B: Yes, please. How much is this? / A: It's twenty dollars."},
        {label:"El clima", text:"A: It's cold today, isn't it? / B: Yes! Very cold. I need a jacket."},
        {label:"Hacer planes", text:"A: Are you free on Friday? / B: Yes! What's the plan? / A: Let's have lunch together."},
        {label:"En el trabajo", text:"A: Good morning! Ready for the meeting? / B: Almost! Give me five minutes. / A: No problem, take your time."}
      ]
    },
    {
      title: "Día 7 — Plan de práctica semanal",
      items: [
        {label:"Regla de consistencia", text:"20 minutos diarios son más efectivos que 3 horas una vez a la semana. El cerebro necesita exposición frecuente."},
        {label:"Paso 1 — Leé en voz alta", text:"Cada frase y diálogo debe leerse en voz alta. Nunca en silencio. La pronunciación es una habilidad física."},
        {label:"Paso 2 — Grabate", text:"Usá el micrófono del celular. Escuchate. La incomodidad que sentís al oírte es parte del proceso."},
        {label:"Paso 3 — Repetí hasta que fluya", text:"Un diálogo por día hasta que salga automático. Luego pasás al siguiente."},
        {label:"Checklist diario", text:"☑ Escuché ☑ Repetí en voz alta ☑ Creé frases propias ☑ Me grabé ☑ Revisé lo del día anterior"}
      ]
    }
  ]
});
