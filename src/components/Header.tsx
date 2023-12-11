import {
  ActionIcon,
  Center,
  Flex,
  Group,
  Paper,
  Tabs,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconCodeAsterix,
  IconHome,
  IconMail,
  IconMessageCode,
  IconMoon,
  IconPalette,
  IconSun,
  IconUserCircle,
  IconX,
  IconZoomCode,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Txt } from "./Text";

const data = {
  home: {
    path: "/",
    title: "Home",
    icon: <IconHome size={22} />,
  },
  about: {
    path: "/about",
    title: "About",
    icon: <IconUserCircle size={22} />,
  },
  breadth: {
    path: "/breadth",
    title: "Breadth",
    icon: <IconMessageCode size={22} />,
  },
  depth: {
    path: "/depth",
    title: "Depth",
    icon: <IconZoomCode size={22} />,
  },
  other: {
    path: "/other",
    title: "Other",
    icon: <IconCodeAsterix size={22} />,
  },
  contact: {
    path: "/contact",
    title: "Contact",
    icon: <IconMail size={22} />,
  },
} as const;

export type TPage = keyof typeof data;

export interface HeaderProps {
  close: () => void;
  changeColorScheme: () => void;

  style: React.CSSProperties;
}

// TODO: Lock header always on for mobile?
export function Header({ close, changeColorScheme, style }: HeaderProps) {
  const navigate = useNavigate();
  const { setColorScheme: setMantineColorScheme } = useMantineColorScheme();

  return (
    <Flex w={"100vw"} bg={"white"} justify={"center"} style={style}>
      <Paper w={"100%"} h={"100%"} shadow={"md"} radius={0}>
        <Group
          w={"100%"}
          justify="space-between"
          wrap="nowrap"
          preventGrowOverflow={true}
        >
          <Group ml={"1rem"} gap={12}>
            <Center>
              <ActionIcon variant="light" size="md" onClick={close}>
                <IconX size={22} />
              </ActionIcon>
            </Center>

            <Center>
              <ActionIcon
                variant="light"
                darkHidden
                onClick={() => {
                  setMantineColorScheme("dark");
                }}
              >
                <IconMoon size={22} />
              </ActionIcon>
              <ActionIcon
                variant="light"
                lightHidden
                size="md"
                onClick={() => {
                  setMantineColorScheme("light");
                }}
              >
                <IconSun size={22} />
              </ActionIcon>
            </Center>

            <Center>
              <ActionIcon variant="light" onClick={changeColorScheme}>
                <IconPalette size={22} />
              </ActionIcon>
            </Center>
          </Group>

          <Tabs
            defaultValue={"/"}
            onChange={(path) => navigate(path!)}
            mr={"1rem"}
          >
            <Tabs.List>
              {Object.values(data).map((datum) => (
                <Tabs.Tab px={12} value={datum.path} key={datum.path}>
                  <Group justify="space-between" gap={4}>
                    {datum.icon}
                    <Txt mantine={{ visibleFrom: "sm" }} s={"san"} fz="sm">
                      {datum.title}
                    </Txt>
                  </Group>
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>
        </Group>
      </Paper>
    </Flex>
  );
}
