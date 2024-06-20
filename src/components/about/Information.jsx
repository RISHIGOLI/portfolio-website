import React from "react";
import { makeStyles, Grid, Box, Button } from "@material-ui/core";
import { centerContent, myButton } from "../../styles/DynamicStyles";
import { PiMedal } from "react-icons/pi";
import { FiBriefcase } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import MyButton from "../MyButton";

const useStyles = makeStyles((theme) => ({
  icon: {
    scale: 2,
    margin: "10px",
  },
  title: {
    margin: "0px 10px",
    color: "darkslategray",
  },
  subtitle: {
    margin: "10px",
    // display: 'contents'
  },
  info:{
    margin: "15px", color: "gray", textAlign: "justify",
    color: theme.palette.colors.text.other
  }
}));

export default function Information() {
  const classes = useStyles();
  const items = [
    {
      id: "1",
      icon: <PiMedal />,
      title: "Experience",
      subtitle: "2+ Years",
    },
    {
      id: "2",
      icon: <FiBriefcase />,
      title: "Completed",
      subtitle: "3+ Projects",
    },
    {
      id: "3",
      icon: <BiSupport />,
      title: "Support",
      subtitle: "Online 24/7",
    },
  ];

  function handleDownload() {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1cbMlX5sv6C0o7hhcNPNkR16uzZ9IuTNe";
    link.download = "CV_Rushikesh_Goli.pdf";
    link.click();
  }

  return (
    <Grid
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0% 20%",
      }}
    >
      {/* blocks */}
      <Grid style={{ display: "flex", justifyContent: "flex-start" }}>
        {items.map((item) => (
          <Grid
            key={item.id}
            style={{
              padding: "10px",
              margin: "15px",
              borderRadius: "10px",
              ...centerContent,
              flexDirection: "column",
              backgroundColor: "white",
              width: "max-content",
            }}
          >
            <Box className={classes.icon}>{item.icon}</Box>
            <Box className={classes.title}>{item.title}</Box>
            <Box className={classes.subtitle}>{item.subtitle}</Box>
          </Grid>
        ))}
      </Grid>

      {/* info */}
      <Grid className={classes.info}>
        Frontend developer, I create web pages with UI / UX user interface. I
        have 2 years of experience and many clients are happy with the projects
        carried out.
      </Grid>

      <Grid
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "15px",
        }}
      >
        {/* <Button style={{ ...myButton }}>Download CV</Button> */}
        <MyButton text="Download CV" onClick={handleDownload} />
      </Grid>
    </Grid>
  );
}
