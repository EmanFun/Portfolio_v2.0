"use client";
import React, { useEffect } from "react";
import type { Metadata } from "next";
import { ErrorComponent } from "@/components";

export const metadata: Metadata = {
  title: "Error",
};
interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorPageProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return <ErrorComponent error={error} />;
};

export default Error;
