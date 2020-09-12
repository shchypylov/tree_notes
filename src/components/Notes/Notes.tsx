import React from "react";

const notes = [
  {
    id: 1,
    created: Date(),
    category: "Thoughts",
  },
  {
    id: 2,
    created: Date(),
    category: "Important",
  },
  {
    id: 3,
    created: Date(),
    category: "To do",
  },
];

const Notes = () => (
  <div>
    {notes.map(note => {
      return <div key={note.id}>{note.category}</div>;
    })}
  </div>
);

export { Notes };
