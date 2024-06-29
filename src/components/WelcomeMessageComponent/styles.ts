'use client';
import styled, { keyframes } from "styled-components";

export const WrapperMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  font-size: ${ props => props.theme.textSizes.big.max};
  font-family: ${ props => props.theme.fonts.title};
`;

export const Message = styled.h1`

  margin: 0;

`;

export const InputNameUser = styled.input`
  position: relative;
  top: 10px;
  font-size: ${ props => props.theme.textSizes.big.max};
  font-family: ${ props => props.theme.fonts.title};
  border: none;
  padding: 5px;


  &:focus {
    outline: none;
    border: none;
    font-size: ${ props => props.theme.textSizes.big.max};
  }

`;
const TypingAnimation = keyframes`
  from { 
    border-right: 0.15em solid;
    width: 0
  }
  to { 
    border-right: none;
    width: 40%;
  }
`;

export const UserName = styled.h1`
  overflow: hidden;
  white-space: nowrap;
  animation: ${TypingAnimation} 1s steps(15, end);
  min-width: 60px;

  margin: 0 0;
`;


