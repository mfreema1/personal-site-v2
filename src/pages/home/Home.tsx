import { Avatar, Space, Stack } from "@mantine/core";
import { CenterPage } from "../../components/pages/CenterPage";
import { AsideText } from "../../components/text/AsideText";
import { BodyText } from "../../components/text/BodyText";
import { TitleText } from "../../components/text/TitleText";

export function Home() {
  return (
    <>
      <CenterPage>
        <Stack gap={0} align="center">
          <Avatar src="/favicon.ico" size={128} />
          <Space h="xl" />
          <TitleText order={1}>My Name is Mark</TitleText>
          <Space h="md" />
          <BodyText>I am a Software Engineer</BodyText>
          <AsideText>(Distributed Systems and Programming Languages)</AsideText>
        </Stack>
      </CenterPage>
    </>
  );
}
