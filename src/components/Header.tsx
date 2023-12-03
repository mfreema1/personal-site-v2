import { Flex, Tabs, Paper, CloseButton, Center, Group } from "@mantine/core";
import { Txt } from "./Text";

import {
  IconHome,
  IconUserCircle,
  IconMessageCode,
  IconZoomCode,
  IconCodeAsterix,
  IconMail,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const data = {
  home: {
    path: "/",
    title: "Home",
    icon: <IconHome size={16} />,
  },
  about: {
    path: "/about",
    title: "About",
    icon: <IconUserCircle size={16} />,
  },
  breadth: {
    path: "/breadth",
    title: "Breadth",
    icon: <IconMessageCode size={16} />,
  },
  depth: {
    path: "/depth",
    title: "Depth",
    icon: <IconZoomCode size={16} />,
  },
  other: {
    path: "/other",
    title: "Other",
    icon: <IconCodeAsterix size={16} />,
  },
  contact: {
    path: "/contact",
    title: "Contact",
    icon: <IconMail size={16} />,
  },
} as const;

export type TPage = keyof typeof data;

export interface HeaderProps {
  close: () => void;
  style: React.CSSProperties;
}

export function Header({ close, style }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <Flex w={"100vw"} bg={"white"} justify={"center"} style={style}>
      <Paper w={"100%"} h={"100%"} shadow={"md"}>
        <Group w={"100%"} justify="space-between">
          <Center>
            <CloseButton ml={"1rem"} size={"lg"} onClick={close} />
          </Center>

          <Tabs
            defaultValue={"/"}
            onChange={(path) => navigate(path!)}
            mr={"4rem"}
          >
            <Tabs.List>
              {Object.values(data).map((datum) => (
                <Tabs.Tab
                  value={datum.path}
                  key={datum.path}
                  leftSection={datum.icon}
                >
                  <Txt s={"san"}>{datum.title}</Txt>
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>
        </Group>
      </Paper>
    </Flex>
  );
}
