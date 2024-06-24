import React from "react";
import { makeStyles, Grid, Box } from "@material-ui/core";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import MyButton from "../MyButton";

const useStyles = makeStyles((theme) => ({
  icon: {
    scale: 2,
    maring: "5px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px",
  },
  titleValue: {
    color: "gray",
    margin: "5px",
  },
  writeMe: {
    color: "gray",
    margin: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "1px solid black",
    padding: "10px",
    borderRadius: "5px",
  },
  pageTitle: {
    fontWeight: "bold",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    margin: "10px",
    color: theme.palette.colors.text.primary,
    [theme.breakpoints.down(768)]:{
      margin: '15px'
    }
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "max-content",
    [theme.breakpoints.down(768)]: {
      width: "100%",
    },
  },
}));

export default function TalkToMeSection() {
  const classes = useStyles();
  const communicationTypes = [
    {
      id: "1",
      typeIcon: <MdOutlineEmail />,
      typeName: "Email",
      typeUserName: "rushikeshgoli38@gmail.com",
      redirect: () => {},
    },
    {
      id: "1",
      typeIcon: <FaWhatsapp />,
      typeName: "Whatsapp",
      typeUserName: "+91 8624880967",
      redirect: () => window.open("https://wa.me/8624880967", "_blank"),
    },
  ];
  return (
    <Grid
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* title */}
      <Box className={classes.pageTitle}>Talk To Me</Box>
      <Grid
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Grid className={classes.card}>
          {communicationTypes.map((type, index) => (
            <Grid
              key={type.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                padding: "25px",
                margin: "10px",
                backgroundColor: "antiquewhite",
                borderRadius: "5px",
              }}
            >
              <Box className={classes.icon}>{type.typeIcon}</Box>
              <Box className={classes.title}>{type.typeName}</Box>
              <Box className={classes.titleValue}>{type.typeUserName}</Box>
              {/* <Box
                className={classes.writeMe}
                onClick={() =>
                  window.open("https://wa.me/8624880967", "_blank")
                }
              >
                Write me
              </Box> */}
              <MyButton text="Write Me" onClick={() => type?.redirect()} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
