"use client";
import Image from "next/image";
import styled from "styled-components";

export const WrapperError = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
  animation: ${(props) => props.theme.animations.fadeIn} 1s ease-in-out;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorImage = styled(Image)`
  width: 200px;
  height: 200px;
  color: red;
  animation: ${(props) => props.theme.animations.spinAndScale} 5s infinite
    ease-in-out;
`;

export const ErrorMessage = styled.h1``;
export const ErrorCode = styled.p``;

export const StyledRedirect = styled.button`
  border: 1px solid black;
  color: white;
  background-color: black;
  padding: 1rem;
  border-radius: 50px;
  &:hover {
    animation: ${(props) => props.theme.animations.enlarge} 1s ease-in;
    font-size: large;
  }
`;
