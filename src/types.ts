/// <reference types="astro/client" />

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string[] | string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  linkPreview: string;
  linkSource: string;
  image: string;
  tools?: string[];
}

export interface EducationProps {
  institution: string;
  degree: string;
  year: string;
  details?: string[];
}

export interface SiteConfig {
  title: string;
  author: string;
  description: string;
  lang: string;
  siteLogo: string;
  navLinks: { text: string; href: string }[];
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL: string;
}

export interface SiteContent {
  hero: {
    name: string;
    specialty: string;
    summary: string;
    email: string;
  };
  projects: ProjectProps[];
  experience: ExperienceProps[];
  education: EducationProps[];
  about: {
    description: string;
    image: string;
  };
}
