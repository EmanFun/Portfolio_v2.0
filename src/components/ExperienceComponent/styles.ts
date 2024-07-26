'use client';
import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  animation: ${props => props.theme.animations.fadeIn} 1s ease-in-out;
`;


export const Title = styled.h1``;

export const WrapperExperiences = styled.div``;

export const Experience = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  margin: 1rem 0;
  padding: 1rem;
  background-color: orange;
`;
export const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ExperienceInfo = styled.div``;

export const Company = styled.h3``;

export const TypeJob = styled.p``;

export const Responsibilities = styled.p``;

export const FrontTechs = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const BackTechs = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Tech = styled.div``;
