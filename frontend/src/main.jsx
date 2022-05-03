import React from "react";
import ReactDOM from "react-dom";
import { Reset } from "styled-reset";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { CtxProvider } from "./context/Ctx";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CtxProvider>
      <Reset />
      <GlobalStyle />

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CtxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
