"use client";
import styled from "styled-components";

export const WrapperContact = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column-reverse;
  height: 100px;
`;

export const Contacts = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  width: 100%;

  overflow-y: hidden;
  animation: ${(props) => props.theme.animations.expandWrapper} 1s
      steps(60, end),
    ${(props) => props.theme.animations.fadeIn} 2s ease-in-out;
  max-height: 300px;
  @media only screen and (max-width: 667px) {
    display: flex;
    gap: 10px;
  }
`;
