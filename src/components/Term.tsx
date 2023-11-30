import { HoverCard, Text } from "@mantine/core";

const data = new Map(
  Object.entries({
    factory: {
      title: "Factory",
      description:
        "An object-oriented pattern where the logic associated with creating an object is delegated away from its constructor.",
    },
  }),
);

export interface TermProps {
  id: string;
  text: string;
}

export function Term({ id, text }: TermProps) {
  const term = data.get(id)!;

  return (
    <HoverCard shadow={"md"} radius={"md"} withArrow>
      <HoverCard.Target>
        <Text span c={"blue"}>
          {text}
        </Text>
      </HoverCard.Target>
      <HoverCard.Dropdown w={"24rem"}>
        <Text>{term.description}</Text>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
