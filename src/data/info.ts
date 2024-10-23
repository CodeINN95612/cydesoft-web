import {
  Code,
  Database,
  Gauge,
  Globe,
  Layout,
  LucideProps,
  Smartphone,
} from "lucide-react";

export type Icon = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

export type Service = {
  title: string;
  description: string;
  icon: Icon;
};

export type Info = {
  hero: {
    badge: string;
    title: string;
    description: string;
    digitalReality: string;
    getStarted: string;
    viewProjects: string;
    customDevelopment: {
      title: string;
      description: string;
    };
    cloudSolutions: {
      title: string;
      description: string;
    };
    digitalTransformation: {
      title: string;
      description: string;
    };
  };
  scrollingText: {
    makeYourIdeas: string;
    lookLikeThis: string;
  };
  services: Service[];
};

export const englishInfo: Info = {
  hero: {
    badge: "Innovating your future",
    title: "Transforming your ideas into",
    digitalReality: "Digital Reality",
    description:
      "We craft cutting-edge software solutions that empower businesses to thrive in the digital age. From concept to deployment, we're your partner in innovation.",
    getStarted: "Get Started",
    viewProjects: "View Projects",
    customDevelopment: {
      title: "Custom Development",
      description: "Tailored services built with innovative technology",
    },
    cloudSolutions: {
      title: "Cloud Services",
      description: "Scalable and secure cloud infrastructure",
    },
    digitalTransformation: {
      title: "Digital Transformation",
      description: "Streamline your business processes with digital solutions",
    },
  },
  scrollingText: {
    makeYourIdeas: "Make your ideas",
    lookLikeThis: "look like this",
  },
  services: [
    {
      icon: Code,
      title: "Custom Development",
      description:
        "Tailored software solutions built with cutting-edge technology to meet your unique business needs.",
    },
    {
      icon: Layout,
      title: "Web Applications",
      description:
        "Modern, responsive web applications that deliver exceptional user experiences across all devices.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that engage users and drive business growth.",
    },
    {
      icon: Database,
      title: "Backend Solutions",
      description:
        "Robust and scalable backend systems that power your applications with reliability and performance.",
    },
    {
      icon: Globe,
      title: "API Integration",
      description:
        "Seamless integration services connecting your systems with third-party applications and services.",
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description:
        "Comprehensive optimization solutions to enhance your application's speed and efficiency.",
    },
  ],
};

export const spanishInfo: Info = {
  hero: {
    badge: "Innovando tu futuro",
    title: "Transformando tus ideas en",
    digitalReality: "Realidad Digital",
    description:
      "Creamos soluciones de software de vanguardia que permiten a las empresas prosperar en la era digital. Desde el concepto hasta el despliegue, somos tu socio en la innovación.",
    getStarted: "Comenzar",
    viewProjects: "Ver Proyectos",
    customDevelopment: {
      title: "Desarrollo a Medida",
      description:
        "Servicios personalizados construidos con tecnología innovadora",
    },
    cloudSolutions: {
      title: "Servicios en la Nube",
      description: "Infraestructura en la nube escalable y segura",
    },
    digitalTransformation: {
      title: "Transformación Digital",
      description:
        "Optimiza tus procesos empresariales con soluciones digitales",
    },
  },
  scrollingText: {
    makeYourIdeas: "Haz que tus ideas",
    lookLikeThis: "se vean así",
  },
  services: [
    {
      icon: Code,
      title: "Desarrollo a Medida",
      description:
        "Soluciones de software personalizadas construidas con tecnología de vanguardia para satisfacer las necesidades únicas de tu negocio.",
    },
    {
      icon: Layout,
      title: "Aplicaciones Web",
      description:
        "Aplicaciones web modernas y receptivas que ofrecen experiencias de usuario excepcionales en todos los dispositivos.",
    },
    {
      icon: Smartphone,
      title: "Desarrollo Móvil",
      description:
        "Aplicaciones móviles nativas y multiplataforma que involucran a los usuarios y impulsan el crecimiento empresarial.",
    },
    {
      icon: Database,
      title: "Soluciones Backend",
      description:
        "Sistemas backend robustos y escalables que potencian tus aplicaciones con fiabilidad y rendimiento.",
    },
    {
      icon: Globe,
      title: "Integración de API",
      description:
        "Servicios de integración sin problemas que conectan tus sistemas con aplicaciones y servicios de terceros.",
    },
    {
      icon: Gauge,
      title: "Optimización de Rendimiento",
      description:
        "Soluciones de optimización integrales para mejorar la velocidad y eficiencia de tu aplicación.",
    },
  ],
};
