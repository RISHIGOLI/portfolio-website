import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import Drawer from "@mui/material/Drawer";
import { CiHome } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { VscSend } from "react-icons/vsc";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  drawerBackdrop: {
    backgroundColor: "unset !important", // Example: semi-transparent black
  },
  drawerContent: {
    transition: "1s ease-in-out",
    height: "calc(25vh - 50px)", // Adjust height to account for the BottomNavBar
    width: "100%",
    backgroundColor: "white",
    padding: "10px",
    boxSizing: "border-box",
  },
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    height: "100%",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function BottomDrawer({ open, onClose }) {
  const classes = useStyles();
  const tabs = [
    {
      id: "1",
      tabIcon: <CiHome />,
      tabTitle: "Home",
      to: "home",
    },
    {
      id: "2",
      tabIcon: <GoPerson />,
      tabTitle: "About",
      to: "about",
    },
    {
      id: "3",
      tabIcon: <IoDocumentTextOutline />,
      tabTitle: "Skills",
      to: "skills",
    },
    {
      id: "4",
      tabIcon: <MdOutlineHomeRepairService />,
      tabTitle: "Services",
      to: "qualifications",
    },
    {
      id: "5",
      tabIcon: <HiOutlinePhotograph />,
      tabTitle: "Portfolio",
      to: "projects",
    },
    {
      id: "6",
      tabIcon: <VscSend />,
      tabTitle: "Contact",
      to: "contact",
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
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          position: "absolute",
          bottom: "100px",
          boxShadow: "none",
        },
      }}
      BackdropProps={{
        classes: {
          root: classes.drawerBackdrop, // Apply the custom backdrop class
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
                cursor: "pointer",
              }}
            >
              <Link
                to={tab.to}
                spy={true}
                smooth={true}
                duration={500}
                onClick={onClose}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "35px",
                  }}
                >
                  {tab.tabIcon}
                </Box>
                <Box style={{ fontSize: "20px" }}>{tab.tabTitle}</Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Drawer>
  );
}
