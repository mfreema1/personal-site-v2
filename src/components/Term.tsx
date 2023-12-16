import { Group, HoverCard, Title } from "@mantine/core";
import { Txt } from "./Text";
import { AsideText } from "./text/AsideText";

type TTerm = "factory" | "proxy";
type TTermMapping = {
  [T in TTerm]: {
    title: string;
    description: React.ReactNode;
    pronunciation: string;
  };
};

const data: TTermMapping = {
  factory: {
    title: "Factory",
    description: (
      <Txt s="san">
        An object-oriented pattern where the logic associated with creating an
        object is delegated{" "}
        <Txt s="san" i mantine={{ span: true }}>
          away
        </Txt>{" "}
        from its constructor.
      </Txt>
    ),
    pronunciation: "/ˈfakt(ə)rē/",
  },
  proxy: {
    title: "Proxy",
    description: (
      <AsideText>
        An object-oriented pattern where one class wraps the logic of another
        while acting in its place.
      </AsideText>
    ),
    pronunciation: "/ˈpräksē/",
  },
};

export interface TermProps {
  id: TTerm;
  children: React.ReactNode;
}

// Terms always appear in-content. Can we make it so that they inherit?
export function Term({ id, children }: TermProps) {
  const termData = data[id];

  return (
    <HoverCard shadow={"md"} radius={"md"} withArrow>
      <HoverCard.Target>{children}</HoverCard.Target>
      <HoverCard.Dropdown w={"24rem"}>
        <Group justify={"space-between"}>
          <Title order={3} c={"blue"}>
            {termData.title}
          </Title>
          <Txt s="san" d fz="sm">
            {termData.pronunciation}
          </Txt>
        </Group>
        <Txt s={"san"}>{termData.description}</Txt>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
