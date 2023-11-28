import { Badge } from "@mantine/core";

const data = new Map(
  Object.entries({
    java: { title: "Java", color: "pink" },
    "class-design": { title: "Class Design", color: "blue" },
  }),
);

export interface TopicProps {
  id: string;
}

export function Topic({ id }: TopicProps) {
  const topic = data.get(id)!;

  return (
    <>
      <Badge color={topic.color}>{topic.title}</Badge>
    </>
  );
}
