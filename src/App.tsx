import { ActionIcon, Affix, Grid, Paper, Transition } from "@mantine/core";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState } from "react";

import { IconMenu } from "@tabler/icons-react";

import { Home } from "./pages/home/Home";
import { Breadth } from "./pages/breadth/Breadth";
import { S01B } from "./pages/breadth/S01B";

import "@mantine/code-highlight/styles.css";
import { Header } from "./components/Header";

function App() {
  return <RouterProvider router={router} />;
}

// TODO: Add a breadcrumb leading back to home from any page. It should follow the URL.
const router = createBrowserRouter([
  {
    Component: Layout,
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

// TODO: Put the page content on Paper: https://mantine.dev/core/paper/
function Layout() {
  const [headerEnter, setHeaderEnter] = useState(true);
  const [buttonEnter, setButtonEnter] = useState(false);

  return (
    <>
      <Affix
        position={{ left: 0, top: 0 }}
        zIndex={-1}
        w={"100%"}
        h={"100%"}
        bg={"var(--mantine-color-gray-0)"}
      />
      <Affix position={{ left: 0, top: 0 }} w={"100vw"} zIndex={1}>
        <Transition
          mounted={headerEnter}
          keepMounted
          transition="slide-down"
          onExited={() => setButtonEnter(true)}
        >
          {(style) => (
            <Header style={style} close={() => setHeaderEnter(false)} />
          )}
        </Transition>
      </Affix>
      <Affix position={{ left: "2rem", top: "2rem" }} zIndex={0}>
        <Transition mounted={buttonEnter} onExited={() => setHeaderEnter(true)}>
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
          <Paper h={"100%"} shadow={"lg"} radius={"lg"}>
            <Grid>
              <Grid.Col span={"auto"} />
              <Grid.Col my={"4rem"} span={10}>
                <Outlet />
              </Grid.Col>
              <Grid.Col span={"auto"} />
            </Grid>
          </Paper>
        </Grid.Col>
        <Grid.Col span={"auto"} />
      </Grid>
    </>
  );
}

export default App;
