import { CodeHighlightTabs } from "@mantine/code-highlight";
import { MantineProvider, useComputedColorScheme } from "@mantine/core";
import { DiJava } from "react-icons/di";
import { TColorScheme, themes } from "../../data/themes";

export interface JavaFile {
  name: string;
  code: string;
}

export interface JavaProps {
  files: JavaFile | JavaFile[];
  colorScheme: TColorScheme;
}

const defaults = {
  language: "java",
  icon: <DiJava size={24} />,
};

export function Java({ files, colorScheme }: JavaProps) {
  const theme = useComputedColorScheme("light");

  const filesArr = (Array.isArray(files) ? files : [files]).map((f) => ({
    ...defaults,
    fileName: f.name,
    code: f.code,
  }));

  return (
    <MantineProvider theme={themes[theme][colorScheme]}>
      <CodeHighlightTabs code={filesArr} />
    </MantineProvider>
  );
}
