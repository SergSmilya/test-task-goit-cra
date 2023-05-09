import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/test-task-goit-cra">
    {/* <React.StrictMode> */}
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
