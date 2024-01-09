import { Group, HoverCard } from "@mantine/core";
import { ReactElement, ReactNode } from "react";
import { TermDescriptionProps } from "./TermDescription";
import { TermPronunciationProps } from "./TermPronunciation";
import { TermTitleProps } from "./TermTitle";

export interface TermProps {
  title: ReactElement<TermTitleProps>;
  description: ReactElement<TermDescriptionProps>;
  pronunciation: ReactElement<TermPronunciationProps>;
  children: ReactNode;
}

export function Term({
  title,
  description,
  pronunciation,
  children,
}: TermProps) {
  return (
    <HoverCard shadow={"md"} radius={"md"} withArrow>
      <HoverCard.Target>{children}</HoverCard.Target>
      <HoverCard.Dropdown w={"24rem"}>
        <Group justify={"space-between"}>
          {title}
          {pronunciation}
        </Group>
        {description}
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
