import { Accordion, Code, Stack } from "@mantine/core";
import { Note } from "../../components/Note";
import { Page } from "../../components/Page";
import { ProConTable } from "../../components/ProConTable";
import { Section } from "../../components/Section";
import { Term } from "../../components/Term";
import { Java } from "../../components/code/Java";
import { JavaSplit } from "../../components/code/JavaSplit";

import abstractFactoryClass from "../../assets/examples/S01B/AbstractFactoryClass.java?raw";
import abstractFactoryFactoryClass from "../../assets/examples/S01B/AbstractFactoryFactoryClass.java?raw";
import factoryClass from "../../assets/examples/S01B/FactoryClass.java?raw";
import factoryMethod from "../../assets/examples/S01B/FactoryMethod.java?raw";
import workInConstructor from "../../assets/examples/S01B/WorkInConstructor.java?raw";
import { TitleSection } from "../../components/TitleSection";
import { TopPage } from "../../components/pages/TopPage";
import { AsideText } from "../../components/text/AsideText";
import { BodyText } from "../../components/text/BodyText";
import { TBodyText } from "../../components/text/TBodyText";
import { THeaderText } from "../../components/text/THeaderText";
import { TColorScheme } from "../../data/themes";

export interface S01BProps {
  colorScheme: TColorScheme;
}

