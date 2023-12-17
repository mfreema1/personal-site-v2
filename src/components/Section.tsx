import { Stack } from "@mantine/core";
import { TitleText } from "./text/TitleText";

export interface SectionProps {
  title: string;
  children: Iterable<React.ReactNode>;
}

export function Section({ title, children }: SectionProps) {
  const arr = [...children];

  const first = arr[0];
  const rest = arr.slice(1);

  return (
    <Stack gap="xl">
      <Stack gap="xs">
        <TitleText order={2} text={title} />
        {first}
      </Stack>
      {...rest}
    </Stack>
  );
}
