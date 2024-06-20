import React, { useState } from "react";
import { makeStyles, Grid, Box, Button } from "@material-ui/core";
import { centerContent } from "../styles/DynamicStyles";
import Education from "../components/qualifications/Education";
import Experience from "../components/qualifications/Experience";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "calc(100vh - 80px)",
    marginTop: "80px",
    flexDirection: "column",
    justifyContent: "space-evenly",
    display: "flex",
    padding: "0% 13%",
  },
  title: {
    fontWeight: "bold",
    fontSize: "30px",
    margin: "10px",
    marginTop: "80px",
    marginBottom: "0px",
    ...centerContent,
    color: theme.palette.colors.text.primary,
  },
  subtitle:{
    color: theme.palette.colors.text.other
  }
}));

export default function Contact() {
  const classes = useStyles();
  const projects = [1, 1, 1];
  return (
    <Grid id="projects" className={classes.mainContainer}>
      {/* title */}
      <Grid style={{ ...centerContent, flexDirection: "column" }}>
        <Box className={classes.title}>Projects</Box>
        <Box className={classes.subtitle}>Browse My Recents</Box>
      </Grid>

      {/* content */}
      <Grid
        style={{
          minHeight: "300px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {projects.map((project) => (
          <Grid
            style={{
              height: "300px",
              width: "300px",
              border: "1px solid black",
              backgroundColor: "pink",
              margin: "2px",
            }}
          ></Grid>
        ))}
      </Grid>
    </Grid>
  );
}
