"use client";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: ${props => props.theme.animations.fadeIn} 1s ease-in-out;
`

export const WrapperAbout = styled.div`
  width: 50%;

`;


export const OwnerPhoto = styled(Image)`
  margin: 2rem;
  border: 1px black white;
  border-radius: 50%;
`;