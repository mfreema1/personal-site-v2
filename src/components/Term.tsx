import { Group, HoverCard, Title } from "@mantine/core";
import { AsideText } from "./text/AsideText";
import { DetailText } from "./text/DetailText";

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
      <AsideText>
        An object-oriented pattern where the logic associated with creating an
        object is delegated away from its constructor.
      </AsideText>
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
          <DetailText>{termData.pronunciation}</DetailText>
        </Group>
        <AsideText>{termData.description}</AsideText>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
