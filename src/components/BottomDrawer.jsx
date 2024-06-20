import React from "react";
import { Grid, Box } from "@material-ui/core";
import Drawer from "@mui/material/Drawer";
import { CiHome } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { VscSend } from "react-icons/vsc";

export default function BottomDrawer({ open, onClose }) {
  const tabs = [
    {
      id: "1",
      tabIcon: <CiHome />,
      tabTitle: "Home",
    },
    {
      id: "2",
      tabIcon: <GoPerson />,
      tabTitle: "About",
    },
    {
      id: "3",
      tabIcon: <IoDocumentTextOutline />,
      tabTitle: "Skills",
    },
    {
      id: "4",
      tabIcon: <MdOutlineHomeRepairService />,
      tabTitle: "Services",
    },
    {
      id: "5",
      tabIcon: <HiOutlinePhotograph />,
      tabTitle: "Portfolio",
    },
    {
      id: "6",
      tabIcon: <VscSend />,
      tabTitle: "Contact",
    },
  ];

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          zIndex: 1200, // Ensures the Drawer is above the BottomNavBar
          paddingBottom: "50px", // This ensures the Drawer doesn't hide the BottomNavBar
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        },
      }}
    >
      <Grid
        style={{
          transition: "ease-in-out",
          height: "calc(25vh - 50px)", // Adjust height to account for the BottomNavBar
          width: "100%",
          backgroundColor: "white",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          {tabs.map((tab) => (
            <Grid
              key={tab.id}
              item
              xs={4} // Adjusts the number of items per row on smaller screens
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>{tab.tabIcon}</Box>
              <Box>{tab.tabTitle}</Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Drawer>
  );
}
