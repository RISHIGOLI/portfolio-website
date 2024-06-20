import { Grid, Box, makeStyles } from "@material-ui/core";
import Information from "../components/about/Information";
import Photo from "../components/about/Photo";
import { centerContent } from "../styles/DynamicStyles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    fontSize: "30px",
    margin: "10px",
    marginTop: "80px",
    color: theme.palette.colors.text.primary
  },
  subtitle:{
    color: theme.palette.colors.text.other
  }
}));

function About() {
  const classes = useStyles()
  return (
    <Grid
      style={{
        height: "calc(100vh - 80px)",
        marginTop: "80px",
        flexDirection: "column",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0% 13%",
      }}
      id="about"
    >
      {/* title */}
      <Grid style={{ ...centerContent, flexDirection: "column" }}>
        <Box className={classes.title}>About Me</Box>
        <Box className={classes.subtitle}>My Introduction</Box>
      </Grid>

      {/* photo and info container */}
      <Grid
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {/* photo */}
        <Grid
          style={{
            height: "100%",
            width: "50%",
            ...centerContent,
          }}
        >
          <Grid
            style={{
              height: "75%",
              width: "60%",
              backgroundColor: "black",
              borderRadius: "10px",
            }}
          >
            <img
              src="https://media.licdn.com/dms/image/D4E03AQGcfVctQDmJ5A/profile-displayphoto-shrink_800_800/0/1709134936921?e=1724284800&v=beta&t=NJTjcgOK7fsSXpU5pd0RsUm5N-JLrsp05jRPYFQW8pk"
              alt=""
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "inherit",
              }}
            />
          </Grid>
        </Grid>

        {/* info */}
        <Grid
          style={{
            height: "100%",
            width: "50%",
            ...centerContent,
          }}
        >
          <Information />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
