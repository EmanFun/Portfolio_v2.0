import { createGlobalStyle, keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const spinAndScale = keyframes`
  0%{
    transform: scale(1) rotate(0deg);
  }
  5%{
    transform: scale(1.5);
  }

  50%{
    transform: scale(1.5) rotate(360deg);
  }
  100%{
    transform: scale(1) rotate(360deg);
  }
`;

export const enlarge = keyframes`
  from{
    font-size: small;
  }to{
    font-size: large;
  }
`;

export const GlobalStyle = createGlobalStyle`
`;
