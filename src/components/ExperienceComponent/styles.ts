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
    margin: 10px;
    padding: 2rem 10px;
  }
`;

export const Title = styled.h1`
color: #D9D9D9;
  margin: 2rem;
  width: 100%;
  font-size: ${(props) => props.theme.textSizes.big.mid};
`;

export const WrapperExperiences = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
