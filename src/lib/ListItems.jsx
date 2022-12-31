import * as React from "react";
import SidebarItem from "../components/SidebarItem/SidebarItem";
import {
  AccountBox,
  Campaign,
  ExitToApp,
  Help,
  Home,
  Payments,
  Reviews,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MainListItems = () => {
  const userType = useSelector((state) => state.login.userType);

  return (
    <React.Fragment>
      {[
        {
          name: "Home",
          icon: <Home />,
          link: "/home",
          authUser: "NORMAL_USER",
        },
        {
          name: "Client View",
          icon: <AccountBox />,
          link: "/client-view",
          authUser: "NORMAL_USER",
        },
        {
          name: "Promoter View",
          icon: <Campaign />,
          link: "/promoter-view",
          authUser: "NORMAL_USER",
        },
        {
          name: "Payments",
          icon: <Payments />,
          link: "/payments",
          authUser: "NORMAL_USER",
        },
        {
          name: "Settings",
          icon: <Settings />,
          link: "/settings",
          authUser: "NORMAL_USER",
        },
        {
          name: "Help",
          icon: <Help />,
          link: "/help",
          authUser: "NORMAL_USER",
        },
        {
          name: "Feedback",
          icon: <Reviews />,
          link: "/feedback",
          authUser: "NORMAL_USER",
        },
        {
          name: "Home",
          icon: <Home />,
          link: "/admin_home",
          authUser: "ADMIN_USER",
        },
        {
          name: "Report",
          icon: <Home />,
          link: "/admin_report",
          authUser: "ADMIN_USER",
        },
        {
          name: "Account",
          icon: <Home />,
          link: "/admin_account",
          authUser: "ADMIN_USER",
        },
        {
          name: "Complaints",
          icon: <Home />,
          link: "/admin_complaints",
          authUser: "ADMIN_USER",
        },
        {
          name: "Log out",
          icon: <ExitToApp />,
          link: "/",
          authUser: "",
        },
      ].map((item, index) => {
        return (
          (item.authUser === userType || item.authUser === "") && (
            <Link
              key={index}
              to={item.link}
              style={{ textDecoration: "none", color: "black" }}
            >
              <SidebarItem title={item.name} icon={item.icon} />
            </Link>
          )
        );
      })}
    </React.Fragment>
  );
};

export default MainListItems;
