import React from "react";
import * as CH from "@chakra-ui/react";
import * as I from "react-icons/bi";
import * as D from "duck";

const Preview: React.FC<{
  data: D.ToDoItem;
  onDelete: D.HandleDelete;
  onCheck: D.HandleCheck;
  onEditOpen: () => void;
}> = ({ data, onDelete, onCheck, onEditOpen }) => {
  const handleDelete = () => onDelete(data.id);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheck(data.id, e.target.checked);
  };

  return (
    <>
      <CH.Text
        pl={2}
        textDecoration={data.isCompleted ? "line-through" : undefined}
      >
        {data.name}
      </CH.Text>
      <CH.HStack as="span" spacing={1} alignItems="center">
        <CH.Flex
          width="40px"
          height="40px"
          alignItems="center"
          justifyContent="center"
        >
          <CH.Checkbox onChange={handleCheck} isChecked={data.isCompleted} />
        </CH.Flex>
        <CH.IconButton
          aria-label="edit"
          icon={<CH.Icon as={I.BiEdit} />}
          variant="ghost"
          size="md"
          onClick={onEditOpen}
        />
        <CH.IconButton
          aria-label="delete"
          icon={<CH.Icon as={I.BiTrash} />}
          variant="ghost"
          size="md"
          onClick={handleDelete}
        />
      </CH.HStack>
    </>
  );
};

export default Preview;
