import { Blockquote } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";
import { Txt } from "./Text";

export interface QuoteProps {
  text: string;
  author: string;
}

export function Quote({ text, author }: QuoteProps) {
  const cite = <Txt s="ser" fz="sm">{`- ${author}`}</Txt>;

  return (
    <Blockquote color="blue" cite={cite} icon={<IconQuote />}>
      <Txt s="ser" i fz="xl">
        {`"${text}"`}
      </Txt>
    </Blockquote>
  );
}
