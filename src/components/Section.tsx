import { Stack, Title } from "@mantine/core";

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
        <Title order={2} c="blue">
          {title}
        </Title>
        {first}
      </Stack>
      {...rest}
    </Stack>
  );
}
