import React from "react";
import * as CH from "@chakra-ui/react";
import * as D from "duck";
import _ from "lodash";

const AddNewForm: React.FC<{
  setItems: D.SetItems;
}> = ({ setItems }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = React.useState<string>("");
  const [validationError, setValidationError] = React.useState<string | null>(
    null
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue) {
      setItems((prev) => [
        ...prev,
        {
          id: _.uniqueId(),
          name: inputValue,
          isCompleted: false,
        },
      ]);

      setInputValue("");
      inputRef.current?.focus();
      return;
    }

    if (!validationError) {
      setValidationError("Can't be blank.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    if (validationError) {
      setValidationError(null);
    }
  };

  return (
    <CH.Box
      as="form"
      display="flex"
      gap={2}
      alignItems="flex-start"
      onSubmit={handleSubmit}
    >
      <CH.FormControl isInvalid={!!validationError}>
        <CH.FormLabel>Title</CH.FormLabel>
        <CH.Input
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
        />
        <CH.FormErrorMessage>{validationError}</CH.FormErrorMessage>
      </CH.FormControl>
      <CH.Button colorScheme="blue" type="submit" mt={8}>
        Add
      </CH.Button>
    </CH.Box>
  );
};

export default AddNewForm;
