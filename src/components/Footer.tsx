import { Avatar, Group } from "@mantine/core";
import { Txt } from "./Text";

export function Footer() {
  return (
    <Group py="1rem" px="2rem" gap="xs">
      <Avatar size="sm" src="/favicon.ico" />
      <Txt s="san" d fz="xs">
        Made with ❤️
      </Txt>
    </Group>
  );
}
