import { Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  myButton: {
    height: "50px !important",
    width: "fit-content !important",
    borderRadius: "10px !important",
    padding: "10px 20px !important",
    backgroundColor: theme.palette.colors.button.background.primary,
    color: theme.palette.colors.button.text.primary,
    margin: "10px 0px !important",
    "&:hover": {
      backgroundColor: theme.palette.colors.button.background.primary,
      color: theme.palette.colors.button.text.primary,
    },
  },
}));

export default function MyButton(props) {
  const classes = useStyles();
  return (
    <Button className={classes.myButton} onClick={props.onClick}>
      {props.text}
    </Button>
  );
}
