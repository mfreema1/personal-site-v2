import { Blockquote } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";
import { AsideText } from "./text/AsideText";
import { BodyText } from "./text/BodyText";

export interface QuoteProps {
  text: string;
  author: string;
}

export function Quote({ text, author }: QuoteProps) {
  const cite = <AsideText>{`- ${author}`}</AsideText>;

  return (
    <Blockquote
      color="blue"
      cite={cite}
      iconSize={32}
      icon={<IconQuote size={24} />}
    >
      <BodyText>{`"${text}"`}</BodyText>
    </Blockquote>
  );
}
