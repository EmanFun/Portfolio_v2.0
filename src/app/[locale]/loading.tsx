'use client';
import Loading from "@/components/Loading";
import React from "react";
import { LayoutLanding } from "@/styles/common";


const loading:React.FC = () => {
  return (
    <LayoutLanding>
      <Loading/>
    </LayoutLanding>
  );
};

export default loading;
