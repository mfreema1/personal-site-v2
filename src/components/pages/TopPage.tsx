import { Grid, Stack } from "@mantine/core";
import { Footer } from "../Footer";

export interface TopPageProps {
  children: React.ReactNode;
}

export function TopPage({ children }: TopPageProps) {
  return (
    <Stack justify="space-between" mih="100vh" gap={0}>
      <Grid gutter={0}>
        <Grid.Col span="auto" />
        {/* Just to keep a bit off of the top edge. */}
        <Grid.Col my="6rem" span={{ base: 10, md: 7, lg: 5 }}>
          {children}
        </Grid.Col>
        <Grid.Col span="auto" />
      </Grid>
      <Footer />
    </Stack>
  );
}
