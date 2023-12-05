import { CodeHighlightTabs } from "@mantine/code-highlight";
import { createTheme, mergeThemeOverrides, rem } from "@mantine/core";

const base = createTheme({
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

export const atomLight = mergeThemeOverrides(base, {
  components: {
    CodeHighlightTabs: CodeHighlightTabs.extend({
      vars: () => {
        return {
          code: {
            "--code-comment-color": "#a0a1a7",
            "--code-keyword-color": "#a626a4",
            "--code-tag-color": "#e45649",
            "--code-literal-color": "#0184bb",
            "--code-string-color": "#50a14f",
            "--code-variable-color": "#986801",
            "--code-class-color": "#c18401",
          },
        };
      },
    }),
  },
});

export const atomDark = mergeThemeOverrides(base, {
  components: {
    CodeHighlightTabs: CodeHighlightTabs.extend({
      vars: () => {
        return {
          code: {
            "--code-comment-color": "#5c6370",
            "--code-keyword-color": "#c678dd",
            "--code-tag-color": "#e06c75",
            "--code-literal-color": "#56b6c2",
            "--code-string-color": "#98c379",
            "--code-variable-color": "#d19a66",
            "--code-class-color": "#e6c07b",
          },
        };
      },
    }),
  },
});
