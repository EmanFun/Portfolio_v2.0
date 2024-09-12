"use client";
import React, { useEffect, useRef, useState } from "react";
import { WrapperMessage, Message, StyledButton } from "./styles";
import { useRouter } from "next/navigation";

export default function WelcomeMessageComponent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    setTimeout(() => {
      router.push("/about/me");
    }, 2500);
  };

  useEffect(() => {
    router.prefetch("/about/me");
  }, [router]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  if (!isClient) return null;

  return (
    <WrapperMessage>
      <Message>Hi, Welcome!</Message>
      <StyledButton className={clicked ? "animate" : ""} onClick={handleClick}>
        Continue
      </StyledButton>
    </WrapperMessage>
  );
}
