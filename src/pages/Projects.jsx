import React, { useState } from "react";
import { makeStyles, Grid, Box, Button } from "@material-ui/core";
import { centerContent } from "../styles/DynamicStyles";
import Education from "../components/qualifications/Education";
import Experience from "../components/qualifications/Experience";
import MyButton from "../components/MyButton";
import project1 from "../Assets/project1.jpg";
import project2 from "../Assets/project2.jpg";
import project3 from "../Assets/project3.jpg";
import duniyaa_webapp from "../Assets/duniyaa_webapp.jpg";
import duniyaa_admin_dashboard from '../Assets/duniyaa_admin_dashboard.jpg'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "calc(100vh - 80px)",
    marginTop: "80px",
    flexDirection: "column",
    justifyContent: "space-evenly",
    display: "flex",
    padding: "0% 13%",
    [theme.breakpoints.down(768)]: {
      marginTop: "0px",
      padding: "0% 5%",
      justifyContent: "center",
    },
  },
  title: {
    fontWeight: "bold",
    fontSize: "30px",
    margin: "10px",
    marginTop: "80px",
    marginBottom: "0px",
    ...centerContent,
    color: theme.palette.colors.text.primary,
    [theme.breakpoints.down(768)]: {
      margin: "0px",
      marginTop: "0px",
    },
  },
  subtitle: {
    color: theme.palette.colors.text.other,
  },
  cardContainer: {
    width: "300px",
    margin: "5px",
    borderRadius: "10px",
    backgroundColor: "antiquewhite",
    boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.5)",
    [theme.breakpoints.down(768)]: {
      height: "max-content",
      width: "100%",
    },
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 5px"
  },
  titleContainer: {
    ...centerContent,
    flexDirection: "column",
    [theme.breakpoints.down(768)]: {
      margin: "15px",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  const projects = [
    {
      id: 0,
      projectTitle: "Duniyaa Web App",
      projectGithubLink: "",
      projectDemoLink: "https://www.duniyaa.org/placeDetails/duniyaa_officials",
      src: duniyaa_webapp,
    },
    {
      id:1,
      projectTitle: 'Duniyaa Admin Dashboard',
      projectGithubLink: '',
      projectDemoLink: 'https://dashboard.duniyaa.org//',
      src: duniyaa_admin_dashboard
    },
    {
      id: 2,
      projectTitle: "Travel Website UI",
      projectGithubLink: "https://github.com/RISHIGOLI/travel_website_ui.git",
      projectDemoLink: "https://travel-website-ui-mu.vercel.app/",
      src: project1,
    },
    {
      id: 3,
      projectTitle: "Telegram UI",
      projectGithubLink:
        "https://github.com/RISHIGOLI/beyondchats_task_telegram_clone.git",
      projectDemoLink: "https://beyondchats-task-telegram-clone.vercel.app/",
      src: project2,
    },
    {
      id: 4,
      projectTitle: "Tailor Management System",
      projectGithubLink:
        "https://github.com/RISHIGOLI/tailor_management_system.git",
      projectDemoLink: "https://tailor-management-system-hazel.vercel.app/",
      src: project3,
    },
  ];

  function handleClick(url) {
    window.open(url, "_blank");
  }

  return (
    <Grid id="projects" className={classes.mainContainer}>
      {/* title */}
      <Grid className={classes.titleContainer}>
        <Box className={classes.title}>Personal Projects</Box>
        <Box className={classes.subtitle}>Browse My Recents</Box>
      </Grid>

      {/* content */}
      <Grid
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {projects.map((project) => (
          <Grid key={project.id} className={classes.cardContainer}>
            <Grid
              style={{
                // height: "100%",
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
              <Grid
                style={{
                  height: "60%",
                  border: "1px solid black",
                  minHeight: "168px",
                  minWidth: "290px",
                }}
              >
                <img
                  src={project.src}
                  alt=""
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Grid>
              <Grid className={classes.buttonsContainer}>
                {project.projectGithubLink && (
                  <MyButton
                    text="Github Link"
                    onClick={() => handleClick(project.projectGithubLink)}
                  />
                )}
                {project.projectDemoLink && (
                  <MyButton
                    text="Live Demo"
                    onClick={() => handleClick(project.projectDemoLink)}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
