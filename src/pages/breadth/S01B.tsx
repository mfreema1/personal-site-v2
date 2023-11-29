import { Title, Stack, Grid, Text } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import { Quote } from "../../components/Quote";
import { Note } from "../../components/Note";
import { ProConTable } from "../../components/ProConTable";

export function S01B() {
  // prettier-ignore
  const factoryBefore = 
`
public class Foo {

    private final Frob frob;

    // We are doing work in our constructor to transform Bar into Frob. 
    public Foo(Bar bar) {
        this.frob = frob(bar);
    }

    private static Frob frob(Bar bar) {
        // Pretend this does something.
    }
}
`;

  // prettier-ignore
  const factoryAfter = 
`
public class FooFactory {

    public static createFoo(Bar bar) {
        return new Foo(frob(bar));
    }

    public class Foo {

        private final Frob frob;
            
        private Foo(Frob frob) {
            this.frob = frob;
        }
    }
}
`;

  return (
    <>
      <Grid w="100%">
        <Grid.Col span={"auto"} />
        <Grid.Col span={10}>
          <Stack gap="xl">
            <Title order={1}>
              <Text span inherit c="blue">
                S01B: Object-Oriented Design Patterns
              </Text>
            </Title>

            <Quote
              text="To understand is to perceive patterns."
              author="Isaiah Berlin"
            />

            <Text>
              When it comes to writing software, oftentimes, the quality and
              repeatability of what we are writing does not matter. If a project
              is confined to a certain size or shelf life, the repercussions of
              poorly standardized code rarely catch up enough to significantly
              impact the project.
            </Text>

            <Text>
              Conversely, there is not much harm in applying tried-and-true
              class design practices to even small object-oriented codebases —
              barring any premature abstraction or extreme circumstances. As is
              always the case in engineering, the choice is a tradeoff that
              requires proper engineering judgement.
            </Text>

            <ProConTable
              pros={[
                "Less Thinking: If you recognize a certain pattern, you get an immediate solution.",
                "More Commonality: If you name a class FooFactory, teammates can tell what it does from the name.",
                "Good Practice: Patterns generally provide a decoupled and well-structured solution to a given problem.",
              ]}
              cons={[
                "Required Knowledge: If a teammate writes a pattern you do not know, there is no shared knowledge benefit.",
                "Over-Engineering: For small projects, heavy use of design patterns can be considered over-engineering.",
                "Over-Abstraction: Design patterns commonly work via abstraction, which is only good when chosen tastefully.",
              ]}
            />

            <Note text="Design patterns can commonly be applied at multiple levels or in slightly different situations — for example, some are vastly more common or look different in stateless / stateful systems. The presented patterns are just one variation. Some situations may call for a minor twist on what you see here, but it is arguably still the same pattern." />

            <Title order={2} c="blue">
              Factory
            </Title>

            <CodeHighlight
              code={factoryBefore}
              language="java"
              withCopyButton={false}
            />
            <CodeHighlight
              code={factoryAfter}
              language="java"
              withCopyButton={false}
            />
          </Stack>
        </Grid.Col>
        <Grid.Col span={"auto"} />
      </Grid>
    </>
  );
}
