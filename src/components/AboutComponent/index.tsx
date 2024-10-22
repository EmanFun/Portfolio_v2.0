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
import ownerImg from "/public/images/Owner.jpg";
import { useTranslations } from "next-intl";
import { useWindowWidth } from "@/hooks";
import { ButtonMobileMenu } from "../NavComponent";

const AboutComponent: React.FC = () => {
  const t = useTranslations();
  const windowWidth: number = useWindowWidth();
  
  return (
    <Container>
      <Title>
        {
          windowWidth < 479 && (
            <ButtonMobileMenu />
          )
        }
        {t(`AboutPage.Title`)}
      </Title>
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
