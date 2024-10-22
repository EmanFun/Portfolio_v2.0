import styled from "styled-components";

export const WrapperContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${(props) => props.theme.animations.fadeIn} 1s ease-in-out;
  padding: 2rem;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ccd5dc;
  margin: 2rem 0;
  width: 100%;
  font-size: ${(props) => props.theme.textSizes.big.mid};
  @media screen and (max-width: 479px) {
    text-align: end;
  }
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
  background: rgba(166, 204, 205, 1);
  box-shadow: ${(props) => props.theme.shadows.md};
  border-radius: 20px;
`;

export const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.textSizes.medium.max};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.textSizes.medium.mid};
`;
