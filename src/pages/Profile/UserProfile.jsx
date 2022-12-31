import { AccountCircle, Settings } from "@mui/icons-material";
import { Box, Card, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import UserAccount from "../../components/ProfileDrawer/UserAccount";
import Profile from "../../components/User/Profile/Profile";
import ProfileCover from "../../components/User/Profile/ProfileCover";
import useTabs from "../../hooks/useTabs";

const TabsWrapperStyle = styled("div")(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: "100%",
  display: "flex",
  position: "absolute",
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
    paddingRight: theme.spacing(3),
  },
}));

export default function UserProfile() {
  const { currentTab, onChangeTab } = useTabs("Profile");

  const PROFILE_TABS = [
    {
      value: "Profile",
      icon: <AccountCircle />,
      component: <Profile />,
    },
    {
      value: "Settings",
      icon: <Settings />,
      component: <UserAccount />,
    },
  ];

  return (
    <Box>
      <Card
        sx={{
          mb: 1,
          height: 200,
          width: "78.5vw",
          position: "relative",
        }}
      >
        <ProfileCover />

        <TabsWrapperStyle>
          <Tabs
            allowScrollButtonsMobile
            variant="scrollable"
            scrollButtons="auto"
            value={currentTab}
            onChange={onChangeTab}
          >
            {PROFILE_TABS.map((tab) => (
              <Tab
                disableRipple
                key={tab.value}
                value={tab.value}
                icon={tab.icon}
                //   label={capitalCase(tab.value)}
                label={tab.value}
              />
            ))}
          </Tabs>
        </TabsWrapperStyle>
      </Card>
      {PROFILE_TABS.map((tab) => {
        const isMatched = tab.value === currentTab;
        return isMatched && <Box key={tab.value}>{tab.component}</Box>;
      })}
    </Box>
  );
}
