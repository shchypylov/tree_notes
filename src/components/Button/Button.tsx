import React, { FunctionComponent, ReactChildren } from "react";

import { colors } from "../../constants";
import { SButton } from "./styled";

interface IProps {
  type: string;
  children: ReactChildren | string;
}

const Button: FunctionComponent<IProps> = ({ type, children }: IProps) => (
  <SButton background={colors[type]}>{children}</SButton>
);

export default Button;
