import { makeStyles, Grid, Box, Button } from "@material-ui/core";
import MyButton from "../MyButton";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 100px",
    boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.5)",
    [theme.breakpoints.down(768)]: {
      width: "50%",
    },
  },
  name: {
    fontWeight: "bold",
    fontSize: "40px",
    margin: "10px 0px",
    color: theme.palette.colors.text.primary,
  },
  designation: {
    fontWeight: 500,
    fontSize: "16px",
    color: theme.palette.colors.text.primary,
  },
  button: {
    backgroundColor: theme.palette.colors.button.background.primary,
    color: "white",
    width: "max-content",
    margin: "10px 0px",
  },
  information: {
    color: theme.palette.colors.text.other,
    margin: "10px 0px",
  },
}));

function Information() {
  const classes = useStyles();
  return (
    <Grid className={classes.mainContainer}>
      <Box className={classes.name}>Rushikesh Goli</Box>
      <Box className={classes.designation}>
        --------------- Full Stack Developer ---------------
      </Box>
      <Box className={classes.information}>
        I am a versatile Full Stack Developer with extensive experience in
        building robust web applications and backend services. My journey in the
        tech industry has equipped me with a deep understanding of both frontend
        and backend technologies, enabling me to deliver end-to-end solutions
        that meet diverse business needs.
      </Box>
      {/* <Button className={classes.button}>Say Hello</Button> */}
      <MyButton text="Say Hello" onClick={() => {}} />
    </Grid>
  );
}

export default Information;
