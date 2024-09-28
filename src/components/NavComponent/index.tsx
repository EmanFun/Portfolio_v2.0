"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  StyledLink,
  ButtonMenu,
  MobileContainer,
  MobileLink,
  SelectLanguage,
  SelectMobileLanguage,
} from "./style";
import { GoMoveToEnd } from "react-icons/go";
import { useWindowWidth } from "@/hoc";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { FiMenu } from "react-icons/fi";
import { useLocale } from "next-intl";
import { Language } from "@/@types";

function NavComponent() {
  const t = useTranslations();
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [menuHiding, setMenuHiding] = useState<boolean>(false);
  const windowWidth: number = useWindowWidth();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  // eslint-disable-next-line no-unused-vars
  const handleClickOutsideRef = useRef<(event: MouseEvent) => void>();

  const pathname = usePathname();
  const currentLocale = useLocale();

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

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value as Language;
    router.replace(pathname, { locale: selectedLocale });
  };

  const renderLinks = () => (
    <Container>
      <SelectLanguage value={currentLocale} onChange={changeLanguage}>
        <option value="es">{t(`Languages.es`)}</option>
        <option value="en">{t(`Languages.en`)}</option>
      </SelectLanguage>
      <StyledLink href={"/about"}>
        {t(`Nav.aboutMe`)} <GoMoveToEnd size={22} />
      </StyledLink>
      <StyledLink href={"/about/experience"}>
        {t(`Nav.experience`)} <GoMoveToEnd size={22} />
      </StyledLink>
      <StyledLink href={"/about/projects"}>
        {t(`Nav.projects`)} <GoMoveToEnd size={22} />
      </StyledLink>
      <StyledLink href={"/about/technologies"}>
        {t(`Nav.technologies`)} <GoMoveToEnd size={22} />
      </StyledLink>
      <StyledLink href={"/about/education"}>
        {t(`Nav.education`)} <GoMoveToEnd size={22} />
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
            {menuVisible && !menuHiding ? (
              <SelectMobileLanguage
                value={currentLocale}
                onChange={changeLanguage}
              >
                <option value="es">{t(`Languages.es`)}</option>
                <option value="en">{t(`Languages.en`)}</option>
              </SelectMobileLanguage>
            ) : menuVisible && menuHiding ? (
              <SelectMobileLanguage
                value={currentLocale}
                onChange={changeLanguage}
              >
                <option value="es">{t(`Languages.es`)}</option>
                <option value="en">{t(`Languages.en`)}</option>
              </SelectMobileLanguage>
            ) : (
              ""
            )}
            <MobileLink onClick={(event) => handleLinkClick(event, "/about")}>
              {t(`Nav.aboutMe`)} <GoMoveToEnd size={22} />
            </MobileLink>
            <MobileLink
              onClick={(event) => handleLinkClick(event, "/about/experience")}
            >
              {t(`Nav.experience`)} <GoMoveToEnd size={22} />
            </MobileLink>
            <MobileLink
              onClick={(event) => handleLinkClick(event, "/about/projects")}
            >
              {t(`Nav.projects`)} <GoMoveToEnd size={22} />
            </MobileLink>
            <MobileLink
              onClick={(event) => handleLinkClick(event, "/about/technologies")}
            >
              {t(`Nav.technologies`)}
              <GoMoveToEnd size={22} />
            </MobileLink>
            <MobileLink
              onClick={(event) => handleLinkClick(event, "/about/education")}
            >
              {t(`Nav.education`)} <GoMoveToEnd size={22} />
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
