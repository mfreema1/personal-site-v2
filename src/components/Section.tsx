import { Stack } from "@mantine/core";

export interface SectionProps {
  title: React.ReactNode;
  components: React.ReactNode[];
}

export function Section({ title, components }: SectionProps) {
  const first = components[0];
  const rest = components.slice(1);

  return (
    <Stack gap={"xl"}>
      <Stack gap={"xs"}>
        {title}
        {first}
      </Stack>

      {...rest}
    </Stack>
  );
}
