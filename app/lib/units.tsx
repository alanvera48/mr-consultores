/* ============================================================
   MR CONSULTORES — Fuente única de datos de las CINCO UNIDADES
   Usada por: la sección del home (#unidades), el dropdown del nav,
   el footer y las páginas de detalle /unidades/[slug].
   ============================================================ */
import type { JSX } from "react";

/* ---------- Íconos (compartidos con la sección del home) ---------- */
export const IconRRHH = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M2.5 20c0-3.6 3-5.5 6.5-5.5s6.5 1.9 6.5 5.5" />
    <path d="M17 8.5a3 3 0 0 0 0-1M19 20c0-2.6-1.2-4.3-3-5.2" />
  </svg>
);
export const IconDO = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
  </svg>
);
export const IconPsico = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3a6 6 0 0 0-6 6c0 2 1 3.3 1 5 0 1.5 1.5 2.5 5 2.5s5-1 5-2.5c0-1.7 1-3 1-5a6 6 0 0 0-6-6Z" />
    <path d="M9.5 21h5" />
  </svg>
);
export const IconLegal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3v18M5 7h14M7 7l-3 6h6zM17 7l3 6h-6z" />
  </svg>
);
export const IconTech = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 20h8M12 17v3M7 9l2 2-2 2M12 13h4" />
  </svg>
);

/* ---------- Tipos ---------- */
export interface UnitService {
  title: string;
  desc: string;
}

export interface Unit {
  /** clave corta usada por el script de la sección del home (data-u / data-p) */
  key: "rrhh" | "do" | "psico" | "legal" | "tech";
  /** segmento de URL: /unidades/<slug> */
  slug: string;
  name: string;
  /** descripción corta para listados y dropdown */
  short: string;
  accent: string;
  eyebrow: string;
  /** frase ancla de la unidad */
  tagline: string;
  /** introducción ampliada (página de detalle) */
  intro: string;
  /** beneficio diferencial, una línea destacada */
  highlight: string;
  services: UnitService[];
  /** entregables concretos ("qué incluye") */
  deliverables: string[];
  Icon: () => JSX.Element;
}

