import React from "react";
import App from "./app";
import * as CH from "@chakra-ui/react";
import * as D from "duck";

const AppProvider = () => {
  return (
    <CH.ChakraProvider theme={D.THEME}>
      <App />
    </CH.ChakraProvider>
  );
};

export default AppProvider;
