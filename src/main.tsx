import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";

// Mantine stuff.
import "@mantine/core/styles.css";

import { MantineProvider, rem, createTheme } from "@mantine/core";
const theme = createTheme({
  fontFamily: "Roboto, sans-serif",
  fontFamilyMonospace: "Roboto Mono, monospace",
  // fontSizes: {
  //   xs: rem(14),
  //   sm: rem(16),
  //   md: rem(18),
  //   lg: rem(20),
  //   xl: rem(22)
  // },
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
