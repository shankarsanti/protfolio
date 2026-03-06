// Data Transfer Objects (DTOs)
export interface ImageDto {
  bannerWebp: string;
  profilePng: string;
  profileWebp: string;
}

export interface LinksDto {
  website: string;
  email: string;
  github: string;
  linkedin: string;
  xtwitter: string;
  instagram: string;
  youtube: string;
  facebook?: string;
}

export interface AboutDto {
  name: string;
  title: string;
  tagline: string;
  description: string[];
  status: string;
  images: ImageDto;
  links: LinksDto;
  connect: string[];
}

export interface LogoDto {
  light: string;
  dark: string;
}

export interface ExperienceDto {
  _id?: string;
  title: string;
  company: string;
  url: string;
  period: string;
  description: string;
  technologies: string[];
  logo: LogoDto;
  iconName?: string;
  index?: number;
}

export interface EducationDto {
  _id?: string;
  course: string;
  institution: string;
  period: string;
  description: string;
  url: string;
  logo: LogoDto;
  iconName?: string;
  index?: number;
}

export interface ToolDto {
  _id?: string;
  name: string;
  logo: LogoDto;
  index?: number;
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

// About Section Types
export interface AboutWhatIDoItem {
  icon: string;
  title: string;
  desc: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Theme Types
export type Theme = "light" | "dark" | "system";

// Button Variants
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link";
export type ButtonSize = "sm" | "md" | "lg";

// Card Variants
export type CardVariant = "default" | "elevated" | "outlined" | "ghost";
