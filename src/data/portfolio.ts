export const supportedLangs = ["es", "en"] as const;

export type Lang = (typeof supportedLangs)[number];

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  stack: string[];
  summary: string;
  highlights: string[];
};

type ProjectItem = {
  slug: string;
  year: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  impact: string;
  isMocked?: boolean;
};

type EducationItem = {
  period: string;
  degree: string;
  school: string;
};

type PortfolioCopy = {
  seo: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
  };
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  person: {
    name: string;
    role: string;
    email: string;
    phone: string;
    cityCountry: string;
    linkedin: string;
    x: string;
    github: string;
    summary: string;
    languages: string[];
  };
  skills: {
    programming: string[];
    databases: string[];
    frameworksTools: string[];
    management: string[];
    versionControl: string[];
  };
  stats: {
    yearsLabel: string;
    projectsLabel: string;
    teamsLabel: string;
    aiLabel: string;
  };
  sectionTitles: {
    featuredProjects: string;
    skills: string;
    experience: string;
    about: string;
    contact: string;
    mockedLabel: string;
  };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
};

const baseExperience = {
  es: [
    {
      period: "2025 - Actualidad",
      role: "Lead Full Stack Engineer",
      company: "Nexus Infinity Corporation",
      stack: ["Next.js", "React", "Tailwind CSS", "Django", "LangGraph", "n8n", "FastAPI"],
      summary:
        "Liderazgo de equipos pequenos y definicion de arquitectura base para productos web y automatizaciones con IA.",
      highlights: [
        "Disene la infraestructura inicial de proyectos orientados a escalabilidad.",
        "Coordine entregas continuas con foco en resultados de negocio.",
      ],
    },
    {
      period: "2025",
      role: "Full Stack Developer",
      company: "Arlessa (Startup)",
      stack: ["Django", "Tailwind CSS", "Astro", "Docker", "OpenCV2", "Fooocus", "SAM2"],
      summary:
        "Desarrollo principal de Perfect AI, plataforma para generacion de imagenes para ropa y accesorios.",
      highlights: [
        "Implemente multi-tenancy y actualizaciones en tiempo real con SSE.",
        "Rediseno completo de landing para mejorar conversion.",
      ],
    },
    {
      period: "2024 - 2025",
      role: "Full Stack Engineer",
      company: "Next Level (Samsung Importer)",
      stack: ["Next.js", "Django", "Tailwind CSS", "Python", "Docker", "FastAPI"],
      summary: "Construccion de landing e intranet para contenido y campanas masivas de correo.",
      highlights: [
        "Automatice procesos de inventario y pagos.",
        "Entregue sistema de gestion para operaciones internas.",
      ],
    },
    {
      period: "2023 - 2024",
      role: "Freelance Full Stack Developer",
      company: "Clientes privados y sector publico",
      stack: ["Next.js", "React", "FastAPI", "Django", "Supabase", "AWS"],
      summary:
        "Desarrollo end-to-end de sistemas de salud, memoriales digitales y software administrativo.",
      highlights: [
        "Construccion de MVPs desde discovery hasta despliegue.",
        "Implementacion de arquitecturas full-stack productivas.",
      ],
    },
  ] as ExperienceItem[],
  en: [
    {
      period: "2025 - Current",
      role: "Lead Full Stack Engineer",
      company: "Nexus Infinity Corporation",
      stack: ["Next.js", "React", "Tailwind CSS", "Django", "LangGraph", "n8n", "FastAPI"],
      summary:
        "Leading small teams and defining foundational architecture for web products and AI-powered automation.",
      highlights: [
        "Designed initial infrastructure focused on long-term scalability.",
        "Coordinated continuous delivery with business outcomes in mind.",
      ],
    },
    {
      period: "2025",
      role: "Full Stack Developer",
      company: "Arlessa (Startup)",
      stack: ["Django", "Tailwind CSS", "Astro", "Docker", "OpenCV2", "Fooocus", "SAM2"],
      summary:
        "Core developer on Perfect AI, an image generation platform for fashion and accessories.",
      highlights: [
        "Implemented multi-tenancy and real-time updates with SSE.",
        "Redesigned the landing page to improve conversion.",
      ],
    },
    {
      period: "2024 - 2025",
      role: "Full Stack Engineer",
      company: "Next Level (Samsung Importer)",
      stack: ["Next.js", "Django", "Tailwind CSS", "Python", "Docker", "FastAPI"],
      summary:
        "Built a landing page and internal platform for content workflows and email campaigns.",
      highlights: [
        "Automated inventory and payment operations.",
        "Delivered a management system for internal teams.",
      ],
    },
    {
      period: "2023 - 2024",
      role: "Freelance Full Stack Developer",
      company: "Private clients and public institutions",
      stack: ["Next.js", "React", "FastAPI", "Django", "Supabase", "AWS"],
      summary:
        "Built end-to-end systems for healthcare, digital memorial services, and admin software.",
      highlights: [
        "Shipped MVPs from discovery to production.",
        "Designed reliable full-stack architectures.",
      ],
    },
  ] as ExperienceItem[],
};

