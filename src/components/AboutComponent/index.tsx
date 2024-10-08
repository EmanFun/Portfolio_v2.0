"use client";
import React from "react";
import {
  Container,
  WrapperAbout,
  WrapperPhoto,
  OwnerPhoto,
  Title,
  Wrapper,
  Description,
} from "./styles";
import ownerImg from "@/assets/img/Owner.jpg";
import { useTranslations } from "next-intl";
const AboutComponent: React.FC = () => {
  const t = useTranslations();
  return (
    <Container>
      <Title>{t(`AboutPage.Title`)}</Title>
      <Wrapper>
        <WrapperPhoto>
          <OwnerPhoto src={ownerImg} alt="Emanuel photographic" />
        </WrapperPhoto>
        <WrapperAbout>
          <Description>{t(`AboutPage.description`)}</Description>
        </WrapperAbout>
      </Wrapper>
    </Container>
  );
};

export default AboutComponent;
