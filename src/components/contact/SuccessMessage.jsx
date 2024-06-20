import { makeStyles, Grid, Box } from "@material-ui/core";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MyButton from "../MyButton";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "60px", // Custom size
    color: "limegreen",
    scale: '3',
    margin: '25px',
    marginTop: '-25px'
  },
}));

export default function SuccessMessage({showForm}) {
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
      <CheckCircleOutlineIcon className={classes.icon} />
      <Box>Message successfully sent</Box>
      <MyButton text="Click to send new message" onClick={showForm}/>
    </Grid>
  );
}
