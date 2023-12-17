import { Title } from "@mantine/core";

export interface TitleTextProps {
  text: string;
  order: 1 | 2 | 3 | 4 | 5 | 6;
}

export function TitleText({ text, order }: TitleTextProps) {
  return (
    <>
      <Title order={order} c="blue" ff="Arvo, serif">
        {text}
      </Title>
    </>
  );
}