const baseProjects = {
  es: [
    {
      slug: "rip-qr-memorial",
      year: "2023",
      title: "RIP QR Memorial",
      type: "SaaS / Memorial Platform",
      description:
        "Plataforma para gestionar perfiles conmemorativos con QR, incluyendo fotos, videos, musica y mensajes de familiares.",
      stack: ["FastAPI", "React", "Supabase", "Tailwind CSS", "DigitalOcean"],
      impact:
        "Permite preservar recuerdos en formato digital con una experiencia simple para familias y administradores.",
    },
    {
      slug: "syspdfsur",
      year: "2023",
      title: "SysPDFSur",
      type: "Business / Document Workflow",
      description:
        "Sistema para organizar y gestionar documentos PDF en flujos administrativos con enfoque en rapidez de consulta y control de versiones.",
      stack: ["Python", "Django", "PostgreSQL", "Docker"],
      impact: "Mejora del orden documental y reduccion de tiempos operativos en procesos internos.",
    },
    {
      slug: "healthcare-ops-suite",
      year: "2024",
      title: "Healthcare Ops Suite",
      type: "HealthTech / Information System",
      description:
        "Suite administrativa para gestion de pacientes, registros y procesos operativos de instituciones de salud.",
      stack: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
      impact:
        "Digitalizacion de procesos clinicos y administrativos con mejor trazabilidad de la informacion.",
    },
    {
      slug: "gov-admin-flow",
      year: "2024",
      title: "Gov Admin Flow",
      type: "Public Sector / Internal Software",
      description:
        "Software administrativo para instituciones publicas con modulos de seguimiento, reportes y control operativo.",
      stack: ["React", "FastAPI", "PostgreSQL", "AWS"],
      impact:
        "Estandarizacion de tareas internas y mejor visibilidad de procesos para equipos operativos.",
    },
    {
      slug: "perfect-ai",
      year: "2025",
      title: "Perfect AI",
      type: "Startup / AI Platform",
      description:
        "Plataforma de generacion de imagenes para ropa y accesorios con panel multi-tenant y flujo de entrega automatizado.",
      stack: ["Django", "Tailwind CSS", "SSE", "Docker", "OpenCV2", "SAM2"],
      impact: "Redujo el tiempo de prueba visual de catalogo y acelero iteraciones de marketing.",
    },
    {
      slug: "energia-limpia-suite",
      year: "2024",
      title: "Energia Limpia Suite",
      type: "Corporate / Internal Platform",
      description:
        "Landing y sistema interno para gestion de contenidos, envios masivos y procesos comerciales.",
      stack: ["Next.js", "Django", "Tailwind CSS", "Python", "Docker"],
      impact: "Digitalizacion de operaciones administrativas y comerciales.",
    },
    {
      slug: "agentic-procurement-mock",
      year: "2026",
      title: "Agentic Procurement Hub",
      type: "Mocked Project",
      description:
        "Proyecto demostrativo para un asistente de compras B2B con agentes especializados en cotizacion, riesgos y seguimiento de entrega.",
      stack: ["Next.js", "LangGraph", "FastAPI", "PostgreSQL", "AWS S3"],
      impact: "Concepto validado para reducir friccion de compra en equipos operativos.",
      isMocked: true,
    },
    {
      slug: "smart-cv-studio-mock",
      year: "2026",
      title: "Smart CV Studio",
      type: "Mocked Project",
      description:
        "Web app conceptual para generar perfiles profesionales multilenguaje optimizados para reclutamiento tecnico.",
      stack: ["Astro", "React", "Supabase", "Tailwind CSS", "Cloudinary"],
      impact: "Propuesta para acelerar posicionamiento personal y marca profesional.",
      isMocked: true,
    },
  ] as ProjectItem[],
  en: [
    {
      slug: "rip-qr-memorial",
      year: "2023",
      title: "RIP QR Memorial",
      type: "SaaS / Memorial Platform",
      description:
        "Platform to manage memorial profiles through QR access, including photos, videos, music, and family messages.",
      stack: ["FastAPI", "React", "Supabase", "Tailwind CSS", "DigitalOcean"],
      impact: "Enabled a simple digital memorial experience for families and administrators.",
    },
    {
      slug: "syspdfsur",
      year: "2023",
      title: "SysPDFSur",
      type: "Business / Document Workflow",
      description:
        "Document workflow system focused on organizing PDF assets, fast retrieval, and version control for internal operations.",
      stack: ["Python", "Django", "PostgreSQL", "Docker"],
      impact: "Improved document governance and reduced operational response time.",
    },
    {
      slug: "healthcare-ops-suite",
      year: "2024",
      title: "Healthcare Ops Suite",
      type: "HealthTech / Information System",
      description:
        "Administrative suite for healthcare organizations to manage patient records and operational workflows.",
      stack: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
      impact: "Digitized clinical and administrative processes with stronger data traceability.",
    },
    {
      slug: "gov-admin-flow",
      year: "2024",
      title: "Gov Admin Flow",
      type: "Public Sector / Internal Software",
      description:
        "Internal operations software for public institutions with tracking, reporting, and control modules.",
      stack: ["React", "FastAPI", "PostgreSQL", "AWS"],
      impact: "Standardized internal tasks and improved process visibility for operational teams.",
    },
    {
      slug: "perfect-ai",
      year: "2025",
      title: "Perfect AI",
      type: "Startup / AI Platform",
      description:
        "Image generation platform for clothing and accessories, including multi-tenant operations and automated delivery workflow.",
      stack: ["Django", "Tailwind CSS", "SSE", "Docker", "OpenCV2", "SAM2"],
      impact: "Reduced visual catalog prototyping time and accelerated marketing iterations.",
    },
    {
      slug: "energia-limpia-suite",
      year: "2024",
      title: "Energia Limpia Suite",
      type: "Corporate / Internal Platform",
      description:
        "Landing and internal platform for content workflows, bulk email campaigns, and business operations.",
      stack: ["Next.js", "Django", "Tailwind CSS", "Python", "Docker"],
      impact: "Digitized administrative and commercial operations.",
    },
    {
      slug: "agentic-procurement-mock",
      year: "2026",
      title: "Agentic Procurement Hub",
      type: "Mocked Project",
      description:
        "Demo concept for a B2B procurement assistant with specialized agents for quoting, risk checks, and delivery tracking.",
      stack: ["Next.js", "LangGraph", "FastAPI", "PostgreSQL", "AWS S3"],
      impact: "Validated concept to reduce procurement friction for operations teams.",
      isMocked: true,
    },
    {
      slug: "smart-cv-studio-mock",
      year: "2026",
      title: "Smart CV Studio",
      type: "Mocked Project",
      description:
        "Concept web app to generate multilingual professional profiles optimized for technical hiring.",
      stack: ["Astro", "React", "Supabase", "Tailwind CSS", "Cloudinary"],
      impact: "Positioning concept to accelerate personal branding and career opportunities.",
      isMocked: true,
    },
  ] as ProjectItem[],
};

