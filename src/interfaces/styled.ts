import { config } from "../configs/config";

export interface ITheme {
  colors: typeof config.colors;
  fontWeight: {
    light: number;
    regular: number;
    semiBold: number;
    bold: number;
    black: number;
  };
  duration: string;
  media: {
    large: string;
    lessLarge: string;
    medium: string;
    small: string;
  };
}
