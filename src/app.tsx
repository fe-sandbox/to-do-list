import React from "react";
import * as C from "components";
import * as CH from "@chakra-ui/react";
import * as D from "duck";

const App: React.FC = () => {
  const [items, setItems] = React.useState<D.ToDoList>([]);

  return (
    <CH.VStack height="100vh" p={8} spacing={4}>
      <C.AddNewForm setItems={setItems} />
      <C.ToDoList items={items} setItems={setItems} />
    </CH.VStack>
  );
};

export default App;
