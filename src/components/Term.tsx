import { HoverCard, MantineSize, Title } from "@mantine/core";
import { Txt } from "./Text";

type TTerm = "factory";
type TTermMapping = {
  [T in TTerm]: { title: string; description: React.ReactNode };
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
  },
};

export interface TermProps {
  id: TTerm;
  text: string;

  fz?: MantineSize;
}

// Terms always appear in-content. Can we make it so that they inherit?
export function Term({ id, text, fz }: TermProps) {
  const termData = data[id];

  return (
    <HoverCard shadow={"md"} radius={"md"} withArrow>
      <HoverCard.Target>
        <Txt s="san" fz={fz} mantine={{ span: true, c: "blue" }}>
          {text}
        </Txt>
      </HoverCard.Target>
      <HoverCard.Dropdown w={"24rem"}>
        <Title order={3} c="blue">
          {termData.title}
        </Title>
        <Txt s={"san"}>{termData.description}</Txt>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
