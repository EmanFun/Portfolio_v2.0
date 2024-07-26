"use client";
import styled from "styled-components";

export const WrapperProjects = styled.section`
  margin: 2rem;
  animation: ${props => props.theme.animations.fadeIn} 1s ease-in-out;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 1024px) {
    div {
      margin: 5px;
      padding: 5px;
      flex-basis: 150px;
    }
  }
`;

export const Card = styled.div`
  flex-grow: 1;
  flex-basis: 100px;
  margin: 15px;
  padding: 10px;
  height: 10%;
`;

export const Title = styled.h3``;

export const Text = styled.p``;

export const Link = styled.a``;