/* ---------- Datos ---------- */
export const units: Unit[] = [
  {
    key: "rrhh",
    slug: "recursos-humanos",
    name: "Recursos Humanos",
    short: "El núcleo operativo del talento",
    accent: "#1F1F24",
    eyebrow: "Unidad · Recursos Humanos",
    tagline: "El motor operativo del talento, con procesos que crecen con vos.",
    intro:
      "Es el motor operativo de tu empresa: atraemos, incorporamos y acompañamos al talento con procesos claros y medibles que crecen junto a tu organización. Ordenamos el día a día de RRHH para que cada decisión sobre personas tenga método, trazabilidad y respaldo profesional.",
    highlight:
      "Procesos de personas ordenados y medibles, listos para escalar.",
    services: [
      {
        title: "Reclutamiento y selección",
        desc: "Búsquedas end-to-end con evaluación profesional: definimos el perfil, atraemos candidatos y acompañamos hasta la incorporación de la persona correcta para tu equipo y tu cultura.",
      },
      {
        title: "Gestión del desempeño",
        desc: "Diseñamos e implementamos sistemas de objetivos y evaluación que vuelven visible el aporte de cada persona y guían las decisiones de desarrollo.",
      },
      {
        title: "Gestión del talento",
        desc: "Identificamos potencial, planificamos el crecimiento y fortalecemos el compromiso con estrategias de desarrollo sostenidas en el tiempo.",
      },
      {
        title: "Compensaciones y beneficios",
        desc: "Estructuras salariales equitativas y competitivas, con esquemas de beneficios alineados a tu estrategia y al mercado.",
      },
      {
        title: "Onboarding",
        desc: "Procesos de incorporación que aceleran la productividad y la integración cultural desde el primer día.",
      },
    ],
    deliverables: [
      "Procesos de selección documentados y replicables",
      "Tableros e indicadores de desempeño",
      "Mapa de talento y planes de desarrollo",
      "Bandas salariales y política de beneficios",
      "Programa de onboarding a medida",
    ],
    Icon: IconRRHH,
  },
  {
    key: "do",
    slug: "desarrollo-organizacional",
    name: "Desarrollo Organizacional",
    short: "Cultura, liderazgo y cambio",
    accent: "#3C3C42",
    eyebrow: "Unidad · Desarrollo Organizacional",
    tagline: "Construimos la organización que tu estrategia necesita.",
    intro:
      "Cultura, liderazgo y diseño organizacional para crecer sin perder identidad ni talento. Acompañamos los procesos de cambio y construimos las estructuras, los líderes y los recorridos de carrera que tu estrategia necesita para seguir escalando.",
    highlight:
      "Crecimiento con identidad: estructura, liderazgo y cultura alineados.",
    services: [
      {
        title: "Diagnóstico organizacional",
        desc: "Relevamiento profundo de cultura, estructura y procesos para identificar palancas de mejora y prioridades de intervención.",
      },
      {
        title: "Programas de liderazgo",
        desc: "Formación y acompañamiento de líderes y equipos para sostener el crecimiento con coherencia y buenas prácticas de gestión.",
      },
      {
        title: "Planes de carrera y sucesión",
        desc: "Recorridos de crecimiento claros y planes de sucesión que retienen al talento clave y aseguran la continuidad del negocio.",
      },
      {
        title: "Estructuras organizacionales",
        desc: "Diseño de organigramas, roles y responsabilidades que ordenan la operación y habilitan la escala.",
      },
      {
        title: "Employer Branding",
        desc: "Construimos y comunicamos tu propuesta de valor como empleador para atraer y fidelizar al mejor talento.",
      },
    ],
    deliverables: [
      "Informe de diagnóstico con plan de acción",
      "Programa de desarrollo de liderazgo",
      "Mapa de carrera y matriz de sucesión",
      "Organigrama y descriptivos de puesto",
      "Propuesta de valor al empleado (EVP)",
    ],
    Icon: IconDO,
  },
  {
    key: "psico",
    slug: "psicologia-laboral",
    name: "Psicología Laboral",
    short: "Evaluación y bienestar",
    accent: "#9C1026",
    eyebrow: "Unidad · Psicología Laboral",
    tagline: "Decisiones sobre personas con respaldo técnico real.",
    intro:
      "Evaluación profesional matriculada y bienestar: acompañamos las decisiones sobre personas con respaldo técnico real. Aportamos rigor psicológico a la selección, el desarrollo y el cuidado de los equipos, integrando la mirada clínica al negocio.",
    highlight:
      "Rigor psicológico matriculado al servicio de tus decisiones de talento.",
    services: [
      {
        title: "Evaluaciones psicotécnicas",
        desc: "Evaluaciones profesionales con respaldo técnico para identificar potencial y acompañar la toma de decisiones sobre talento.",
      },
      {
        title: "Assessment Center",
        desc: "Dinámicas de evaluación por competencias que observan a la persona en situación, con devolución estructurada.",
      },
      {
        title: "Coaching laboral",
        desc: "Acompañamiento individual y de equipos para potenciar habilidades, gestionar el cambio y mejorar el desempeño.",
      },
      {
        title: "Clima organizacional",
        desc: "Medimos y diagnosticamos el clima y la satisfacción para anticipar conflictos y diseñar planes de mejora.",
      },
      {
        title: "Acompañamiento y bienestar",
        desc: "Programas de bienestar y cuidado psicológico que sostienen la salud emocional de las personas en el trabajo.",
      },
    ],
    deliverables: [
      "Informes psicotécnicos firmados por profesional matriculado",
      "Diseño y conducción de assessment centers",
      "Procesos de coaching con objetivos medibles",
      "Encuesta y reporte de clima organizacional",
      "Plan de bienestar y acompañamiento",
    ],
    Icon: IconPsico,
  },
  {
    key: "legal",
    slug: "legal-laboral",
    name: "Legal Laboral",
    short: "Marco jurídico y compliance",
    accent: "#55555C",
    eyebrow: "Unidad · Legal Laboral",
    tagline: "Tranquilidad jurídica integrada al día a día de RRHH.",
    intro:
      "Tranquilidad jurídica integrada al día a día de RRHH, firmada por abogada laboral matriculada. Unimos la perspectiva jurídica y la gestión de personas en un mismo lugar, para que el crecimiento de tu organización tenga respaldo y previsibilidad legal.",
    highlight:
      "Perspectiva jurídica y gestión de personas, en un mismo lugar.",
    services: [
      {
        title: "Contratos y documentación",
        desc: "Redacción y revisión de contratos, acuerdos y documentación laboral conforme a la normativa vigente.",
      },
      {
        title: "Desvinculaciones y sanciones",
        desc: "Acompañamiento técnico y humano en desvinculaciones, sanciones y procesos disciplinarios, minimizando el riesgo legal.",
      },
      {
        title: "Compliance laboral",
        desc: "Implementamos y auditamos el cumplimiento normativo para mantener a tu empresa en regla y protegida.",
      },
      {
        title: "Mediación y conflictos",
        desc: "Gestión y resolución de conflictos individuales y colectivos, con foco en preservar la relación laboral.",
      },
      {
        title: "Auditoría documental",
        desc: "Revisión integral de legajos y documentación para detectar y corregir brechas antes de que sean un problema.",
      },
    ],
    deliverables: [
      "Modelos de contratos y documentación al día",
      "Protocolos de desvinculación y sanciones",
      "Programa de compliance laboral",
      "Procesos de mediación documentados",
      "Informe de auditoría documental con plan de regularización",
    ],
    Icon: IconLegal,
  },
  {
    key: "tech",
    slug: "tecnologia-automatizacion",
    name: "Tecnología y Automatización",
    short: "Digitalización y transformación",
    accent: "#2A2A30",
    eyebrow: "Unidad · Tecnología y Automatización",
    tagline: "No solo recomendamos tecnología: la construimos.",
    intro:
      "Nuestro diferencial menos copiable: no solo recomendamos tecnología, la construimos. Digitalizamos y automatizamos tus procesos de personas con soluciones que simplifican la gestión, optimizan el trabajo y potencian el desarrollo organizacional.",
    highlight:
      "El diferencial menos copiable: software de RRHH hecho a tu medida.",
    services: [
      {
        title: "Automatización de procesos",
        desc: "Eliminamos tareas manuales y repetitivas de RRHH con flujos automáticos que liberan tiempo y reducen errores.",
      },
      {
        title: "Software de RRHH a medida",
        desc: "Diseñamos y desarrollamos herramientas propias adaptadas a la forma real de trabajar de tu organización.",
      },
      {
        title: "Digitalización de procesos",
        desc: "Llevamos legajos, firmas y circuitos de personas a entornos digitales seguros y trazables.",
      },
      {
        title: "Transformación digital",
        desc: "Acompañamos el cambio cultural y operativo que toda adopción tecnológica necesita para tener impacto real.",
      },
      {
        title: "Implementación de herramientas",
        desc: "Seleccionamos, integramos y ponemos en marcha plataformas de gestión de personas, con soporte y capacitación.",
      },
    ],
    deliverables: [
      "Mapa de procesos y oportunidades de automatización",
      "Desarrollo de software de RRHH a medida",
      "Digitalización de legajos y circuitos clave",
      "Hoja de ruta de transformación digital",
      "Implementación, integración y capacitación",
    ],
    Icon: IconTech,
  },
];

export const getUnit = (slug: string): Unit | undefined =>
  units.find((u) => u.slug === slug);
