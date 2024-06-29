'use client';
import styled, { keyframes } from "styled-components";

const TypingAnimation = keyframes`
  from { 
    border-right: 0.15em solid;
    width: 0
  }
  to { 
    border-right: none;
    width: 100%;
  }
`;

export const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderMessage = styled.h1`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  animation: ${TypingAnimation} 2s steps(60, end);
  min-width: 100px;
`;
