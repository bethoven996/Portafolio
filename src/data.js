// ─────────────────────────────────────────────────────────────
//  Todo el contenido del portfolio vive acá. Editá esto y listo.
// ─────────────────────────────────────────────────────────────

// Tema de colores: 'violeta' | 'naranja' | 'atardecer' | 'clasico'
export const tema = "violeta";

export const perfil = {
  nombre: ["NORBERTO", "NARVÁEZ"],
  rol: "AI / ML DEVELOPER",
  ubicacion: "ROSARIO, AR",
  bio: [
    { t: "Construyo " },
    { t: "soluciones de IA aplicadas", strong: true },
    {
      t: " a problemas reales: chatbots con RAG, modelos de machine learning y visión por computadora. ",
    },
    { t: "Del dataset al deploy.", strong: true },
  ],
  email: "norberto_slo@hotmail.com",
  linkedin: "https://www.linkedin.com/in/betonarvaez",
  github: "https://github.com/bethoven996",
  cv: "", // ej: '/cv-norberto-narvaez.pdf' (poné el PDF en /public). Vacío = no se muestra.
  estado: "DISPONIBLE / OPEN TO WORK",
  busco: "Trainee / Junior en AI-ML · Remoto, híbrido o presencial en Rosario",
};

export const hero = {
  titulo: "8 AÑOS DIRIGIENDO EQUIPOS. AHORA ENTRENO MODELOS.",
  cta: "CONTACTAME",
};

// tag: categoría corta que aparece arriba del nombre
// link: a dónde te manda al hacer click en la fila (demo si hay, si no el repo)
export const proyectos = [
  {
    nombre: "BORIS",
    tag: "LLM · RAG",
    desc: "Chatbot para una farmacia real: el cliente pregunta por un producto y Boris responde precio y disponibilidad, con memoria de la conversación.",
    stack: ["LangChain", "Groq", "FAISS", "Streamlit"],
    link: "https://chatbotborisgit-txsap7uqcdfdunwmeo9ppi.streamlit.app/",
    live: true,
  },
  {
    nombre: "RASTREADOR DE OFERTAS",
    tag: "SCRAPING · WEB",
    desc: "Busca una prenda en varias tiendas online y compara precios en una sola pantalla.",
    stack: ["Python", "Scraping", "Streamlit"],
    link: "https://github.com/bethoven996/E-Comer", // TODO: cambiar por el link de Streamlit
  },
  {
    nombre: "LA RIBERA",
    tag: "WEB · E-COMMERCE",
    desc: "Sitio para un almacén saludable de Rosario: catálogo, armado de pedidos que se envían por WhatsApp y panel privado para que los dueños gestionen pedidos, productos y ventas.",
    stack: ["React", "Firebase", "Netlify"], // TODO: confirmá las tecnologías reales
    link: "https://la-ribera.netlify.app/",
    live: true,
  },
  {
    nombre: "BASQUET STATS",
    tag: "WEB · DEPORTE",
    desc: "App web para cargar y seguir estadísticas de partidos y jugadores de básquet.", // TODO: ajustá la descripción
    stack: ["React", "API REST", "Vercel"], // TODO: confirmá las tecnologías reales
    link: "https://basquet-stats-frontend.vercel.app/",
    live: true,
  },
];

export const stack = [
  "Python",
  "React",
  "scikit-learn",
  "Pandas",
  "LangChain",
  "RAG",
  "YOLO",
  "OpenCV",
  "Streamlit",
  "SQL Server",
  "Power BI",
  "Git",
];

export const formacion = [
  {
    titulo: "Tecnicatura Universitaria en Inteligencia Artificial",
    lugar: "FCEIA · UNR",
    detalle: "Último año",
  },
  {
    titulo: "Curso de React JS",
    lugar: "CODERHOUSE",
    detalle: "2023",
  },
  {
    titulo: "Profesorado de Educación Física",
    lugar: "ISEF 11 ROSARIO",
    detalle: "2018",
  },
];

export const extra = [
  { k: "BÁSQUET", v: "8 años como técnico" },
  { k: "DOCENCIA", v: "6 años como profe de educación física" },
  { k: "ENTRENO", v: "Gimnasio y running" },
];
