import { Group, HoverCard } from "@mantine/core";
import { ReactNode } from "react";
import { TermData, TermID, data } from "../../data/terms";

export interface TermProps {
  id: TermID;
  children: ReactNode;
}

export function Term({ id, children }: TermProps) {
  const datum: TermData = data.filter((datum) => datum.id === id)[0];

  return (
    <HoverCard shadow={"md"} radius={"md"} withArrow>
      <HoverCard.Target>{children}</HoverCard.Target>
      <HoverCard.Dropdown w={"24rem"}>
        <Group justify={"space-between"}>
          {datum.title}
          {datum.pronunciation}
        </Group>
        {datum.description}
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
