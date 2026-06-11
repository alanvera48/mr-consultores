"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}>({ lang: "es", setLang: () => {}, toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "es") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };
  const toggle = () => setLang(lang === "es" ? "en" : "es");

  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

/** Hook de traducción: devuelve el bloque del diccionario para el idioma activo. */
export const useT = () => dict[useLang().lang];

/* ============================================================
   DICCIONARIO — Español / Inglés
   ============================================================ */
export const dict = {
  es: {
    nav: {
      nosotros: "Nosotros",
      unidades: "Unidades",
      unidadesNeg: "Unidades de negocio",
      metodologia: "Metodología",
      casos: "Casos",
      faq: "FAQ",
      blog: "Centro de conocimiento",
      cta: "Solicitar propuesta",
      verMapa: "Ver mapa completo →",
    },
    hero: {
      eyebrow: "Firma integral de capital humano",
      h1a: "Construimos organizaciones preparadas para",
      h1em: "el futuro",
      lead: "Diseñamos soluciones que combinan experiencia humana, conocimiento especializado y tecnología para impulsar el desarrollo sostenible de cada organización.",
      cta1: "Solicitar propuesta",
      cta2: "Explorar unidades",
      tags: [
        "Talento",
        "Desarrollo organizacional",
        "Legal laboral",
        "Tecnología",
        "Acompañamiento integral",
      ],
      mediaTags: "Talento · Cultura · Tecnología",
      cubes: ["Talento", "Cultura", "Tecnología"],
      scroll: "Scroll",
    },
    stats: {
      exp: "Años de experiencia",
      gptw: "Great Place to Work",
      colab: "Colaboradores acompañados",
      unidades: "Unidades integradas",
    },
    globe: {
      eyebrow: "Alcance global",
      h2: "Cerca de tu organización, estés donde estés",
      p: "Desde Córdoba acompañamos a equipos en Argentina y el mundo, en modalidad remota e híbrida, con la misma cercanía sin importar la distancia.",
      stat1: "provincias acompañadas",
      stat2top: "Remoto e híbrido",
      stat2: "misma cercanía, en cualquier lugar del mundo",
    },
    about: {
      eyebrow: "Nosotros",
      h2: "Personas, cultura y tecnología para organizaciones que crecen.",
      lead: "MR Consultores acompaña a organizaciones en crecimiento mediante una propuesta que integra talento, desarrollo organizacional, asesoramiento especializado y tecnología. Diseñamos soluciones que evolucionan junto a cada empresa, combinando cercanía, conocimiento experto y herramientas escalables.",
      b1t: "Orientación a datos",
      b1p: "Tomamos decisiones respaldadas por indicadores que permiten medir avances, identificar oportunidades y acompañar el crecimiento con información confiable.",
      b2t: "Mirada multidisciplinaria",
      b2p: "Integramos distintas especialidades para abordar cada desafío organizacional desde una perspectiva amplia, coordinada y alineada con el negocio.",
      b3t: "Resultados medibles",
      b3p: "Diseñamos soluciones con objetivos claros, indicadores de seguimiento y acompañamiento continuo para generar impacto sostenible.",
      quote:
        "“El crecimiento sostenible se construye cuando estrategia, personas y cultura avanzan en la misma dirección.”",
      pillars: ["Estrategia", "Personas", "Cultura"],
      aligned: "en una misma dirección",
      switchImg: "Imagen",
      switch3d: "3D",
      photoAlt: "Equipo de MR Consultores",
      founderName: "Micaela Rivero",
      founderRole: "Fundadora · MR Consultores",
      founderAlt: "Micaela Rivero, fundadora de MR Consultores",
    },
    units: {
      eyebrow: "Mapa de soluciones",
      h2: "Cinco unidades, un solo equipo",
      p: "Tocá cada unidad para explorar qué resuelve. Juntas, son tu diferencial integral.",
      verUnidad: "Ver unidad completa",
      solicitar: "Solicitar propuesta →",
    },
    methodology: {
      eyebrow: "Metodología de trabajo",
      h2: "Nuestra metodología de trabajo",
      p: "Cinco fases diseñadas para transformar desafíos organizacionales en resultados sostenibles.",
      introH: "Un método claro, en cinco fases",
      introP: "Un proceso estructurado que acompaña a tu organización desde el diagnóstico hasta la consolidación de los resultados.",
      phases: [
        { t: "Diagnóstico", p: "Analizamos el punto de partida a través de indicadores, procesos y dinámicas organizacionales." },
        { t: "Estrategia", p: "Definimos prioridades, objetivos y un plan de acción alineado a las necesidades del negocio." },
        { t: "Implementación", p: "Llevamos las iniciativas a la práctica junto a tu equipo, integrando procesos, herramientas y tecnología." },
        { t: "Medición", p: "Monitoreamos indicadores clave para evaluar avances, identificar oportunidades y ajustar acciones." },
        { t: "Seguimiento", p: "Acompañamos la evolución de cada iniciativa mediante un seguimiento continuo que favorece su sostenibilidad y consolidación en el tiempo." },
      ],
    },
    cases: {
      eyebrow: "Casos de éxito",
      h2: "Resultados que hablan por sí mismos",
      p: "Estructura preparada para incorporar tus casos a medida que la firma crece.",
      pEm: "Reemplazá estos ejemplos por casos reales.",
      c1t: "Certificación Great Place to Work",
      c1p: "Acompañamiento de cultura y engagement que fortaleció la experiencia y el sentido de pertenencia del equipo.",
      c2t: "Desarrollo a escala",
      c2p: "Diseño e implementación de procesos de evaluación y desarrollo para más de 2.000 colaboradores.",
      c3t: "Tu próximo caso",
      c3p: "Espacio reservado para la transformación que vamos a construir juntos en tu organización.",
      destacado: "Caso destacado",
      proximo: "Próximamente",
    },
    cta: {
      eyebrow: "Demos el siguiente paso",
      h2: "¿Listos para transformar tu organización?",
      p: "Conversemos sobre tus desafíos de capital humano y diseñemos juntos una propuesta a medida.",
      btn: "Solicitar propuesta",
    },
    blog: {
      eyebrow: "Centro de conocimiento",
      h2: "Ideas para impulsar el desarrollo de las organizaciones",
      p: "Contenido práctico y perspectivas especializadas sobre talento, cultura, liderazgo y transformación organizacional.",
      read: "Leer artículo →",
      p1cat: "Liderazgo",
      p1t: "Cómo acompañar a un equipo que crece",
      p1p: "Qué cambia en la gestión de personas cuando la empresa pasa de 10 a 50 colaboradores.",
      p2cat: "Experiencia",
      p2t: "Onboarding: la experiencia que define la permanencia",
      p2p: "Por qué los primeros 90 días pesan más que cualquier beneficio.",
      p3cat: "Transformación",
      p3t: "Liderazgo de primera vez: por dónde empezar",
      p3p: "Acompañar a quienes asumen su primer rol de conducción es clave para sostener el crecimiento.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      h2: "Resolvemos tus dudas",
      items: [
        { q: "¿Trabajan con empresas de todo el país?", a: "Sí. Trabajamos en modalidad remota e híbrida en toda Argentina, con la misma cercanía estés donde estés." },
        { q: "¿Tengo que contratar todas las unidades?", a: "No. Podés contratar una sola unidad o combinar varias en un proyecto integral. La ventaja de tenerlas juntas es coordinar todo con un solo equipo." },
        { q: "¿En qué se diferencian de una consultora tradicional?", a: "Integramos cinco disciplinas en un solo equipo, acompañamos la implementación de principio a fin y combinamos cercanía humana, tecnología y visión estratégica." },
        { q: "¿Cómo es el acompañamiento?", a: "Cercano y continuo. Tras implementar, mantenemos una fase de seguimiento con comunicación y feedback constantes para asegurar la continuidad y sostenibilidad de las acciones." },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      h2: "Hablemos de tu empresa",
      p: "Contanos qué necesitás y te respondemos con una propuesta clara y a medida.",
      email: "Email",
      phone: "Teléfono / WhatsApp",
      location: "Ubicación",
      locationVal: "Córdoba, Argentina · atención nacional",
      formTitle: "Solicitar propuesta",
      formSub: "Completá el formulario y recibí una propuesta personalizada.",
      ok: "✓ ¡Gracias! Recibimos tu solicitud y te responderemos a la brevedad.",
      okEm: "(Demo: conectá el formulario a un servicio de envío para que funcione de verdad.)",
      fName: "Nombre y apellido",
      fNamePh: "Tu nombre",
      fCompany: "Empresa",
      fCompanyPh: "Tu empresa",
      fEmail: "Email",
      fEmailPh: "tu@email.com",
      fPhone: "Teléfono",
      fPhonePh: "+54 ...",
      fUnit: "Unidad de interés",
      fUnitPh: "Seleccioná",
      fUnitProj: "Proyecto integral",
      fMsg: "Contanos qué necesitás",
      fMsgPh: "Describí brevemente tu desafío...",
      submit: "Enviar solicitud",
    },
    footer: {
      about: "Firma integral de capital humano que reúne tecnología, selección, desarrollo organizacional, legal y psicología.",
      unidades: "Unidades",
      navegacion: "Navegación",
      contacto: "Contacto",
      nosotros: "Nosotros",
      metodologia: "Metodología",
      casos: "Casos",
      blog: "Centro de conocimiento",
      faq: "Preguntas frecuentes",
      rights: "MR Consultores. Talento y tecnología, en una sola firma.",
      tagline: "Diseñado para crecer ✦",
    },
    unitNames: {
      rrhh: { name: "Recursos Humanos", short: "El núcleo operativo del talento" },
      do: { name: "Desarrollo Organizacional", short: "Cultura, liderazgo y cambio" },
      psico: { name: "Psicología Laboral", short: "Evaluación y bienestar" },
      legal: { name: "Legal Laboral", short: "Marco jurídico y compliance" },
      tech: { name: "Tecnología y Automatización", short: "Digitalización y transformación" },
    },
  },

  en: {
    nav: {
      nosotros: "About",
      unidades: "Units",
      unidadesNeg: "Business units",
      metodologia: "Methodology",
      casos: "Cases",
      faq: "FAQ",
      blog: "Knowledge hub",
      cta: "Request a proposal",
      verMapa: "See full map →",
    },
    hero: {
      eyebrow: "Integral human-capital firm",
      h1a: "We build organizations ready for",
      h1em: "the future",
      lead: "We design solutions that combine human experience, specialized knowledge and technology to drive the sustainable growth of every organization.",
      cta1: "Request a proposal",
      cta2: "Explore units",
      tags: [
        "Talent",
        "Organizational development",
        "Labor law",
        "Technology",
        "End-to-end support",
      ],
      mediaTags: "Talent · Culture · Technology",
      cubes: ["Talent", "Culture", "Technology"],
      scroll: "Scroll",
    },
    stats: {
      exp: "Years of experience",
      gptw: "Great Place to Work",
      colab: "Employees supported",
      unidades: "Integrated units",
    },
    globe: {
      eyebrow: "Global reach",
      h2: "Close to your organization, wherever you are",
      p: "From Córdoba we support teams in Argentina and around the world, remotely and hybrid, with the same closeness no matter the distance.",
      stat1: "provinces served",
      stat2top: "Remote & hybrid",
      stat2: "the same closeness, anywhere in the world",
    },
    about: {
      eyebrow: "About us",
      h2: "People, culture and technology for organizations that grow.",
      lead: "MR Consultores supports growing organizations with a proposal that integrates talent, organizational development, specialized advisory and technology. We design solutions that evolve with each company, combining closeness, expert knowledge and scalable tools.",
      b1t: "Data-driven",
      b1p: "We make decisions backed by indicators that measure progress, identify opportunities and support growth with reliable information.",
      b2t: "Multidisciplinary view",
      b2p: "We integrate different specialties to address each organizational challenge from a broad, coordinated and business-aligned perspective.",
      b3t: "Measurable results",
      b3p: "We design solutions with clear objectives, tracking indicators and ongoing support to generate sustainable impact.",
      quote:
        "“Sustainable growth is built when strategy, people and culture move in the same direction.”",
      pillars: ["Strategy", "People", "Culture"],
      aligned: "in the same direction",
      switchImg: "Image",
      switch3d: "3D",
      photoAlt: "MR Consultores team",
      founderName: "Micaela Rivero",
      founderRole: "Founder · MR Consultores",
      founderAlt: "Micaela Rivero, founder of MR Consultores",
    },
    units: {
      eyebrow: "Solutions map",
      h2: "Five units, one team",
      p: "Tap each unit to explore what it solves. Together, they are your integral edge.",
      verUnidad: "See full unit",
      solicitar: "Request a proposal →",
    },
    methodology: {
      eyebrow: "How we work",
      h2: "Our working methodology",
      p: "Five phases designed to turn organizational challenges into sustainable results.",
      introH: "A clear method, in five phases",
      introP: "A structured process that guides your organization from diagnosis to the consolidation of results.",
      phases: [
        { t: "Diagnosis", p: "We analyze the starting point through indicators, processes and organizational dynamics." },
        { t: "Strategy", p: "We define priorities, objectives and an action plan aligned with the needs of the business." },
        { t: "Implementation", p: "We put the initiatives into practice alongside your team, integrating processes, tools and technology." },
        { t: "Measurement", p: "We monitor key indicators to assess progress, identify opportunities and adjust actions." },
        { t: "Follow-up", p: "We support the evolution of each initiative through continuous follow-up that fosters its sustainability over time." },
      ],
    },
    cases: {
      eyebrow: "Success stories",
      h2: "Results that speak for themselves",
      p: "A structure ready to add your cases as the firm grows.",
      pEm: "Replace these examples with real cases.",
      c1t: "Great Place to Work certification",
      c1p: "Culture and engagement support that strengthened the team's experience and sense of belonging.",
      c2t: "Development at scale",
      c2p: "Design and rollout of assessment and development processes for more than 2,000 employees.",
      c3t: "Your next case",
      c3p: "Space reserved for the transformation we'll build together in your organization.",
      destacado: "Featured case",
      proximo: "Coming soon",
    },
    cta: {
      eyebrow: "Let's take the next step",
      h2: "Ready to transform your organization?",
      p: "Let's talk about your human-capital challenges and design a tailored proposal together.",
      btn: "Request a proposal",
    },
    blog: {
      eyebrow: "Knowledge hub",
      h2: "Ideas to drive the development of organizations",
      p: "Practical content and specialized perspectives on talent, culture, leadership and organizational transformation.",
      read: "Read article →",
      p1cat: "Leadership",
      p1t: "How to support a growing team",
      p1p: "What changes in people management when a company goes from 10 to 50 employees.",
      p2cat: "Experience",
      p2t: "Onboarding: the experience that defines retention",
      p2p: "Why the first 90 days matter more than any perk.",
      p3cat: "Transformation",
      p3t: "First-time leadership: where to begin",
      p3p: "Supporting those stepping into their first management role is key to sustaining growth.",
    },
    faq: {
      eyebrow: "Frequently asked questions",
      h2: "We answer your questions",
      items: [
        { q: "Do you work with companies across the country?", a: "Yes. We work remotely and hybrid across Argentina, with the same closeness wherever you are." },
        { q: "Do I have to hire all the units?", a: "No. You can hire a single unit or combine several in an integral project. The advantage of having them together is coordinating everything with one team." },
        { q: "How are you different from a traditional consultancy?", a: "We integrate five disciplines in one team, support implementation end to end, and combine human closeness, technology and strategic vision." },
        { q: "What is the support like?", a: "Close and continuous. After implementing, we keep a follow-up phase with constant communication and feedback to ensure continuity and sustainability." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      h2: "Let's talk about your company",
      p: "Tell us what you need and we'll reply with a clear, tailored proposal.",
      email: "Email",
      phone: "Phone / WhatsApp",
      location: "Location",
      locationVal: "Córdoba, Argentina · nationwide service",
      formTitle: "Request a proposal",
      formSub: "Fill out the form and receive a personalized proposal.",
      ok: "✓ Thank you! We received your request and will reply shortly.",
      okEm: "(Demo: connect the form to a delivery service to make it work for real.)",
      fName: "Full name",
      fNamePh: "Your name",
      fCompany: "Company",
      fCompanyPh: "Your company",
      fEmail: "Email",
      fEmailPh: "you@email.com",
      fPhone: "Phone",
      fPhonePh: "+54 ...",
      fUnit: "Unit of interest",
      fUnitPh: "Select",
      fUnitProj: "Integral project",
      fMsg: "Tell us what you need",
      fMsgPh: "Briefly describe your challenge...",
      submit: "Send request",
    },
    footer: {
      about: "An integral human-capital firm bringing together technology, recruitment, organizational development, legal and psychology.",
      unidades: "Units",
      navegacion: "Navigation",
      contacto: "Contact",
      nosotros: "About",
      metodologia: "Methodology",
      casos: "Cases",
      blog: "Knowledge hub",
      faq: "FAQ",
      rights: "MR Consultores. Talent and technology, in a single firm.",
      tagline: "Designed to grow ✦",
    },
    unitNames: {
      rrhh: { name: "Human Resources", short: "The operational core of talent" },
      do: { name: "Organizational Development", short: "Culture, leadership and change" },
      psico: { name: "Workplace Psychology", short: "Assessment and wellbeing" },
      legal: { name: "Labor Law", short: "Legal framework and compliance" },
      tech: { name: "Technology & Automation", short: "Digitalization and transformation" },
    },
  },
} as const;
