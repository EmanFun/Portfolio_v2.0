"use client";
import React, { useEffect, useRef, useState } from "react";
import { WrapperContact, Contacts } from "./styles";
import Link from "next/link";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import {
  SiHomeadvisor,
  SiGithub,
  SiLinkedin,
  SiInstagram,
} from "react-icons/si";
import { MdContactSupport } from "react-icons/md";

const message = `"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."%0D%0A\nNo hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.%0D%0A`;
const subject = `Saludos!`;
const mailTo = "emanuelfun.95@gmail.com";

const ContactComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <WrapperContact>
      {isOpen ? (
        <Contacts>
          <Link href="whatsapp://send?phone=5493518018687">
            <FaPhoneAlt color="#628598" size={30} />
          </Link>
          <Link href="https://www.google.com/maps/@-31.4170235,-64.1899042,13z?entry=ttu">
            <SiHomeadvisor color="#628598" size={30} />
          </Link>
          <Link href="https://github.com/EmanFun">
            <SiGithub color="#628598" size={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/emanuelfun">
            <SiLinkedin color="#628598" size={30} />
          </Link>
          <Link href="https://www.instagram.com/emanuel_funs/">
            <SiInstagram color="#628598" size={30} />
          </Link>
          <Link href={`mailto:${mailTo}?subject=${subject}&body=${message}`}>
            <RiMailSendFill color="#628598" size={31} />
          </Link>
          <Link
            href="https://docs.google.com/document/d/1KB9wznPHuY8QpyjwljzCYfs07XKwbC_0OZyxnY0FjCI/edit?usp=sharing"
            target="_blank"
          >
            <FaUser color="#628598" size={30} />
          </Link>
        </Contacts>
      ) : (
        <>
          <button onClick={handleIsOpen}>
            <MdContactSupport size={30} color="#628598" />
          </button>
        </>
      )}
    </WrapperContact>
  );
};

export default ContactComponent;
