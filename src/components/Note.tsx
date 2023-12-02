import { Alert, rem } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import { Txt } from "./Text";

export type Color = "b" | "y";

export interface NoteProps {
  c?: Color;
  children: React.ReactNode;
}

export function Note({ c: color = "b", children }: NoteProps) {
  return (
    <Alert
      variant="light"
      p={rem(16)}
      pr={rem(32)}
      pb={rem(32)}
      color={getColor(color)}
      title={<Txt s="san">Take Note</Txt>}
      icon={<IconPencil />}
    >
      {children}
    </Alert>
  );
}

const getColor = (color: Color) => {
  switch (color) {
    case "b":
      return "blue";
    case "y":
      return "yellow";
  }
};
