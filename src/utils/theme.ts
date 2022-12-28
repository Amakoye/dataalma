import { Components, PaletteMode, createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import AppBar from "./components/AppBar";

const defaultFont = ["Source Sans Pro", "sans-serif"].join(",");

export const tokens = (mode: PaletteMode) => ({
  // invert all the colors for dark version
  ...(mode === "light"
    ? {
        //grey color
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        //primary color
        primary: {
          100: "#cdd7f0",
          200: "#9bb0e0",
          300: "#6888d1",
          400: "#3661c1",
          500: "#0439b2",
          600: "#032e8e",
          700: "#02226b",
          800: "#021747",
          900: "#010b24",
        },
        //cerulan
        cerulanBlue: {
          100: "#cee7f9",
          200: "#9dd0f3",
          300: "#6cb8ec",
          400: "#3ba1e6",
          500: "#0a89e0",
          600: "#086eb3",
          700: "#065286",
          800: "#04375a",
          900: "#021b2d",
        },
        //perano
        peranoBlue: {
          100: "#f0f7fd",
          200: "#e0effb",
          300: "#d1e8f8",
          400: "#c1e0f6",
          500: "#b2d8f4",
          600: "#8eadc3",
          700: "#6b8292",
          800: "#475662",
          900: "#242b31",
        },
        //malibu
        malibuBlue: {
          100: "#dff4fd",
          200: "#c0e9fb",
          300: "#a0dffa",
          400: "#81d4f8",
          500: "#61c9f6",
          600: "#4ea1c5",
          700: "#3a7994",
          800: "#275062",
          900: "#132831",
        },
      }
    : {
        //grey color
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        //primary color
        primary: {
          100: "#010b24",
          200: "#021747",
          300: "#02226b",
          400: "#032e8e",
          500: "#0439b2",
          600: "#3661c1",
          700: "#6888d1",
          800: "#9bb0e0",
          900: "#cdd7f0",
        },
        //cerulan
        cerulanBlue: {
          100: "#021b2d",
          200: "#04375a",
          300: "#065286",
          400: "#086eb3",
          500: "#0a89e0",
          600: "#3ba1e6",
          700: "#6cb8ec",
          800: "#9dd0f3",
          900: "#cee7f9",
        },
        //perano
        peranoBlue: {
          100: "#242b31",
          200: "#475662",
          300: "#6b8292",
          400: "#8eadc3",
          500: "#b2d8f4",
          600: "#c1e0f6",
          700: "#d1e8f8",
          800: "#e0effb",
          900: "#f0f7fd",
        },
        //malibu
        malibuBlue: {
          100: "#132831",
          200: "#275062",
          300: "#3a7994",
          400: "#4ea1c5",
          500: "#61c9f6",
          600: "#81d4f8",
          700: "#a0dffa",
          800: "#c0e9fb",
          900: "#dff4fd",
        },
      }),
});

//mui theme settings
export const themeSettings = (mode: PaletteMode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.malibuBlue[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              //default: colors.primary[500],
              default: "#fcfcfc",
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.malibuBlue[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamliy: defaultFont,
      allVariants: {
        fontFamily: defaultFont,
      },
      fontSize: 12,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 16,
      },
      h6: {
        fontSize: 14,
      },
    },
  };
};

// context for the color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode: { toggleColorMode: () => void } = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  /*  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); 
  theme.components = Object.assign({}, AppBar(theme)) */
  const theme = useMemo(() => {
    const theme = createTheme(themeSettings(mode));
    theme.components = Object.assign({}, AppBar(theme) as Components);

    return theme;
  }, [mode]);

  return [theme, colorMode];
};
