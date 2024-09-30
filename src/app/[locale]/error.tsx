'use client';
import React, { useEffect } from "react";
import { ErrorComponent } from "@/components";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorPageProps> = ({error}) => {
  useEffect(()=>{console.error(error)},[error])
  return (
    <ErrorComponent error={error}/>
  );
};

export default Error;
