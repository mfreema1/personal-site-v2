import {
  ActionIcon,
  Affix,
  Grid,
  MantineThemeOverride,
  Transition,
} from "@mantine/core";
import { IconMenu } from "@tabler/icons-react";
import { useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
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
      <Affix position={{ left: 0, top: 0 }} zIndex={-1} w={"100%"} h={"100%"} />
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
      <Grid py={"2rem"} mih={"100vh"} gutter={0}>
        <Grid.Col span={"auto"} />
        <Grid.Col mih={"calc(100vh - (2 * 2rem))"} span={6}>
          <Grid>
            <Grid.Col span={"auto"} />
            <Grid.Col my={"4rem"} span={10}>
              <Outlet />
            </Grid.Col>
            <Grid.Col span={"auto"} />
          </Grid>
        </Grid.Col>
        <Grid.Col span={"auto"} />
      </Grid>
    </>
  );
}

export default App;
