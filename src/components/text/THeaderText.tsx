import { Text } from "@mantine/core";

export interface THeaderTextProps {
  children: React.ReactNode;
}

export function THeaderText({ children }: THeaderTextProps) {
  return (
    <>
      <Text ff="Arvo, serif" fz="md">
        {children}
      </Text>
    </>
  );
}
