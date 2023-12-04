import "@mantine/core/styles.css";

// This has to be loaded after the core styles.
import "@mantine/code-highlight/styles.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./Root.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
