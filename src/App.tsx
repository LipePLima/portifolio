import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { HeaderComponent } from "./components";

function App() {
  return (
    <>
      <HeaderComponent />
      <BrowserRouter>
        <PrimeReactProvider>
          <Routes />
        </PrimeReactProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
