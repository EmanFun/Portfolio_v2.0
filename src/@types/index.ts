export type Language = "es" | "en";

export interface Experience {
  id?: string;
  company: string;
  responsibilities: string;
  frontTechs: string[];
  backTechs: string[];
  duration: string;
}

export type Experiences = Experience[];

export interface Project {
  id?: string;
  title: string;
  rol: string;
  link: string;
  description?: string;
  year: string;
}

export type Projects = Project[];

export interface Education {
  title: string;
  institution: string;
  type: string;
  duration: string;
  year: string;
}
