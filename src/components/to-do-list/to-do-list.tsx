import React from "react";
import * as CH from "@chakra-ui/react";
import * as D from "duck";
import * as LC from "./components";

const ToDoList: React.FC<{ items: D.ToDoList; setItems: D.SetItems }> = ({
  items,
  setItems,
}) => {
  const handleDelete: D.HandleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheck: D.HandleCheck = (id, value) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted: value,
          };
        }

        return item;
      })
    );
  };

  const handleEdit: D.HandleEdit = (id, value) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name: value,
          };
        }

        return item;
      })
    );
  };

  return (
    <CH.List width="500px" display="flex" flexDirection="column" gap={4}>
      {items.map((item) => (
        <LC.ToDoItem
          key={item.id}
          data={item}
          onDelete={handleDelete}
          onCheck={handleCheck}
          onEdit={handleEdit}
        />
      ))}
    </CH.List>
  );
};

export default ToDoList;
