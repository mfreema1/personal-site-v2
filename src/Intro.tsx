import { Stack, Text } from "@mantine/core";

export function Intro() {
  return (
    <>
      <Stack>
        <Text size="xl" ta="center">
          My name is Mark
        </Text>
        <Text size="md" ta="center">
          I am a Software Engineer
        </Text>
        <Text size="sm" ta="center">
          Welcome! This site is under construction right now, so check back
          soon.
        </Text>
      </Stack>
    </>
  );
}
