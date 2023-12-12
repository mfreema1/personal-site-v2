import { Title } from "@mantine/core";

export interface TitleTextProps {
  text: string;
}

export function TitleText({ text }: TitleTextProps) {
  return (
    <>
      <Title order={1} c="blue">
        {text}
      </Title>
    </>
  );
}
