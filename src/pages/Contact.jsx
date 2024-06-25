import React, { useState } from "react";
import { makeStyles, Grid, Box, Button } from "@material-ui/core";
import { centerContent } from "../styles/DynamicStyles";
import Education from "../components/qualifications/Education";
import Experience from "../components/qualifications/Experience";
import TalkToMeSection from "../components/contact/TalkToMeSection";
import WriteMeYourProject from "../components/contact/WriteMeYourProject";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "0% 13%",
    ...centerContent,
    [theme.breakpoints.down(768)]:{
      padding: '0% 5%',
      marginBottom: '80px',
    }
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    [theme.breakpoints.down(768)]:{
      flexDirection: 'column'
    }
  },
  content:{
    width: "45%",
    [theme.breakpoints.down(768)]:{
      width: '100%'
    }
  }
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Grid id="contact" className={classes.mainContainer}>
      <Grid className={classes.contentContainer}>
        <Grid className={classes.content}>
          <TalkToMeSection />
        </Grid>
        <Grid className={classes.content}>
          <WriteMeYourProject />
        </Grid>
      </Grid>
    </Grid>
  );
}
