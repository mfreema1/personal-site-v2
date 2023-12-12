import { MantineStyleProps, Text } from "@mantine/core";

export interface AsideTextProps extends MantineStyleProps {
  children: React.ReactNode;
}

export function AsideText({ children, ...rest }: AsideTextProps) {
  return (
    <Text ff="Fira Sans, sans-serif" fz="md" {...rest}>
      {children}
    </Text>
  );
}
