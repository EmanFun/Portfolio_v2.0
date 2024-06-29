'use client';
import React, { useEffect, useRef, useState } from "react";
import { WrapperMessage, Message, InputNameUser, UserName } from "./styles";
import { useRouter } from 'next/navigation';

export default function WelcomeMessageComponent () {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [nameInserted, setNameInserted] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setUserName(userName + "!");
      setNameInserted(!nameInserted);
      setTimeout(() => {
        router.push("/home");
      }, 3000);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <WrapperMessage>
      <Message>Hi, Welcome &nbsp;</Message>
      {nameInserted ? (
        <UserName>{userName}</UserName>
      ) : (
        <>
          <InputNameUser
            ref={inputRef}
            type="text"
            placeholder="Enter your first name"
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />
          <Message>!</Message>
        </>
      )}
    </WrapperMessage>
  );
};


