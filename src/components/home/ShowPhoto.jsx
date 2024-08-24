import { makeStyles, Grid, Box } from "@material-ui/core";
import { centerContent } from "../../styles/DynamicStyles";
import profile_pic from '../../Assets/profile_pic.jpg'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "50%",
    width: "75%",
    borderRadius: "3% 25% 3% 25%",
    ...centerContent,
    border: "3px solid #bf7272",
    [theme.breakpoints.down(768)]:{
      height: '75%'
    }
  },
}));

function ShowPhoto() {
  const classes = useStyles();
  return (
    <Grid className={classes.mainContainer}>
      <img
        src={profile_pic}
        alt=""
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "inherit",
          filter: 'drop-shadow(2px 4px 5px black)'
        }}
      />
    </Grid>
  );
}

export default ShowPhoto;
