import { makeStyles, Grid, Box } from "@material-ui/core";
import { centerContent } from "../styles/DynamicStyles";
import { MdVerified } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    fontSize: "30px",
    margin: "10px",
    ...centerContent,
    marginTop: "80px",
    color: theme.palette.colors.text.primary,
    [theme.breakpoints.down(768)]: {
      marginTop: "0px",
      margin: "0px",
    },
  },
  subtitle: {
    color: theme.palette.colors.text.other,
  },
  mainContainer: {
    height: "calc(100vh - 80px)",
    marginTop: "90px",
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-evenly",
    padding: "0% 13%",
    [theme.breakpoints.down(768)]: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      marginTop: "0px",
      padding: '0% 5%'
    },
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    maxHeight: "300px",
    [theme.breakpoints.down(768)]: {
      flexDirection: "column",
      maxHeight: 'max-content'
    },
  },
  content: {
    width: "50%",
    padding: "0px 25px",
    [theme.breakpoints.down(768)]: {
      width: "100%",
      margin: '15px 0px',
      padding: '0px'
    },
  },
  titleContainer:{
    ...centerContent, flexDirection: "column" ,
    [theme.breakpoints.down(768)]:{
      margin: '15px'
    }
  }
}));

export default function Skills() {
  const classes = useStyles();
  const frontendSkills = [
    {
      skill: "ReactJS",
      level: "Advanced",
    },
    {
      skill: "HTML",
      level: "Intermediate",
    },
    {
      skill: "CSS",
      level: "Advanced",
    },
    {
      skill: "JavaScript",
      level: "Intermediate",
    },
    {
      skill: "Material UI",
      level: "Intermediate",
    },
    {
      skill: "Bootstrap",
      level: "Intermediate",
    },
  ];

  const backendSkills = [
    {
      skill: "Spring Boot",
      level: "Advanced",
    },
    {
      skill: "Java 8",
      level: "Intermediate",
    },
    {
      skill: "MySQL",
      level: "Intermediate",
    },
    {
      skill: "MongoDB",
      level: "Advanced",
    },
    {
      skill: "AWS Hosting",
      level: "Intermediate",
    },
    {
      skill: "NodeJS",
      level: "Intermediate",
    },
  ];
  return (
    <Grid className={classes.mainContainer} id="skills">
      {/* title */}
      <Grid className={classes.titleContainer}>
        <Box className={classes.title}>Skills</Box>
        <Box className={classes.subtitle}>My Technical Level</Box>
      </Grid>

      {/* content container */}
      <Grid className={classes.contentContainer}>
        <Grid className={classes.content}>
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "antiquewhite",
              borderRadius: "20px",
              padding: "20px 40px",
            }}
          >
            <Box
              style={{ margin: "10px", fontSize: "20px", fontWeight: "bold" }}
            >
              Frontend Development
            </Box>
            <Grid style={{ width: "100%", flexWrap: "wrap", display: "flex" }}>
              {frontendSkills.map((skill) => (
                <Grid
                  style={{
                    width: "40%",
                    maxWidth: "50%",
                    margin: "15px 15px",
                    justifyContent: "flex-start",
                    display: "flex",
                  }}
                >
                  <Grid style={{ marginTop: "5px", marginRight: "10px" }}>
                    <MdVerified />
                  </Grid>
                  <Grid style={{ display: "flex", flexDirection: "column" }}>
                    <Box
                      style={{
                        marginTop: "2px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      {skill.skill}
                    </Box>
                    <Box style={{ color: "gray", margin: "5px 0px" }}>
                      {skill.level}
                    </Box>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid className={classes.content}>
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "antiquewhite",
              borderRadius: "20px",
              padding: "20px 40px",
            }}
          >
            <Box
              style={{ margin: "10px", fontSize: "20px", fontWeight: "bold" }}
            >
              Backend Development
            </Box>
            <Grid style={{ width: "100%", flexWrap: "wrap", display: "flex" }}>
              {backendSkills.map((skill) => (
                <Grid
                  style={{
                    width: "40%",
                    maxWidth: "50%",
                    margin: "15px 15px",
                    justifyContent: "flex-start",
                    display: "flex",
                  }}
                >
                  <Grid style={{ marginTop: "5px", marginRight: "10px" }}>
                    <MdVerified />
                  </Grid>
                  <Grid style={{ display: "flex", flexDirection: "column" }}>
                    <Box
                      style={{
                        marginTop: "2px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      {skill.skill}
                    </Box>
                    <Box style={{ color: "gray", margin: "5px 0px" }}>
                      {skill.level}
                    </Box>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid></Grid> */}
    </Grid>
  );
}
