// ============================================
// Constants and Site Data - dileepa.dev
// ============================================

import type { NavLink, AboutWhatIDoItem } from "./types";

// Site Configuration
export const SITE_CONFIG = {
  name: "Shankar Laxman Santi",
  title: "Shankar Santi | Full Stack Developer",
  description:
    "I'm a Full Stack Developer with hands-on experience in React.js, Node.js, Django, and MongoDB. Passionate about building responsive, scalable web applications. Let's create something amazing together!",
  url: "https://shankarsanti.dev",
  email: "shankarsanti2005@gmail.com",
  author: "Shankar Laxman Santi",
  locale: "en_US",
  twitterHandle: "@shankarsanti",
} as const;

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Connect", href: "/#connect" },
];

export const ABOUT_WHAT_I_DO: AboutWhatIDoItem[] = [
  {
    icon: "FaCode",
    title: "Full Stack Development",
    desc: "Build end-to-end web applications with React.js and Node.js",
  },
  {
    icon: "FaServer",
    title: "Backend & APIs",
    desc: "Design RESTful APIs with Express.js, Django, and databases",
  },
  {
    icon: "FaDatabase",
    title: "Database Management",
    desc: "Work with MongoDB, MySQL, and SQLite for data solutions",
  },
  {
    icon: "FaMobile",
    title: "Responsive Design",
    desc: "Create mobile-first, accessible user interfaces",
  },
];
