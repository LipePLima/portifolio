import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ContainerSocialMedias, IconButton } from "./style";
import {
  BsHouseFill,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";

const SocialMediasIconsComponent = () => {
  const [showHome, setShowHome] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname.includes("/aboutMe") || pathname.includes("/projeto")) {
      setShowHome(true);
    } else {
      setShowHome(false);
    }
  }, [location]);

  return (
    <>
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
    </>
  );
};

export default SocialMediasIconsComponent;
