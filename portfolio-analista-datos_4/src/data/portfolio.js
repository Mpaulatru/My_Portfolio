// -----------------------------------------------------------------------
// Edita este archivo para personalizar todo el contenido del portafolio.
// -----------------------------------------------------------------------

export const profile = {
  firstName: 'María Paula',
  lastName: 'Trujillo Cuesta',
  name: 'María Paula Trujillo Cuesta',
  role: 'Analista de Datos Jr.',
  tagline:
    'Transformo datos crudos en bases de datos, consultas SQL e informes que responden preguntas reales de negocio.',
  location: 'Colombia',
  available: true,
  email: 'tpaula76@gmail.com',
  social: {
    github: 'https://github.com/Mpaulatru',
    linkedin:
      'https://www.linkedin.com/in/maria-paula-trujillo-cuesta-3910b61b8',
  },
}

export const stats = [
  { label: 'Bases de datos construidas', value: '2' },
  { label: 'Registros analizados', value: '600+' },
  { label: 'En ventas analizadas (COP)', value: '$1.460M' },
]

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
]

export const projects = [
  {
    id: 'intelretail-pro',
    title: 'IntelRetail Pro',
    description:
      'Plataforma de inteligencia financiera, auditoría de catálogo y proyección estocástica para retail de alto rendimiento: el comercio carga su archivo de ventas (Excel/CSV) y obtiene en minutos un diagnóstico de márgenes, rotación y riesgo por producto, con IA que simula escenarios y sugiere estrategias de ventas.',
    impact: 'De un archivo de ventas a un plan de acción en minutos',
    tools: ['Python', 'SQL', 'Git', 'Vercel'],
    repoUrl: '',
    demoUrl: 'https://intelretail-pro.vercel.app',
  },
  {
    id: 'lapau-sql',
    title: 'Panadería Lapau — Hallazgos en SQL',
    description:
      'Estructuración de los datos de clientes, facturas y catálogo de Panadería Lapau (originalmente en Excel) en una base de datos relacional SQLite, y consultas SQL para validar frecuencia de compra, métodos de pago, integridad del catálogo y costo total de fabricación.',
    impact: '4 hallazgos de negocio validados con SQL',
    tools: ['SQL', 'SQLite', 'Excel'],
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 'ventas-python',
    title: 'Análisis de ventas Ene–Jun 2026',
    description:
      'Análisis exploratorio en Python sobre un dataset de 600 registros (8 ciudades, 8 productos, 4 canales) para identificar el producto más vendido, la ciudad líder y el canal con mayor participación, cerrando con recomendaciones de negocio.',
    impact: '$1.460.371.500 en ventas analizadas',
    tools: ['Python', 'Pandas', 'Excel'],
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 'python-sql-colab',
    title: 'Conexión Python + SQL con dos bases de datos',
    description:
      'Ejercicio guiado para profundizar en Python conectado a SQL: consultas, cruces entre dos bases de datos distintas y automatización del flujo de análisis en Google Colab.',
    impact: '2 bases de datos conectadas vía Python',
    tools: ['Python', 'SQL', 'Google Colab'],
    repoUrl: '',
    demoUrl: '',
  },
]

// El campo "icon" corresponde al nombre de un icono de lucide-react.
export const skillGroups = [
  {
    category: 'Análisis y lenguajes',
    skills: [
      { name: 'SQL', level: 90, icon: 'Database' },
      { name: 'Python', level: 80, icon: 'Code2' },
      { name: 'Excel', level: 88, icon: 'Table' },
    ],
  },
  {
    category: 'Visualización y control de versiones',
    skills: [
      { name: 'Power BI', level: 78, icon: 'BarChart3' },
      { name: 'Tableau', level: 70, icon: 'LineChart' },
      { name: 'Git', level: 65, icon: 'GitBranch' },
    ],
  },
]
