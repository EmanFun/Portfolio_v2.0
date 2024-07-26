"use client";
import React, { useState } from "react";
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
            <FaPhoneAlt color="black" size={30} />
          </Link>
          <Link href="https://www.google.com/maps/@-31.4170235,-64.1899042,13z?entry=ttu">
            <SiHomeadvisor color="black" size={30} />
          </Link>
          <Link href="https://github.com/EmanFun">
            <SiGithub color="black" size={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/emanuelfun">
            <SiLinkedin color="black" size={30} />
          </Link>
          <Link href="https://www.instagram.com/emanuel_funs/">
            <SiInstagram color="black" size={30} />
          </Link>
          <Link href={`mailto:${mailTo}?subject=${subject}&body=${message}`}>
            <RiMailSendFill color="black" size={31} />
          </Link>
          <Link
            href="https://docs.google.com/document/d/1KB9wznPHuY8QpyjwljzCYfs07XKwbC_0OZyxnY0FjCI/edit?usp=sharing"
            target="blank"
          >
            <FaUser color="black" size={30} />
          </Link>
        </Contacts>
      ) : (
        <></>
      )}
      <button onClick={handleIsOpen}>{isOpen ? "Close" : "See"}</button>
    </WrapperContact>
  );
};

export default ContactComponent;
