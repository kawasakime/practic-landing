import React from "react";
import { ThemeProvider } from "styled-components";

import MainSection from "./sections/MainSection";
import AboutUs from "./sections/AboutUs";

import GlobalStyles from "./styles/global";
import { baseTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <MainSection />
      <AboutUs />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
