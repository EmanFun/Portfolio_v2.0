import styled from "styled-components";

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 65px;
  padding:1rem;
  border: 3px solid gray;
  border-radius: 100%;
  color: #d3d3d3;
  background-color: black;
  animation: ${(props) => props.theme.animations.spinAndScale} 2s infinite;
  box-shadow: ${(props)=> props.theme.shadows.lg};
  `;

export const SubWrapper = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Letter = styled.h2`
  padding: 0;
  margin: 0;
  animation: ${(props) => props.theme.animations.enlarge(`20px`, `80px`)} 2s
    infinite;

`;

export const Brackets = styled.h1`

`;
