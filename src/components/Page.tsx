import { Stack, Text, Breadcrumbs } from "@mantine/core";
import { Link } from "react-router-dom";

export interface PageProps {
  path: string;
  children?: React.ReactNode;
}

export function Page({ path, children }: PageProps) {
  const pathComponents = path.slice(1).split("/");

  const links = [
    <Link to="/">
      <Text>Home</Text>
    </Link>,
  ];
  for (let i = 0; i < pathComponents.length; i++) {
    links.push(
      <Link to={`/${pathComponents.slice(0, i + 1).join("/")}`}>
        <Text tt="capitalize">{pathComponents[i]}</Text>
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
