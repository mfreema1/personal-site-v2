import { Page } from "../../components/Page";
import { TitleSection } from "../../components/TitleSection";
import {
  PageCard,
  PageCardDescription,
  PageCardTag,
  PageCardTitle,
} from "../../components/pagecard";
import { TopPage } from "../../components/pages/TopPage";
import { BodyText } from "../../components/text/BodyText";

export function Breadth() {
  return (
    <>
      <TopPage>
        <Page path={"/breadth"}>
          <TitleSection
            tText="Breadth"
            qtText="The height of the pinnacle is determined by the breadth of the
              base."
            qtAuthor="Ralph Waldo Emerson"
          />

          <BodyText>
            In my experience, problems in Software Engineering tend to have a
            fairly simple solution, but what is simplest may not be what is most
            familiar to us. Unless we intend to treat every problem over our
            career as a nail, we need to get accustomed to tools other than a
            hammer.
          </BodyText>

          <BodyText>
            These pages will cover a broad variety of Software Engineering
            topics. The aim is to provide a birds-eye view of some tools and
            techniques that I have found useful. We will not dive terribly deep
            into each subject, but where possible, I will provide pointers or
            questions for further investigation on your own.
          </BodyText>

          <PageCard
            link="/breadth/S01B"
            title={
              <PageCardTitle>Object-Oriented Design Patterns</PageCardTitle>
            }
            description={
              <PageCardDescription>
                At most levels of software, it pays to know a bit about
                organizing code. Here, we'll explore factories, one of the most
                foundational patterns for building objects.
              </PageCardDescription>
            }
            tags={[
              <PageCardTag text="Java" />,
              <PageCardTag text="Class Design" />,
            ]}
          />

          <PageCard
            link="/breadth/S02B"
            title={<PageCardTitle>Class-Level Proxy Cutovers</PageCardTitle>}
            description={
              <PageCardDescription>
                Changing the wheels on a car is easy, so long as the car isn't
                on the highway while you do it. Here, we'll talk about how to do
                similar things safely and at scale.
              </PageCardDescription>
            }
            tags={[
              <PageCardTag text="Java" />,
              <PageCardTag text="Class Design" />,
            ]}
          />
        </Page>
      </TopPage>
    </>
  );
}
