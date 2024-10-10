import styled, { css } from "styled-components";
import { Link } from "@/i18n/routing";
import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

const sharedStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 2rem;
  height: 100vh;
  z-index: 10;
`;

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.6);
  color: #d9d9d9;
  height: 100%;
  align-self: flex-end;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const MobileContainer = styled.div`
  background: rgba(0, 0, 0, 0.9);
  color: #d9d9d9;
  height: 0;

  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-around;
  width: 220px;

  &.visible {
    animation: ${(props) => props.theme.animations.slideInLeft} 1.2s ease-in-out
      forwards;
    ${sharedStyles}
  }
  &.hiding {
    ${sharedStyles}
    animation: ${(props) =>
      props.theme.animations.hideInLeft} 1.2s ease-in-out backwards;
  }
`;

interface MobileLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  $menuVisible: boolean;
}

export const MobileLink = styled.a<MobileLinkProps>`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.textSizes.medium.mid};
  opacity: ${(props) => (props.$menuVisible ? 1 : 0)};
  pointer-events: ${(props) => (props.$menuVisible ? "auto" : "none")};

  @media screen and (max-width: 479px) {
    flex-grow: unset;
  }
  &:hover {
    transform: scale(1.1);
  }
  &.active {
    animation: ${(props) => props.theme.animations.hideInLeft} 0.6s forwards;
  }
`;

export const ButtonMenu = styled.button`
  animation: ${(props) => props.theme.animations.fadeIn} 3s ease-in-out;
  position: absolute;
  top: 60px;
  left: 300px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  font-size: ${(props) => props.theme.textSizes.medium.mid};
  gap: 10px;
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    gap: 1.5rem;
  }
`;

export const SelectLanguage = styled.select`
  background: #d9d9d9;
  padding: 4px 6px;
  outline: none;
  border-radius: 8px;

  &:focus {
    border: 1px solid #007bff;
    background: rgba(230, 230, 230, 0.9);
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  position: relative;
`;
export const SelectMobileLanguage = styled.select`
  background: rgba(200, 200, 200, 0.7);
  padding: 4px 6px;
  outline: none;
  border-radius: 8px;

  &:focus {
    border: 1px solid #007bff;
    background: rgba(230, 230, 230, 0.9);
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  position: relative;
`;
