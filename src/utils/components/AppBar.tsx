import { Theme, ThemeOptions } from "@mui/material";
import { tokens } from "../theme";

export default function AppBar(theme: Theme): ThemeOptions["components"] {
  const colors = tokens(theme.palette.mode);

  return {
    MuiAppBar: {
      styleOverrides: {
        /*  root: {
          background: `${theme.palette.background.default}`,
        }, */
        colorPrimary: {
          backgroundColor: `${theme.palette.background.default}`,
        },
      },
    },
  };
}
