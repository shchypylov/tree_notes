import React, { ReactChildren } from "react";

import { colors } from "src/constants";
import { SButton } from "./styled";

interface IProps {
  type: string;
  children: ReactChildren | string;
}

const Button: React.FC<IProps> = ({ type, children }: IProps) => (
  <SButton background={colors[type]}>{children}</SButton>
);

export { Button };
