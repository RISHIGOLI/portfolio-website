import { Grid, makeStyles } from "@material-ui/core";
import { centerContent } from "../styles/DynamicStyles";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Information from "../components/home/Information";
import ShowPhoto from "../components/home/ShowPhoto";

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: "25px 0px",
    scale: 2,
    color: theme.palette.colors.text.primary
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "calc(100vh - 80px)",
          // marginTop: "80px",
        }}
        id="home"
      >
        {/* home container */}
        <Grid
          style={{
            width: "auto",
            height: "100%",
            display: "flex",
            padding: "0% 13%",
            marginTop: '160px'
          }}
        >
          {/* left icons */}
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "10%",
            }}
          >
            <InstagramIcon className={classes.icon} />
            <GitHubIcon className={classes.icon} />
            <WhatsAppIcon className={classes.icon} />
          </Grid>

          {/* middle section */}
          <Grid style={{ width: "55%", ...centerContent }}>
            <Information />
          </Grid>

          {/* right side photo section */}
          <Grid
            style={{
              height: "100%",
              width: "35%",
              ...centerContent,
            }}
          >
            <ShowPhoto />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
