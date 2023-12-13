import { Box, Grid, Stack } from "@mantine/core";
import { Footer } from "../Footer";

export interface CenterPageProps {
  children: React.ReactNode;
}

export function CenterPage({ children }: CenterPageProps) {
  return (
    <Stack justify="space-between" mih="100vh" gap={0}>
      {/* This box places the children in the center of the page. */}
      <Box />
      <Grid gutter={0}>
        <Grid.Col span="auto" />
        {/* We take up the full width regardless of device. */}
        <Grid.Col span={{ base: 10 }}>{children}</Grid.Col>
        <Grid.Col span="auto" />
      </Grid>
      <Footer />
    </Stack>
  );
}
