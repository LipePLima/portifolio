import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsWhatsapp,
  BsTranslate,
} from "react-icons/bs";
import {
  ContainerSocialMedias,
  ContainerTranslatorButton,
  Header,
  IconButton,
} from "./style";
import { GoogleTranslate } from "..";
import { useState } from "react";

const HeaderComponent = () => {
  const [showOptionsTranslate, setShowOptionsTranslate] =
    useState<boolean>(false);

  return (
    <>
      <Header>
        <ContainerSocialMedias>
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
          {showOptionsTranslate && <GoogleTranslate />}
        </ContainerTranslatorButton>
      </Header>
    </>
  );
};

export default HeaderComponent;
