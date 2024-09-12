"use client";
import React from "react";
import {
  SkillWrapper,
  Wrapper,
  Card,
  Title,
  SubTitle,
} from "./style";

import { FaBootstrap } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiKnexdotjs, SiStyledcomponents } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

import { SiMysql } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiDjango } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiSequelize } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";

import { Each } from "@/utils/Each";

export const frontTechs = [
  FaBootstrap,
  FaJsSquare,
  FaCss3Alt,
  FaReact,
  SiRedux,
  FaHtml5,
  SiStyledcomponents,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiChakraui,
];
export const backTechs = [
  SiKnexdotjs,
  SiMysql,
  BiLogoSpringBoot,
  SiDjango,
  FaDocker,
  SiExpress,
  SiGooglecloud,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiPostgresql,
  FaPython,
  SiSequelize,
  SiSqlite,
  SiSocketdotio,
];
export const otherTechs = [
  FaGit,
  FaGithub,
  FaSlack,
  FaTrello,
  SiVisualstudiocode,
];

function TechnologiesComponent() {
  return (
    <SkillWrapper>
      <Title>TECNOLOGÍAS </Title>

      <SubTitle>Front-End</SubTitle>
      <Wrapper>
        <Each
          of={frontTechs}
          render={(IconComponent, index) => (
            <Card key={index}>
              <IconComponent className="icon" size={50} />
            </Card>
          )}
        />
      </Wrapper>
      <SubTitle>Back-End</SubTitle>
      <Wrapper>
        <Each
          of={backTechs}
          render={(IconComponent, index) => (
            <Card key={index}>
              <IconComponent className="icon" size={50} />
            </Card>
          )}
        />
      </Wrapper>
      <SubTitle>Others</SubTitle>
      <Wrapper>
        <Each
          of={otherTechs}
          render={(IconComponent, index) => (
            <Card key={index}>
              <IconComponent className="icon" size={50} />
            </Card>
          )}
        />
      </Wrapper>
    </SkillWrapper>
  );
}

export default TechnologiesComponent;
