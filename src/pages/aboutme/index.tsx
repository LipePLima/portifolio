import { useTranslation } from "react-i18next";
import { AboutMeSection, Text, Title } from "./style";

const AboutMePage = () => {
  const { t } = useTranslation();

  return (
    <AboutMeSection>
      <Title>{t("aboutMe")}</Title>
      <Text>{t("aboutMeP1")}</Text>
      <Text>{t("aboutMeP2")}</Text>
      <Text>{t("aboutMeP3")}</Text>
      <Text>{t("aboutMeP4")}</Text>
      <Text>{t("aboutMeP5")}</Text>
      <Text>{t("aboutMeP6")}</Text>
    </AboutMeSection>
  );
};

export default AboutMePage;
