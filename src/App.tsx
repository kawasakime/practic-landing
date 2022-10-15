import React from "react";
import { ThemeProvider } from "styled-components";

import MainSection from "./sections/MainSection";
import AboutUs from "./sections/AboutUs";

import GlobalStyles from "./styles/global";
import { baseTheme } from "./styles/theme";
import Services from "./sections/Services";
import Advantage from "./sections/Advantage";
import Form from "./sections/Form";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <MainSection />
      <AboutUs />
      <Services />
      <Advantage />
      <Form />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
