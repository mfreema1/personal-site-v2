import { Alert } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";

export interface NoteProps {
  inner: React.ReactElement;
}

export function Note({ inner }: NoteProps) {
  return (
    <Alert variant="light" color="blue" title="Take Note" icon={<IconPencil />}>
      {inner}
    </Alert>
  );
}
