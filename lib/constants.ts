// ============================================
// Constants and Site Data - dileepa.dev
// ============================================

import type { NavLink, AboutWhatIDoItem } from "./types";

// Site Configuration
export const SITE_CONFIG = {
  name: "Shankar Laxman Santi",
  title: "Shankar Santi | Data Scientist",
  description:
    "I'm a Data Scientist and Full Stack Developer with hands-on experience in Python, Machine Learning, Deep Learning, Gen AI, React.js, Node.js, and MongoDB. Passionate about turning data into meaningful insights.",
  url: "https://www.shankarsanti.online",
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
  { label: "Projects", href: "/#projects" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Connect", href: "/#connect" },
];

export const ABOUT_WHAT_I_DO: AboutWhatIDoItem[] = [
  {
    icon: "FaBrain",
    title: "Data Science & ML",
    desc: "Build predictive models, machine learning algorithms, and intelligent analytics using Python",
  },
  {
    icon: "FaRobot",
    title: "Deep Learning & Gen AI",
    desc: "Develop neural network architectures, LLM integrations, and generative AI solutions",
  },
  {
    icon: "FaCode",
    title: "Full Stack Development",
    desc: "Build end-to-end, responsive web applications with React.js, Node.js, and modern tech stacks",
  },
  {
    icon: "FaChartBar",
    title: "BI & Data Visualization",
    desc: "Create insightful business intelligence dashboards and reporting with Power BI and Excel",
  },
];
