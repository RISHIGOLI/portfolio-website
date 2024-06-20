import { makeStyles, Grid, Box, Button } from "@material-ui/core";
import MyButton from "../MyButton";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 100px",
  },
  name: {
    fontWeight: "bold",
    fontSize: "40px",
    margin: '10px 0px',
    color: theme.palette.colors.text.primary
  },
  designation: {
    fontWeight: 500,
    fontSize: "16px",
    color: theme.palette.colors.text.secondary,
  },
  button: {
    backgroundColor: theme.palette.colors.button.background.primary,
    color: "white",
    width: "max-content",
    margin: "10px 0px",
  },
  information: {
    color: theme.palette.colors.text.other,
    margin: '10px 0px'
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
        I'm creative designer based in New York, and I'm very passionate and
        dedicated to my work...
      </Box>
      {/* <Button className={classes.button}>Say Hello</Button> */}
      <MyButton text="Say Hello" onClick={()=>{}}/>
    </Grid>
  );
}

export default Information;
