import {
  ActionIcon,
  Center,
  CloseButton,
  Flex,
  Group,
  MantineThemeOverride,
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
  IconSun,
  IconUserCircle,
  IconZoomCode,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { atomDark } from "../data/themes";
import { Txt } from "./Text";

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
  setTheme: (theme: MantineThemeOverride) => void;
  style: React.CSSProperties;
}

export function Header({ close, setTheme, style }: HeaderProps) {
  const navigate = useNavigate();
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Flex w={"100vw"} bg={"white"} justify={"center"} style={style}>
      <Paper w={"100%"} h={"100%"} shadow={"md"} radius={0}>
        <Group w={"100%"} justify="space-between">
          <Group ml={"1rem"}>
            <Center>
              <CloseButton size={"lg"} onClick={close} />
            </Center>

            <Center>
              <ActionIcon
                variant="light"
                darkHidden
                onClick={() => {
                  setColorScheme("dark");
                  setTheme(atomDark);
                }}
              >
                <IconMoon />
              </ActionIcon>
              <ActionIcon
                variant="light"
                lightHidden
                onClick={() => setColorScheme("light")}
              >
                <IconSun />
              </ActionIcon>
            </Center>
          </Group>

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
