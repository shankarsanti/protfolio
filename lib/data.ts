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
    instagram: "https://www.instagram.com/royal__shankar___/",
    youtube: "",
    phone: "+919035123514",
  },
  connect: [
    "Open to freelance projects and full-time opportunities",
    "Available for consulting and collaboration",
    "Let's build something amazing together!",
  ],
  location: "Athani, Belagavi, Karnataka, India",
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
    title: "💊 Pharmacy Management System",
    description: "Comprehensive 15-module pharmacy management system with POS/Billing, inventory management, and reporting capabilities.",
    technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    highlights: [
      "Medicine inventory management",
      "POS billing",
      "Sales tracking",
      "Supplier management",
      "Authentication system",
    ],
    github: "https://github.com/shankarsanti/Pharmacy-Management-System",
    url: "https://pms1.vercel.app/",
    image: "/pharmacy.jpge.png",
  },
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
    github: "https://github.com/shankarsanti/Dairy-management",
    url: "https://dairy-management-lemon.vercel.app/",
    image: "/dairy managmeng.jpge.jpg",
  },
  {
    title: "🎮 Tic-Tac-Toe Game",
    description: "A modern browser-based Tic-Tac-Toe game featuring Player vs Player, AI opponent, responsive design, and an interactive gaming experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    highlights: [
      "Player vs Player mode",
      "Player vs AI with Smart AI (Minimax algorithm)",
      "Responsive design for all devices",
      "Score tracking with LocalStorage persistence",
      "Dark theme support",
    ],
    github: "https://github.com/shankarsanti/Tic-Tac-Toe-Game",
    url: "https://tic-tac-toe-game-sandy-seven-45.vercel.app/",
    image: "/tic tac toc.png",
  },
  {
    title: "🎓 Student Management System",
    description: "A comprehensive web-based platform for managing students, teachers, attendance, exams, fees, and academic performance with role-based access.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Material UI"],
    highlights: [
      "Student & Teacher Management",
      "Attendance Tracking",
      "Exam & Result Management",
      "Fee & Payment System",
      "Dashboard & Reports",
      "Role-Based Authentication",
    ],
    github: "https://github.com/shankarsanti/student-attendance-management-system",
    url: "https://student-attendance-management-syste-xi.vercel.app/",
    image: "/student attendance m.png",
  },
  {
    title: "🚌 Bus Booking System",
    description: "A modern online bus booking platform that enables users to search buses, reserve seats, make secure payments, and manage bookings with dedicated Customer, Agent, and Admin dashboards.",
    technologies: ["React", "Vite", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Online Bus Search & Booking",
      "Real-Time Seat Selection",
      "Secure Payment Integration",
      "Customer, Agent & Admin Panels",
      "Booking & Ticket Management",
      "Reports & Analytics",
    ],
    github: "https://github.com/shankarsanti/Bus-booking-system",
    url: "https://bus-booking-system-snkr.vercel.app/admin/dashboard",
    image: "/bus booking.png",
  },
  {
    title: "📄 Resume Analyzer",
    description: "An AI-powered web application that analyzes resumes, evaluates ATS compatibility, identifies missing keywords, and provides actionable suggestions to improve job application success.",
    technologies: ["React", "Vite", "TypeScript", "Node.js", "Express.js", "Tailwind CSS"],
    highlights: [
      "AI Resume Analysis",
      "ATS Score Evaluation",
      "Keyword Matching",
      "Job Description Comparison",
      "PDF & DOCX Upload",
      "Improvement Suggestions",
    ],
    github: "https://github.com/shankarsanti/Resume-Analyzer-AI",
    url: "https://resume-analyzer-ai-frontend.vercel.app/",
    image: "/Resume Analyzer.png",
  },
  {
    title: "🌍 Travel Destination Recommendation System",
    description: "An AI-powered travel planning platform that delivers personalized destination recommendations, real-time weather updates, budget planning, and smart itinerary generation for an enhanced travel experience.",
    technologies: ["Python", "Flask", "SQLite", "HTML5", "CSS3", "JavaScript"],
    highlights: [
      "AI Destination Recommendations",
      "Smart Travel Chatbot",
      "Real-Time Weather Forecast",
      "Budget Planner & Cost Calculator",
      "Auto Itinerary Generator",
      "Google Maps Integration",
    ],
    github: "https://github.com/shankarsanti/Travel-Destination-Recommendation-System",
    url: "https://travel-destination-recommendation-s.vercel.app/",
    image: "/travel png.png",
  },
  {
    title: "💼 Online Internship Management System",
    description: "A comprehensive web-based platform that streamlines internship management by connecting students, companies, and administrators with application tracking, attendance, performance evaluation, and certificate generation.",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "Material UI"],
    highlights: [
      "Internship & Application Management",
      "Student, Company & Admin Dashboards",
      "Attendance & Performance Tracking",
      "AI Resume Analyzer",
      "Certificate Generation",
      "Reports & Analytics",
    ],
    github: "https://github.com/shankarsanti/InternHub",
    url: "https://intern-hub-amber.vercel.app/dashboard",
    image: "/intern hub .png",
  },
  {
    title: "🥛 Smart Dairy business",
    description: "A modern web-based smart-dairy platform that streamlines farmer management, milk collection, billing, and analytics for efficient dairy operations.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    highlights: [
      "Farmer Management",
      "Milk Collection Tracking",
      "Automated Billing System",
      "Fat & SNF Rate Management",
      "Dashboard & Reports",
      "Secure Admin Login",
    ],
    github: "https://github.com/shankarsanti/smart-dairy",
    url: "https://smart-dairy-steel.vercel.app/",
    image: "/smart dairy.png",
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
    title: "Full Stack Development Internship Certificate",
    issuer: "Nighan2 Labs Pvt. Ltd.",
    date: "September 2025",
    description: "Completed comprehensive full-stack development internship covering React.js, Node.js, Express.js, MongoDB, and modern web development practices.",
    credentialUrl: "https://nighan2.com/",
    image: "/internship N2.png",
  },
  {
    title: "CI/CD for Beginners",
    issuer: "Simplilearn SkillUp",
    date: "2026",
    description: "Learn the fundamentals of Continuous Integration and Continuous Deployment (CI/CD), including automated builds, testing, deployment pipelines, and DevOps best practices.",
    image: "/simple learn certificate.png",
  },
  {
    title: "Applied DevOps Engineering with CI/CD",
    issuer: "SeminarRoom Education",
    date: "2026",
    description: "Comprehensive certification covering DevOps fundamentals, CI/CD pipelines, automation, version control, deployment strategies, and modern software delivery practices.",
    image: "/CI: CD\" and Workshop.jpg",
  },
  {
    title: "Front End Development",
    issuer: "SeminarRoom Education",
    date: "2025",
    description: "Comprehensive certification covering HTML, CSS, JavaScript, responsive web design, Bootstrap, UI development, and modern frontend development practices.",
    image: "/front end development.jpg",
  },
  {
    title: "Back End Development",
    issuer: "SeminarRoom Education",
    date: "2025",
    description: "Master backend development fundamentals, server-side programming, databases, APIs, authentication, and real-world web application architecture.",
    image: "/Back End Development and Workshop on.jpg",
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
