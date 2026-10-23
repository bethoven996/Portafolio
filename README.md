# Portfolio — Beto Narváez

React + Vite. Todo el contenido está en `src/data.js`.

## Correr local

```bash
npm install
npm run dev
```

## Subir a Vercel

1. Subí esta carpeta a un repo nuevo en GitHub:
   ```bash
   git init
   git add .
   git commit -m "portfolio"
   git branch -M main
   git remote add origin https://github.com/bethoven996/portfolio.git
   git push -u origin main
   ```
2. Entrá a vercel.com → **Add New → Project** → importá el repo.
3. Vercel detecta Vite solo (build: `npm run build`, output: `dist`). Dale **Deploy**.

Cada `git push` a `main` redeploya automáticamente.

## Agregar un proyecto

En `src/data.js`, sumá un objeto al array `proyectos`:

```js
{
  nombre: 'MI PROYECTO',
  tag: 'MACHINE LEARNING',
  desc: 'Qué hace en una o dos líneas.',
  stack: ['Python', 'scikit-learn'],
  demo: 'https://...',   // o ''
  repo: 'https://github.com/...', // o ''
},
```

## CV

Poné el PDF en `public/` y completá `cv: '/tu-cv.pdf'` en `perfil`.
