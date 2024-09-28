"use client";
import React, { useEffect, useRef, useState } from "react";
import { WrapperMessage, Message, StyledButton } from "./styles";
import { useRouter } from "@/i18n/routing";
import {useTranslations} from 'next-intl';


export default function WelcomeMessageComponent() {
  const t = useTranslations();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    setTimeout(() => {
      router.push("/about");
    }, 2500);
  };

  useEffect(() => {
    router.prefetch("/about");
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
      <Message>{t(`LandingPage.welcomeMessage`)}</Message>
      <StyledButton className={clicked ? "animate" : ""} onClick={handleClick}>
        {t(`LandingPage.continue`)}
      </StyledButton>
    </WrapperMessage>
  );
}
