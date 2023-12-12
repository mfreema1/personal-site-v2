import { Text } from "@mantine/core";

export interface TBodyTextProps {
  children: React.ReactNode;
}

export function TBodyText({ children }: TBodyTextProps) {
  return (
    <>
      <Text ff="Fira Sans, sans-serif" fz="sm">
        {children}
      </Text>
    </>
  );
}
