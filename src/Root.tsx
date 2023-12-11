import { MantineProvider } from "@mantine/core";
import App from "./App";
import { base } from "./data/themes";

export interface RootProps {
  children: React.ReactNode;
}

export function Root() {
  return (
    <>
      <MantineProvider theme={base}>
        <App />
      </MantineProvider>
    </>
  );
}
