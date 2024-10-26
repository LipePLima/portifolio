import { useTranslation } from "react-i18next";
import { AboutMeSection, Title } from "./style";

const AboutMePage = () => {
  const { t } = useTranslation();

  return (
    <AboutMeSection>
      <Title>{t("aboutMe")}</Title>
      <p>{t("aboutMeP1")}</p>
      <p>{t("aboutMeP2")}</p>
      <p>{t("aboutMeP3")}</p>
      <p>{t("aboutMeP4")}</p>
      <p>{t("aboutMeP5")}</p>
      <p>{t("aboutMeP6")}</p>
    </AboutMeSection>
  );
};

export default AboutMePage;
