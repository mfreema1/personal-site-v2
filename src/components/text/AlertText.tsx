import { Text } from "@mantine/core";

export interface AlertTextProps {
  children: React.ReactNode;
}

export function AlertText({ children }: AlertTextProps) {
  return (
    <Text ff="Fira Sans, sans-serif" fz="sm">
      {children}
    </Text>
  );
}
