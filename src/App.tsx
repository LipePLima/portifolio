import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { ChangeLanguageButton, Footer, SocialMediasIcons } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <PrimeReactProvider>
          <SocialMediasIcons />
          <ChangeLanguageButton />
          <Routes />
          <Footer />
        </PrimeReactProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
