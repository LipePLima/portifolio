import { useTranslation } from "react-i18next";
import { Footer } from "./style";

const FooterComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <Footer>
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
