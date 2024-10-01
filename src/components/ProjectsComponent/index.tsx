"use client";
import React from "react";
import { WrapperProjects, Wrapper, Title } from "./style";
import { Each } from "@/utils/Each";
import ProjectCard from "../ProjectCard";
import { Project, Projects } from "@/@types";
import { useTranslations } from "next-intl";

interface ProjectsComponentsProps {
  data: Projects;
}

function ProjectsComponents({data}: ProjectsComponentsProps) {
  const t = useTranslations();
  console.log("Projects",data)
  return (
    <WrapperProjects>
      <Title>{t(`ProjectsPage.Title`)}</Title>
      <Wrapper>
        <Each
          of={data}
          render={(item: Project, index) => (
            <ProjectCard key={index} data={item} />
          )}
        />
      </Wrapper>
    </WrapperProjects>
  );
}

export default ProjectsComponents;
