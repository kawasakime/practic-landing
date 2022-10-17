import React from "react";
import { ThemeProvider } from "styled-components";

import MainSection from "./sections/MainSection";
import AboutUs from "./sections/AboutUs";

import GlobalStyles from "./styles/global";
import { baseTheme } from "./styles/theme";
import Services from "./sections/Services";
import Advantage from "./sections/Advantage";
import Form from "./sections/Form";
import Reviews from "./sections/Reviews";
import Contacts from "./sections/Contacts";
import Footer from "./sections/Footer";
import BurgerPanel from "./components/Burger/BurgerPanel";

interface IBurgerContext {
  burgerIsOpen: boolean;
  setBurgerIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerContext = React.createContext<IBurgerContext>({
  burgerIsOpen: false,
  setBurgerIsOpen: () => false,
});

function App() {
  const [burgerIsOpen, setBurgerIsOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    burgerIsOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [burgerIsOpen]);

  return (
    <BurgerContext.Provider value={{ burgerIsOpen, setBurgerIsOpen }}>
      <ThemeProvider theme={baseTheme}>
        {burgerIsOpen && <BurgerPanel />}
        <MainSection />
        <AboutUs />
        <Services />
        <Advantage />
        <Form />
        <Reviews />
        <Contacts />
        <Footer />
        <GlobalStyles />
      </ThemeProvider>
    </BurgerContext.Provider>
  );
}

export default App;
