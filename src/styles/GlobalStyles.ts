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

export const enlarge = (fromSize = "small", toSize = "large") => keyframes`
  from{
    font-size: ${fromSize};
  }to{
    font-size: ${toSize};
  }
`;

export const colorChange = keyframes`
  0% {
    border-color: red; 
  }
  50% {
    border-color: blue; 
  }
  100% {
    border-color: red; 
  }
`;

export const expandWrapper = keyframes`
from { 
  height: 0
}
to { 
  height: 30%;
}
`;

export const slideInLeft = keyframes`
  from {
    transform: translateX(-130%);
  }
  to {
    transform: translateX(-30%);
  }
`;
export const hideInLeft = keyframes`
  from {
    transform: translateX(-30%);
  }
  to {
    transform: translateX(-130%);
  }
`;

export const slideAndFadeOut = keyframes`
from {
  transform: translateX(0);
  opacity: 1;
}
to {
  transform: translateX(100%);
  opacity: 0;
}
`;

export const GlobalStyle = createGlobalStyle`
`;
