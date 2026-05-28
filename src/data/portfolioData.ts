import { Cpu, Cloud, Code, Database, Scan, SquaresFour } from '@phosphor-icons/react';

export interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
  achievement: string;
  codeLink: string;
  demoLink: string;
  asymmetricOffset: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface TechCard {
  num: string;
  title: string;
  description: string;
  icon: any; // Mapeado dinámicamente en el componente
  iconName: 'Cpu' | 'Cloud' | 'Code' | 'Database' | 'Scan' | 'SquaresFour';
  tags: string[];
  gridSpan: string;
  glowColor: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const portfolioData = {
  hero: {
    roleBadge: "Líder Técnico & Backend Architect",
    headline: "Diseño arquitecturas backend de alta concurrencia, resiliencia extrema e idempotencia transaccional.",
    description: "Especializado en diseñar arquitecturas de alta concurrencia con NestJS, Node.js y React/Next.js. Experto en mensajería asíncrona mediante colas y tópicos de Azure, bases de datos MongoDB/Redis, extracción inteligente de datos con OCR, validación de identidad con APIs bancarias/Transunion, motores de reglas Zen Engine y empaquetamiento de librerías backend y frontend.",
    terminalCommand: "curl -s https://api.gavilanm.dev/v1/profile",
    primaryButton: "Ver Proyectos",
    secondaryButton: "Contáctame",
  },
  about: {
    sectionLabel: "Sobre Mí",
    titleHtml: 'Liderazgo técnico enfocado en la <span class="text-[#C2410C] font-normal not-italic font-sans">resiliencia, seguridad e idempotencia.</span>',
    quote: "La solidez de una arquitectura distribuida no radica en evitar fallos, sino en su diseño idempotente y reactivo, capaz de procesar millones de transacciones de forma segura y predecible.",
    paragraphs: [
      "Soy un Líder Técnico y Desarrollador Fullstack apasionado por la arquitectura backend y QA Automation. Con una sólida trayectoria en el diseño de plataformas transaccionales de alto impacto utilizando Node.js (NestJS), TypeScript, React, Next.js y Java (Spring Boot), me especializo en estructurar soluciones desacopladas y escalables.",
      "Cuento con amplia experiencia en la integración de servicios cloud robustos sobre AWS y Azure (Azure Functions), manejando patrones avanzados de idempotencia transaccional extrema y orquestación de eventos distribuida mediante colas y tópicos de Azure (Service Bus) y Redis.",
      "A lo largo de mi carrera, he realizado e integrado APIs críticas de core bancario y servicios de Transunion para la validación segura de identidad. Además, he diseñado motores de decisión dinámica con Zen Engine, desarrollado y empaquetado librerías compartidas tanto backend (NPM/NuGet) como frontend, y automatizado pipelines de extracción inteligente de metadata mediante OCR con Inteligencia Artificial."
    ]
  },
  stack: {
    sectionLabel: "Stack Tecnológico",
    titleHtml: 'Ecosistema de arquitectura <span class="text-[#C2410C] font-normal not-italic font-sans">y calidad transaccional.</span>',
    description: "Tecnologías y patrones de diseño implementados bajo estándares empresariales y de seguridad de la información.",
    tickerItems: [
      "TECHNICAL LEAD",
      "NESTJS & NODE.JS",
      "AZURE SERVICE BUS (TOPICS)",
      "REDIS & IDEMPOTENCIA",
      "ZEN ENGINE RULES",
      "TRANSUNION API INTEGRATION",
      "REACT & NEXTJS (BFF)",
      "QA AUTOMATION CORE",
      "LIBRERÍAS BACK & FRONT"
    ],
    techCards: [
      {
        num: "01",
        title: 'NestJS & Node.js Core',
        description: 'Creación de microservicios elásticos, diseño de BFFs y desarrollo de librerías empaquetadas modulares y reutilizables para backend.',
        iconName: 'Cpu',
        tags: ['NestJS', 'TypeScript', 'BFF Architecture', 'Librerías NPM', 'Node.js'],
        gridSpan: 'md:col-span-8',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "02",
        title: 'React & Next.js',
        description: 'Diseño e integración de interfaces corporativas ágiles conectadas a través de capas BFF, empaquetando componentes UI listos para usar.',
        iconName: 'Code',
        tags: ['React', 'Next.js', 'TailwindCSS', 'BFF integration', 'Librerías Frontend'],
        gridSpan: 'md:col-span-4 md:row-span-2',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "03",
        title: 'Cloud, Colas & Tópicos',
        description: 'Diseño de flujos serverless sobre AWS y Azure. Orquestación de mensajería asíncrona altamente desacoplada.',
        iconName: 'Cloud',
        tags: ['AWS Lambda', 'API Gateway', 'Azure Functions', 'Colas & Tópicos de Azure', 'Service Bus'],
        gridSpan: 'md:col-span-4',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "04",
        title: 'Consistencia & Datos',
        description: 'Manejo de almacenamiento transaccional y caché distribuida para garantizar la idempotencia de los datos y evitar duplicidades.',
        iconName: 'Database',
        tags: ['Redis (Concurrencia)', 'Idempotencia', 'MongoDB', 'MySQL', 'DynamoDB'],
        gridSpan: 'md:col-span-4',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "05",
        title: 'Motores & Integraciones',
        description: 'Implementación de motores de decisión rápidos en Rust (Zen Engine), extracción de metadatos OCR y validación de identidad con Transunion.',
        iconName: 'Scan',
        tags: ['Zen Engine', 'Transunion API', 'Bancarias APIs', 'OCR Inteligente', 'SOAP/REST'],
        gridSpan: 'md:col-span-4',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "06",
        title: 'Calidad & Automatización',
        description: 'Desarrollo de frameworks automatizados E2E y de carga, aplicando arquitectura limpia y metodologías ágiles como Technical Lead.',
        iconName: 'SquaresFour',
        tags: ['Selenium', 'Playwright', 'JMeter', 'Serenity BDD', 'CI/CD Pipelines'],
        gridSpan: 'md:col-span-8',
        glowColor: 'group-hover:border-[#C2410C]/20'
      }
    ] as TechCard[]
  },
  experience: {
    sectionLabel: "Trayectoria Profesional",
    titleHtml: 'Liderazgo técnico y backend <span class="text-[#C2410C] font-normal not-italic font-sans">probados en producción.</span>',
    description: "Un desglose de mis roles de alta responsabilidad como Líder Técnico, diseñando e integrando soluciones backend críticas e interfaces frontend modulares.",
    timeline: [
      {
        role: 'Líder Técnico (Backend Architect & Fullstack)',
        company: 'Banco Caja Social',
        period: 'ENERO 2022 - ACTUALMENTE',
        highlights: [
          'Dirección técnica y desarrollo de microservicios bancarios elásticos y BFFs usando NestJS, MongoDB, Redis y Azure Functions bajo arquitectura hexagonal.',
          'Diseño y despliegue de patrones estrictos de idempotencia transaccional extrema en el backend para garantizar la consistencia absoluta de procesos financieros concurrentes.',
          'Integración de APIs críticas de core bancario y servicios de Transunion para flujos robustos de validación de identidad segura.',
          'Orquestación de mensajería asíncrona reactiva mediante colas y tópicos de Azure (Service Bus) para la integración de sistemas distribuidos y desacoplados.',
          'Implementación de flujos de automatización de extracción de datos mediante servicios OCR inteligentes, digitalizando documentos con altísima precisión.',
          'Diseño y desarrollo del motor de reglas de decisión transaccional y scoring dinámico en tiempo real utilizando Zen Engine.',
          'Creación, mantenimiento y empaquetado de librerías comunes y compartidas, tanto para backend (NPM/Node.js) como para frontend (librerías de componentes UI React).',
          'Autenticación/autorización con JWT con encriptación avanzada del body en API Gateway, y liderazgo de la estrategia de QA Automation corporativa con Selenium, Serenity BDD y JMeter.'
        ]
      },
      {
        role: 'Desarrollador Fullstack (Freelance)',
        company: 'OTTO',
        period: 'JULIO 2024 - ACTUALMENTE',
        highlights: [
          'Diseño, desarrollo y despliegue completo de una solución web fullstack moderna utilizando React, TailwindCSS y microservicios en NestJS.',
          'Implementación de la arquitectura elástica serverless en AWS utilizando API Gateway, Lambdas, S3, Cognito, DynamoDB y CloudFront.',
          'Integración de envío automatizado de correos electrónicos profesionales con Zoho Mail y flujos ágiles con Git.'
        ]
      },
      {
        role: 'Analista Automatización de Pruebas',
        company: 'Tata Consultancy Services',
        period: 'AGOSTO 2021 - DICIEMBRE 2021',
        highlights: [
          'Desarrollo de frameworks personalizados de automatización de pruebas con Java, Cucumber y Serenity BDD aplicados a proyectos bancarios de alto impacto en LATAM.',
          'Diseño y ejecución de pruebas E2E, de regresión y validaciones funcionales complejas con control de versiones en Git.'
        ]
      },
      {
        role: 'Analista Funcional',
        company: 'Soporte Lógico',
        period: 'AGOSTO 2020 - JULIO 2021',
        highlights: [
          'Automatización de pruebas funcionales para sistemas de información empresarial utilizando Selenium WebDriver, Postman y Playwright.'
        ]
      },
      {
        role: 'Analista de Pruebas',
        company: 'Choucair Testing',
        period: 'NOVIEMBRE 2019 - MAYO 2020',
        highlights: [
          'Diseño y ejecución de scripts automatizados para pruebas funcionales y de regresión utilizando JMeter, Selenium y Cucumber.'
        ]
      },
      {
        role: 'Analista de Transición',
        company: 'Sonda de Colombia',
        period: 'JUNIO 2017 - NOVIEMBRE 2019',
        highlights: [
          'Participación en procesos de transición tecnológica, realizando pruebas manuales y validaciones con consultas directas en bases de datos.'
        ]
      }
    ] as ExperienceItem[]
  },
  projects: {
    sectionLabel: "Proyectos Destacados",
    titleHtml: 'Sistemas robustos <span class="text-[#C2410C] font-normal not-italic font-sans">construidos para durar.</span>',
    description: "Una vitrina de las plataformas críticas y de alto rendimiento que he diseñado, implementado y escalado con tecnologías fullstack y cloud.",
    list: [
      {
        title: 'Microservicios Transaccionales - BCS',
        description: 'Arquitectura modular de microservicios diseñada para el procesamiento y orquestación de transacciones financieras elásticas, integrando APIs bancarias y de Transunion.',
        image: '/bcs_services.png',
        stack: ['NestJS', 'MongoDB', 'Transunion', 'idempotencia', 'Hexagonal'],
        achievement: 'Estructurado bajo arquitectura hexagonal, idempotencia y autenticación JWT con encriptación.',
        codeLink: '#',
        demoLink: '#',
        asymmetricOffset: 'lg:mt-0'
      },
      {
        title: 'Ecosistema Cloud Fullstack - OTTO',
        description: 'Plataforma completa de desarrollo web fullstack desplegada en la nube sobre infraestructura elástica serverless, empaquetando librerías.',
        image: '/otto_cloud.png',
        stack: ['React', 'Next.js', 'NestJS', 'AWS Lambda', 'DynamoDB', 'Librerías'],
        achievement: 'Desplegado en AWS con autenticación segura y base de datos NoSQL de alta velocidad.',
        codeLink: '#',
        demoLink: '#',
        asymmetricOffset: 'lg:mt-16'
      },
      {
        title: 'Frameworks Automatizados de QA',
        description: 'Infraestructura de control de calidad y pruebas de carga masivas para la validación automática de plataformas críticas bancarias.',
        image: '/qa_automation.png',
        stack: ['Selenium', 'Playwright', 'Serenity BDD', 'JMeter', 'Java'],
        achievement: 'Redujo en un 80% el tiempo de pruebas de regresión manuales en entornos preproductivos.',
        codeLink: '#',
        demoLink: '#',
        asymmetricOffset: 'lg:-mt-12'
      },
      {
        title: 'Orquestador Zen Engine & Colas',
        description: 'Motor asíncrono transaccional con reglas complejas (Zen Engine) y mensajería elástica con colas y tópicos de Azure.',
        image: '/concurrency_redis.png',
        stack: ['Zen Engine', 'Azure Service Bus', 'Colas & Tópicos', 'Azure Functions'],
        achievement: 'Orquestación de Scoring y mensajería desacoplada tolerante a fallos para millones de operaciones concurrentes.',
        codeLink: '#',
        demoLink: '#',
        asymmetricOffset: 'lg:mt-4'
      }
    ] as Project[]
  },
  testimonials: {
    sectionLabel: "Testimonios",
    titleHtml: 'Respaldado por <span class="text-[#C2410C] font-normal not-italic font-sans">líderes de la industria.</span>',
    list: [
      {
        quote: 'Su liderazgo en la integración del motor Zen Engine y el diseño idempotente con colas y tópicos de Azure garantizó el éxito del Scoring bancario.',
        author: 'Alejandro Benítez',
        role: 'Arquitecto Principal',
        company: 'Banco Caja Social'
      },
      {
        quote: 'Su diseño serverless en AWS resistió picos de concurrencia masivos durante lanzamientos críticos sin una sola desconexión.',
        author: 'Victoria Sterling',
        role: 'VP of Engineering',
        company: 'Tech Solutions Global'
      },
      {
        quote: 'Los frameworks de automatización y las librerías compartidas que diseñó aceleraron la entrega de proyectos en un 40%.',
        author: 'Daniel Rivas',
        role: 'Director de Ingeniería',
        company: 'Fintech Payments Latam'
      }
    ] as Testimonial[]
  },
  contact: {
    sectionLabel: "Hablemos",
    titleHtml: 'Escribamos la próxima capa de tu <span class="text-[#C2410C] font-normal not-italic font-sans">infraestructura.</span>',
    description: "¿Tienes un flujo transaccional legado que optimizar? ¿O una nueva solución web fullstack que requiere un diseño de librerías modular desde el día uno? Escríbeme y diseñemos la solución ideal.",
    email: "gavilanm20@icloud.com",
    githubUrl: "https://github.com/gavilanm26",
    linkedinUrl: "https://linkedin.com/in/mauricio-gavilan-aguiar-972028155",
    quote: "La calidad de software, la robustez transaccional y la idempotencia no son un lujo, son la póliza de seguro de tu negocio."
  },
  education: {
    sectionLabel: "Educación & Estudios",
    titleHtml: 'Formación académica <span class="text-[#C2410C] font-normal not-italic font-sans">y certificaciones.</span>',
    list: [
      {
        title: 'Ingeniería de Sistemas',
        institution: 'Fundación Universitaria del Área Andina (FUAA)',
        period: 'FEBRERO 2019 - JUNIO 2021',
      },
      {
        title: 'Diplomado en Cisco CCNA 1 y 2',
        institution: 'Fundación Universitaria del Área Andina (FUAA)',
        period: 'DICIEMBRE 2020 - ENERO 2021',
      },
      {
        title: 'Especialización Tecnológica en Gestión y Administración de Bases de Datos',
        institution: 'Servicio Nacional de Aprendizaje (SENA)',
        period: 'AGOSTO 2019 - FEBRERO 2020',
      },
      {
        title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
        institution: 'Servicio Nacional de Aprendizaje (SENA)',
        period: 'JUNIO 2015 - JULIO 2018',
      }
    ]
  }
};
