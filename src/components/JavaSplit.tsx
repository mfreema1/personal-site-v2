import { Grid, Paper } from "@mantine/core";
import { Java } from "./Java";

export interface JavaSplitProps {
  left: React.ReactElement;
  code: string;
}

export function JavaSplit({ left, code }: JavaSplitProps) {
  return (
    <>
      <Grid w={"100%"}>
        <Grid.Col span={4}>
          <Paper p={"2rem"} radius={0} shadow={"sm"} withBorder>
            {left}
          </Paper>
        </Grid.Col>
        <Grid.Col span={8}>
          <Java code={code} />
        </Grid.Col>
      </Grid>
    </>
  );
}
