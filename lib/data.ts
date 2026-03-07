import { AboutDto, ExperienceDto, EducationDto, ToolDto, ProjectDto, CertificationDto } from "./types";

export const about: AboutDto = {
  name: "Shankar Laxman Santi",
  title: "Full Stack Developer",
  tagline: "React.js | Node.js | MongoDB",
  description: [
    "Full Stack Developer with hands-on experience in designing and developing responsive, scalable web applications using React.js, Node.js, Django, and MongoDB.",
    "Strong foundation in RESTful API development, authentication & authorization, and frontend optimization. Passionate about writing clean, maintainable code and contributing to high-quality software solutions in collaboration.",
  ],
  status: "Available for opportunities",
  images: {
    bannerWebp: "/banner.webp",
    profilePng: "/shankar.png",
    profileWebp: "/profile.webp",
  },
  links: {
    website: "https://github.com/shankarsanti",
    email: "shankarsanti2005@gmail.com",
    github: "https://github.com/shankarsanti",
    linkedin: "https://www.linkedin.com/in/shankar-santi/",
    xtwitter: "",
    instagram: "",
    youtube: "",
  },
  connect: [
    "Open to freelance projects and full-time opportunities",
    "Available for consulting and collaboration",
    "Let's build something amazing together!",
  ],
};

export const experiences: ExperienceDto[] = [
  {
    title: "Full Stack Developer Intern",
    company: "Nighan2 Labs Pvt. Ltd.",
    url: "https://nighan2.com/",
    period: "September 2025",
    description:
      "Gained hands-on experience building full-stack web applications using React.js, Node.js, Express.js, MongoDB and MySQL. Deployed applications ensuring fast, reliable, and scalable cloud hosting. Collaborated with cross-functional team members using GitHub, creating feature branches, pushing code, and performing pull request reviews and merges. Assisted in cloud deployment and CI/CD workflows to automate build. Contributed to UI/UX improvements and responsive, mobile-first designs using modern front-end best practices.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Git", "CI/CD"],
    logo: {
      light: "/image.png",
      dark: "/image.png",
    },
  },
];

export const educations: EducationDto[] = [
  {
    course: "Bachelor of Computer Applications (BCA)",
    institution: "Rani Channamma University, Belagavi",
    period: "2023 - 2026",
    description: "Pursuing BCA with focus on full-stack development, data structures, and modern web technologies",
    url: "https://rcub.ac.in",
    logo: {
      light: "/placeholder.webp",
      dark: "/placeholder.webp",
    },
    iconName: "FaUniversity",
  },
  {
    course: "Pre-University Course (Science)",
    institution: "Karnataka Secondary Education Examination",
    period: "2021 - 2023",
    description: "Completed PUC with Science stream",
    url: "#",
    logo: {
      light: "/placeholder.webp",
      dark: "/placeholder.webp",
    },
    iconName: "FaGraduationCap",
  },
  {
    course: "SSLC",
    institution: "Karnataka Secondary Education Examination Board",
    period: "2021",
    description: "Completed Secondary School Leaving Certificate",
    url: "#",
    logo: {
      light: "/placeholder.webp",
      dark: "/placeholder.webp",
    },
    iconName: "FaSchool",
  },
];

export const tools: ToolDto[] = [
  {
    name: "React.js",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  },
  {
    name: "Node.js",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
  },
  {
    name: "JavaScript",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
  },
  {
    name: "Python",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
  },
  {
    name: "Django",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
  },
  {
    name: "MongoDB",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  },
  {
    name: "MySQL",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  },
  {
    name: "Express.js",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
  },
  {
    name: "Tailwind CSS",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  },
  {
    name: "Git",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  },
  {
    name: "Java",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
  },
];

export const projects: ProjectDto[] = [
  {
    title: "Dairy Management System",
    description: "Full-stack ERP web application for dairy management serving 50+ daily users and managing 1,000+ transaction records with real-time MySQL integration.",
    technologies: ["React.js", "HTML5", "CSS3", "MySQL", "Tailwind CSS"],
    highlights: [
      "Designed and developed independently, serving 50+ daily users",
      "Manages 1,000+ transaction records with real-time MySQL integration",
      "Built responsive, mobile-first user interfaces improving cross-device usability by 40%",
      "Implemented secure authentication and role-based access control",
    ],
  },
  {
    title: "Pharmacy Management System",
    description: "Comprehensive 15-module pharmacy management system with POS/Billing, inventory management, and reporting capabilities.",
    technologies: ["React.js", "HTML5", "CSS3", "MySQL", "Context API"],
    highlights: [
      "Developed POS/Billing module with real-time cart, tax/discount calculation, and printable invoice generation",
      "Built 15-module system with role-based access control (Admin, Pharmacist, Cashier)",
      "Created 4 report types (Inventory, Sales, Expiry, Supplier) with PDF/CSV export",
      "Designed 8 reusable shared components and global toast notification system",
      "Implemented Inventory CRUD with search, filters, pagination, and expiry tracking",
    ],
  },
];

export const certifications: CertificationDto[] = [
  {
    title: "Full Stack Development Internship",
    issuer: "Nighan2 Labs Pvt. Ltd.",
    date: "September 2025",
    description: "Completed comprehensive full-stack development internship covering React.js, Node.js, Express.js, MongoDB, and modern web development practices.",
    credentialUrl: "https://nighan2.com/",
    image: "/nighan2labs.com.png",
  },
  {
    title: "Namaste JavaScript",
    issuer: "Namaste Dev",
    date: "2026",
    description: "Deep dive into JavaScript fundamentals, closures, async programming, and advanced concepts.",
    image: "/Namaste JavaScript.certificate.png",
  },
  {
    title: "IBM Certification",
    issuer: "IBM",
    date: "2026",
    description: "Professional certification in software development and cloud technologies.",
    image: "/IBM certificate .png",
  },
  {
    title: "Workshop on GitHub Copilot",
    issuer: "GitHub",
    date: "2025",
    description: "Hands-on workshop on using GitHub Copilot for AI-assisted coding and productivity enhancement.",
    image: "/github-copilot-workshop.jpeg",
  },
];
