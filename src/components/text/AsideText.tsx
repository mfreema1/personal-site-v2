import { MantineStyleProps, Text, TextProps } from "@mantine/core";

export interface AsideTextProps extends MantineStyleProps, TextProps {
  children: React.ReactNode;
}

export function AsideText({ children, ...rest }: AsideTextProps) {
  return (
    <Text ff="Fira Sans, sans-serif" fz="md" {...rest}>
      {children}
    </Text>
  );
}
