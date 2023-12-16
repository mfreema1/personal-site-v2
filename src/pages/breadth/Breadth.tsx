import { Text, Title } from "@mantine/core";
import { Page } from "../../components/Page";
import { PageTable } from "../../components/PageTable";
import { Quote } from "../../components/Quote";
import { TopPage } from "../../components/pages/TopPage";

export function Breadth() {
  return (
    <>
      <TopPage>
        <Page path={"/breadth"}>
          <Title order={1}>
            <Text span inherit c="blue">
              Breadth
            </Text>
          </Title>
          <Quote
            text="The height of the pinnacle is determined by the breadth of the
              base."
            author="Ralph Waldo Emerson"
          />

          <Text>
            In my experience, problems in Software Engineering tend to have a
            fairly simple solution, but what is simplest may not be what is most
            familiar to us. Unless we intend to treat every problem over our
            career as a nail, we need to get accustomed to tools other than a
            hammer.
          </Text>

          <Text>
            These pages will cover a broad variety of Software Engineering
            topics. The aim is to provide a birds-eye view of some tools and
            techniques that I have found useful. We will not dive terribly deep
            into each subject, but where possible, I will provide pointers or
            questions for further investigation on your own.
          </Text>

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