export const portfolioData: Record<Lang, PortfolioCopy> = {
  es: {
    seo: {
      siteName: "Diego Alarcon Inturias | Portfolio",
      defaultTitle: "Diego Alarcon Inturias | Ingeniero de Software Full Stack",
      defaultDescription:
        "Portfolio profesional de Diego Alarcon Inturias: experiencias, proyectos y perfil tecnico en desarrollo web, arquitectura de producto e IA aplicada.",
    },
    nav: {
      home: "Inicio",
      about: "Perfil",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      badge: "Disponible para oportunidades Full Stack",
      title: "Construyo productos web robustos, escalables y enfocados en negocio.",
      subtitle:
        "Soy Diego Alarcon Inturias, Software Engineer en La Paz. Desarrollo soluciones de punta a punta con React, Next.js, Django, FastAPI y PostgreSQL.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Ver experiencia",
    },
    person: {
      name: "Diego Alarcon Inturias",
      role: "Software Engineer",
      email: "raikonif@gmail.com",
      phone: "+591 63142527",
      cityCountry: "La Paz, Bolivia",
      linkedin: "https://www.linkedin.com/in/raikonif/",
      x: "https://x.com/Raikonif",
      github: "https://github.com/Raikonif",
      summary:
        "Ingeniero de software con experiencia construyendo aplicaciones web y soluciones orientadas a producto para clientes privados e instituciones gubernamentales.",
      languages: ["Espanol (Nativo)", "Ingles (B2+)"],
    },
    skills: {
      programming: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
      databases: ["PostgreSQL", "MongoDB", "Supabase"],
      frameworksTools: [
        "React",
        "Next.js",
        "Django",
        "FastAPI",
        "Tailwind CSS",
        "Astro",
        "Docker",
        "DigitalOcean",
        "Cloudinary",
        "Railway",
        "Render",
        "LangChain",
        "LangGraph",
        "SAM2",
        "Fooocus AI",
        "MCP Skills/Agents",
        "AWS (EC2, ECR, ECS, S3)",
        "n8n",
      ],
      management: ["Slack", "Notion"],
      versionControl: ["Git", "GitHub", "GitLab", "GitHub Actions"],
    },
    stats: {
      yearsLabel: "+5 anos construyendo software",
      projectsLabel: "15+ soluciones entregadas",
      teamsLabel: "Liderazgo de equipos pequenos",
      aiLabel: "MVPs Agentic con IA aplicada",
    },
    sectionTitles: {
      featuredProjects: "Proyectos Destacados",
      skills: "Stack Tecnico",
      experience: "Experiencia Profesional",
      about: "Perfil Profesional",
      contact: "Contacto",
      mockedLabel: "Proyecto Mock",
    },
    experience: baseExperience.es,
    projects: baseProjects.es,
    education: [
      {
        period: "2012 - 2016",
        degree: "Ingenieria de Sistemas",
        school: "Universidad Mayor de San Andres (UMSA)",
      },
    ],
  },
  en: {
    seo: {
      siteName: "Diego Alarcon Inturias | Portfolio",
      defaultTitle: "Diego Alarcon Inturias | Full Stack Software Engineer",
      defaultDescription:
        "Professional portfolio of Diego Alarcon Inturias: experience, projects, and technical profile across web development, product architecture, and applied AI.",
    },
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Available for Full Stack opportunities",
      title: "I build robust, scalable web products with real business impact.",
      subtitle:
        "I am Diego Alarcon Inturias, a Software Engineer based in La Paz. I build end-to-end solutions with React, Next.js, Django, FastAPI, and PostgreSQL.",
      ctaPrimary: "View projects",
      ctaSecondary: "View experience",
    },
    person: {
      name: "Diego Alarcon Inturias",
      role: "Software Engineer",
      email: "raikonif@gmail.com",
      phone: "+591 63142527",
      cityCountry: "La Paz, Bolivia",
      linkedin: "https://www.linkedin.com/in/raikonif/",
      x: "https://x.com/Raikonif",
      github: "https://github.com/Raikonif",
      summary:
        "Software Engineer experienced in building product-focused web applications for private clients and government institutions.",
      languages: ["Spanish (Native)", "English (B2+)"],
    },
    skills: {
      programming: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
      databases: ["PostgreSQL", "MongoDB", "Supabase"],
      frameworksTools: [
        "React",
        "Next.js",
        "Django",
        "FastAPI",
        "Tailwind CSS",
        "Astro",
        "Docker",
        "DigitalOcean",
        "Cloudinary",
        "Railway",
        "Render",
        "LangChain",
        "LangGraph",
        "SAM2",
        "Fooocus AI",
        "MCP Skills/Agents",
        "AWS (EC2, ECR, ECS, S3)",
        "n8n",
      ],
      management: ["Slack", "Notion"],
      versionControl: ["Git", "GitHub", "GitLab", "GitHub Actions"],
    },
    stats: {
      yearsLabel: "5+ years building software",
      projectsLabel: "15+ delivered solutions",
      teamsLabel: "Small-team technical leadership",
      aiLabel: "Agentic AI MVP delivery",
    },
    sectionTitles: {
      featuredProjects: "Featured Projects",
      skills: "Technical Stack",
      experience: "Professional Experience",
      about: "Professional Profile",
      contact: "Contact",
      mockedLabel: "Mocked Project",
    },
    experience: baseExperience.en,
    projects: baseProjects.en,
    education: [
      {
        period: "2012 - 2016",
        degree: "Systems Engineering",
        school: "Universidad Mayor de San Andres (UMSA)",
      },
    ],
  },
};

