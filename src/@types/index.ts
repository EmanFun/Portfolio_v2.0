export type Language = "es" | "en";

export interface Experience {
    id: string;
    company: string;
    responsibilities: string;
    fontTechs: string;
    backTechs: string;
    duration: string;
}

export type Experiences = Experience[];

export interface Project {
    id: string;
    title: string;
    rol: string;
    link: string;
    description?: string;
    year: string;
}

export type Projects = Project[];