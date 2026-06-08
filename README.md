# 🇬🇧 Mi Inglés — Clases con Euge

App web personal para registrar y practicar todo lo aprendido en las clases de inglés.

## ¿Qué tiene?

- **Mis clases** — todas las clases con vocabulario, gramática, correcciones y frases útiles
- **Vocabulario** — todas las palabras con buscador
- **Gramática** — todas las reglas aprendidas
- **Mis errores** — correcciones de clase + notas personales
- **Guías de estudio** — contenido de los libros (Inglés en 30 días, pronunciación, frases, etc.)
- **Frases útiles** — buscador de frases
- **Flashcards** — inglés→español y español→inglés
- **Quiz** — 4 opciones, con puntaje

## Cómo agregar una clase nueva

1. Clic en **"+ Nueva clase"**
2. Seleccioná la fecha
3. Pegá el chat con Euge
4. Clic en **"✨ Procesar y guardar"** — la IA extrae vocabulario, gramática, correcciones y frases automáticamente

## Cómo subir a GitHub Pages

```bash
# 1. Crear repositorio en github.com (ej: mi-ingles)

# 2. Clonar y copiar archivos
git clone https://github.com/TU_USUARIO/mi-ingles.git
cp index.html style.css app.js data.js mi-ingles/
cd mi-ingles

# 3. Subir
git add .
git commit -m "Initial commit"
git push origin main

# 4. Activar GitHub Pages
# Settings → Pages → Source: main branch → Save
# URL: https://TU_USUARIO.github.io/mi-ingles
```

## Archivos

```
mi-ingles/
├── index.html   — estructura de la app
├── style.css    — estilos
├── app.js       — lógica, vistas y práctica
└── data.js      — clases y guías (datos iniciales)
```

## Tecnología

- HTML + CSS + JavaScript puro — sin frameworks, sin dependencias
- localStorage para guardar datos entre sesiones
- API de Claude para procesar chats automáticamente
- Compatible con GitHub Pages (solo frontend)
