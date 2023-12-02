import { Grid } from "@mantine/core";
import { JavaSingle } from "./JavaSingle";

export interface JavaSplitProps {
  left: React.ReactElement;
  code: string;
  quality?: "good" | "bad";
}

export function JavaSplit({ left, code, quality }: JavaSplitProps) {
  return (
    <>
      <Grid w={"100%"}>
        <Grid.Col span={4}>{left}</Grid.Col>
        <Grid.Col span={8}>
          <JavaSingle code={code} quality={quality} />
        </Grid.Col>
      </Grid>
    </>
  );
}
