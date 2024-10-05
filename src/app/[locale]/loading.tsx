'use client';
import Loading from "@/components/Loading";
import React from "react";
import { LayoutBlurLanding } from "@/styles/common";


const loading:React.FC = () => {
  return (
    <LayoutBlurLanding>
      <Loading/>
    </LayoutBlurLanding>
  );
};

export default loading;
