"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { FiMenu } from "react-icons/fi";

function NavComponent() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [menuHiding, setMenuHiding] = useState<boolean>(false);
  const windowWidth: number = useWindowWidth();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  // eslint-disable-next-line no-unused-vars
  const handleClickOutsideRef = useRef<(event: MouseEvent) => void>();

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
      <StyledLink href={"/about/technologies"}>
        Technologies <GoMoveToEnd size={22} />
      </StyledLink>
      <StyledLink href={"/about/education"}>
        Education <GoMoveToEnd size={22} />
      </StyledLink>
    </Container>
  );

  const handleClickOutside = (event: MouseEvent): void => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuHiding(true);
      setTimeout(() => {
        setMenuHiding(false);
        setMenuVisible(false);
      }, 1200);
    }
  };
  useEffect(() => {
    handleClickOutsideRef.current = handleClickOutside; 
    if (menuVisible && windowWidth <= 479) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuVisible, windowWidth]);
  return (
    <>
      {windowWidth <= 479 ? (
        <>
          {!menuVisible && (
            <ButtonMenu ref={buttonRef} onClick={toggleMenu}>
              <FiMenu size={30} />
            </ButtonMenu>
          )}
          <MobileContainer
            ref={menuRef}
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
              onClick={(event) => handleLinkClick(event, "/about/technologies")}
            >
              Technologies <GoMoveToEnd size={22} />
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