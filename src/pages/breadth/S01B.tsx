import { Accordion, Code, Stack, Text, Title } from "@mantine/core";
import { JavaSingle } from "../../components/JavaSingle";
import { JavaSplit } from "../../components/JavaSplit";
import { Note } from "../../components/Note";
import { Page } from "../../components/Page";
import { ProConTable } from "../../components/ProConTable";
import { Quote } from "../../components/Quote";
import { Section } from "../../components/Section";
import { Term } from "../../components/Term";
import { Txt } from "../../components/Text";

export function S01B() {
  return (
    <>
      <Page path="/breadth/S01B">
        <Stack gap="sm">
          <Title order={1}>
            <Text span inherit c="blue">
              Object-Oriented Design Patterns
            </Text>
          </Title>
          <Quote
            text="To understand is to perceive patterns."
            author="Isaiah Berlin"
          />
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
          <Txt s="san" fz="xs">
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
              object. This can appear in many ways. A factory can appear as a
              method of the class being constructed or as a separate class
              entirely. It also can commonly have either concrete or abstract
              return types. Let's take a look at a simple factory method:
            </Txt>,
            <JavaSplit
              left={
                <Txt s="ser" fz="sm">
                  Here is a class that's doing work in the constructor. Ideally,
                  its constructor would just be doing simple assignment, like{" "}
                  <Code>this.frob = frob;</Code>. Anything more complicated than
                  that should generally be scrutinized.
                </Txt>
              }
              code={`
                public class Foo {

                    private final Frob frob;
            
                    public Foo(Bar bar) {
                        this.frob = frob(bar);
                    }
            
                    private static Frob frob(Bar bar) {
                      // ...
                    }
                }`}
            />,
            <JavaSplit
              left={
                <Txt s="ser" fz="sm">
                  Here, <Code>create</Code> has become a factory method for{" "}
                  <Code>Foo</Code>. Note that the <Code>frob</Code> logic has
                  been extracted into the factory. Construction of the{" "}
                  <Code>Frob</Code> instance is now decoupled from the{" "}
                  <Code>Foo</Code> constructor, so we get a bit more flexibility
                  in how we make a <Code>Foo</Code>.
                </Txt>
              }
              code={`
                    public class Foo {

                        private final Frob frob;

                        private Foo(Frob frob) {
                            this.frob = frob;
                        }

                        public static Foo create(Bar bar) {
                            return new Foo(frob(bar));
                        }

                        private static Frob frob(Bar bar) {
                          // ...
                        }
                    }`}
            />,
          ]}
        />

        <Accordion>
          <Accordion.Item key={"factory method"} value={"factory method"}>
            <Accordion.Control>
              <Txt s="san">Factory Method</Txt>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <Txt s="ser" fz="sm">
                  This is the exact approach given above. Note that we keep
                  everything in 1 class. It is just broken out into a separate{" "}
                  <Code>static</Code> method.
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
          <Accordion.Item key={"factory class"} value={"factory class"}>
            <Accordion.Control>
              <Txt s="san">Factory Class</Txt>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <Txt s="ser" fz="sm">
                  In this approach, we move the factory out to a separate class.
                  Sometimes, the class being constructed becomes an inner class
                  of the factory with a <Code>private</Code> constructor. This
                  keeps the relation between the factory and the constructed
                  class clear. Other times, it is moved out of the factory
                  entirely.
                </Txt>

                <Txt s="ser" fz="sm">
                  The bottom line is that the constructed class often has its
                  constructor guarded such that only the factory or other
                  classes within the same package (such as tests) can construct
                  it. The constructor is not available publicly.
                </Txt>

                <Txt s="ser" fz="sm">
                  Below, we've taken the <Code>private</Code> constructor
                  approach:
                </Txt>

                <JavaSingle
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
                />
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item key="abstract factory" value="abstract factory">
            <Accordion.Control>
              <Txt s="san">Abstract Factory Class</Txt>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <Txt s="ser" fz="sm">
                  Now, let's consider a case in which <Code>Foo</Code> is
                  abstract and we don't want callers to know the specific
                  subclass of <Code>Foo</Code> they're using. Clearly, we cannot
                  construct a <Code>Foo</Code> from <Code>Foo</Code>, as only
                  concrete classes can be instanced.
                </Txt>
                <Txt s="ser" fz="sm">
                  Instead, we can do it from an abstract factory{" "}
                  <Code>FooFactory</Code>.
                </Txt>
                <JavaSingle
                  code={`
                  public interface Foo {
                    
                    // ...
                  }

                  public class Frob implements Foo {

                    // ...
                  }

                  public interface FooFactory {

                    Foo createFoo();
                  }

                  public class FrobFactory implements FooFactory {

                    @Override
                    public Foo createFoo() {
                      return new Frob();
                    }
                  }`}
                />
                <Txt s="ser" fz="sm">
                  This pattern is generally regarded as just the factory method
                  pattern, but it can help to think of this as just pulling up
                  our factory pattern one level of abstraction.
                </Txt>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            key="abstract factory factory"
            value="abstract factory factory"
          >
            <Accordion.Control>
              <Txt s="san">Abstract Factory Factory Class</Txt>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack>
                <Txt s="ser" fz="sm">
                  Factory can be layered. Let's say that we attempt to apply the
                  factory pattern to <Code>FooFactory</Code>. That would imply a{" "}
                  <Code>FooFactoryFactory</Code> which is also abstract: can be
                  layered in abstraction. Let's say that <Code>Foo</Code> is not
                  just an absraction, but a multi-layered abstraction. From
                  above, that would imply that <Code>Frob</Code> is also
                  abstract and has the factory pattern applied to it. Let's see
                  just that step first:
                </Txt>

                <JavaSingle
                  code={`
                  public interface Foo {
                    // ...
                  }

                  public interface FooFactory {

                    Foo createFoo();
                  } 

                  public interface FooFactoryFactory {
                    
                    FooFactory createFooFactory();
                  }
                  `}
                />

                <Txt s="ser" fz="sm">
                  As you might suspect, this pattern can be applied again and
                  again. It's mostly a function of how complex your construction
                  requirements are and how much abstraction you are willing to
                  tolerate. Ideally, you should pick the least abstract form of
                  factory you can.
                </Txt>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Page>
    </>
  );
}
