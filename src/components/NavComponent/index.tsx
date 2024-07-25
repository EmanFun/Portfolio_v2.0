import React from "react";
import { Container } from "./style";
import Link from "next/link";


type Props = {};

function NavComponent({}: Props) {
  return (
    <Container>
        <Link href={'/about/me'}>
        About me
        </Link>
        <Link href={'/about/experience'}>
        Experience
        </Link>
        <Link href={'/about/skills'}>
        TechSkill
        </Link>
        <Link href={'/about/education'}>
        Education
        </Link>
        <Link href={''}></Link>
    </Container>
  );
}

export default NavComponent;
