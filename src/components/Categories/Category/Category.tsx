import React, { FunctionComponent } from "react";
import { SCategory } from "./styled";

type CategoryProps = {
  title: string;
  description: string;
  key: number;
  id: number;
};

const Category: FunctionComponent<CategoryProps> = ({
  id,
  title,
  description,
}) => (
  <SCategory to={`/${id}/notes`}>
    <div className="category-title">{title}</div>
    <div className="category-description">{description}</div>
  </SCategory>
);

export { Category };
