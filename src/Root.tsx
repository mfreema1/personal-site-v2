import { MantineProvider } from "@mantine/core";
import { useState } from "react";
import App from "./App";
import { atomLight } from "./data/themes";

export interface RootProps {
  children: React.ReactNode;
}

export function Root() {
  const [theme, setTheme] = useState(atomLight);
  return (
    <>
      <MantineProvider theme={theme}>
        <App setTheme={setTheme} />
      </MantineProvider>
    </>
  );
}
