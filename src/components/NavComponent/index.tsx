"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  StyledLink,
  ButtonMenu,
  MobileContainer,
  MobileLink,
} from "./style";
import { GoMoveToEnd } from "react-icons/go";
import { useWindowWidth } from "@/hoc";
import { useRouter } from "next/navigation";

function NavComponent() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [menuHiding, setMenuHiding] = useState<boolean>(false);
  const windowWidth: number = useWindowWidth();
  const router = useRouter();

  const toggleMenu = (): void => {
    if (menuVisible) {
      setMenuHiding(true);
      setTimeout(() => {
        setMenuHiding(false);
        setMenuVisible(!menuVisible);
      }, 1200);
    } else {
      setMenuVisible(!menuVisible);
    }
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setMenuHiding(true);
    setTimeout(() => {
      setMenuHiding(false);
      setMenuVisible(false);
      router.push(href);
    }, 1200);
  };

  const renderLinks = () => (
    <Container>
      <StyledLink href={"/about/me"}>
        About me <GoMoveToEnd size={22} />
      </StyledLink>
      <StyledLink href={"/about/experience"}>
        Experience <GoMoveToEnd size={22} />
      </StyledLink>
      <StyledLink href={"/about/projects"}>
        Projects <GoMoveToEnd size={22} />
      </StyledLink>
      <StyledLink href={"/about/skills"}>
        TechSkill <GoMoveToEnd size={22} />
      </StyledLink>
      <StyledLink href={"/about/education"}>
        Education <GoMoveToEnd size={22} />
      </StyledLink>
    </Container>
  );

  useEffect(() => {}, [windowWidth]);

  return (
    <>
      {windowWidth <= 479 ? (
        <>
          {!menuVisible && <ButtonMenu onClick={toggleMenu}>Menu</ButtonMenu>}
          <MobileContainer
            className={
              menuVisible && !menuHiding
                ? "visible"
                : menuVisible && menuHiding
                ? "hiding"
                : ""
            }
          >
            <MobileLink
              onClick={(event) => handleLinkClick(event, "/about/me")}
            >
              About me <GoMoveToEnd size={22} />
            </MobileLink>
            <MobileLink
              onClick={(event) => handleLinkClick(event, "/about/experience")}
            >
              Experience <GoMoveToEnd size={22} />
            </MobileLink>
            <MobileLink
              onClick={(event) => handleLinkClick(event, "/about/projects")}
            >
              Projects <GoMoveToEnd size={22} />
            </MobileLink>
            <MobileLink
              onClick={(event) => handleLinkClick(event, "/about/skills")}
            >
              TechSkill <GoMoveToEnd size={22} />
            </MobileLink>
            <MobileLink
              onClick={(event) => handleLinkClick(event, "/about/education")}
            >
              Education <GoMoveToEnd size={22} />
            </MobileLink>
          </MobileContainer>
        </>
      ) : (
        renderLinks()
      )}
    </>
  );
}
export default NavComponent;