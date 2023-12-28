import { Button, Group, Paper, Stack } from "@mantine/core";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { DetailText } from "../text/DetailText";
import { PageCardDescriptionProps } from "./PageCardDescription";
import { PageCardTagProps } from "./PageCardTag";
import { PageCardTitleProps } from "./PageCardTitle";

export interface PageCardProps {
  link: string;
  title: ReactElement<PageCardTitleProps>;
  description: ReactElement<PageCardDescriptionProps>;
  tags: ReactElement<PageCardTagProps>[];
}

export function PageCard({ link, title, description, tags }: PageCardProps) {
  const navigate = useNavigate();

  return (
    <Paper shadow="md" p="md" withBorder>
      <Stack>
        {title}
        {description}
        <Group justify="space-between">
          <Group gap="xs">{...tags}</Group>
          <Button size="compact-md" onClick={() => navigate(link)}>
            <DetailText>Go</DetailText>
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
}
