import { useState } from "react";
import prettier from "prettier";
import parserJava from "prettier-plugin-java";
import { Skeleton, Transition } from "@mantine/core";
import { CodeHighlightTabs } from "@mantine/code-highlight";
import { DiJava } from "react-icons/di";

type Quality = "good" | "bad";

export interface JavaSingleProps {
  code: string;
  quality?: Quality;
}

export function JavaSingle({ code, quality }: JavaSingleProps) {
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
            bg={getBackground(quality)}
            style={style}
            code={{ ...codeHighlightProps, code: formattedCode }}
          />
        )}
      </Transition>
    </>
  );
}

function getBackground(quality?: Quality) {
  switch (quality) {
    case "good":
      return "var(--mantine-color-green-0)";
    case "bad":
      return "var(--mantine-color-red-0)";
    default:
      return "var(--mantine-color-gray-0)";
  }
}
