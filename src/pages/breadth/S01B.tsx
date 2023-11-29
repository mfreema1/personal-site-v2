import { Title, Stack, Text, Code } from "@mantine/core";
import { Quote } from "../../components/Quote";
import { Note } from "../../components/Note";
import { ProConTable } from "../../components/ProConTable";
import { JavaSplit } from "../../components/JavaSplit";

export function S01B() {
  return (
    <>
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
        />

        <Title order={2} c="blue">
          Factory
        </Title>

        <Text>
          The essence of Factory is to take the logic of creating an object and
          give it to another object. This can appear in many ways — a factory
          method or class, concrete or abstract return types, etc. As you might
          suspect, a concrete factory method is simpler, but an abstract factory
          class is more flexible. Let's take a look at how we could apply a
          concrete factory class.
        </Text>

        <JavaSplit
          left={
            <Text>
              Here, we see a class that's doing something a bit odd — work in
              the constructor. Generally, we want a simple assignment in the
              constructor — anything more complicated than that should be
              scrutinized.
            </Text>
          }
          code={`
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
              `}
        />
        <JavaSplit
          left={
            <Text>
              And here, <Code>FooFactory</Code> has become a concrete factory
              for <Code>Foo</Code>. Note that the <Code>frob</Code> logic has
              been extracted into the factory and that the <Code>Foo</Code>
              class is still concrete. Anyone who can construct a
              <Code>Frob</Code>
              instance work with <Code>Foo</Code>, and we have much more
              flexibility in how we construct <Code>Foo</Code> now.
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
        />
      </Stack>
    </>
  );
}
