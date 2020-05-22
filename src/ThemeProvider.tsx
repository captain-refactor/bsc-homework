import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { PropsWithChildren } from "react";
import * as React from "react";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fc5f5f",
      contrastText: "#fefefe",
    },
    secondary: {
      main: "#067BC2",
      contrastText: "#fefefe",
    },
  },
});

export function ThemeProvider(props: PropsWithChildren<unknown>) {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}
