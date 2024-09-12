"use client";
import React from "react";
import {
  Container,
  Title,
  WrapperExperiences,
  ExperienceWrapper,
  ExperienceHeader,
  ExperienceInfo,
  Company,
  TypeJob,
  Responsibilities,
  FrontTechs,
  BackTechs,
  Tech
} from "./styles";

interface Experience {
  company: string;
  typeJob: string;
  responsibilities: string;
  frontTech: string[];
  backTech: string[];
  duration: string;

}

const ExperiencesJobs: Experience[] = [
  {
    company: "Minon",
    typeJob: "Freelance",
    responsibilities: `
        Desarrollar y mantener funcionalidades web full stack.
        Implementar nuevas características y mejoras en frontend y backend.
        Colaborar con el equipo de diseño.
        Optimizar el rendimiento del sitio web y la comunicación en tiempo real`,
    frontTech: ["Next", "React", "ChakraUI", "TypeScript"],
    backTech: ["Express", "Knex", "ORM", "Socket.IO", "MySql"],
    duration: "",
  },
  {
    company: "Clothy",
    typeJob: "Freelance",
    responsibilities: "",
    frontTech: ["Next", "React", "TypeScript"],
    backTech: [],
    duration: "",
  },
  {
    company: "Kromaticos",
    typeJob: "Freelance",
    responsibilities: `
        Desarrollar y mantener funcionalidades web.
        Implementar nuevas características y mejoras.
        Colaborar con el equipo de diseño.
        Optimizar el rendimiento del sitio web.
        Realizar pruebas de calidad y resolver problemas técnicos.`,
    frontTech: ["React", "TypeScript", "Redux"],
    backTech: [],
    duration: "4 meses",
  },
];

function ExperienceComponent() {
  return (
    <Container>
      <Title> Experiencias </Title>
      <WrapperExperiences>
        {ExperiencesJobs.map((job: Experience, index: number) => {
          return (
            <ExperienceWrapper key={index}>
              <ExperienceHeader>
                <Company>{job.company}</Company>
                <TypeJob>{job.typeJob}</TypeJob>
              </ExperienceHeader>
              <ExperienceInfo>
                <Responsibilities>{job.responsibilities}</Responsibilities>
                <FrontTechs>
                    {
                        job.frontTech.map((tech, index: number)=>{
                            return (
                                <Tech key={index}>
                                    {tech}
                                </Tech>
                            )
                        })
                    }
                </FrontTechs>
                <BackTechs>
                    {
                        job.backTech.map((tech, index: number)=>{
                            return (
                                <Tech key={index}>{tech}</Tech>
                            )
                        })
                    }
                </BackTechs>
              </ExperienceInfo>
            </ExperienceWrapper>
          );
        })}
      </WrapperExperiences>
    </Container>
  );
}

export default ExperienceComponent;
