import { spacing, fontSizes } from "./units";

const white = "#fff";
const black = "#111";

const palette = {
  common: {
    black,
    white,
  },
  primary: {
    default: "#0480FC",
    main: "#2773BE",
    background: "#F2F9FF",
  },

  grey: {
    100: "#f7f5f5",
    200: "#4D5E70",
    default: "#011A32",
    main: "#435364",
  },
};

const shadows = {
  0: "none",
  1: "0px 5px 10px rgba(0, 0, 0, 0.12)",
  2: "0px 8px 30px rgba(0, 0, 0, 0.24)",
};

const typography = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
};

const shape = {
  borderRadius: spacing["xxsmall"],
};

export const theme = {
  palette,
  shadows,
  typography,
  shape,
  fontSizes,
  spacing,
};
