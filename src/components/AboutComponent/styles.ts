"use client";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  padding: 2rem;
  animation: ${(props) => props.theme.animations.fadeIn} 1s ease-in-out;
`;

export const Wrapper = styled.div`
  height: 100%;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
    min-width: 300px;
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

export const Description = styled.p`
  max-width: 500px;
`;

export const Title = styled.h1`
  margin: 2rem 0;
  width: 100%;
  font-size: ${(props) => props.theme.textSizes.big.mid};
`;

export const OwnerPhoto = styled(Image)`
  margin: 0 auto;
  width: 350px;
  height: 350px;
  border: 4px solid red;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  box-shadow: ${(props) => props.theme.shadows.md};
  animation: ${(props) => props.theme.animations.colorChange} 10s linear
    infinite;

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
