import { CodeHighlightTabs } from "@mantine/code-highlight";
import { Skeleton, Transition } from "@mantine/core";
import prettier from "prettier";
import parserJava from "prettier-plugin-java";
import { useState } from "react";
import { DiJava } from "react-icons/di";

export interface JavaSingleProps {
  code: string;
}

export function JavaSingle({ code }: JavaSingleProps) {
  const [loaded, setLoaded] = useState(false);
  const [fadedOut, setFadedOut] = useState(false);
  const [formattedCode, setFormattedCode] = useState<string>("");

  prettier
    .format(code, { parser: "java", plugins: [parserJava], tabWidth: 2 })
    .then((s) => {
      setFormattedCode(s);
      setLoaded(true);
    });

  const codeHighlightProps = {
    fileName: "Demo.java",
    code: code,
    language: "java",
    icon: <DiJava size={24} />,
  };

  return (
    <>
      <Transition
        mounted={!loaded}
        transition={"fade"}
        onExited={() => setFadedOut(true)}
      >
        {(style) => (
          <Skeleton style={style}>
            <CodeHighlightTabs code={codeHighlightProps} />
          </Skeleton>
        )}
      </Transition>
      <Transition mounted={fadedOut} transition={"pop"}>
        {(style) => (
          <CodeHighlightTabs
            style={style}
            code={{ ...codeHighlightProps, code: formattedCode }}
          />
        )}
      </Transition>
    </>
  );
}
