import { useState } from "react";
import prettier from "prettier";
import parserJava from "prettier-plugin-java";
import { Skeleton, Transition } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";

export interface JavaProps {
  code: string;
}

export function Java({ code }: JavaProps) {
  const [loaded, setLoaded] = useState(false);
  const [fadedOut, setFadedOut] = useState(false);
  const [formattedCode, setFormattedCode] = useState<string>("");

  prettier
    .format(code, { parser: "java", plugins: [parserJava], tabWidth: 2 })
    .then((s) => {
      setFormattedCode(s);
      setLoaded(true);
    });

  return (
    <>
      <Transition
        mounted={!loaded}
        transition={"fade"}
        onExited={() => setFadedOut(true)}
      >
        {(style) => (
          <Skeleton style={style}>
            <CodeHighlight code={code} language="java" withCopyButton={false} />
          </Skeleton>
        )}
      </Transition>
      <Transition mounted={fadedOut} transition={"pop"}>
        {(style) => (
          <CodeHighlight
            style={style}
            code={formattedCode}
            language="java"
            withCopyButton={false}
          />
        )}
      </Transition>
    </>
  );
}
