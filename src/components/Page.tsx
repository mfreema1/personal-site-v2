import { Stack, Breadcrumbs } from "@mantine/core";
import { Link } from "react-router-dom";
import { Txt } from "./Text";

export interface PageProps {
  path: string;
  children?: React.ReactNode;
}

export function Page({ path, children }: PageProps) {
  const pathComponents = path.slice(1).split("/");

  const links = [
    <Link to="/">
      <Txt s="san">Home</Txt>
    </Link>,
  ];
  for (let i = 0; i < pathComponents.length; i++) {
    links.push(
      <Link to={`/${pathComponents.slice(0, i + 1).join("/")}`}>
        <Txt s="san" mantine={{ tt: "capitalize" }}>
          {pathComponents[i]}
        </Txt>
      </Link>,
    );
  }

  return (
    <Stack gap={"md"}>
      <Breadcrumbs>{...links}</Breadcrumbs>
      <Stack gap="xl">{children}</Stack>
    </Stack>
  );
}
