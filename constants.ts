import { Project, ExpertiseStep, VisionItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Projet Alpha",
    category: "Design UI/UX",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxrJaODiYYQarbG1ZX2rii6g2kTQsYLSa2g_wZ6n6VA-FH2lXsTtr-4NwiswMOY_U37hB6uUWMx7kDjxK8eMxX3i5QB5S_TDJC5IAdfLnW2WaoX5NWjtKkv4LS7b4p-Xn7YVSc5hThPqlwc9uXSqrkRkN3wvUAjWkrJ-RpX9wggC1VEBUCSHWmWFQx342qqcF1PfO9rCY0ETCF4aRGTmjplkdGJmmgWCRNYiKlif6aqXTLusSN4dEKXJu543hfAQQQFrd-YZTN2k2z",
    alt: "Minimalist dashboard interface on a laptop screen"
  },
  {
    id: 2,
    title: "Projet Beta",
    category: "Développement Web",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_7Kt9mnP0xoj2zPXDDVvTaafS3NUOEwpXL1pgHwIjeNTguaho56Y3ABu14CHaEgd0oku7D30saL9VUp3d2kPvuvtUVIswbyVB7MrFNrdN4KJBu0CPhvQ_Z4IRMbswIbS_JD2w2GkxVLC8pcMckeCpvbd_0KJiOSHW0DtZ-lwSEfJ2DNgCPsV9UYqGMi-VdUkFUa-kB4Mq56IyYLKulgCm-lomRkJO3Bo4hnnxFsTGuvTE2IhwUTsj2FL3XaLNGSli1eQ_-fEgUZbA",
    alt: "Smartphone showing modern mobile application with charts"
  },
  {
    id: 3,
    title: "Projet Gamma",
    category: "Application Mobile",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2N4ZIRjG71rT4FQA3x_rLg5e7TD3Cc6FXbVAzVMiVfi51AOJyMO8ZZGY66P7LilWFb_73VGcIJWBZLkJN8t_TPS5T8ss8zTwLT1SeXUypPnjwXsy9MKVsp_kgEHJkK7IqiSokuVE_9nBZhmp6EuDwvc3FNXU08xDRYH6pbdh0Por4C6SSK0_eVkOUatFB0kO6sXXQDhF3FHayucup_QC0j_608B9ImKP3PgCb25lYotg8HUW9B6xudkwih1vKxsCf0OLsM6Ld5hCS",
    alt: "Tablets displaying data visualization and analytics"
  }
];

export const EXPERTISE_STEPS: ExpertiseStep[] = [
  {
    id: 1,
    icon: "manage_search",
    title: "Étude / Audit",
    description: "Analyse approfondie de vos besoins et définition des objectifs."
  },
  {
    id: 2,
    icon: "design_services",
    title: "Conception",
    description: "Design système, prototypage et architecture technique."
  },
  {
    id: 3,
    icon: "rocket_launch",
    title: "Réalisation",
    description: "Développement agile, tests qualité et mise en ligne."
  }
];

export const VISION_ITEMS: VisionItem[] = [
  {
    id: 1,
    icon: "devices",
    title: "Multi-Support",
    subtitle: "Web, Mobile & Tablette"
  },
  {
    id: 2,
    icon: "cloud_sync",
    title: "Cloud Native",
    subtitle: "Scalabilité & Performance"
  },
  {
    id: 3,
    icon: "security",
    title: "Sécurité",
    subtitle: "Protection des Données"
  }
];