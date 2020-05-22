import { PropsWithChildren } from "react";
import * as React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { I18nextProvider } from "react-i18next";
import { I18N } from "./i18n";
import { AppServiceProvider } from "./services/AppServiceProvider";

export function Providers(props: PropsWithChildren<unknown>) {
  return (
    <I18nextProvider i18n={I18N}>
      <AppServiceProvider>
        <ThemeProvider>{props.children}</ThemeProvider>
      </AppServiceProvider>
    </I18nextProvider>
  );
}
