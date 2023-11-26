import { Affix, Center } from "@mantine/core";
import { Navbar } from "./Navbar";
import { Intro } from "./Intro";

import classes from "./App.module.css";

function App() {
  return (
    <>
      <Affix position={{ left: 0, top: 0 }}>
        <Navbar />
      </Affix>
      <Center className={classes.content}>
        <Intro />
      </Center>
    </>
  );
}

export default App;
