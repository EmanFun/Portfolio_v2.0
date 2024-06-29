'use client';
import styled, { keyframes } from "styled-components";
import Image from "next/image";
const ExpandWrapper = keyframes`
  from { 
    
    height: 0
  }
  to { 
    
    height: 60%;
  }
`;

export const WrapperContact = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  background-color: white;
  height: 100%;
`;

export const OwnerPhoto = styled(Image)`
  margin: 2rem;
  border: 1px black white;
  border-radius: 50%;
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
