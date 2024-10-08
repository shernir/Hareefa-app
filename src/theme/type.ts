export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
    widgetBackground: string;
    white: string;
    btnText: string;
    secondaryText: string;
    inputTextColor: string;
  };
  dark: boolean;
  fontSize: FontSize;
  animation: {
    scale: number;
  };
  spacing: {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
  };
  borderRadius: {
    s: number;
    m: number;
    l: number;
    xl: number;
  };
  breakpoints: {
    phone: number;
    tablet: number;
  };
  shadows: {
    s: string;
    m: string;
    l: string;
    xl: string;
  };
}

export interface FontSize {
  heading: number;
  subheading: number;
  body: number;
  caption: number;
  smallText: number;
}
