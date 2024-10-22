import styled from "styled-components";
import Link from "next/link";

export const WrapperCard = styled.div`
  border-radius: 15px;
  margin: 15px;
  padding: 15px;
  height: auto;
  @media screen and (max-width: 479px) {
    flex-grow: 1;
    flex-basis: 250px;
    flex-grow: unset;
  }
  background: rgba(166, 204, 205, 1);
  box-shadow: ${(props) => props.theme.shadows.md};
`;
export const WrapperHead = styled.div``;

export const Wrapper = styled.div``;

export const WrapperFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  color: #a3c9c9;
  font-size: ${(props) => props.theme.textSizes.medium.max};
`;
export const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.textSizes.medium.mid};
`;

export const Description = styled.p`
  max-width: 200px;
  @media screen and (max-width: 479px) {
    width: auto;
  }
`;

export const ProjectLink = styled(Link)``;
