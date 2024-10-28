import { useTranslation } from "react-i18next";
import { ContainerSocialMedias, Footer, IconButton } from "./style";
import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";

const FooterComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <Footer>
        <ContainerSocialMedias>
          <a
            href="https://www.linkedin.com/in/felipepliima/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <BsLinkedin color="#3b82f6" />
            </IconButton>
          </a>
          <a
            href="https://github.com/LipePLima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <BsGithub color="#fff" />
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
        <span>
          {t("textFooter")}
          <a
            href="https://github.com/LipePLima"
            target="_blank"
            rel="noopener noreferrer"
          >
            Felipe Lima
          </a>
        </span>
      </Footer>
    </>
  );
};

export default FooterComponent;
