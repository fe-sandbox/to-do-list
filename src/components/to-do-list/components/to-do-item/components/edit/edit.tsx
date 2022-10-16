import React from "react";
import * as D from "duck";
import * as CH from "@chakra-ui/react";
import { BiCheck } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

const Edit: React.FC<{
  data: D.ToDoItem;
  onEditClose: () => void;
  onEdit: D.HandleEdit;
}> = ({ data, onEditClose, onEdit }) => {
  const [inputValue, setInputValue] = React.useState(data.name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    if (inputValue) {
      onEdit(data.id, inputValue);
      onEditClose();
    }
  };

  const onRefChange = React.useCallback((node: HTMLInputElement) => {
    if (node) {
      node.focus();
    }
  }, []);

  return (
    <CH.Flex justifyContent="space-between" gap={2} flexGrow={1}>
      <CH.Input
        ref={onRefChange}
        border="none"
        pl={2}
        value={inputValue}
        onChange={handleChange}
        isInvalid={!inputValue}
        placeholder="Title"
      />
      <CH.HStack spacing={2}>
        <CH.IconButton
          aria-label="save"
          colorScheme="green"
          icon={<CH.Icon as={BiCheck} />}
          onClick={handleSave}
        />
        <CH.IconButton
          aria-label="save"
          colorScheme="red"
          icon={<CH.Icon as={MdOutlineCancel} />}
          onClick={onEditClose}
        />
      </CH.HStack>
    </CH.Flex>
  );
};

export default Edit;
