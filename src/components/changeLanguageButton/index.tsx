import { Button } from "primereact/button";
import { BsTranslate } from "react-icons/bs";
import { useState } from "react";
import i18n from "i18next";
import {
  ContainerTranslatorButton,
  IconButton,
  DropDownLanguages,
} from "./style";

const ChangeLanguageButtonComponent = () => {
  const [showOptionsTranslate, setShowOptionsTranslate] =
    useState<boolean>(false);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setShowOptionsTranslate(false);
  };

  return (
    <>
      <ContainerTranslatorButton>
        <IconButton
          onClick={() => setShowOptionsTranslate((prevValue) => !prevValue)}
        >
          <BsTranslate color="#3b82f6" />
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
    </>
  );
};

export default ChangeLanguageButtonComponent;
