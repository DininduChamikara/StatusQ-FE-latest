import { AccountCircle, Assessment } from "@mui/icons-material";
import { Box, Card, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useSearchParams } from "react-router-dom";
import useTabs from "../../hooks/useTabs";
import ProfileCover from "../User/Profile/ProfileCover";
import UserStatistics from "./UserStatistics";
import UserViewProfile from "./UserViewProfile";

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

export default function UserView() {
  const [searchParams] = useSearchParams();

  const userId = searchParams.get("userId");

  const { currentTab, onChangeTab } = useTabs("Profile");

  const PROFILE_TABS = [
    {
      value: "Profile",
      icon: <AccountCircle />,
      component: <UserViewProfile userId={userId} />,
    },
    {
      value: "Statistics",
      icon: <Assessment />,
      component: <UserStatistics />,
    },
  ];

  return (
    <Box>
      <Card
        sx={{
          mb: 2,
          height: 200,
          width: "100%",
          position: "relative",
        }}
      >
        <ProfileCover
          contactName={"Test testl"}
          firstName={"test"}
          lastName={"testl"}
        />

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
