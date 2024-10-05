import styled from "styled-components";

export const WrapperContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 2rem;
`;

export const Title = styled.h1`
  color: #000000;
  margin: 2rem 0;
  width: 100%;
  
  font-size: ${(props) => props.theme.textSizes.big.mid};
`;

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 2rem;

`;

export const WrapperCard = styled.div`
  padding: 1rem;
  background: rgba(200, 200, 200, 0.7);
  box-shadow: ${(props) => props.theme.shadows.md};
  border-radius: 20px;
`;

export const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.textSizes.medium.max};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.textSizes.medium.mid};
`;
