import { Text } from "@mantine/core";

export interface DetailTextProps {
  children: React.ReactNode;
}

export function DetailText({ children }: DetailTextProps) {
  return (
    <Text ff="Fira Sans, sans-serif" fz="xs">
      {children}
    </Text>
  );
}
