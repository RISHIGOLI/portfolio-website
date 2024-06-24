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
    color: theme.palette.colors.text.primary,
    [theme.breakpoints.down(768)]: {
      marginTop: "0px",
      margin: '0px'
    },
  },
  subtitle: {
    color: theme.palette.colors.text.other,
  },
  mainContainer: {
    height: "calc(100vh - 80px)",
    marginTop: "80px",
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "0% 13%",
    [theme.breakpoints.down(768)]: {
      height: "auto",
      marginTop: "0px",
    },
  },

  photoAndInfoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down(768)]: {
      flexDirection: "column",
    },
  },
  photo: {
    height: "100%",
    width: "50%",
    ...centerContent,
    [theme.breakpoints.down(768)]: {
      width: "100%",
    },
  },
  info: {
    height: "100%",
    width: "50%",
    ...centerContent,
    [theme.breakpoints.down(768)]: {
      width: "100%",
    },
  },
  titleContainer:{
    ...centerContent, flexDirection: "column",
    [theme.breakpoints.down(768)]:{
      margin: '15px'
    }
  }
}));

function About() {
  const classes = useStyles();
  return (
    <Grid className={classes.mainContainer} id="about">
      {/* title */}
      <Grid className={classes.titleContainer}>
        <Box className={classes.title}>About Me</Box>
        <Box className={classes.subtitle}>My Introduction</Box>
      </Grid>

      {/* photo and info container */}
      <Grid className={classes.photoAndInfoContainer}>
        {/* photo */}
        <Grid className={classes.photo}>
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
        <Grid className={classes.info}>
          <Information />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
