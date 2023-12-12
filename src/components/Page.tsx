import { Breadcrumbs, Stack } from "@mantine/core";
import { Link } from "react-router-dom";
import { AsideText } from "./text/AsideText";

export interface PageProps {
  path: string;
  children: React.ReactNode;
}

export function Page({ path, children }: PageProps) {
  const pathComponents = path.slice(1).split("/");

  const links = [
    <Link to="/">
      <AsideText>Home</AsideText>
    </Link>,
  ];
  for (let i = 0; i < pathComponents.length; i++) {
    links.push(
      <Link to={`/${pathComponents.slice(0, i + 1).join("/")}`}>
        <AsideText tt="capitalize">{pathComponents[i]}</AsideText>
      </Link>,
    );
  }

  return (
    <Stack gap="md">
      <Breadcrumbs>{...links}</Breadcrumbs>
      <Stack gap="xl">{children}</Stack>
    </Stack>
  );
}
