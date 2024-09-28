"use client";
import styled, { keyframes } from "styled-components";

const ExpandWrapper = keyframes`
  from { 
    
    height: 0
  }
  to { 
    
    height: 30%;
  }
`;
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
  animation: ${ExpandWrapper} 1s steps(60, end), ${props => props.theme.animations.fadeIn} 2s ease-in-out;
  max-height: 300px;
`;
