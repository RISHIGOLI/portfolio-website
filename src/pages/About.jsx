import { Grid, Box, makeStyles } from "@material-ui/core";
import Information from "../components/about/Information";
import Photo from "../components/about/Photo";
import { centerContent } from "../styles/DynamicStyles";
import profile_pic from '../Assets/profile_pic.jpg'

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
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: "0px",
      padding: '0% 5%'
    },
  },

  photoAndInfoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.down(768)]: {
      flexDirection: "column",
      padding: '15px 0px'
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
              src={profile_pic}
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
