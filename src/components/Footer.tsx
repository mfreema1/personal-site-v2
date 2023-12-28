import { Avatar, Group } from "@mantine/core";
import { DetailText } from "./text/DetailText";

export function Footer() {
  return (
    <Group py="1rem" px="2rem" gap="xs">
      <Avatar size="sm" src="/favicon.ico" />
      <DetailText>Made with ❤️</DetailText>
    </Group>
  );
}
