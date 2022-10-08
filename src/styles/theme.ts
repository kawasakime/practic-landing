import { config } from "../configs/config"
import { ITheme } from "../interfaces/styled"

export const baseTheme: ITheme = {
  colors: {
    primary: config.colors.primary,
    secondary: config.colors.secondary
  },
  fontWeight: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
  duration: "0.3s"
}