import React, { useState } from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import BottomDrawer from "./BottomDrawer";
import { TbGridDots } from "react-icons/tb";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100px",
    position: "fixed",
    left: 0,
    bottom: 0,
    zIndex: 100,
    [theme.breakpoints.up(768)]: {
      display: "none",
    },
  },
}));

export default function BottomNavBar({ changeTheme, darkMode }) {
  const classes = useStyles();
  const [openBottomDrawer, setOpenBottomDrawer] = useState(false);

  return (
    <>
      <Grid className={classes.container}>
        <Grid
          style={{
            height: "100%",
            width: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            padding: "0px 15px",
          }}
        >
          <Box style={{ fontSize: "20px" }}>
            Rushikesh
            <Box style={{ cursor: "pointer" }}>
              {darkMode ? (
                <LightModeIcon onClick={changeTheme} />
              ) : (
                <DarkModeIcon onClick={changeTheme} />
              )}
            </Box>
          </Box>
          <Box
            onClick={() => setOpenBottomDrawer(true)}
            style={{ cursor: "pointer", fontSize: "35px" }}
          >
            <TbGridDots />
          </Box>
        </Grid>
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
