import { Affix, Stack, Container } from "@mantine/core";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Navbar } from "./Navbar";

import { Home } from "./pages/home/Home";
import { Breadth } from "./pages/breadth/Breadth";
import { S01B } from "./pages/breadth/S01B";

import classes from "./App.module.css";
import "@mantine/code-highlight/styles.css";

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
  return (
    <>
      <Affix
        position={{ left: 0, top: 0 }}
        zIndex={-1}
        className={classes.background}
      />
      <Navbar />
      <Container className={classes.content}>
        <Stack>
          <Outlet />
        </Stack>
      </Container>
    </>
  );
}

export default App;
