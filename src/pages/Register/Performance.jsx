import { Box, Typography } from "@mui/material";
import React from "react";
import PerformanceCard from "./PerformanceCard";
import { useEffect } from "react";
import PromoterService from "../../api/services/PromoterService";
import { useState } from "react";
import UserService from "../../api/services/UserService";
import CampaignService from "../../api/services/CampaignService";

function Performance() {
  const [promotersCount, setPromotersCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [campaignsCount, setCampaignsCount] = useState(0);

  useEffect(() => {
    let apiCallPromoterCount = PromoterService.getPromotersCount();
    apiCallPromoterCount.then((res) => {
      if (res.data.responseCode === "00") {
        setPromotersCount(res.data.promotersCount);
      }
    });
  }, []);

  useEffect(() => {
    let apiCallUserCount = UserService.getUsersCount();
    apiCallUserCount.then((res) => {
      if (res.data.responseCode === "00") {
        setUsersCount(res.data.usersCount);
      }
    });
  }, []);

  useEffect(() => {
    let apiCallCampaignCount = CampaignService.getCampaignsCount();
    apiCallCampaignCount.then((res) => {
      if (res.data.responseCode === "00") {
        setCampaignsCount(res.data.campaignsCount);
      }
    });
  }, []);

  return (
    <div id="Performance">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15rem",
          height: "30vh",
          marginBottom: "8rem",
        }}
      >
        <PerformanceCard amount={usersCount} text1={"Total"} text2={"Users"} />
        <PerformanceCard
          amount={promotersCount}
          text1={"Total"}
          text2={"Promoters"}
        />
        <PerformanceCard
          amount={campaignsCount}
          text1={"Total"}
          text2={"Campaigns"}
        />
      </Box>
    </div>
  );
}

export default Performance;
