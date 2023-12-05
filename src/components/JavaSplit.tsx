import { Grid } from "@mantine/core";
import { JavaSingle } from "./JavaSingle";

export interface JavaSplitProps {
  left: React.ReactElement;
  code: string;
}

/**
 * We keep the gutter small here so that when we render on mobile, the gap
 * between the two rows is smaller than the gap between other elements in the
 * page stack. This makes it clearer what we are referring to with {@link left}.
 */
export function JavaSplit({ left, code }: JavaSplitProps) {
  return (
    <>
      <Grid w={"100%"} gutter="sm">
        <Grid.Col span={{ base: 12, md: 4 }}>{left}</Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <JavaSingle code={code} />
        </Grid.Col>
      </Grid>
    </>
  );
}
