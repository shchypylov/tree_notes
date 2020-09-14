import React, { FunctionComponent } from "react";
import { Category } from "./Category";
import { SCategories } from "./styled";

const categories = [
  {
    id: 1,
    created: Date(),
    title: "Thoughts",
    description: "Notes about this topic",
  },
  {
    id: 2,
    created: Date(),
    title: "Important",
    description: "Notes about this topic",
  },
  {
    id: 3,
    created: Date(),
    title: "To do",
    description: "Notes about this topic",
  },
];

const Categories: FunctionComponent = () => {
  return (
    <SCategories>
      {categories.map(category => {
        return (
          <Category
            key={category.id}
            id={category.id}
            title={category.title}
            description={category.description}
          />
        );
      })}
    </SCategories>
  );
};

export { Categories };
