import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header } from "src/components/Header";
import { Categories } from "src/components/Categories";
import { Notes } from "src/components/Notes";

import { SApp, SBody } from "./styled";

const App: React.FC = () => (
  <BrowserRouter>
    <SApp>
      <Header />
      <SBody>
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route path="/:categoryId/notes" component={Notes} />
        </Switch>
      </SBody>
    </SApp>
  </BrowserRouter>
);

export { App };
