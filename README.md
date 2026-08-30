# Portafolio — María Paula Trujillo Cuesta, Analista de Datos Jr.

Portafolio personal construido con **React + Vite + Tailwind CSS**, con una
identidad editorial: fondo color crema, tipografía serif de alto contraste
(Playfair Display) para el nombre, acento rojo burdeos, tarjetas estilo KPI
y barras de nivel en las habilidades.

## Estructura

```
src/
  components/
    Navbar.jsx      Barra de navegación fija
    Hero.jsx         Hero principal (nombre, especialidad, KPIs)
    Projects.jsx      Sección de proyectos
    ProjectCard.jsx    Tarjeta individual de proyecto
    Skills.jsx        Sección de habilidades
    SkillItem.jsx       Tarjeta individual de habilidad
    Footer.jsx        Footer con contacto, GitHub y LinkedIn
  data/
    portfolio.js     Todo el contenido editable (nombre, proyectos, skills...)
  hooks/
    useReveal.js      Animación de aparición al hacer scroll
  App.jsx
  main.jsx
  index.css
```

## Personalización

Todo el contenido (nombre, rol, biografía, proyectos, habilidades y enlaces
a GitHub/LinkedIn) vive en **`src/data/portfolio.js`**. No necesitas tocar
los componentes para actualizar tu información: edita ese archivo.

Colores y tipografías están centralizados en `tailwind.config.js`.

## Desarrollo local

Requiere Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

## Despliegue en Vercel

**Opción 1 — Dashboard de Vercel**
1. Sube este proyecto a un repositorio de GitHub.
2. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio.
3. Vercel detecta automáticamente que es un proyecto Vite (`framework: vite`).
   No se requiere configuración adicional gracias al `vercel.json` incluido.
4. Deploy.

**Opción 2 — Vercel CLI**

```bash
npm i -g vercel
vercel
```

## Stack

- React 18
- Vite 6
- Tailwind CSS 3
- lucide-react (iconos)
