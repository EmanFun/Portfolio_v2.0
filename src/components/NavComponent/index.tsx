import React from "react";
import { Container, StyledLink } from "./style";
import { GoMoveToEnd } from "react-icons/go";


type Props = {};

function NavComponent({}: Props) {
  return (
    <Container>
        <StyledLink href={'/about/me'}>
        About me  <GoMoveToEnd size={22}/>
        </StyledLink>
        <StyledLink href={'/about/experience'}>
        Experience  <GoMoveToEnd size={22}/>
        </StyledLink>
        <StyledLink href={'/about/projects'}>
        Projects <GoMoveToEnd size={22}/>
        </StyledLink>
        <StyledLink href={'/about/skills'}>
        TechSkill <GoMoveToEnd size={22}/>
        </StyledLink>
        <StyledLink href={'/about/education'}>
        Education <GoMoveToEnd size={22}/>
        </StyledLink>
    </Container>
  );
}

export default NavComponent;
