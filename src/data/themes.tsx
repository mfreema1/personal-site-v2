import { CodeHighlightTabs } from "@mantine/code-highlight";
import {
  MantineThemeOverride,
  createTheme,
  mergeThemeOverrides,
  rem,
} from "@mantine/core";

export type TTheme = "light" | "dark";
export type TColorScheme = "atom" | "panda" | "tokyo";

export const colorSchemes: TColorScheme[] = ["atom", "panda", "tokyo"];

type TThemeMapping = {
  [key in TTheme]: {
    [key in TColorScheme]: {
      color: string;
      background: string;
      comment: string;
      keyword: string;
      tag: string;
      literal: string;
      string: string;
      variable: string;
      class: string;
    };
  };
};

// See packages/@mantine/code-highlight/src/CodeHighlight.theme.module.css
const data: TThemeMapping = {
  light: {
    atom: {
      color: "#383a42",
      background: "#fafafa",
      comment: "#a0a1a7",
      keyword: "#a626a4",
      tag: "#e45649",
      literal: "#0184bb",
      string: "#50a14f",
      variable: "#986801",
      class: "#c18401",
    },
    panda: {
      color: "#2a2c2d",
      background: "#e6e6e6",
      comment: "#676b79",
      keyword: "#d92792",
      tag: "#c56200",
      literal: "#7641bb",
      string: "#0d7d6c",
      variable: "#7641bb",
      class: "#0d7d6c",
    },
    tokyo: {
      color: "#565a6e",
      background: "#d5d6db",
      comment: "#9699a3",
      keyword: "#0f4b6e",
      tag: "#166775",
      literal: "#965027",
      string: "#485e30",
      variable: "#965027",
      class: "#0f4b6e",
    },
  },
  dark: {
    atom: {
      color: "#abb2bf",
      background: "#282c34",
      comment: "#5c6370",
      keyword: "#c678dd",
      tag: "#e06c75",
      literal: "#56b6c2",
      string: "#98c379",
      variable: "#d19a66",
      class: "#e6c07b",
    },
    panda: {
      color: "#e6e6e6",
      background: "#2a2c2d",
      comment: "#bbbbbb",
      keyword: "#ff75b5",
      tag: "#ff4b82",
      literal: "#ffb86c",
      string: "#19f9d8",
      variable: "#ffb86c",
      class: "#19f9d8",
    },
    tokyo: {
      color: "#9aa5ce",
      background: "#1a1b26",
      comment: "#565f89",
      keyword: "#7dcfff",
      tag: "#2ac3de",
      literal: "#ff9e64",
      string: "#9ece6a",
      variable: "#ff9e64",
      class: "#7dcfff",
    },
  },
};

type TColorSchemeMapping = {
  [key in TColorScheme]: MantineThemeOverride;
};
type TThemes = {
  [Theme in keyof TThemeMapping]: {
    [ColorScheme in keyof TThemeMapping[Theme]]: MantineThemeOverride;
  };
};

export const base = createTheme({
  fontFamily: "Merriweather, serif",
  fontFamilyMonospace: "Roboto Mono, monospace",
  headings: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",

    sizes: {
      h1: { fontWeight: "900", fontSize: rem(40) },
      h2: { fontSize: rem(36) },
    },
  },
});

export const themes = {} as TThemes;
(Object.keys(data) as TTheme[]).forEach((theme) => {
  themes[theme] = {} as TColorSchemeMapping;

  (Object.keys(data[theme]) as TColorScheme[]).forEach((colorScheme) => {
    themes[theme][colorScheme] = mergeThemeOverrides(base, {
      components: {
        CodeHighlightTabs: CodeHighlightTabs.extend({
          vars: () => {
            const values = data[theme][colorScheme];

            return {
              root: {
                "--_color": values.color,
                "--_background": values.background,
                "--code-comment-color": values.comment,
                "--code-keyword-color": values.keyword,
                "--code-tag-color": values.tag,
                "--code-literal-color": values.literal,
                "--code-string-color": values.string,
                "--code-variable-color": values.variable,
                "--code-class-color": values.class,
              },
            };
          },
        }),
      },
    });
  });
});
