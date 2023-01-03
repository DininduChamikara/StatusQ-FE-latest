import { AccountBox, ExitToApp } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SidebarItem from "../components/SidebarItem/SidebarItem";
import { logout } from "../store/reducers/login.slice";

const ProfilePopListItems = ({handleClose}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutClickHandler = () => {
    navigate("/login");
    dispatch(logout());
  };

  const profileNavigateHandler = () => {
    navigate("/profile");
    handleClose();
  };

  return (
    <Box>
      {[
        {
          name: "My Profile",
          icon: <AccountBox />,
          link: "#",
          onclick: profileNavigateHandler,
        },
        {
          name: "Log out",
          icon: <ExitToApp />,
          link: "/login",
          onclick: logoutClickHandler,
        },
      ].map((item, index) => (
        <Box
          to={item.link}
          key={index}
          style={{ textDecoration: "none", color: "black" }}
          onClick={item.onclick && item.onclick}
        >
          <SidebarItem title={item.name} icon={item.icon} />
        </Box>
      ))}
    </Box>
  );
};

export default ProfilePopListItems;
