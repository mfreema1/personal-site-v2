import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { MantineProvider, rem, createTheme } from "@mantine/core";
const theme = createTheme({
  fontFamily: "Merriweather, serif",
  fontFamilyMonospace: "Roboto Mono, monospace",
  headings: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",

    sizes: {
      h1: { fontWeight: "900", fontSize: rem(48) },
      h2: { fontSize: rem(40) },
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
