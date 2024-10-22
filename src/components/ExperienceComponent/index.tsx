"use client";
import React from "react";
import { Container, Title, WrapperExperiences } from "./styles";
import { useTranslations } from "next-intl";
import ExperienceCard from "../ExperienceCard";
import { Experiences, Experience } from "@/@types";
import Loading from "../Loading";
import { useWindowWidth } from "@/hooks";
import { ButtonMobileMenu } from "../NavComponent";

interface ExperienceComponentProps {
  data: Experiences;
}

function ExperienceComponent({ data }: ExperienceComponentProps) {
  const t = useTranslations();
  const windowWidth = useWindowWidth();
  if (!data) return <Loading />;

  return (
    <Container>
      <Title>
        {windowWidth < 479 && <ButtonMobileMenu />}
        {t(`ExperiencePage.Title`)}
      </Title>
      <WrapperExperiences>
        {data.map((job: Experience, index: number) => {
          return <ExperienceCard key={index} data={job} />;
        })}
      </WrapperExperiences>
    </Container>
  );
}

export default ExperienceComponent;
