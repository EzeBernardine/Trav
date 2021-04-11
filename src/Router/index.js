import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../src/components/pages/home";
import { theme } from "../config/theme";
import { ThemeProvider } from "styled-components";

const Error = () => {
  return <p>404 page</p>;
};

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />

          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
