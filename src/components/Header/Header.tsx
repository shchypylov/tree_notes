import React, { FunctionComponent } from "react";

import Button from "../Button/Button";

import pencil from "../../assets/icons/pencil.svg";

import { SHeader, SMenu, SMenuItem } from "./styled";

const Header: FunctionComponent = () => (
  <SHeader>
    <img src={pencil} alt="pencil icon" />
    <SMenu>
      <SMenuItem>Home</SMenuItem>
      <SMenuItem>Profile</SMenuItem>
      <Button type="primary">Create</Button>
    </SMenu>
  </SHeader>
);

//todo: add fonts https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni

export default Header;
