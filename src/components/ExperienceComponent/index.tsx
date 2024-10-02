"use client";
import React from "react";
import { Container, Title, WrapperExperiences } from "./styles";
import { useTranslations } from "next-intl";
import ExperienceCard from "../ExperienceCard";
import { Experiences, Experience } from "@/@types";
import Loading from "../Loading";

interface ExperienceComponentProps {
  data: Experiences;
}

function ExperienceComponent({ data }: ExperienceComponentProps) {
  const t = useTranslations();

  if (!data) return <Loading />;

  return (
    <Container>
      <Title>{t(`ExperiencePage.Title`)}</Title>
      <WrapperExperiences>
        {data.map((job: Experience, index: number) => {
          return <ExperienceCard key={index} data={job} />;
        })}
      </WrapperExperiences>
    </Container>
  );
}

export default ExperienceComponent;
