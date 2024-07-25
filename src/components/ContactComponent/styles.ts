"use client";
import styled, { keyframes } from "styled-components";

const ExpandWrapper = keyframes`
  from { 
    
    height: 0
  }
  to { 
    
    height: 60%;
  }
`;

export const WrapperContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background-color: white;
`;



export const Contacts = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
  overflow-y: hidden;
  animation: ${ExpandWrapper} 3s steps(60, end);
  background-color: orange;
  max-height: 300px;
`;
