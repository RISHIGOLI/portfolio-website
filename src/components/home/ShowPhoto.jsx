import { makeStyles, Grid, Box } from "@material-ui/core";
import { centerContent } from "../../styles/DynamicStyles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "50%",
    width: "75%",
    borderRadius: "3% 25% 3% 25%",
    ...centerContent,
    border: "3px solid #bf7272",
    [theme.breakpoints.down(768)]:{
      height: '100%'
    }
  },
}));

function ShowPhoto() {
  const classes = useStyles();
  return (
    <Grid className={classes.mainContainer}>
      <img
        src="https://media.licdn.com/dms/image/D4E03AQGcfVctQDmJ5A/profile-displayphoto-shrink_800_800/0/1709134936921?e=1724284800&v=beta&t=NJTjcgOK7fsSXpU5pd0RsUm5N-JLrsp05jRPYFQW8pk"
        alt=""
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "inherit",
          boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.5)'
        }}
      />
    </Grid>
  );
}

export default ShowPhoto;
