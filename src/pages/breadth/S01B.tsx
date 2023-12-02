import { Title, Stack, Text, Code } from "@mantine/core";
import { Quote } from "../../components/Quote";
import { Note } from "../../components/Note";
import { ProConTable } from "../../components/ProConTable";
import { JavaSplit } from "../../components/JavaSplit";
import { Term } from "../../components/Term";
import { Section } from "../../components/Section";
import { Page } from "../../components/Page";

export function S01B() {
  return (
    <>
      <Page path="/breadth/S01B">
        <Stack gap="xs">
          <Title order={1}>
            <Text span inherit c="blue">
              Object-Oriented Design Patterns
            </Text>
          </Title>
          <Quote
            text="To understand is to perceive patterns."
            author="Isaiah Berlin"
          />
          <Text c="dimmed" fs="italic">
            S01B, Mark Freeman
          </Text>
        </Stack>

        <Text>
          When it comes to writing software, oftentimes, the quality and
          repeatability of what we are writing does not matter. If a project is
          confined to a certain size or shelf life, the repercussions of poorly
          standardized code rarely catch up enough to significantly impact the
          project.
        </Text>

        <Text>
          Conversely, there is not much harm in applying tried-and-true class
          design practices to even small object-oriented codebases — barring any
          premature abstraction or extreme circumstances. As is always the case
          in engineering, the choice is a tradeoff that requires proper
          engineering judgement.
        </Text>

        <ProConTable
          pros={[
            <Text>
              <Text span fw={700}>
                Less Thinking:{" "}
              </Text>
              If you recognize a certain pattern, you get an immediate solution.
            </Text>,
            <Text>
              <Text span fw={700}>
                More Commonality:{" "}
              </Text>
              If you name a class <Code>FooFactory</Code>, teammates can tell
              what it does from the name.
            </Text>,
            <Text>
              <Text span fw={700}>
                Good Practice:{" "}
              </Text>
              Patterns generally provide a decoupled and well-structured
              solution to a given problem.
            </Text>,
          ]}
          cons={[
            <Text>
              <Text span fw={700}>
                Required Knowledge:{" "}
              </Text>
              If a teammate writes a pattern you do not know, there is no shared
              knowledge benefit.
            </Text>,
            <Text>
              <Text span fw={700}>
                Over-Engineering:{" "}
              </Text>
              For small projects, heavy use of design patterns can be considered
              over-engineering.
            </Text>,
            <Text>
              <Text span fw={700}>
                Over-Abstraction:{" "}
              </Text>
              Design patterns commonly work via abstraction, which is only good
              when chosen tastefully.
            </Text>,
          ]}
        />

        <Note
          inner={
            <Text>
              Design patterns can commonly be applied at multiple levels or in
              slightly different situations — for example, some are vastly more
              common or look different in stateless / stateful systems. The
              presented patterns are just one variation. Some situations may
              call for a minor twist on what you see here, but it is arguably
              still the same pattern.
            </Text>
          }
          color={"yellow"}
        />

        <Section
          title={
            <Title order={2} c="blue">
              Factory
            </Title>
          }
          components={[
            <Text>
              The essence of <Term id="factory" text="factory" /> is to take the
              logic of creating an object and give it to another object. This
              can appear in many ways — a factory method or class, concrete or
              abstract return types, etc. As you might suspect, a concrete
              factory method is simpler, but an abstract factory class is more
              flexible. Let's take a look at how we could apply a concrete
              factory class.
            </Text>,
            <JavaSplit
              left={
                <Text>
                  Here, we see a class that's doing something a bit odd — work
                  in the constructor. Generally, we want a simple assignment in
                  the constructor — anything more complicated than that should
                  be scrutinized.
                </Text>
              }
              code={`
              public class Foo {

                  private final Frob frob;
          
                  public Foo(Bar bar) {
                     this.frob = frob(bar);
                  }
          
                  private static Frob frob(Bar bar) {
                     // Pretend this does something.
                  }
              }
            `}
            />,
            <JavaSplit
              left={
                <Text>
                  And here, <Code>FooFactory</Code> has become a concrete
                  factory for <Code>Foo</Code>. Note that the <Code>frob</Code>{" "}
                  logic has been extracted into the factory and that the{" "}
                  <Code>Foo</Code> class is still concrete. Anyone who can
                  construct a <Code>Frob</Code> instance work with{" "}
                  <Code>Foo</Code>, and we have much more flexibility in how we
                  construct <Code>Foo</Code> now.
                </Text>
              }
              code={`
                public class FooFactory {

                    public static Foo createFoo(Bar bar) {
                        return new Foo(frob(bar));
                    }
                
                    public class Foo {
                
                        private final Frob frob;
                            
                        private Foo(Frob frob) {
                            this.frob = frob;
                        }
                    }
                }
              `}
            />,
          ]}
        />

        <Section
          title={
            <Title order={2} c="blue">
              Builder
            </Title>
          }
          components={[
            <Text>
              Constructors are nice, but often not flexible enough for building
              complex structures. If we ask a business for an ice cream cone,
              they probably have an idea for what a default ice cream cone looks
              like — they may ask for a flavor, but will probably leave it plain
              unless you ask for toppings.
            </Text>,
          ]}
        />
      </Page>
    </>
  );
}
