"use client";
import styled from "styled-components";

export const WrapperProjects = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2rem;
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1024px) {
    margin: 1rem;
    height: 90vh;
  }
  @media screen and (max-width: 479px) {
    height: auto;
    margin: 0;
  }
  animation: ${(props) => props.theme.animations.fadeIn} 1s ease-in-out;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1045px) {
    height: 80vh;
    overflow-y: scroll;
    box-shadow: inset 0 10px 10px -10px rgba(0, 0, 0, 0.3),
      inset 0 -10px 10px -10px rgba(0, 0, 0, 0.3);
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media screen and (max-width: 479px) {
    height: auto;
    overflow-y: auto;
    box-shadow: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin: 2rem;
  font-size: ${(props) => props.theme.textSizes.big.max};
  @media screen and (max-width: 479px) {
    width: auto;
  }
`;
