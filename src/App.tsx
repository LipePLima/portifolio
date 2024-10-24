import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <PrimeReactProvider>
          <Routes />
        </PrimeReactProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
