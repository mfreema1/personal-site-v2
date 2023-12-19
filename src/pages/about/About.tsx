import { Accordion, Stack } from "@mantine/core";
import { Page } from "../../components/Page";
import { TopPage } from "../../components/pages/TopPage";
import { AsideText } from "../../components/text/AsideText";
import { BodyText } from "../../components/text/BodyText";
import { THeaderText } from "../../components/text/THeaderText";
import { TitleText } from "../../components/text/TitleText";

export function About() {
  return (
    <TopPage>
      <Page path="/breadth/S02B">
        <TitleText order={1}>A Bit About Me</TitleText>

        <BodyText>
          I'm a Software Engineer at Google. I do a lot of things, the most
          recent of which relates to programming language design. When I'm not
          writing stuff for work, I come write here instead.
        </BodyText>

        <BodyText>
          Without too much ceremony, I believe writing software should be
          approached like any art — making us the artists. We need the technique
          to produce complex works of software when needed, but the taste to
          know when a simpler solution is good enough. Anything past that point
          tends to be unnecessary complexity.
        </BodyText>

        <BodyText>
          We usually refer to this "taste" as engineering judgement. My goal in
          posting here is to help prospective engineers develop that judgement.
          With that in mind, my ideas may skip details or theory — keep to the
          main ideas.
        </BodyText>

        <Accordion>
          <Accordion.Item key={1} value={"1"}>
            <Accordion.Control>
              <THeaderText>"Why should I listen to you?"</THeaderText>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <AsideText>
                  I'm not saying you should. Information here is provided
                  without any warranty of correctness, nor does it represent any
                  opinion of my employer.
                </AsideText>

                <AsideText>
                  If you read something here and decide it's completely wrong,
                  that's great, so long as you have thought-out reasons for why.
                </AsideText>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item key={2} value={"2"}>
            <Accordion.Control>
              <THeaderText>"What do you write about?"</THeaderText>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <AsideText>
                  Whatever I think is interesting at the time. Oftentimes I'll
                  run into a neat problem at work and try to distill it down
                  into a basic idea.
                </AsideText>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item key={3} value={"3"}>
            <Accordion.Control>
              <THeaderText>"Why is everything in Java?"</THeaderText>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <AsideText>
                  It's just a language that I know fairly well. The language of
                  choice is not super meaningful — again, just focus on the main
                  ideas.
                </AsideText>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Page>
    </TopPage>
  );
}
