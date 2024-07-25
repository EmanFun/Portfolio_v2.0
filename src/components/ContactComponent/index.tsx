'use client'
import React, { useState } from "react";
import { WrapperContact, Contacts} from "./styles";


const ContactComponent: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = ()=>{
    setIsOpen(!isOpen);
  } 

  return (
    <WrapperContact>
       
        {
          isOpen ? (
            <Contacts >
              hello World
            </Contacts>
          ): (
            <></>
          )
        }
        <button onClick={handleIsOpen}>{isOpen ? "Close" :"See" }</button>
    </WrapperContact>
  );
};

export default ContactComponent;
