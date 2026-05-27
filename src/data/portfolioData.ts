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
    headline: "Desarrollador Fullstack & Backend Architect especializado en microservicios a gran escala.",
    description: "Diseño e implemento microservicios transaccionales en NestJS, Node.js y Java bajo arquitecturas limpias y hexagonales, integrando infraestructura cloud robusta en AWS y automatización de pruebas QA.",
    terminalCommand: "curl -s https://api.gavilanm.dev/v1/profile",
    primaryButton: "Ver Proyectos",
    secondaryButton: "Contáctame",
  },
  about: {
    sectionLabel: "Sobre Mí",
    titleHtml: 'Especialista en desarrollo <span class="text-[#C2410C] font-normal not-italic font-sans">Fullstack, arquitecturas robustas y QA.</span>',
    quote: "La robustez de un sistema surge de estructurar plataformas altamente escalables que procesen flujos masivos de datos con eficiencia y alta tolerancia a fallos.",
    paragraphs: [
      "Soy un Desarrollador Fullstack apasionado por el ecosistema Backend y QA Automation. Cuento con una sólida trayectoria en el diseño e implementación de arquitecturas escalables, microservicios y soluciones distribuidas utilizando Node.js (NestJS), TypeScript, React, Next.js y Java (Spring Boot).",
      "Mi experiencia incluye la integración robusta de servicios en la nube con AWS (Lambda, API Gateway, S3, DynamoDB, Cognito) y Azure Functions. Aplico fielmente los principios de la Arquitectura Hexagonal y Arquitectura Limpia (BFF) para crear sistemas modulares, sumamente eficientes y con alta tolerancia a fallos.",
      "Además, garantizo la calidad del software liderando frameworks personalizados de automatización de pruebas de extremo a extremo (E2E), regresión y validaciones funcionales en entornos bancarios y empresariales de alto impacto utilizando Selenium WebDriver, Serenity BDD, Playwright y JMeter."
    ]
  },
  stack: {
    sectionLabel: "Stack Tecnológico",
    titleHtml: 'Tecnologías y herramientas <span class="text-[#C2410C] font-normal not-italic font-sans">probadas en producción.</span>',
    description: "Una selección de lenguajes, frameworks, automatización y bases de datos integradas bajo los mejores estándares de calidad de software.",
    tickerItems: [
      "NESTJS MICROSERVICES",
      "NODE.JS FULLSTACK",
      "REACT & NEXTJS (BFF)",
      "JAVA SPRING BOOT",
      "AWS CLOUD & SERVERLESS",
      "QA AUTOMATION",
      "SELENIUM & PLAYWRIGHT",
      "HEXAGONAL ARCHITECTURE",
      "REDIS TRANSACCIONAL"
    ],
    techCards: [
      {
        num: "01",
        title: 'NestJS & Node.js',
        description: 'Creación de microservicios rápidos, modulares e impulsados por eventos bajo arquitectura hexagonal y patrones de diseño limpios.',
        iconName: 'Cpu',
        tags: ['NestJS', 'TypeScript', 'Node.js', 'BFF', 'REST APIs'],
        gridSpan: 'md:col-span-8',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "02",
        title: 'React & Next.js',
        description: 'Diseño e implementación de interfaces modernas, reactivas y de alto rendimiento utilizando arquitectura de BFF para consumir APIs eficientemente.',
        iconName: 'Code',
        tags: ['React', 'Next.js', 'TailwindCSS', 'BFF', 'TypeScript'],
        gridSpan: 'md:col-span-4 md:row-span-2',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "03",
        title: 'AWS & Cloud Services',
        description: 'Diseño e implementación de infraestructuras serverless y elásticas, listas para soportar cargas dinámicas y consistencia transaccional a escala.',
        iconName: 'Cloud',
        tags: ['Lambda', 'API Gateway', 'Cognito', 'S3', 'DynamoDB', 'Azure Functions'],
        gridSpan: 'md:col-span-4',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "04",
        title: 'Bases de Datos',
        description: 'Modelado relacional y no relacional de alta velocidad para persistencia consistente, colas de mensajería y caché transaccional.',
        iconName: 'Database',
        tags: ['MongoDB', 'DynamoDB', 'MySQL', 'Redis'],
        gridSpan: 'md:col-span-4',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "05",
        title: 'QA & Automation',
        description: 'Desarrollo de frameworks automatizados de extremo a extremo, pruebas de regresión, integración continua y validación de APIs SOAP/REST.',
        iconName: 'Scan',
        tags: ['Selenium', 'Serenity BDD', 'JMeter', 'Playwright', 'Cucumber'],
        gridSpan: 'md:col-span-4',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "06",
        title: 'Arquitectura & DevOps',
        description: 'Sólida base metodológica aplicando Arquitectura Hexagonal, principios SOLID, seguridad JWT y despliegues robustos con contenedores.',
        iconName: 'SquaresFour',
        tags: ['Hexagonal', 'JWT Security', 'Docker', 'Git & GitHub', 'CI/CD Pipelines'],
        gridSpan: 'md:col-span-8',
        glowColor: 'group-hover:border-[#C2410C]/20'
      }
    ] as TechCard[]
  },
  experience: {
    sectionLabel: "Trayectoria Profesional",
    titleHtml: 'Experiencia real <span class="text-[#C2410C] font-normal not-italic font-sans">probada en entornos bancarios y cloud.</span>',
    description: "Un desglose detallado de mis roles de alta responsabilidad, liderando soluciones backend robustas y QA automatizado para empresas del sector financiero y de tecnología.",
    timeline: [
      {
        role: 'Desarrollador Backend - QA Automation',
        company: 'Banco Caja Social',
        period: 'ENERO 2022 - ACTUALMENTE',
        highlights: [
          'Desarrollo de microservicios robustos y elásticos con NestJS, MongoDB, Redis y Azure Functions, aplicando rigurosamente arquitectura hexagonal y buenas prácticas de seguridad.',
          'Diseño y despliegue de autenticación y autorización segura con JWT, incluyendo lógica avanzada de encriptación/desencriptación del body en el API Gateway.',
          'Manejo eficiente de colas de mensajería asíncronas, cronjobs y control avanzado de concurrencia transaccional implementado en Redis.',
          'Apoyo integral en la ingeniería backend para productos financieros de alto impacto como Crédito Digital, CDT y BREB.',
          'Automatización de pruebas integrales con Selenium WebDriver, Serenity BDD y JMeter en entornos productivos y preproductivos de alta sensibilidad.'
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
        description: 'Arquitectura modular de microservicios diseñada para el procesamiento y orquestación de transacciones financieras de manera elástica.',
        image: '/bcs_services.png',
        stack: ['NestJS', 'MongoDB', 'Redis', 'Azure Functions', 'Hexagonal'],
        achievement: 'Estructurado bajo arquitectura hexagonal con encriptación de payloads en API Gateway.',
        codeLink: '#',
        demoLink: '#',
        asymmetricOffset: 'lg:mt-0'
      },
      {
        title: 'Ecosistema Cloud Fullstack - OTTO',
        description: 'Plataforma completa de desarrollo web fullstack desplegada en la nube sobre infraestructura elástica serverless.',
        image: '/otto_cloud.png',
        stack: ['React', 'Next.js', 'NestJS', 'AWS Lambda', 'DynamoDB', 'Cognito'],
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
        title: 'Tubería de Concurrencia con Redis',
        description: 'Motor asíncrono de alto rendimiento para la orquestación y balance de colas de mensajería pesadas y tareas cronjobs.',
        image: '/concurrency_redis.png',
        stack: ['Redis', 'NestJS', 'TypeScript', 'Cronjobs', 'Colas'],
        achievement: 'Garantiza la consistencia y sincronía de miles de procesos bancarios concurrentes en segundo plano.',
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
        quote: 'Estructuró un microservicio de colas robusto y seguro que procesa transacciones financieras con cero pérdidas de datos.',
        author: 'Alejandro Benítez',
        role: 'Líder Técnico',
        company: 'Fintech Payments Latam'
      },
      {
        quote: 'Su diseño serverless en AWS resistió picos de concurrencia masivos durante lanzamientos críticos sin una sola desconexión.',
        author: 'Victoria Sterling',
        role: 'VP of Engineering',
        company: 'Tech Solutions Global'
      },
      {
        quote: 'Los frameworks de automatización que diseñó redujeron drásticamente los errores en producción y aceleraron nuestras entregas.',
        author: 'Daniel Rivas',
        role: 'Director de QA',
        company: 'Banco Caja Social'
      }
    ] as Testimonial[]
  },
  contact: {
    sectionLabel: "Hablemos",
    titleHtml: 'Escribamos la próxima capa de tu <span class="text-[#C2410C] font-normal not-italic font-sans">infraestructura.</span>',
    description: "¿Tienes un flujo transaccional legado que optimizar? ¿O una nueva solución web fullstack que requiere una arquitectura escalable desde el día uno? Escríbeme y diseñemos la solución ideal.",
    email: "gavilanm20@icloud.com",
    githubUrl: "https://github.com/gavilanm26",
    linkedinUrl: "https://linkedin.com/in/mauricio-gavilan-aguiar-972028155",
    quote: "La calidad de software y el código limpio no son un lujo, son la póliza de seguro de tu negocio."
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
