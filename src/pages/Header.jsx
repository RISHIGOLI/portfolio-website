import React from "react";
import { Grid, Box, makeStyles, Button } from "@material-ui/core";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "80px",
    borderBottom: "1px solid gray",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    zIndex: 1000,
    [theme.breakpoints.down(768)]: {
      display: "none",
    },
    color: theme.palette.colors.text.primary,
    backdropFilter: 'blur(60px)'
  },

  headerItem: {
    margin: "0px 10px",
    cursor: "pointer",
    fontWeight: "600",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

function Header({ changeTheme, darkMode }) {
  const classes = useStyles();
  return (
    <Grid className={classes.header}>
      {/* left side tabs */}
      <Grid style={{ marginLeft: "25px" }}>
        <Link to="home" spy={true} smooth={true} duration={500}>
          <Box className={classes.headerItem}>Rushikesh Goli</Box>
        </Link>
      </Grid>

      {/* right side tabs */}
      <Grid style={{ display: "flex", marginRight: "25px", alignItems: 'center' }}>
        <Box style={{ cursor: "pointer" }}>
          {darkMode ? <LightModeIcon onClick={changeTheme}/> : <DarkModeIcon onClick={changeTheme}/>}
        </Box>
        <Link to="home" spy={true} smooth={true} duration={500}>
          <Box className={classes.headerItem}>Home</Box>
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          <Box className={classes.headerItem}>About</Box>
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          <Box className={classes.headerItem}>Skills</Box>
        </Link>
        <Link to="qualifications" spy={true} smooth={true} duration={500}>
          <Box className={classes.headerItem}>Qualification</Box>
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          <Box className={classes.headerItem}>Projects</Box>
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Box className={classes.headerItem}>Contact</Box>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Header;
