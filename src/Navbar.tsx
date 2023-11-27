import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Center,
  Tooltip,
  UnstyledButton,
  Stack,
  Transition,
  Affix,
  Burger,
  rem,
} from "@mantine/core";
import {
  IconHome,
  IconMail,
  IconUserCircle,
  IconMessageCode,
  IconCodeAsterix,
  IconZoomCode,
} from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import { useDisclosure } from "@mantine/hooks";

interface NavbarLinkProps {
  icon: typeof IconHome;
  path: string;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const data = new Map(
  Object.entries({
    home: { icon: IconHome, path: "/", label: "Home" },
    "about-me": { icon: IconUserCircle, path: "/about", label: "About me" },
    "breadth-seminars": {
      icon: IconMessageCode,
      path: "/breadth",
      label: "Breadth seminars",
    },
    "depth-seminars": {
      icon: IconZoomCode,
      path: "/depth",
      label: "Depth seminars",
    },
    "everything-else": {
      icon: IconCodeAsterix,
      path: "/other",
      label: "Everything else",
    },
    "email-me": { icon: IconMail, path: "/contact", label: "Email me" },
  }),
);

export function Navbar() {
  const [active, setActive] = useState<string | undefined>(undefined);
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(true);

  const links = (...ids: string[]) =>
    ids.map((id) => {
      const link = data.get(id)!;

      return (
        <Center>
          <NavbarLink
            {...link}
            key={link.label}
            active={id === active}
            onClick={() => {
              setActive(id);
              navigate(link.path);
            }}
          />
        </Center>
      );
    });

  return (
    <>
      <Affix position={{ left: 0, top: 0 }}>
        <Stack className={classes.navbar}>
          <Center>
            <Burger opened={opened} onClick={toggle} />
          </Center>

          <Transition mounted={opened} transition="fade">
            {(styles) => (
              <Stack style={styles} h={"100%"} justify="space-between">
                {links("home")}

                <Stack gap={0}>
                  {links(
                    "about-me",
                    "breadth-seminars",
                    "depth-seminars",
                    "everything-else",
                  )}
                </Stack>

                {links("email-me")}
              </Stack>
            )}
          </Transition>
        </Stack>
      </Affix>
    </>
  );
}
