import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AboutMeSection, Text, Title } from "./style";
import { Button } from "primereact/button";
import cvEnglishVersion from "../../assets/pdfs/cvEnglishVersion.pdf";
import cvPortugueseVersion from "../../assets/pdfs/cvPortugueseVersion.pdf";

const AboutMePage = () => {
  const [cvToDownload, setCvToDownload] = useState(cvPortugueseVersion);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setCvToDownload(
      i18n.language === "pt-br" ? cvPortugueseVersion : cvEnglishVersion
    );
  }, [i18n.language]);

  return (
    <AboutMeSection>
      <Title>{t("aboutMe")}</Title>
      <Text>{t("aboutMeP1")}</Text>
      <Text>{t("aboutMeP2")}</Text>
      <Text>{t("aboutMeP3")}</Text>
      <Text>{t("aboutMeP4")}</Text>
      <Text>{t("aboutMeP5")}</Text>
      <Text>{t("aboutMeP6")}</Text>
      <a href={cvToDownload} download="CV Dev Felipe Lima.pdf">
        <Button label={t("buttonCV")} severity="info" />
      </a>
    </AboutMeSection>
  );
};

export default AboutMePage;
