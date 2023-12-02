import { Title, Stack, Code, Accordion, Text } from "@mantine/core";
import { Quote } from "../../components/Quote";
import { Note } from "../../components/Note";
import { ProConTable } from "../../components/ProConTable";
import { JavaSplit } from "../../components/JavaSplit";
import { Term } from "../../components/Term";
import { Section } from "../../components/Section";
import { Page } from "../../components/Page";
import { JavaSingle } from "../../components/JavaSingle";
import { Txt } from "../../components/Text";

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
          <Txt s="san" d fz="sm">
            Mark Freeman
          </Txt>
        </Stack>

        <Txt s="ser" fz="lg">
          When it comes to writing software, oftentimes, the quality and
          repeatability of what we are writing does not matter. If a project is
          confined to a certain size or shelf life, the repercussions of poorly
          standardized code rarely catch up enough to significantly impact the
          project.
        </Txt>

        <Txt s="ser" fz="lg">
          Conversely, there is not much harm in applying tried-and-true class
          design practices to even small object-oriented codebases — barring any
          premature abstraction or extreme circumstances. As is always the case
          in engineering, the choice is a tradeoff that requires proper
          engineering judgement.
        </Txt>

        <ProConTable
          pros={[
            <Txt s="ser" fz="sm">
              <Txt s="san" b>
                Less Thinking
              </Txt>
              If you recognize a certain pattern, you get an immediate solution.
            </Txt>,
            <Txt s="ser" fz="sm">
              <Txt s="san" b>
                More Commonality
              </Txt>
              If you name a class <Code>FooFactory</Code>, teammates can tell
              what it does from the name.
            </Txt>,
            <Txt s="ser" fz="sm">
              <Txt s="san" b>
                Good Practice
              </Txt>
              Patterns generally provide a decoupled and well-structured
              solution to a given problem.
            </Txt>,
          ]}
          cons={[
            <Txt s="ser" fz="sm">
              <Txt s="san" b>
                Required Knowledge
              </Txt>
              If a teammate writes a pattern you do not know, there is no shared
              knowledge benefit.
            </Txt>,
            <Txt s="ser" fz="sm">
              <Txt s="san" b>
                Over-Engineering
              </Txt>
              For small projects, heavy use of design patterns can be considered
              over-engineering.
            </Txt>,
            <Txt s="ser" fz="sm">
              <Txt s="san" b>
                Over-Abstraction
              </Txt>
              Design patterns commonly work via abstraction, which is only good
              when chosen tastefully.
            </Txt>,
          ]}
        />

        <Note c="y">
          <Txt s="ser" fz="sm">
            Design patterns can commonly be applied at multiple levels or in
            slightly different situations — for example, some are vastly more
            common or look different in stateless / stateful systems. The
            presented patterns are just one variation. Some situations may call
            for a minor twist on what you see here, but it is arguably still the
            same pattern.
          </Txt>
        </Note>

        <Section
          title={
            <Title order={2} c="blue">
              Factory
            </Title>
          }
          components={[
            <Txt s="ser" fz="lg">
              The essence of <Term id="factory" text="factory" fz="lg" /> is to
              take the logic of creating an object and give it to another
              object. This can appear in many ways — a factory method or class,
              concrete or abstract return types, etc. As you might suspect, a
              concrete factory method is simpler, but an abstract factory class
              is more flexible. Let's take a look at how we could apply a
              concrete factory class.
            </Txt>,
            <JavaSplit
              left={
                <Txt s="ser" fz="sm">
                  Here, we see a class that's doing something a bit odd — work
                  in the constructor. Generally, we want a simple assignment in
                  the constructor — anything more complicated than that should
                  be scrutinized.
                </Txt>
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
                }`}
              quality="bad"
            />,
            <JavaSplit
              left={
                <Txt s="ser" fz="sm">
                  And here, <Code>FooFactory</Code> has become a concrete
                  factory for <Code>Foo</Code>. Note that the <Code>frob</Code>{" "}
                  logic has been extracted into the factory and that the{" "}
                  <Code>Foo</Code> class is still concrete. Anyone who can
                  construct a <Code>Frob</Code> instance work with{" "}
                  <Code>Foo</Code>, and we have much more flexibility in how we
                  construct <Code>Foo</Code> now.
                </Txt>
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
                }`}
              quality="good"
            />,
          ]}
        />

        <Accordion>
          <Accordion.Item key={"foo"} value={"foo"}>
            <Accordion.Control>
              <Txt s="san">Static Factory Method</Txt>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <Txt s="san">
                  Note that we keep everything in 1 class. It is just broken out
                  into a separate <Code>static</Code> method.
                </Txt>
                <JavaSingle
                  code={`
                    public class Foo {

                        private final Frob frob;

                        private Foo(Frob frob) {
                            this.frob = frob;
                        }

                        public static Foo create(Bar bar) {
                            return new Foo(frob(bar));
                        }
                    }`}
                />
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <Section
          title={
            <Title order={2} c="blue">
              Builder
            </Title>
          }
          components={[
            <Txt s="ser">
              Constructors are nice, but often not flexible enough for building
              complex structures. If we ask a business for an ice cream cone,
              they probably have an idea for what a default ice cream cone looks
              like — they may ask for a flavor, but will probably leave it plain
              unless you ask for toppings.
            </Txt>,
          ]}
        />
      </Page>
    </>
  );
}
