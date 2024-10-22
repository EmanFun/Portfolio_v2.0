"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  Container,
  StyledLink,
  ButtonMenu,
  MobileContainer,
  MobileLink,
  SelectLanguage,
  SelectMobileLanguage,
  LanguageBtn,
} from "./style";
import { GoMoveToEnd } from "react-icons/go";
import { useNavContext, useWindowWidth } from "@/hooks";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { Language } from "@/@types";
import { IoLanguage } from "react-icons/io5";

export const ButtonMobileMenu: FC = () => {
  const { buttonRef, toggleMenu } = useNavContext();

  return (
    <ButtonMenu ref={buttonRef} onClick={toggleMenu}>
      <div
        style={{ height: "5px", width: "70%", backgroundColor: "skyblue", borderRadius: "5px" }}
      ></div>
      <div
        style={{ height: "5px", width: "70%", backgroundColor: "skyblue", borderRadius: "5px" }}
      ></div>
      <div
        style={{ height: "5px", width: "70%", backgroundColor: "skyblue", borderRadius: "5px" }}
      ></div>
    </ButtonMenu>
  );
};

function NavComponent() {
  const t = useTranslations();
  const [language, setLanguage] = useState<Language>("es");
  const { menuVisible, setMenuVisible, toggleMenu, menuHiding, setMenuHiding } =
    useNavContext();
  const windowWidth: number = useWindowWidth();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line no-unused-vars
  const handleClickOutsideRef = useRef<(event: MouseEvent) => void>();

  const pathname = usePathname();
  const currentLocale = useLocale();

  console.log(menuHiding);
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setMenuHiding(true);
    setTimeout(() => {
      setMenuHiding(false);
      setMenuVisible(!menuVisible);
      router.push(href);
    }, 1200);
  };

  const changeLanguage = () => {
    if (language === "es") {
      setLanguage("en");
      router.replace(pathname, { locale: language });
    } else {
      setLanguage("es");
      router.replace(pathname, { locale: language });
    }
  };

  const renderLinks = () => (
    <Container>
      <LanguageBtn onClick={changeLanguage}>
        <IoLanguage size={50} color="#ccd5dc" />
      </LanguageBtn>
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
        setMenuVisible(!menuVisible);
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
          {!menuVisible && <></>}
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
              <>
                <LanguageBtn onClick={changeLanguage}>
                  <IoLanguage size={50} color="#ccd5dc" />
                </LanguageBtn>
              </>
            ) : menuVisible && menuHiding ? (
              <>
                <LanguageBtn onClick={changeLanguage}>
                  <IoLanguage size={50} color="#ccd5dc" />
                </LanguageBtn>
              </>
            ) : (
              ""
            )}
            <MobileLink
              $menuVisible={menuVisible}
              onClick={(event) => handleLinkClick(event, "/about")}
            >
              {t(`Nav.aboutMe`)} <GoMoveToEnd size={22} />
            </MobileLink>
            <MobileLink
              $menuVisible={menuVisible}
              onClick={(event) => handleLinkClick(event, "/about/experience")}
            >
              {t(`Nav.experience`)} <GoMoveToEnd size={22} />
            </MobileLink>
            <MobileLink
              $menuVisible={menuVisible}
              onClick={(event) => handleLinkClick(event, "/about/projects")}
            >
              {t(`Nav.projects`)} <GoMoveToEnd size={22} />
            </MobileLink>
            <MobileLink
              $menuVisible={menuVisible}
              onClick={(event) => handleLinkClick(event, "/about/technologies")}
            >
              {t(`Nav.technologies`)}
              <GoMoveToEnd size={22} />
            </MobileLink>
            <MobileLink
              $menuVisible={menuVisible}
              onClick={(event) => handleLinkClick(event, "/about/education")}
            >
              {t(`Nav.education`)} <GoMoveToEnd size={22} />
            </MobileLink>
          </MobileContainer>
        </>
      ) : windowWidth > 479 ? (
        renderLinks()
      ) : (
        ""
      )}
    </>
  );
}

export default NavComponent;
