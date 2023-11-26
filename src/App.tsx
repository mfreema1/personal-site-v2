import { Affix, Flex, Box, Center } from "@mantine/core";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Navbar } from "./Navbar";
import { Intro } from "./Intro";

import classes from "./App.module.css";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Intro },
      { path: "/about", Component: () => <p>About</p> },
      { path: "/breadth", Component: () => <p>Breadth</p> },
      { path: "/depth", Component: () => <p>Depth</p> },
      { path: "/other", Component: () => <p>Other</p> },
      { path: "/contact", Component: () => <p>Contact</p> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function Layout() {
  return (
    <>
      <Affix position={{ left: 0, top: 0 }}>
        <Navbar />
      </Affix>
      <Flex
        className={classes.page}
        justify="flex-start"
        align="flex-start"
        direction="row"
      >
        <Box className={classes.gutter} />
        <Center className={classes.content}>
          <Outlet />
        </Center>
        <Box className={classes.gutter} />
      </Flex>
    </>
  );
}

export default App;
