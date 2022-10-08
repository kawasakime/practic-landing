import { config } from "../configs/config"

interface ThemeInterface {
  colors: {
    primary: string,
    secondary: string
  },
  fontWeight: {
    light: number,
    regular: number,
    bold: number,
  },
  duration: string
}

export const baseTheme: ThemeInterface = {
  colors: {
    primary: config.colors.primary,
    secondary: config.colors.secondary
  },
  fontWeight: {
    light: 200,
    regular: 400,
    bold: 700,
  },
  duration: "0.3s"
}