export function S01B({ colorScheme }: S01BProps) {
  return (
    <>
      <TopPage>
        <Page path="/breadth/S01B">
          <TitleSection
            tText="Object-Oriented Design Patterns"
            qtText="To understand is to perceive patterns."
            qtAuthor="Isaiah Berlin"
          />

          <BodyText>
            When it comes to writing software, oftentimes, the quality and
            repeatability of what we are writing does not matter. If a project
            is confined to a certain size or shelf life, the repercussions of
            poorly standardized code rarely catch up enough to significantly
            impact the project.
          </BodyText>

          <BodyText>
            Conversely, there is not much harm in applying tried-and-true class
            design practices to even small object-oriented codebases — barring
            any premature abstraction or extreme circumstances. As is always the
            case in engineering, the choice is a tradeoff that requires proper
            engineering judgement.
          </BodyText>

          <ProConTable
            pros={[
              {
                header: "Less Thinking",
                content:
                  "If you recognize a certain pattern, you get an immediate solution.",
              },
              {
                header: "More Commonality",
                content: (
                  <TBodyText>
                    If you name a class <Code>FooFactory</Code>, teammates can
                    tell what it does from the name.
                  </TBodyText>
                ),
              },
              {
                header: "Good Practice",
                content:
                  "Patterns generally provide a decoupled and well-structured solution to a given problem.",
              },
            ]}
            cons={[
              {
                header: "Required Knowledge",
                content:
                  "If a teammate writes a pattern you do not know, there is no shared knowledge benefit.",
              },
              {
                header: "Over-Engineering",
                content:
                  "For small projects, heavy use of design patterns can be considered over-engineering.",
              },
              {
                header: "Over-Abstraction",
                content:
                  "Design patterns commonly work via abstraction, which is only good when chosen tastefully.",
              },
            ]}
          />

          <Note>
            Design patterns can commonly be applied at multiple levels or in
            different variations. Some situations may call for a twist on what
            you see here, though it will arguably be the same pattern.
          </Note>

          <Section title="Factory">
            <BodyText>
              The essence of{" "}
              <Term id="factory">
                <BodyText span c="blue">
                  factory
                </BodyText>
              </Term>{" "}
              is to take the logic of creating an object and give it to another
              object. This can appear in many ways. A factory can appear as a
              method of the class being constructed or as a separate class
              entirely. It also can commonly have either concrete or abstract
              return types. Let's take a look at a simple factory method:
            </BodyText>

            <JavaSplit
              file={{ name: "Foo.java", code: workInConstructor }}
              colorScheme={colorScheme}
            >
              <AsideText>
                Here is a class that's doing work in the constructor. Ideally,
                its constructor would just be doing simple assignment, like{" "}
                <Code>this.frob = frob;</Code>. Anything more complicated than
                that should generally be scrutinized.
              </AsideText>
            </JavaSplit>

            <JavaSplit
              file={{ name: "Foo.java", code: factoryMethod }}
              colorScheme={colorScheme}
            >
              <AsideText>
                Here, <Code>create</Code> has become a factory method for{" "}
                <Code>Foo</Code>. Note that the <Code>frob</Code> logic has been
                extracted into the factory. Construction of the{" "}
                <Code>Frob</Code> instance is now decoupled from the{" "}
                <Code>Foo</Code> constructor, so we get a bit more flexibility
                in how we make a <Code>Foo</Code>.
              </AsideText>
            </JavaSplit>
          </Section>

          <Accordion>
            <Accordion.Item key={"factory method"} value={"factory method"}>
              <Accordion.Control>
                <THeaderText>Factory Method</THeaderText>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack>
                  <AsideText>
                    This is the exact approach given above. Note that we keep
                    everything in 1 class. It is just broken out into a separate{" "}
                    <Code>static</Code> method.
                  </AsideText>
                  <Java
                    files={{ name: "Foo.java", code: factoryMethod }}
                    colorScheme={colorScheme}
                  />
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item key={"factoryClass"} value={"factory class"}>
              <Accordion.Control>
                <THeaderText>Factory Class</THeaderText>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack>
                  <AsideText>
                    In this approach, we move the factory out to a separate
                    class. Sometimes, the class being constructed becomes an
                    inner class of the factory with a <Code>private</Code>{" "}
                    constructor. This keeps the relation between the factory and
                    the constructed class clear. Other times, it is moved out of
                    the factory entirely.
                  </AsideText>
                  <AsideText>
                    The bottom line is that the constructed class often has its
                    constructor guarded such that only the factory or other
                    classes within the same package (such as tests) can
                    construct it. The constructor is not available publicly.
                  </AsideText>
                  <AsideText>
                    Below, we've taken the <Code>private</Code> constructor
                    approach:
                  </AsideText>
                  <Java
                    files={{ name: "FooFactory.java", code: factoryClass }}
                    colorScheme={colorScheme}
                  />
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item key="abstract factory" value="abstract factory">
              <Accordion.Control>
                <THeaderText>Abstract Factory Class</THeaderText>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack>
                  <AsideText>
                    Now, let's consider a case in which <Code>Foo</Code> is
                    abstract and we don't want callers to know the specific
                    subclass of <Code>Foo</Code> they're using. Clearly, we
                    cannot construct a <Code>Foo</Code> from <Code>Foo</Code>,
                    as only concrete classes can be instanced.
                  </AsideText>
                  <AsideText>
                    Instead, we can do it from an abstract factory{" "}
                    <Code>FooFactory</Code>.
                  </AsideText>
                  <Java
                    files={{
                      name: "FrobFactory.java",
                      code: abstractFactoryClass,
                    }}
                    colorScheme={colorScheme}
                  />
                  <AsideText>
                    This pattern is generally regarded as just the factory
                    method pattern, but it can help to think of this as just
                    pulling up our factory pattern one level of abstraction.
                  </AsideText>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item
              key="abstract factory factory"
              value="abstract factory factory"
            >
              <Accordion.Control>
                <THeaderText>Abstract Factory Factory Class</THeaderText>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack>
                  <AsideText>
                    Factory can be layered. Let's say that we attempt to apply
                    the factory pattern to <Code>FooFactory</Code>. That would
                    imply a <Code>FooFactoryFactory</Code> which is also
                    abstract: can be layered in abstraction. Let's say that{" "}
                    <Code>Foo</Code> is not just an absraction, but a
                    multi-layered abstraction. From above, that would imply that{" "}
                    <Code>Frob</Code> is also abstract and has the factory
                    pattern applied to it. Let's see just that step first:
                  </AsideText>
                  <Java
                    files={{
                      name: "FooFactoryFactory.java",
                      code: abstractFactoryFactoryClass,
                    }}
                    colorScheme={colorScheme}
                  />
                  <AsideText>
                    As you might suspect, this pattern can be applied again and
                    again. It's mostly a function of how complex your
                    construction requirements are and how much abstraction you
                    are willing to tolerate. Ideally, you should pick the least
                    abstract form of factory you can.
                  </AsideText>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Page>
      </TopPage>
    </>
  );
}
