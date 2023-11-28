import { Alert } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";

export interface NoteProps {
  text: string;
}

export function Note({ text }: NoteProps) {
  return (
    <Alert variant="light" color="blue" title="Take Note" icon={<IconPencil />}>
      {text}
    </Alert>
  );
}
