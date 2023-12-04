import {
  ActionIcon,
  Affix,
  Grid,
  MantineThemeOverride,
  Stack,
  Transition,
} from "@mantine/core";
import { IconMenu } from "@tabler/icons-react";
import { useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Breadth } from "./pages/breadth/Breadth";
import { S01B } from "./pages/breadth/S01B";
import { Home } from "./pages/home/Home";

export interface AppProps {
  setTheme: (theme: MantineThemeOverride) => void;
}

export function App({ setTheme }: AppProps) {
  const router = createBrowserRouter([
    {
      Component: () => <Layout setTheme={setTheme} />,
      children: [
        { path: "/", Component: Home },
        { path: "/about", Component: () => <p>About</p> },
        { path: "/breadth", Component: Breadth },
        { path: "/breadth/S01B", Component: S01B },
        { path: "/depth", Component: () => <p>Depth</p> },
        { path: "/other", Component: () => <p>Other</p> },
        { path: "/contact", Component: () => <p>Contact</p> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export interface LayoutProps {
  setTheme: (theme: MantineThemeOverride) => void;
}

export function Layout({ setTheme }: LayoutProps) {
  const [headerEnter, setHeaderEnter] = useState(true);
  const [buttonEnter, setButtonEnter] = useState(false);

  return (
    <>
      <Affix position={{ left: 0, top: 0 }} w={"100vw"} zIndex={1}>
        <Transition
          mounted={headerEnter}
          keepMounted
          transition="slide-down"
          onExited={() => setButtonEnter(true)}
        >
          {(style) => (
            <Header
              style={style}
              setTheme={setTheme}
              close={() => setHeaderEnter(false)}
            />
          )}
        </Transition>
      </Affix>
      <Affix position={{ left: "2rem", top: "2rem" }} zIndex={0}>
        <Transition
          mounted={buttonEnter}
          keepMounted
          onExited={() => setHeaderEnter(true)}
        >
          {(style) => (
            <ActionIcon
              variant="light"
              style={style}
              onClick={() => setButtonEnter(false)}
            >
              <IconMenu size={"2rem"} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
      <Stack justify="space-between" mih="100vh" gap={0}>
        <Grid gutter={0}>
          <Grid.Col span={"auto"} />
          <Grid.Col my={"6rem"} span={{ base: 10, md: 7, lg: 5 }}>
            <Outlet />
          </Grid.Col>
          <Grid.Col span={"auto"} />
        </Grid>
        <Footer />
      </Stack>
    </>
  );
}

export default App;
