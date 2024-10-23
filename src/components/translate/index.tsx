import { useEffect } from "react";
import { TranslateWrapper } from "./style";

const GoogleTranslate = () => {
  useEffect(() => {
    if (
      !document.querySelector(
        'script[src="//translate.google.com/translate_a/element.js"]'
      )
    ) {
      const addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
    }

    window.googleTranslateElementInit = () => {
      if (!document.getElementById("google_translate_element")?.innerHTML) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "pt-br" },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <TranslateWrapper>
      <div id="google_translate_element"></div>
    </TranslateWrapper>
  );
};

export default GoogleTranslate;
