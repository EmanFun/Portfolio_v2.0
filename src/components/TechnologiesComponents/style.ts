import styled from "styled-components";

export const TechnologiesWrapper = styled.div`
  padding: 2rem;
  color: #090100;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 667px) {
    padding: 1rem;
    gap: 1rem;
  }
  animation: ${(props) => props.theme.animations.fadeIn} 1s ease-in-out;
`;
export const Wrapper = styled.div`
  min-height: 250px;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  font-weight: bolder;
  @media only screen and (max-width: 1124px) {
    width: 80%;
  }
  @media only screen and (max-width: 667px) {
    width: auto;

    margin-bottom: 15px;
    gap: 15px;
    .icon {
      padding: 0;
      margin: 0;
      width: 30px;
      height: 30px;
    }
    div {
    }
    p {
      display: none;
    }
  }
`;
export const Card = styled.div`
  background: rgba(166, 204, 205, 1);
  box-shadow: ${(props) => props.theme.shadows.md};
  border-radius: 25px;
  flex-grow: 1;
  flex-basis: 80px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: transform 0.5s ease-in-out;

  @media only screen and (max-width: 430px) {
    flex-basis: 65px;
    min-width: 65px;

    p {
      font-size: small;
    }
  }

  &:hover {
    transform: scale(1.5);
    transition-delay: 0.2s;
  }
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
export const SubTitle = styled.h2`
  color: #ccd5dc;
  margin: 0;
  font-size: ${(props) => props.theme.textSizes.big.min};
`;
export const TechName = styled.p`
  text-transform: capitalize;
`;
