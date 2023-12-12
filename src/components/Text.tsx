import { MantineSize, MantineStyleProps, Text, TextProps } from "@mantine/core";
import { forwardRef } from "react";

export type FontFace = "ser" | "san";
export type FontSize = "sm" | "nm";

export interface TxtProps {
  s?: FontFace;
  b?: boolean;
  d?: boolean;
  i?: boolean;

  // Hoisted props.
  fz?: MantineSize;

  mantine?: MantineStyleProps & TextProps;
  children: React.ReactNode;
}

export const Txt = forwardRef<HTMLParagraphElement, TxtProps>((props, ref) => {
  const {
    s: style = "ser",
    b: bolded = false,
    d: dimmed = false,
    i: italic = false,

    mantine,
    children,
  } = props;

  const tempStyle: MantineStyleProps = {};

  switch (style) {
    case "san":
      tempStyle.ff = "Arvo, serif";
      break;
    case "ser":
      tempStyle.ff = "Fira Sans, sans-serif";
      break;
  }

  tempStyle.fw = getFontWeight(style, bolded);

  if (dimmed) {
    tempStyle.c = "dimmed";
  }

  if (italic) {
    tempStyle.fs = "italic";
  }

  const merged = { ...props, ...tempStyle, ...mantine };
  return (
    <Text ref={ref} {...merged}>
      {children}
    </Text>
  );
});

const getFontWeight = (style: FontFace, bolded: boolean) => {
  switch (bolded) {
    case true:
      return getBoldedFontWeight(style);
    case false:
      return getUnboldedFontWeight(style);
  }
};

const getBoldedFontWeight = (style: FontFace) => {
  switch (style) {
    case "ser":
      return 400;
    case "san":
      return 400;
  }
};

const getUnboldedFontWeight = (style: FontFace) => {
  switch (style) {
    case "ser":
      return 400;
    case "san":
      return 400;
  }
};
