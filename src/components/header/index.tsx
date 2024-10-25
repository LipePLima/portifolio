import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsWhatsapp,
  BsTranslate,
  BsHouseFill,
} from "react-icons/bs";
import {
  ContainerSocialMedias,
  ContainerTranslatorButton,
  DropDownLanguages,
  Header,
  IconButton,
} from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import i18n from "i18next";

const HeaderComponent = () => {
  const [showHome, setShowHome] = useState<boolean>(false);
  const [showOptionsTranslate, setShowOptionsTranslate] =
    useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname.includes("/aboutMe") || pathname.includes("/projeto")) {
      setShowHome(true);
      console.log("Veio");
    } else {
      setShowHome(false);
    }
  }, [window.location.pathname]);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setShowOptionsTranslate(false);
  };

  return (
    <>
      <Header>
        <ContainerSocialMedias>
          {showHome && (
            <IconButton
              color="#F3F4F6"
              colorHover="#d8d8d8"
              onClick={() => navigate("/")}
            >
              <BsHouseFill />
            </IconButton>
          )}

          <a
            href="https://www.linkedin.com/in/felipepliima/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <BsLinkedin />
            </IconButton>
          </a>
          <a
            href="https://github.com/LipePLima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <BsGithub />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/felima148/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <BsInstagram color="#E1306C" />
            </IconButton>
          </a>
          <a
            href="https://wa.link/fubny8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <BsWhatsapp color="#25D366" />
            </IconButton>
          </a>
        </ContainerSocialMedias>
        <ContainerTranslatorButton>
          <IconButton
            onClick={() => setShowOptionsTranslate((prevValue) => !prevValue)}
          >
            <BsTranslate />
          </IconButton>
          {showOptionsTranslate && (
            <DropDownLanguages>
              <Button
                label="PT-BR"
                severity="info"
                text
                onClick={() => changeLanguage("pt-br")}
              />
              <Button
                label="EN-US"
                severity="info"
                text
                onClick={() => changeLanguage("en")}
              />
            </DropDownLanguages>
          )}
        </ContainerTranslatorButton>
      </Header>
    </>
  );
};

export default HeaderComponent;
