import React from "react";
import * as D from "duck";
import * as CH from "@chakra-ui/react";
import * as LC from "./components";

const ToDoItem: React.FC<{
  data: D.ToDoItem;
  onDelete: D.HandleDelete;
  onCheck: D.HandleCheck;
  onEdit: D.HandleEdit;
}> = ({ data, onEdit, ...rest }) => {
  const {
    isOpen: isEdit,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = CH.useDisclosure();

  return (
    <CH.ListItem
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={4}
      borderWidth={1}
      borderStyle="solid"
      borderColor="gray.300"
      borderRadius="md"
      p={2}
      pl={0}
    >
      {isEdit ? (
        <LC.Edit data={data} onEditClose={onEditClose} onEdit={onEdit} />
      ) : (
        <LC.Preview data={data} onEditOpen={onEditOpen} {...rest} />
      )}
    </CH.ListItem>
  );
};

export default ToDoItem;
