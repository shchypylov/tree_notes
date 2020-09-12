import React from "react";

import { Button } from "src/components/Button";

import pencil from "src/assets/icons/pencil.svg";

import { SHeader, SMenu, SMenuItem } from "./styled";

const Header: React.FC = () => (
  <SHeader>
    <img src={pencil} alt="pencil icon" />
    <SMenu>
      <SMenuItem>Home</SMenuItem>
      <SMenuItem>Profile</SMenuItem>
      <Button type="primary">Create</Button>
    </SMenu>
  </SHeader>
);

export { Header };
