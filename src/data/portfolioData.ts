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
    headline: "Escribo código invisible que sostiene sistemas a gran escala.",
    description: "Diseño e implemento microservicios elásticos sobre AWS con arquitectura hexagonal, bases de datos optimizadas y tolerancia a fallos extrema.",
    terminalCommand: "curl -s https://api.gavilan.dev/v1/profile",
    primaryButton: "Ver Proyectos",
    secondaryButton: "Contáctame",
  },
  about: {
    sectionLabel: "Sobre Mí",
    titleHtml: 'Filosofía de desarrollo orientada a la <span class="text-[#C2410C] font-normal not-italic font-sans">claridad y rendimiento.</span>',
    quote: "La verdadera complejidad de un sistema no radica en la cantidad de componentes, sino en la simplicidad con la que se comunican.",
    paragraphs: [
      "Soy un desarrollador de software enfocado en el ecosistema backend y la arquitectura de sistemas complejos. Mi pasión radica en estructurar plataformas altamente escalables que no solo procesen flujos masivos de datos, sino que lo hagan de manera eficiente, predecible y con alta tolerancia a fallos.",
      "Mi enfoque técnico se basa en la Arquitectura Hexagonal, el diseño guiado por el dominio (DDD) y la integración de microservicios robustos sobre nubes como AWS. Creo en la simplicidad estructurada y en que un backend potente es la verdadera columna vertebral de cualquier gran producto tecnológico.",
      "Ya sea optimizando consultas SQL Server complejas, configurando pipelines de automatización serverless o integrando modelos de Inteligencia Artificial para el procesamiento óptico de documentos (OCR), mi estándar siempre es el mismo: escribir código limpio, documentado y listo para soportar el crecimiento."
    ]
  },
  stack: {
    sectionLabel: "Stack Tecnológico",
    titleHtml: 'Infraestructura optimizada para la <span class="text-[#C2410C] font-normal not-italic font-sans">escalabilidad.</span>',
    description: "Una selección de lenguajes, frameworks y bases de datos integradas bajo los mejores estándares de calidad de software.",
    tickerItems: [
      ".NET CORE",
      "C# ARCHITECTURE",
      "AWS SERVERLESS",
      "NESTJS MICROSERVICES",
      "SQL SERVER TUNING",
      "SIGNALR REAL-TIME",
      "REDIS CLUSTERING",
      "AI OCR PIPELINES",
      "HEXAGONAL ARCHITECTURE"
    ],
    techCards: [
      {
        num: "01",
        title: '.NET & C# Core',
        description: 'El núcleo de mis desarrollos robustos. Especializado en APIs empresariales, Razor Pages y procesamiento en segundo plano altamente eficiente.',
        iconName: 'Cpu',
        tags: ['.NET 8', 'C#', 'WebAPI', 'Razor Pages'],
        gridSpan: 'md:col-span-8',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "02",
        title: 'AWS Cloud Services',
        description: 'Diseño e implementación de infraestructuras serverless y elásticas, listas para soportar cargas dinámicas a escala.',
        iconName: 'Cloud',
        tags: ['AWS Lambda', 'ECS', 'S3', 'RDS', 'API Gateway'],
        gridSpan: 'md:col-span-4 md:row-span-2',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "03",
        title: 'NestJS & Node.js',
        description: 'Creación de microservicios rápidos, modulares e impulsados por eventos en TypeScript.',
        iconName: 'Code',
        tags: ['NestJS', 'TypeScript', 'Express', 'RxJS'],
        gridSpan: 'md:col-span-4',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "04",
        title: 'Bases de Datos',
        description: 'Modelado relacional y no relacional de alta velocidad. Optimización de índices, particiones y almacenamiento persistente.',
        iconName: 'Database',
        tags: ['SQL Server', 'MongoDB', 'Redis', 'PostgreSQL'],
        gridSpan: 'md:col-span-4',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "05",
        title: 'AI Applied & OCR',
        description: 'Automatización del procesamiento óptico de caracteres para extracción de metadata de impuestos y documentos financieros.',
        iconName: 'Scan',
        tags: ['OCR con IA', 'Computer Vision', 'Data Parsing'],
        gridSpan: 'md:col-span-4',
        glowColor: 'group-hover:border-[#C2410C]/20'
      },
      {
        num: "06",
        title: 'Arquitectura & Patrones',
        description: 'Sólida base metodológica aplicando Arquitectura Hexagonal (Ports & Adapters), principios SOLID y desarrollo limpio.',
        iconName: 'SquaresFour',
        tags: ['Arquitectura Hexagonal', 'DDD', 'Microservicios', 'Clean Code'],
        gridSpan: 'md:col-span-8',
        glowColor: 'group-hover:border-[#C2410C]/20'
      }
    ] as TechCard[]
  },
  experience: {
    sectionLabel: "Trayectoria Profesional",
    titleHtml: 'Ingeniería backend <span class="text-[#C2410C] font-normal not-italic font-sans">probada en producción.</span>',
    description: "Un desglose de mis roles de alta responsabilidad, liderando soluciones críticas y escalables para empresas del sector financiero, eventos masivos y automatización inteligente.",
    timeline: [
      {
        role: 'Senior Backend Architect',
        company: 'Fintech Enterprise Startup',
        period: '2024 - PRESENTE',
        highlights: [
          'Arquitecto principal del motor de conciliación bancaria inteligente, procesando millones de registros con un 99.4% de emparejamiento automático exitoso.',
          'Reestructuración de APIs críticas utilizando Arquitectura Hexagonal y DDD, reduciendo latencias de red en un 40% y mejorando la mantenibilidad.',
          'Optimización avanzada de índices y particionamiento en bases de datos SQL Server corporativas, mejorando el rendimiento de consultas pesadas en un 55%.'
        ]
      },
      {
        role: 'Cloud & Software Engineer',
        company: 'Logistics & Live Ticketing Systems',
        period: '2022 - 2024',
        highlights: [
          'Liderazgo en el desarrollo de la infraestructura de venta de palcos premium y orquestación de SignalR para notificaciones de ocupación en tiempo real.',
          'Diseño e implementación de pasarelas de pagos unificadas (Wompi, PayU, ePayco) integrando webhooks asíncronos y colas SQS para la tolerancia a fallos.',
          'Creación de la arquitectura serverless en AWS Lambda y API Gateway para la emisión segura de llaves criptográficas de software.'
        ]
      },
      {
        role: 'Backend Developer',
        company: 'Intelligent AI Solutions',
        period: '2020 - 2022',
        highlights: [
          'Desarrollo de microservicios en NestJS y Python dedicados al parseo, procesamiento e indexación automática de declaraciones tributarias mediante OCR asistido por IA.',
          'Automatización de pipelines de datos masivos que redujeron el tiempo de auditoría fiscal manual por carpeta de 3 horas a 2 minutos.',
          'Implementación de caching estratégico con Redis y colas de RabbitMQ para el balance de carga en procesamiento OCR concurrente.'
        ]
      }
    ] as ExperienceItem[]
  },
  projects: {
    sectionLabel: "Proyectos Destacados",
    titleHtml: 'Sistemas robustos <span class="text-[#C2410C] font-normal not-italic font-sans">construidos para durar.</span>',
    description: "Una vitrina de las plataformas críticas y de alto rendimiento que he diseñado, implementado y escalado en producción real.",
    list: [
      {
        title: 'Plataforma de Venta de Palcos',
        description: 'Plataforma de alta disponibilidad para la venta y reserva de palcos en eventos exclusivos y estadios de nivel premium.',
        image: '/project_palcos.png',
        stack: ['.NET Core', 'SQL Server', 'Redis', 'SignalR'],
        achievement: 'Procesó más de 50,000 reservas simultáneas sin duplicaciones bajo alta concurrencia.',
        codeLink: '#',
        demoLink: '#',
        asymmetricOffset: 'lg:mt-0'
      },
      {
        title: 'OCR Inteligente para Impuestos',
        description: 'Motor de reconocimiento óptico inteligente impulsado por IA para automatizar la extracción de datos de declaraciones de renta.',
        image: '/project_ocr.png',
        stack: ['Node.js', 'Python', 'AWS Textract', 'NestJS'],
        achievement: 'Redujo el tiempo de digitalización y procesamiento de documentos financieros en un 85%.',
        codeLink: '#',
        demoLink: '#',
        asymmetricOffset: 'lg:mt-16'
      },
      {
        title: 'Conciliación Bancaria Automática',
        description: 'Motor de matching inteligente para emparejar registros bancarios masivos contra libros contables de forma precisa.',
        image: '/project_banking.png',
        stack: ['.NET 8', 'C#', 'SQL Server', 'Redis'],
        achievement: 'Alcanzó un 99.4% de conciliaciones exitosas automatizadas, eliminando el trabajo manual de auditoría.',
        codeLink: '#',
        demoLink: '#',
        asymmetricOffset: 'lg:-mt-12'
      },
      {
        title: 'Distribución de Licencias Serverless',
        description: 'Arquitectura en la nube serverless para la generación, distribución y validación criptográfica de licencias de software.',
        image: '/project_licensing.png',
        stack: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'Cognito'],
        achievement: 'Diseñado para escalar horizontalmente hasta 1 millón de peticiones criptográficas por hora sin fallas.',
        codeLink: '#',
        demoLink: '#',
        asymmetricOffset: 'lg:mt-4'
      },
      {
        title: 'Plataforma de Revistas Digitales',
        description: 'Sistema editorial premium de alto rendimiento optimizado para compresión e interactividad de documentos enriquecidos.',
        image: 'https://picsum.photos/seed/editorial-luxury-magazines-wood-desk/800/600',
        stack: ['NestJS', 'PostgreSQL', 'Docker', 'Angular'],
        achievement: 'Migró y estructuró 5 millones de páginas físicas a formato interactivo digital fluido.',
        codeLink: '#',
        demoLink: '#',
        asymmetricOffset: 'lg:-mt-10'
      },
      {
        title: 'Ecosistema de Cobros & Pagos Integrados',
        description: 'Pasarela de transacciones segura y flexible conectada directamente con Wompi, PayU y ePayco para micro-facturación.',
        image: 'https://picsum.photos/seed/minimalist-marble-metallic-details/800/600',
        stack: ['Node.js', 'Express', 'MongoDB', 'Webhooks'],
        achievement: 'Canalizó con éxito transacciones electrónicas por un valor superior a los 3 millones de dólares.',
        codeLink: '#',
        demoLink: '#',
        asymmetricOffset: 'lg:mt-6'
      }
    ] as Project[]
  },
  testimonials: {
    sectionLabel: "Testimonios",
    titleHtml: 'Respaldado por <span class="text-[#C2410C] font-normal not-italic font-sans">líderes de la industria.</span>',
    list: [
      {
        quote: 'Estructuró un sistema resiliente con reintentos automáticos y colas de contingencia que procesa millones de dólares con cero pérdidas.',
        author: 'Alejandro Benítez',
        role: 'CTO',
        company: 'Fintech Latam Payments'
      },
      {
        quote: 'Su diseño en AWS Lambda no solo es un 60% más económico, sino que resistió picos masivos de tráfico sin una sola desconexión.',
        author: 'Victoria Sterling',
        role: 'VP of Engineering',
        company: 'CloudCore Inc.'
      },
      {
        quote: 'La automatización OCR e IA que implementó nos ahorró cientos de horas. Lo que tomaba semanas, ahora se resuelve en minutos.',
        author: 'Daniel Rivas',
        role: 'Director de Operaciones',
        company: 'TaxTech Consultores'
      }
    ] as Testimonial[]
  },
  contact: {
    sectionLabel: "Hablemos",
    titleHtml: 'Escribamos la próxima capa de tu <span class="text-[#C2410C] font-normal not-italic font-sans">infraestructura.</span>',
    description: "¿Tienes un sistema legado que optimizar? ¿O una nueva plataforma financiera que requiere una arquitectura escalable desde el día uno? Escríbeme y diseñemos la solución ideal.",
    email: "mauricio.gavilan.dev@gmail.com",
    githubUrl: "#",
    linkedinUrl: "#",
    quote: "El código limpio no es un lujo, es la póliza de seguro de tu negocio."
  }
};
