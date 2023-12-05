import { Avatar, Flex, Group } from "@mantine/core";
import { Txt } from "./Text";

export function Footer() {
  return (
    <Flex>
      <Group py="1rem" px="2rem" justify="space-between">
        <Group gap={"xs"}>
          <Avatar size="sm" src="/favicon.ico" />
          <Txt s="san" d fz="xs">
            Mark Freeman
          </Txt>
        </Group>
      </Group>
    </Flex>
  );
}
