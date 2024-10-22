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
};
