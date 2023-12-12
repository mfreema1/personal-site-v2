import { Grid } from "@mantine/core";
import { TColorScheme } from "../data/themes";
import { Java } from "./Java";

export interface JavaSplitProps {
  code: string;
  colorScheme: TColorScheme;
  children: React.ReactNode;
}

/**
 * We keep the gutter small here so that when we render on mobile, the gap
 * between the two rows is smaller than the gap between other elements in the
 * page stack. This makes it clearer what we are referring to with {@link left}.
 */
export function JavaSplit({ code, colorScheme, children }: JavaSplitProps) {
  return (
    <>
      <Grid w={"100%"} gutter="sm">
        <Grid.Col span={{ base: 12, md: 4 }}>{children}</Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Java code={code} colorScheme={colorScheme} />
        </Grid.Col>
      </Grid>
    </>
  );
}
