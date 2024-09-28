"use client";
import styled, { keyframes } from "styled-components";

const slideAndFadeOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;
export const WrapperMessage = styled.div`
  margin: 0 2rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  animation: ${(props) => props.theme.animations.fadeIn} 1s ease-in-out;
  font-size: ${(props) => props.theme.textSizes.big.max};
  font-family: ${(props) => props.theme.fonts.title};
`;
export const Message = styled.h1`
  margin: 0;
`;
export const StyledButton = styled.button`
  font-size: large;
  animation: ${(props) => props.theme.animations.fadeIn} 3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  &.animate {
    animation: ${slideAndFadeOut} 1s forwards;
    height: 100%;
  }
`;
/* export const InputNameUser = styled.input`
  position: relative;
  top: 10px;
  font-size: ${(props) => props.theme.textSizes.big.max};
  font-family: ${(props) => props.theme.fonts.title};
  border: none;
  padding: 5px;

  &:focus {
    outline: none;
    border: none;
    font-size: ${(props) => props.theme.textSizes.big.max};
  }
`;

export const UserName = styled.h1`
  overflow: hidden;
  white-space: nowrap;
  animation: ${TypingAnimation} 1s steps(15, end);
  min-width: 60px;

  margin: 0 0;
`; */
