import React, { useState } from "react";
import { makeStyles, Grid, Box, Button } from "@material-ui/core";
import { centerContent } from "../styles/DynamicStyles";
import Education from "../components/qualifications/Education";
import Experience from "../components/qualifications/Experience";
import TalkToMeSection from "../components/contact/TalkToMeSection";
import WriteMeYourProject from "../components/contact/WriteMeYourProject";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    // minHeight: "calc(100vh - 80px)",
    // marginTop: "80px",
    padding: "0% 13%",
    ...centerContent,
    width: "-webkit-fill-available",
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Grid id="contact" className={classes.mainContainer}>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Grid style={{ height: "500px", width: "45%" }}>
          <TalkToMeSection />
        </Grid>
        <Grid style={{ height: "500px", width: "45%" }}>
          <WriteMeYourProject />
        </Grid>
      </Grid>
    </Grid>
  );
}
