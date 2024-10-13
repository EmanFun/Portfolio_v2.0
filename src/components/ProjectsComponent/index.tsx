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

function ProjectsComponents({ data }: ProjectsComponentsProps) {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();
  const orderByYear = data.sort((a, b) => {
    const yearA = Number(a.year);
    const yearB = Number(b.year);

    if (yearA === currentYear && yearB !== currentYear) return -1;
    if (yearB === currentYear && yearA !== currentYear) return 1;
    return yearB - yearA;
  });
  return (
    <WrapperProjects>
      <Title>{t(`ProjectsPage.Title`)}</Title>
      <Wrapper>
        <Each
          of={orderByYear}
          render={(item: Project, index) =>
            item.isReady && <ProjectCard key={index} data={item} />
          }
        />
      </Wrapper>
    </WrapperProjects>
  );
}

export default ProjectsComponents;
