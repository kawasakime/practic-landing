import { config } from "../configs/config";
import { ITheme } from "../interfaces/styled";

export const baseTheme: ITheme = {
  colors: {
    primary: config.colors.primary,
    secondary: config.colors.secondary,
  },
  fontWeight: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
    black: 900,
  },
  duration: "0.3s",
  media: {
    large: "(max-width: 1200px)",
    lessLarge: "(max-width: 1000px)",
    medium: "(max-width: 680px)",
    small: "(max-width: 580px)"
  },
};
