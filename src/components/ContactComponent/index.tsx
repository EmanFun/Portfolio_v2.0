import React, { useState } from "react";
import { WrapperContact, OwnerPhoto, Contacts} from "./styles";
import ownerImg from '@/assets/img/images.png';

const ContactComponent = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    setIsOpen(!isOpen);
  } 

  return (
    <WrapperContact>
        <OwnerPhoto src={ownerImg} alt="Emanuel photographic" />
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
