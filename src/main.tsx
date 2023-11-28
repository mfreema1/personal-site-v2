import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";

// Mantine stuff.
import "@mantine/core/styles.css";

import { MantineProvider, rem, createTheme } from "@mantine/core";
const theme = createTheme({
  fontFamily: "Roboto, sans-serif",
  fontFamilyMonospace: "Robot Mono, monospace",
  headings: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",

    sizes: {
      h1: { fontWeight: "900", fontSize: rem(48) },
      h2: { fontSize: rem(32) },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
