"use client";
import React, { useEffect, useState } from "react";
import { WrapperHeader, HeaderMessage } from "./styles";

const HeaderComponent: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // o un placeholder
  }
  return (
    <WrapperHeader>
      <HeaderMessage>
        My name is Emanuel Funes, I am Full Stack Web developer
      </HeaderMessage>
    </WrapperHeader>
  );
};

export default HeaderComponent;
