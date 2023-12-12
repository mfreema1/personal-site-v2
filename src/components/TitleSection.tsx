import { Stack } from "@mantine/core";
import { Quote } from "./Quote";
import { TitleText } from "./text/TitleText";

export interface TitleSectionProps {
  tText: string;
  qtText: string;
  qtAuthor: string;
}

export function TitleSection({ tText, qtText, qtAuthor }: TitleSectionProps) {
  return (
    <>
      <Stack gap="sm">
        <TitleText text={tText} />
        <Quote text={qtText} author={qtAuthor} />
      </Stack>
    </>
  );
}
