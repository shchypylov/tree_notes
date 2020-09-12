import React from "react";

import { Header } from "src/components/Header";
import { Notes } from "src/components/Notes";
import { SApp } from "./styled";

const App: React.FC = () => (
  <SApp>
    <Header />
    <Notes />
  </SApp>
);

export { App };
