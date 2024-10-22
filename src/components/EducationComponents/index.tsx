"use client";
import React from "react";
import {
  WrapperContainer,
  SubTitle,
  Text,
  Title,
  Wrapper,
  WrapperCard,
} from "./styles";
import { useTranslations } from "next-intl";
import { Each } from "@/utils/Each";
import { Education } from "@/@types";
import { useWindowWidth } from "@/hooks";
import { ButtonMobileMenu } from "../NavComponent";

interface EducationComponentProps {
  data: any[];
}

const EducationComponent: React.FC<EducationComponentProps> = ({ data }) => {
  const t = useTranslations();
  const windowWidth = useWindowWidth();
  return (
    <WrapperContainer>
      <Title>
        {" "}
        {windowWidth < 479 && <ButtonMobileMenu />}
        {t("EducationPage.Title")}
      </Title>
      <Wrapper>
        <Each
          of={data}
          render={(item: Education, index) => (
            <WrapperCard key={index}>
              <SubTitle>{item.title}</SubTitle>
              <Text>{item.type}</Text>
              <Text>{item.institution}</Text>
              <Text>
                {item.duration} {item.year}
              </Text>
            </WrapperCard>
          )}
        />
      </Wrapper>
    </WrapperContainer>
  );
};

export default EducationComponent;
