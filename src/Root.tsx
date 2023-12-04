import { MantineProvider } from "@mantine/core";
import App from "./App";
import { useState } from "react";
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
