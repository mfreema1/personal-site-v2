import { Alert, Text, rem } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import { AlertText } from "./text/AlertText";

export interface NoteProps {
  children: React.ReactNode;
}

const styles = {
  p: rem(16),
  pr: rem(32),
  pb: rem(32),
  variant: "light",
  icon: <IconPencil />,
};

export function Note({ children }: NoteProps) {
  return (
    <Alert
      title={
        <Text ff="Arvo, serif" fz="md">
          Take Note
        </Text>
      }
      {...styles}
    >
      <AlertText>{children}</AlertText>
    </Alert>
  );
}
