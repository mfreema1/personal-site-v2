import { Affix, Flex, Box, Center } from "@mantine/core";
import { Navbar } from "./Navbar";
import { Intro } from "./Intro";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import classes from "./App.module.css";

function App() {
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="about" element={<p>About</p>} />
              <Route path="breadth" element={<p>Breadth</p>} />
              <Route path="depth" element={<p>Depth</p>} />
              <Route path="other" element={<p>Other</p>} />
              <Route path="contact" element={<p>Contact</p>} />
            </Routes>
          </BrowserRouter>
        </Center>
        <Box className={classes.gutter} />
      </Flex>
    </>
  );
}

export default App;
