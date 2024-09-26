"use client";
import React from "react";
import { Container, WrapperAbout, OwnerPhoto } from "./styles";
import ownerImg from "@/assets/img/Owner.jpg";
import { useTranslations } from "next-intl";
const AboutComponent: React.FC = () => {
  const t = useTranslations();
  return (
    <Container>
      <OwnerPhoto src={ownerImg} alt="Emanuel photographic" />
      <WrapperAbout>
       {t(`AboutPage.description`)}
      </WrapperAbout>
    </Container>
  );
};

export default AboutComponent;
