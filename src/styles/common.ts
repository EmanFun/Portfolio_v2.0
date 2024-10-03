"use client";
import styled from "styled-components";
import backgroundImage from "@/assets/img/background.jpg";

export const LayoutLanding = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background-image: url(${backgroundImage.src});
  background-size: cover;
  background-position: center;


  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(15px);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
  @media (max-width: 768px) {
      background-repeat: repeat-y;
    //background-attachment: scroll; 
  }
`;
