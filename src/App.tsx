import { Affix, Flex, Box, Center } from "@mantine/core";
import { Navbar } from "./Navbar";
import { Intro } from "./Intro";

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
          <Intro />
        </Center>
        <Box className={classes.gutter} />
      </Flex>
    </>
  );
}

export default App;
