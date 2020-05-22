import * as rd from "react-dom";
import * as React from "react";
import { Providers } from "./Providers";
import { MainPage } from "./pages/MainPage";
import 'mobx-react/batchingForReactDom'

let elementById = document.getElementById("app");
rd.render(
  <Providers>
    <MainPage />
  </Providers>,
  elementById
);
