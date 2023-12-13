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
          <TitleText text="My Name is Mark" />
          <Space h="md" />
          <BodyText>I am a Software Engineer</BodyText>
          <AsideText>
            (Distributed Systems, Programming Languages, and OO Design)
          </AsideText>
        </Stack>
      </CenterPage>
    </>
  );
}
