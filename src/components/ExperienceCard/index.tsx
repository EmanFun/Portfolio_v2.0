import React from "react";
import {
  WrapperCard,
  WrapperHead,
  WrapperBody,
  WrapperFooter,
  ResponsibilitiesList,
  ListItem,
  TechsList,
  TechItem,
  Title,
  Label,
} from "./styles";
import { Experience } from "@/@types";
import { useTranslations } from "next-intl";
import { Each } from "@/utils/Each";

interface ExperienceCardProps {
  data: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  const t = useTranslations();

  const responsibilities = data.responsibilities
    .split(".")
    .filter((e) => e !== "");

  return (
    <WrapperCard>
      <WrapperHead>
        <Title>{data.company}</Title>
        <Label>{data.duration}</Label>
      </WrapperHead>
      <WrapperBody>
        <Label>{t(`ExperiencePage.experienceCard.responsibilities`)}</Label>
        <ResponsibilitiesList>
          <Each
            of={responsibilities}
            render={(responsibility, i: number) => (
              <ListItem key={i}>{responsibility}</ListItem>
            )}
          />
        </ResponsibilitiesList>
      </WrapperBody>
      <WrapperFooter>
        {data.frontTechs.length > 0 && (
          <>
            <Label>{t(`ExperiencePage.experienceCard.frontTechs`)}: </Label>
            <TechsList>
              <Each
                of={data.frontTechs}
                render={(tech, i: number) => (
                  <TechItem key={i}>{tech}</TechItem>
                )}
              />
            </TechsList>
          </>
        )}
        {data.backTechs.length > 0 && (
          <>
            <Label>{t(`ExperiencePage.experienceCard.backTechs`)}: </Label>
            <TechsList>
              <Each
                of={data.backTechs}
                render={(tech, i: number) => (
                  <TechItem key={i}>{tech}</TechItem>
                )}
              />
            </TechsList>
          </>
        )}
      </WrapperFooter>
    </WrapperCard>
  );
};

export default ExperienceCard;
