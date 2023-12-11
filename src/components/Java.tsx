import { CodeHighlightTabs } from "@mantine/code-highlight";
import { MantineProvider, useComputedColorScheme } from "@mantine/core";
import { DiJava } from "react-icons/di";
import { TColorScheme, themes } from "../data/themes";

export interface JavaProps {
  code: string;
  colorScheme: TColorScheme;
}

const defaults = {
  fileName: "Demo.java",
  language: "java",
  icon: <DiJava size={24} />,
};

export function Java({ code, colorScheme }: JavaProps) {
  const theme = useComputedColorScheme("light");

  return (
    <MantineProvider theme={themes[theme][colorScheme]}>
      <CodeHighlightTabs code={{ ...defaults, code }} />
    </MantineProvider>
  );
}
