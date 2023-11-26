import { useState } from "react";
import {
  Center,
  Tooltip,
  UnstyledButton,
  Stack,
  Box,
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

interface NavbarLinkProps {
  icon: typeof IconHome;
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
    home: { icon: IconHome, label: "Home" },
    "about-me": { icon: IconUserCircle, label: "About me" },
    "breadth-seminars": { icon: IconMessageCode, label: "Breadth seminars" },
    "depth-seminars": { icon: IconZoomCode, label: "Depth seminars" },
    "everything-else": { icon: IconCodeAsterix, label: "Everything else" },
    "email-me": { icon: IconMail, label: "Email me" },
  }),
);

export function Navbar() {
  const [active, setActive] = useState<string | undefined>(undefined);

  const links = (...ids: string[]) =>
    ids.map((id) => {
      const link = data.get(id);

      if (link === undefined) throw new Error(`Link with ID ${id} undefined`);

      return (
        <NavbarLink
          {...link}
          key={link.label}
          active={id === active}
          onClick={() => setActive(id)}
        />
      );
    });

  return (
    <nav className={classes.navbar}>
      <Center>{links("home")}</Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links(
            "about-me",
            "breadth-seminars",
            "depth-seminars",
            "everything-else",
          )}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        {links("email-me")}
      </Stack>
    </nav>
  );
}
