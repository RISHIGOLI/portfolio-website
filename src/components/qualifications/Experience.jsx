import { makeStyles, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export default function Experience() {
  const classes = useStyles();
  const items = [1, 1, 1, 1];
  const works = [
    {
      organizationName: "Kamal Keerthi Technologies LLP",
      role: "Full Stack Developer",
      duration: "March 2022 - Present",
    },
  ];
  return (
    <>
      <Grid
        style={{
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "20px",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            marginBottom: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Experience
        </Box>
        <Grid style={{ width: "100%" }}>
          {works.map((work, index) => (
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                width: "400px",
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
                  right: index % 2 === 0 && "195px",
                  left: index % 2 !== 0 && "195px",
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
                      {work.organizationName}
                    </Box>
                    <Box style={{ color: "gray" }}>{work.role}</Box>
                    <Box style={{ color: "gray", margin: "15px 0px" }}>
                      {work.duration}
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
                      <Grid style={{ marginLeft: "30px" }}>
                        <Box
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            margin: "2px",
                            marginTop: "-10px",
                          }}
                        >
                          {work.organizationName}
                        </Box>
                        <Box style={{ color: "gray" }}>{work.role}</Box>
                        <Box style={{ color: "gray", margin: "15px 0px" }}>
                          {work.duration}
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
