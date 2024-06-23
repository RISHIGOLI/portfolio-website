import React, { useState } from "react";
import { makeStyles, Grid, Box, Button } from "@material-ui/core";
import { centerContent } from "../styles/DynamicStyles";
import Education from "../components/qualifications/Education";
import Experience from "../components/qualifications/Experience";
import MyButton from "../components/MyButton";
import project1 from '../Assets/project1.jpg'

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
  subtitle: {
    color: theme.palette.colors.text.other,
  },
}));

export default function Contact() {
  const classes = useStyles();
  const projects = [
    {
      id: 1,
      projectTitle: "Travel Website UI",
      projectGithubLink: "https://github.com/RISHIGOLI/travel_website_ui.git",
      projectDemoLink: "https://travel-website-ui-mu.vercel.app/",
    },
  ];

  function handleClick(url) {
    // window.open(url, "_blank");
  }

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
            key={project.id}
            style={{
              height: "300px",
              width: "300px",
              border: "1px solid black",
              margin: "2px",
              borderRadius: "10px",
              backgroundColor: "antiquewhite",
            }}
          >
            <Grid
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "0px 5px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "50px",
                  alignItems: "center",
                }}
              >
                {project.projectTitle}
              </Box>
              <Grid style={{ height: "60%", border: '1px solid black' }}>
                <img src={project1} alt="" style={{height: '100%', width: '100%', objectFit: 'cover'}}/>
              </Grid>
              <Grid style={{ display: "flex", justifyContent: "space-around" }}>
                <MyButton
                  text="Github Link"
                  onClick={handleClick(project.projectGithubLink)}
                />
                <MyButton
                  text="Live Demo"
                  onClick={handleClick(project.projectDemoLink)}
                />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
