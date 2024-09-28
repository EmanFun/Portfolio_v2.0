"use client";
import styled from "styled-components";

export const WrapperProjects = styled.div`
  margin: 2rem;
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;

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
  @media only screen and (max-width: 1024px) {
    margin: 5px;
    padding: 5px;
    flex-basis: 150px;
  }
  @media screen and (max-width: 479px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  margin: 15px;
  padding: 10px;
  height: 10%;
  @media screen and (max-width: 479px) {
    flex-grow: 1;
    flex-basis: 100px;
    flex-grow: unset;
  }
`;

export const Title = styled.h3``;

export const Text = styled.p``;

export const Link = styled.a``;
