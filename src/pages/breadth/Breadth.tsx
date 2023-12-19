import { Page } from "../../components/Page";
import { PageTable } from "../../components/PageTable";
import { TitleSection } from "../../components/TitleSection";
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

          <PageTable
            rows={[
              {
                id: "S01B",
                title: "Object-Oriented Design Patterns",
                topicIds: ["java", "class-design"],
              },
              {
                id: "S02B",
                title: "Class-Level Proxy Cutovers",
                topicIds: ["java", "class-design"],
              },
            ]}
          />
        </Page>
      </TopPage>
    </>
  );
}
