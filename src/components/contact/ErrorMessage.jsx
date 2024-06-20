import { makeStyles, Grid, Box } from "@material-ui/core";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import MyButton from "../MyButton";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "60px", // Custom size
    color: "red",
    scale: "3",
    margin: "25px",
    marginTop: "-25px",
  },
}));

export default function ErrorMessage({ showForm }) {
  const classes = useStyles();
  return (
    <Grid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <ErrorOutlineIcon className={classes.icon} />
      <Box>Message couldn't be sent</Box>
      <MyButton text="Retry" onClick={showForm} />
    </Grid>
  );
}
