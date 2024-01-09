import React from "react";
import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import "../Styles/NavigationBar.css";
import NavBarButton from "../Atoms/NavBarButton";
import NavBarLogo from "../Atoms/NavBarLogo";

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div className="navbar">
          <NavBarLogo />
          <NavBarButton />
        </div>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
