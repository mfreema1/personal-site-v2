import { Text } from "@mantine/core";

export interface BodyText {
  children: React.ReactNode;
}

export function BodyText({ children }: BodyText) {
  return (
    <>
      <Text ff="Fira Sans, sans-serif" fz="lg">
        {children}
      </Text>
    </>
  );
}
