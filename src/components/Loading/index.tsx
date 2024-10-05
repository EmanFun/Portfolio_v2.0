'use client';
import React from "react";
import { LoadingWrapper, SubWrapper, Brackets, Letter } from "./styles";


const Loading = () => {
  return (
    <LoadingWrapper>
        <SubWrapper>
            <Brackets>{"{"}</Brackets>
            <Letter>i</Letter>
            <Letter>f</Letter>
            <Brackets>{"}"}</Brackets>
        </SubWrapper>
    </LoadingWrapper>
  );
};

export default Loading;
