import { makeStyles, ThemeProvider } from "@material-ui/core";
import React, { useState } from "react";
import BottomNavBar from "./components/BottomNavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Qualification from "./pages/Qualification";
import Skills from "./pages/Skills";
import { darkTheme, lightTheme } from "./theme/theme";

const useStyles = makeStyles((theme) => ({
  container1: {
    display: 'flex', flexDirection: 'column',
    // backgroundColor: '#edf1b4',
    background: "linear-gradient(90deg, #837272, #a37272)",
    paddingBottom: '50px',
    [theme.breakpoints.down(768)]: {
      overflow: 'auto'
    }
  },
  container2: {
    display: 'flex', flexDirection: 'column',
    // backgroundColor: '#edf1b4',
    background: "linear-gradient(90deg, #ff6b6b, #ebe364)",
    paddingBottom: '50px',
    [theme.breakpoints.down(768)]: {
      overflow: 'auto'
    }
  }
}))


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const classes = useStyles({ isDarkMode })
  function handleChangeTheme() {
    setIsDarkMode(!isDarkMode)
  }

  console.log('is dark mode = ', isDarkMode);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className={isDarkMode ? classes.container1 : classes.container2}>
        <Header changeTheme={handleChangeTheme} darkMode={isDarkMode} />
        <BottomNavBar changeTheme={handleChangeTheme} darkMode={isDarkMode}/>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
