import React, { useState } from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import BottomDrawer from "./BottomDrawer";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "50px",
    width: '100%',
    padding: '5px 10px',
    position: "fixed",
    backgroundColor: "white",
    zIndex: 1000, // Ensure it's above most elements but lower than Drawer
    bottom: '-5px',
    display: "flex",
    left: 0,
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up(768)]: {
      display: "none",
    },
  },
}));

export default function BottomNavBar() {
  const classes = useStyles();
  const [openBottomDrawer, setOpenBottomDrawer] = useState(false);

  return (
    <>
      <Grid className={classes.container}>
        <Box>Rushikesh</Box>
        <Box onClick={() => setOpenBottomDrawer(true)}>Icon</Box>
      </Grid>

      {openBottomDrawer && (
        <BottomDrawer
          open={openBottomDrawer}
          onClose={() => setOpenBottomDrawer(false)}
        />
      )}
    </>
  );
}
