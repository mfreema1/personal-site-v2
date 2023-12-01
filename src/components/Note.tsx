import { Alert } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";

export interface NoteProps {
  inner: React.ReactElement;
  color: string;
}

export function Note({ inner, color }: NoteProps) {
  return (
    <Alert
      variant="light"
      color={color}
      title="Take Note"
      icon={<IconPencil />}
    >
      {inner}
    </Alert>
  );
}
