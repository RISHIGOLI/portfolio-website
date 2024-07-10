import { makeStyles, Grid, Box } from "@material-ui/core";
import { centerContent } from "../../styles/DynamicStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "antiquewhite",
    padding: "10px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.down(768)]:{
      margin: '15px 0px'
    }
  },
  content:{
    width: "100%",
    [theme.breakpoints.down(768)]:{
      ...centerContent,
      flexDirection:'column'
    }
  }
}));

export default function Education() {
  const classes = useStyles();
  const items = [1, 1, 1, 1];
  const educations = [
    {
      educationName: "PGDAC ( CDAC )",
      instOrOrgName: "Infoway Technologies Pvt Ltd Pune",
      duration: "March 2022 - Sept 2022",
    },
    {
      educationName: "Bachelor Of Engineering",
      instOrOrgName: "N B Navale Sinhgad College of Engineering Solapur.",
      duration: "June 2016 - May 2019",
    },
    {
      educationName: "Diploma",
      instOrOrgName: "Government Polytechnic, Solapur",
      duration: "June 2013 - May 2016",
    },
  ];
  return (
    <>
      <Grid className={classes.container}>
        <Box
          style={{
            marginBottom: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Education
        </Box>
        <Grid className={classes.content}>
          {educations.map((education, index) => (
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: index % 2 === 0 ? "flex-start" : "flex-end",
                position: "relative",
              }}
            >
              <Box
                style={{
                  height: "10px",
                  width: "10px",
                  backgroundColor: "darkslategray",
                  borderRadius: "50%",
                  position: "absolute",
                  top: -5,
                  right: index % 2 === 0 && "calc(50% - 5px)",
                  left: index % 2 !== 0 && "calc(50% - 5px)",
                }}
              ></Box>
              <Grid
                style={{
                  width: "50%",
                  borderRight:
                    index !== items.length - 1 &&
                    index % 2 === 0 &&
                    "1px solid gray",
                  borderLeft:
                    index !== items.length - 1 &&
                    index % 2 !== 0 &&
                    "1px solid gray",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {index % 2 === 0 ? (
                  <>
                    <Box
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        margin: "2px",
                        marginTop: "-10px",
                      }}
                    >
                      {education.educationName}
                    </Box>
                    <Box style={{ color: "gray" }}>
                      {education.instOrOrgName}
                    </Box>
                    <Box style={{ color: "gray", margin: "15px 0px" }}>
                      {education.duration}
                    </Box>
                  </>
                ) : (
                  <>
                    <Grid
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Grid style={{ marginLeft: "15px" }}>
                        <Box
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            margin: "2px",
                            marginTop: "-10px",
                          }}
                        >
                          {education.educationName}
                        </Box>
                        <Box style={{ color: "gray" }}>
                          {education.instOrOrgName}
                        </Box>
                        <Box style={{ color: "gray", margin: "15px 0px" }}>
                          {education.duration}
                        </Box>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
