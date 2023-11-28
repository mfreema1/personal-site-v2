import { Affix, Flex, Box, Center } from "@mantine/core";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Navbar } from "./Navbar";
import { Intro } from "./Intro";

import { Breadth } from "./pages/breadth/Breadth";

import classes from "./App.module.css";

function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Intro },
      { path: "/about", Component: () => <p>About</p> },
      { path: "/breadth", Component: () => <Breadth /> },
      { path: "/depth", Component: () => <p>Depth</p> },
      { path: "/other", Component: () => <p>Other</p> },
      { path: "/contact", Component: () => <p>Contact</p> },
    ],
  },
]);

// TODO: Put the page content on Paper: https://mantine.dev/core/paper/
function Layout() {
  return (
    <>
      <Affix position={{ left: 0, top: 0 }} zIndex={-1}>
        <Box className={classes.background} />
      </Affix>
      <Navbar />
      <Flex>
        <Center className={classes.page}>
          <Center className={classes.content}>
            <Outlet />
          </Center>
        </Center>
      </Flex>
    </>
  );
}

export default App;
