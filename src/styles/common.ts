"use client";
import styled from "styled-components";

export const LayoutBlurLanding = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: Roboto, sans-serif, Courier, monospace;

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
`;