export const pageMetaByLang = {
  es: {
    home: {
      title: "Inicio",
      description:
        "Perfil profesional de Diego Alarcon Inturias, Software Engineer especializado en React, Next.js, Django y FastAPI.",
    },
    about: {
      title: "Perfil Profesional",
      description:
        "Conoce el perfil de Diego Alarcon Inturias, su resumen, habilidades y enfoque tecnico.",
    },
    experience: {
      title: "Experiencia",
      description:
        "Trayectoria profesional y logros de Diego Alarcon Inturias en proyectos full-stack.",
    },
    projects: {
      title: "Proyectos",
      description:
        "Proyectos destacados y mockups de Diego Alarcon Inturias con tecnologias web e IA.",
    },
  },
  en: {
    home: {
      title: "Home",
      description:
        "Professional profile of Diego Alarcon Inturias, Software Engineer specialized in React, Next.js, Django, and FastAPI.",
    },
    about: {
      title: "About",
      description: "Learn about Diego Alarcon Inturias, his summary, skills, and technical focus.",
    },
    experience: {
      title: "Experience",
      description:
        "Professional timeline and achievements of Diego Alarcon Inturias in full-stack product delivery.",
    },
    projects: {
      title: "Projects",
      description:
        "Featured projects and mocked concepts built by Diego Alarcon Inturias across web and AI.",
    },
  },
};

export function getLangFromParam(value: string | undefined): Lang {
  return supportedLangs.includes((value ?? "") as Lang) ? (value as Lang) : "en";
}

export function getPersonStructuredData(lang: Lang) {
  const info = portfolioData[lang].person;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: info.name,
    jobTitle: info.role,
    email: info.email,
    telephone: info.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Paz",
      addressCountry: "BO",
    },
    sameAs: [info.linkedin, info.github, info.x],
    knowsLanguage: info.languages,
    description: info.summary,
  };
}

