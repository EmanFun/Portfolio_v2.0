import styled, { css, keyframes } from "styled-components";
import Link from "next/link";

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;
const hideInLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const sharedStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 2rem;
  height: 100vh;
  z-index: 10;
`;

export const Container = styled.section`
  background-color: black;
  color: white;
  height: 100%;
  width: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const MobileContainer = styled.div`
  background-color: black;
  color: white;
  height: 0;
  width: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  &.visible {
    animation: ${slideInLeft} 1.2s ease-in-out forwards;
    ${sharedStyles}
  }
  &.hiding {
    ${sharedStyles}
    animation: ${hideInLeft} 1.2s ease-in-out backwards;
  }
`;

export const MobileLink = styled.a`
  display: flex;
  align-items: center;
  @media screen and (max-width: 479px) {
    flex-grow: unset;
  }
  &:hover {
    transform: scale(1.1);
  }
  &.active {
    animation: ${hideInLeft} 0.6s forwards;
  }
`;

export const ButtonMenu = styled.button`
  animation: ${(props) => props.theme.animations.fadeIn} 3s ease-in-out;
  position: absolute;
  top: 0;
  left: 10px;

`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 10px;
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    gap: 1.5rem;
  }
`;