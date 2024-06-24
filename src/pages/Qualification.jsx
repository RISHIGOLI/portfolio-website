import React, { useState } from "react";
import { makeStyles, Grid, Box, Button } from "@material-ui/core";
import { centerContent } from "../styles/DynamicStyles";
import Education from "../components/qualifications/Education";
import Experience from "../components/qualifications/Experience";
import { SlGraduation } from "react-icons/sl";
import { BiBriefcaseAlt2 } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "calc(100vh - 80px)",
    marginTop: "130px",
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-evenly",
    padding: "0% 13%",
    [theme.breakpoints.down(768)]: {
      marginTop: "0px",
      minHeight: "max-content",
    },
  },
  button: {
    textTransform: "none",
    fontSize: "14px",
    margin: "0px 5px",
    border: "1px solid black",
    width: "max-content",
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
      marginTop: "0px",
      margin: '0px'
    },
  },
  subtitle: {
    color: theme.palette.colors.text.other,
  },
  contentContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down(768)]:{
      flexDirection: 'column'
    }
  },
  titleContainer:{
    ...centerContent, flexDirection: "column", margin: '10px',
    [theme.breakpoints.down(768)]:{
      margin: '15px'
    }
  }
}));

export default function Qualification() {
  const classes = useStyles();
  const [showEducation, setShowEducation] = useState(true);
  return (
    <Grid id="qualifications" className={classes.mainContainer}>
      {/* title */}
      <Grid className={classes.titleContainer}>
        <Box className={classes.title}>Qualification</Box>
        <Box className={classes.subtitle}>My Personal Journey</Box>
      </Grid>

      <Grid style={{ ...centerContent }}>
        {/* content container */}
        <Grid className={classes.contentContainer}>
          {/* titles */}
          {/* <Grid style={{ display: "flex", width: "100%", margin: "10px" }}>
            <Grid
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                onClick={() => setShowEducation(!showEducation)}
                className={classes.button}
              >
                 <Box style={{ ...centerContent}}>
                <SlGraduation style={{ margin: "0px 10px" }} /> 
                <Box>Education</Box>
                </Box>
              </Button>
            </Grid>
            <Grid style={{ width: "50%" }}>
              <Button
                onClick={() => setShowEducation(!showEducation)}
                className={classes.button}
              >
                <Box style={{ ...centerContent}}>
                  <BiBriefcaseAlt2 />
                  <Box>Experience</Box>
                </Box>
              </Button>
            </Grid>
          </Grid> */}

          {/* content */}

          <Education />

          <Experience />
        </Grid>
      </Grid>
    </Grid>
  );
}
