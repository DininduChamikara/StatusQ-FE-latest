import { AccountBox, ExitToApp } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import SidebarItem from "../components/SidebarItem/SidebarItem";

const ProfilePopListItems = () => {

  return (
    <Box>
      {[
        {
          name: "My Profile",
          icon: <AccountBox />,
          link: "#",
        },
        {
          name: "Log out",
          icon: <ExitToApp />,
          link: "/login",
        },
      ].map((item, index) => (
        <Box
          to={item.link}
          key={index}
          style={{ textDecoration: "none", color: "black" }}
        >
          <SidebarItem title={item.name} icon={item.icon} />
        </Box>
      ))}
    </Box>
  );
};

export default ProfilePopListItems;
