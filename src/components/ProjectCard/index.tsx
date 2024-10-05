'use client';
import React from "react";
import {
  WrapperCard,
  WrapperHead,
  Wrapper,
  WrapperFooter,
  Title,
  SubTitle,
  Description,
  /* ProjectLink, */
} from "./styles";
import { Project } from "@/@types";
import { useTranslations } from "next-intl";
import Loading from "../Loading";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const t = useTranslations();

  if (!data) return <Loading />;

  return (
    <WrapperCard>
      <WrapperHead>
        <Title>{data.title}</Title>
        <SubTitle>
          {t(`ProjectsPage.projectCard.rol`)}: {data.rol}
        </SubTitle>
      </WrapperHead>
      <Wrapper>
        <Description>
          {t(`ProjectsPage.projectCard.description`)}: {data.description}
        </Description>
      </Wrapper>
      <WrapperFooter>
        {/* <ProjectLink href={data.link}>
          {t(`ProjectsPage.projectCard.link`)}
        </ProjectLink> */}
      </WrapperFooter>
    </WrapperCard>
  );
};

export default ProjectCard;
