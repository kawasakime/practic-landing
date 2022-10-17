export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
  };
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
