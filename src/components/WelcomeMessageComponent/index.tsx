'use client';
import React, { useEffect, useRef, useState } from "react";
import { WrapperMessage, Message, StyledButton } from "./styles";
import { useRouter } from 'next/navigation';

export default function WelcomeMessageComponent () {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  const handleClick= (event: React.MouseEvent<HTMLButtonElement>)=>{
    setClicked(!clicked)
    setTimeout(() => {
      router.push("/about/me");
    }, 3000);
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <WrapperMessage>
      <Message>Hi, Welcome!</Message>
      <StyledButton 
      className={clicked ? 'animate' : ''}
      onClick={handleClick}>Continue</StyledButton>
      
    </WrapperMessage>
  );
};


