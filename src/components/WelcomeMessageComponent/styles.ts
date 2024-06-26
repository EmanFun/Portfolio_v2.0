import styled, { keyframes } from "styled-components";

export const WrapperMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  font-size: var(--text-big-max);
  font-family: var(--font-family-title);
`;

export const Message = styled.h1`

  margin: 0;

`;

export const InputNameUser = styled.input`
  position: relative;
  top: 10px;
  font-size: var(--text-big-max);
  font-family: var(--font-family-title);
  border: none;
  padding: 5px;


  &:focus {
    outline: none;
    border: none;
    font-size: var(--text-big-max);
  }
  &::selection{
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


