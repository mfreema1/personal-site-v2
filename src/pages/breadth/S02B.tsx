import { Java } from "../../components/code/Java";
import { Page } from "../../components/Page";
import { TopPage } from "../../components/pages/TopPage";
import { TitleSection } from "../../components/TitleSection";
import { TColorScheme } from "../../data/themes";

import { Code } from "@mantine/core";
import { BodyText } from "../../components/text/BodyText";

import constructingAProxyBogger from "../../assets/examples/S02B/constructing-a-proxy/Bogger.java?raw";
import constructingAProxyFrobber from "../../assets/examples/S02B/constructing-a-proxy/Frobber.java?raw";
import finishingTheProxyFrobberProxy from "../../assets/examples/S02B/finishing-the-proxy/FrobberProxy.java?raw";
import introBogger from "../../assets/examples/S02B/intro/Bogger.java?raw";
import proxyIntroFoo from "../../assets/examples/S02B/proxy-intro/Foo.java?raw";

import { JavaSplit } from "../../components/code/JavaSplit";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { Term } from "../../components/Term";
import { AsideText } from "../../components/text/AsideText";

export interface S02BProps {
  colorScheme: TColorScheme;
}

export function S02B({ colorScheme }: S02BProps) {
  return (
    <TopPage>
      <Page path="/breadth/S02B">
        <TitleSection
          tText="Class-Level Proxy Cutovers"
          qtText="Design is the art of arranging code to work today, and be changeable forever."
          qtAuthor="Sandi Metz"
        />

        <BodyText>
          Picture that you work at a large software company and work on the{" "}
          <Code>FrobService</Code> team. The primary API of your business unit
          is to provide real-time <Code>FrobResult</Code> decisions given input
          <Code>Data</Code>. This path is highly latency-sensitive and
          revenue-impacting, so both performance and correctness are key. Under
          the hood, it uses the incredibly sophisticated <Code>Bogger</Code>
          algorithm, which looks something like:
        </BodyText>

        <Java
          files={{ name: "Bogger.java", code: introBogger }}
          colorScheme={colorScheme}
        />

        <BodyText>
          One day, your company decides to migrate <Code>FrobService</Code> to a
          new algorithm, <Code>Gobber</Code>, which promises significantly
          greater performance at no cost to correctness. Unfortunately, it is
          also highly sophisticated, and frankly, you have little understanding
          of how it works.
        </BodyText>

        <BodyText>
          How do we make the jump from <Code>Bogger</Code> to{" "}
          <Code>Gobber</Code>
          safely?
        </BodyText>

        <Section title="Proxies">
          <BodyText>
            In cases like this, a cutover{" "}
            <Term id="proxy">
              <BodyText span c="blue">
                proxy
              </BodyText>
            </Term>{" "}
            can prove to be useful. A proxy is easy to spot in code, as it
            occurs whenever a class is composed of an interface that it itself
            implements, such as:
          </BodyText>

          <JavaSplit
            file={{ name: "Foo.java", code: proxyIntroFoo }}
            colorScheme={colorScheme}
          >
            <AsideText>
              Here, we would say that <Code>Foo</Code> is a proxy for{" "}
              <Code>Bar</Code>.
            </AsideText>
          </JavaSplit>

          <BodyText>
            Proxies provide a natural way to wrap something with additional
            logic while taking its place. After all, if it implements the same
            interface, it can appear wherever the proxied class was used.
          </BodyText>
        </Section>

        <Section title="Constructing a Proxy">
          <BodyText>
            Getting back to our problem of migrating to the <Code>Gobber</Code>,
            we can start constructing our proxy by putting an interface on top
            of <Code>Bogger</Code> first. A logical interface for things which
            can produce <Code>FrobResult</Code> sounds like
            <Code>Frobber</Code>, so let's sketch that out:
          </BodyText>

          <Java
            files={[
              { name: "Bogger.java", code: constructingAProxyBogger },
              { name: "Frobber.java", code: constructingAProxyFrobber },
            ]}
            colorScheme={colorScheme}
          />

          <BodyText>
            This change should be a no-op in the codebase, as it's only
            adjusting a few types. We can now implement the same interface in
            our proxy.
          </BodyText>

          <Java
            files={[
              {
                name: "FrobberProxy.java",
                code: finishingTheProxyFrobberProxy,
              },
            ]}
            colorScheme={colorScheme}
          />

          <BodyText>
            Now that we have the proxy set, we can drop this in exactly where we
            had <Code>Bogger</Code> and monitor the <Code>FrobberService</Code>{" "}
            fleet for occurrences of <Code>bogger-and-gobber-unequal</Code>. If
            that never happens, we can rest fairly-assured that the swap does
            not pose a correctness problem.
          </BodyText>

          <BodyText>
            Performance implications can be monitored by profiling execution.
            Since calls to <Code>Bogger</Code> and <Code>Gobber</Code> are right
            next to eachother, checking a flame chart for performance
            regressions should be simple.
          </BodyText>

          <Note>
            Due to performance implications of running both <Code>Bogger</Code>{" "}
            and
            <Code>Gobber</Code> simultaneously, <Code>FrobberProxy</Code> should
            not be injected in production in this case. If staging can tolerate
            performance regressions, this is likely our best bet.
          </Note>
        </Section>
      </Page>
    </TopPage>
  );
}
