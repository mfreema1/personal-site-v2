import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Mantine stuff.
import "@mantine/core/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";
const theme = createTheme({
  fontFamily: "Monaco, Courier, monospace",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
