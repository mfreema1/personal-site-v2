import { Title } from "@mantine/core";

export interface TitleTextProps {
  order: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export function TitleText({ order, children }: TitleTextProps) {
  return (
    <>
      <Title order={order} c="blue" ff="Arvo, serif">
        {children}
      </Title>
    </>
  );
}
