import { makeStyles, Grid, Box } from "@material-ui/core";
import CircularProgress from '@mui/material/CircularProgress'
import MyButton from "../MyButton";

const useStyles = makeStyles((theme) => ({
  icon: {
    scale: '1.5',
    margin: '25px',
    marginTop: '-25px',
    color: '#ff6b6b !important'
  },
}));

export default function Loading() {
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
      <CircularProgress className={classes.icon} />
      <Box>Processing...</Box>
    </Grid>
  );
}
