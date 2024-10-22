"use client";
import React from "react";
import { WrapperProjects, Wrapper, Title } from "./style";
import { Each } from "@/utils/Each";
import ProjectCard from "../ProjectCard";
import { Project, Projects } from "@/@types";
import { useTranslations } from "next-intl";
import { useWindowWidth } from "@/hooks";
import { ButtonMobileMenu } from "../NavComponent";

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
  const windowWidth = useWindowWidth();
  return (
    <WrapperProjects>
      <Title>
        {windowWidth < 479 && <ButtonMobileMenu />}
        {t(`ProjectsPage.Title`)}
      </Title>
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
