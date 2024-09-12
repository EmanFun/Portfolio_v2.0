"use client";
import React from "react";
import { Container, WrapperAbout, OwnerPhoto } from "./styles";
import ownerImg from "@/assets/img/Owner.jpg";
const AboutComponent: React.FC = () => {
  return (
    <Container>
      <OwnerPhoto src={ownerImg} alt="Emanuel photographic" />
      <WrapperAbout>
        Hello, I am a Full Stack Web Developer and currently a Computer Science
        student. I have experience working as Front-end for an international
        consultancy, where I have developed skills in React, TS. In addition to
        my Front-end skills, I have solid knowledge in Back-end, including
        Node.js, Python, SQL and NoSQL databases I am looking for an opportunity
        to apply and expand my Full Stack skills, contributing innovative
        solutions to your team
      </WrapperAbout>
    </Container>
  );
};

export default AboutComponent;
