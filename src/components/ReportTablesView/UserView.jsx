import { AccountCircle, Assessment, ReplyAll } from "@mui/icons-material";
import { Box, Button, Card, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import PromoterService from "../../api/services/PromoterService";
import UserService from "../../api/services/UserService";
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

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const userId = searchParams.get("userId");
  const [userData, setUserData] = useState();
  const [imgUrl, setImgUrl] = useState();

  const { currentTab, onChangeTab } = useTabs("Profile");

  const [PROFILE_TABS, setPROFILE_TABS] = useState([
    {
      value: "Profile",
      icon: <AccountCircle />,
      component: <UserViewProfile userId={userId} />,
    },
  ]);

  useEffect(() => {
    const response = PromoterService.getPromoterByUserId(userId);
    response.then((res) => {
      if (res.data.responseCode === "00") {
        if (res.data.promoter) {
          setPROFILE_TABS([
            {
              value: "Profile",
              icon: <AccountCircle />,
              component: <UserViewProfile userId={userId} />,
            },
            {
              value: "Statistics",
              icon: <Assessment />,
              component: <UserStatistics userId={userId} />,
            },
          ]);
        }
      }
    });

    const userResponse = UserService.getUserByUserId(userId);
    userResponse.then((res) => {
      if (res.data.responseCode === "00") {
        setUserData(res.data.user);
        setImgUrl(res.data.user.imgUrl);
      }
    });
  }, [userId]);

  let { userType } = useSelector(
    (state) => state.login
  );

  const handleOnBack = () => {
    if(userType === "NORMAL_USER"){
      navigate(
        `/client-view?back_from=explore`
      );
    }else if(userType === "ADMIN_USER"){
      navigate(
        `/admin_report`
      );
    }
  }

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
        {userData && (
          <ProfileCover
            contactName={userData.contactName}
            firstName={userData.firstname}
            lastName={userData.lastname}
            imgUrl={imgUrl}
          />
        )}

        <TabsWrapperStyle>
          <Box sx={{pt:0.7, px:2}}>
            <Button variant="outlined" startIcon={<ReplyAll/>} onClick={handleOnBack}>Back to previous</Button>
          </Box>
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
