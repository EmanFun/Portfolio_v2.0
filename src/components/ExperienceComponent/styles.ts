"use client";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  animation: ${(props) => props.theme.animations.fadeIn} 1s ease-in-out;
  @media only screen and (max-width: 667px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  color: #000000;
  margin: 2rem 0;
  width: 100%;
  font-size: ${(props) => props.theme.textSizes.big.mid};
`;

export const WrapperExperiences = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
