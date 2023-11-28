import { Blockquote } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";

export interface QuoteProps {
  text: string;
  author: string;
}

export function Quote({ text, author }: QuoteProps) {
  return (
    <Blockquote color="blue" cite={`- ${author}`} icon={<IconQuote />}>
      {text}
    </Blockquote>
  );
}
