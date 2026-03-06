import {
  AboutDto,
  ExperienceDto,
  EducationDto,
  ToolDto,
} from "./types";

export const about: AboutDto = {
  name: "Shankar Laxman Santi",
  title: "Full Stack Developer",
  tagline: "Building responsive, scalable web applications",
  description: [
    "I'm a Full Stack Developer with hands-on experience in designing and developing responsive, scalable web applications using React.js, Node.js, Django, and MongoDB.",
    "Strong foundation in RESTful API development, authentication & authorization, and frontend optimization.",
    "Passionate about writing clean, maintainable code and contributing to high-quality software solutions in collaboration.",
  ],
  status: "Available for opportunities",
  images: {
    bannerWebp: "/banner.webp",
    profilePng: "/profile.png",
    profileWebp: "/profile.webp",
  },
  links: {
    website: "https://shankarsanti.dev",
    email: "shankarsanti2005@gmail.com",
    github: "https://github.com/shankarsanti",
    linkedin: "https://www.linkedin.com/in/shankar-santi/",
    xtwitter: "",
    instagram: "",
    youtube: "",
  },
  connect: [
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    "Feel free to reach out through any of the platforms below!",
  ],
};

export const experiences: ExperienceDto[] = [
  {
    title: "Full Stack Developer Intern",
    company: "Nighan2 Labs Pvt. Ltd.",
    url: "https://nighan2labs.com",
    period: "September 2024 - Present",
    description: "Gained hands-on experience building full-stack web applications and collaborating with cross-functional teams using modern development practices.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "GitHub", "CI/CD"],
    logo: {
      light: "/placeholder.webp",
      dark: "/placeholder.webp",
    },
    iconName: "FaLaptopCode",
  },
];

export const educations: EducationDto[] = [
  {
    course: "Bachelor of Computer Applications (BCA)",
    institution: "Rani Channamma University, Belagavi",
    period: "2023 - 2026",
    description: "Pursuing BCA with focus on full-stack development, database management, and software engineering.",
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
    description: "Completed PUC with Science stream, building foundation in mathematics and computer science.",
    url: "",
    logo: {
      light: "/placeholder.webp",
      dark: "/placeholder.webp",
    },
    iconName: "FaGraduationCap",
  },
  {
    course: "Secondary School Leaving Certificate (SSLC)",
    institution: "Karnataka Secondary Education Examination Board",
    period: "2020 - 2021",
    description: "Completed SSLC with strong academic performance, establishing fundamentals in science and mathematics.",
    url: "",
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
    name: "Django",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
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
];
