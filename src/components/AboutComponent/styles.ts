"use client";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const colorChange = keyframes`
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
export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: ${(props) => props.theme.animations.fadeIn} 1s ease-in-out;

  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 767px) {
    background-color: orange;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 479px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const WrapperAbout = styled.div`
  width: 50%;
  @media screen and (max-width: 991px) {
    min-width:500px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 767px) {
    min-width: 180px;
    background-color: orange;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 479px) {
    display: flex;

  }
`;

export const OwnerPhoto = styled(Image)`
  margin: 0 auto;
  width: 350px;
  height: 350px;
  border: 4px solid red;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  animation: ${colorChange} 10s linear infinite;

  @media screen and (max-width: 991px) {
    width: 300px;
    height: 300px;

  }

  @media screen and (max-width: 767px) {
    width: 200px;
    height: 200px;

  }
  @media screen and (max-width: 479px) {
    display: flex;

  }
`;