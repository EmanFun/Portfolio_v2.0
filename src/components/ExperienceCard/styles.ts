import styled from "styled-components";

export const WrapperCard = styled.div`
  flex-grow: 1;
  flex-basis: 180px;
  border-radius: 20px;
  margin: 2rem;
  padding: 1rem;
  background: rgba(200, 200, 200, 0.7);
  box-shadow: ${(props) => props.theme.shadows.md};
  @media only screen and (max-width: 667px) {
    margin: 10px 0;
    padding: 1.5rem;
  }
`;

export const WrapperHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperBody = styled.div`
padding: 1rem;
`;
export const WrapperFooter = styled.div``;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.textSizes.medium.max};
`;
export const Label = styled.h2`
  font-size: ${(props) => props.theme.textSizes.medium.mid};
`;

export const ResponsibilitiesList = styled.ul`
  min-width: 50px;
  font-size: ${(props) => props.theme.textSizes.medium.min};
`;
export const ListItem = styled.li``;

export const TechsList = styled.ul`
  min-width: 50px;
  font-size: ${(props) => props.theme.textSizes.medium.min};
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const TechItem = styled.li``;
