import React, { useState } from "react";
import { Grid, Box } from "@material-ui/core";
import BottomDrawer from "./BottomDrawer";

export default function BottomNavBar() {
  const [openBottomDrawer, setOpenBottomDrawer] = useState(false);
  
  return (
    <>
      <Grid
        style={{
          height: "50px",
          width: "100vw",
          position: "fixed",
          backgroundColor: 'red',
          zIndex: 1000, // Ensure it's above most elements but lower than Drawer
          bottom: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
