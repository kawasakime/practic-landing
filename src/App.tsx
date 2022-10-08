import React from "react";
import { ThemeProvider } from "styled-components";

import MainSection from "./sections/MainSection";
import SecondSection from "./sections/SecondSection";

import GlobalStyles from "./styles/global";
import { baseTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <MainSection />
      <SecondSection />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
