import { Text, TextProps } from "@mantine/core";
import { forwardRef } from "react";

export interface BodyTextProps extends TextProps {
  children: React.ReactNode;
}

export const BodyText = forwardRef<HTMLParagraphElement, BodyTextProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <Text {...rest} ref={ref} ff="Fira Sans, sans-serif" fz="lg">
        {children}
      </Text>
    );
  },
);
