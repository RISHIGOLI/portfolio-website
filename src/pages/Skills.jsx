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
    marginBottom: "0px",
    color: theme.palette.colors.text.primary
  },
  subtitle:{
    color: theme.palette.colors.text.other
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
    <Grid
      style={{
        height: "calc(100vh - 80px)",
        marginTop: "90px",
        flexDirection: "column",
        display: "flex",
        justifyContent: "space-evenly",
        padding: "0% 13%",
      }}
      id="skills"
    >
      {/* title */}
      <Grid style={{ ...centerContent, flexDirection: "column" }}>
        <Box className={classes.title}>Skills</Box>
        <Box className={classes.subtitle}>My Technical Level</Box>
      </Grid>

      {/* content container */}
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          maxHeight: "300px",
        }}
      >
        <Grid
          style={{
            width: "50%",
            padding: "0px 25px",
          }}
        >
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "white",
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

        <Grid
          style={{
            width: "50%",
            padding: "0px 25px",
          }}
        >
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "white",
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
