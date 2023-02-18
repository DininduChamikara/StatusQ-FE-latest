import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PromoterCampaignService from "../../api/services/PromoterCampaignService";

function refreshPage() {
  window.location.reload(false);
}

function CountDownTimer({ createdTime, jobId, jobType }) {
  // const [timerHours, setTimerHours] = useState(0);
  // const [timerMinutes, setTimerMinutes] = useState(0);
  // const [timerSeconds, setTimerSeconds] = useState(0);

  // const [remainingTime, setRemainingTime] = useState("00:00:00");
  const [remainingTime, setRemainingTime] = useState();

  console.log("created time from count down", createdTime);

  const setNumFormat = (num) => {
    let formattedNumber = num.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    return formattedNumber;
  };

  const ct = new Date(createdTime);

  // change 12 if want to change number of hours
  const expiryDate = ct.getTime() + 12 * 60 * 60 * 1000;

  let interval;

  const startTimer = () => {
    const countDownDate = expiryDate;

    const tempCurrentTime = new Date().getTime();

    if (countDownDate - tempCurrentTime < 0) {
      if (jobType === "AVAILABLE") {
        const updateStateRequestBody = {
          jobId: jobId,
          state: "AVAILABLE_EXPIRED",
        };
        const apiCallUpdateState = PromoterCampaignService.updateState(
          updateStateRequestBody
        );
        apiCallUpdateState.then((res) => {
          console.log(res);
          clearInterval(interval.current);
        });
      } else if (jobType === "ONGOING") {
        const updateStateRequestBody = {
          jobId: jobId,
          state: "ONGOING_EXPIRED",
        };
        const apiCallUpdateState = PromoterCampaignService.updateState(
          updateStateRequestBody
        );
        apiCallUpdateState.then((res) => {
          console.log(res);
          clearInterval(interval.current);
        });
      }
    }

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
        // console.log("This campaign is expired!")
      } else {
        // Update Timer
        // setTimerHours(hours);
        // setTimerMinutes(minutes);
        // setTimerSeconds(seconds);

        let tempRemaining =
          setNumFormat(hours ? hours : 0) +
          ":" +
          setNumFormat(minutes ? minutes : 0) +
          ":" +
          setNumFormat(seconds ? seconds : 0);

        if (tempRemaining) {
          setRemainingTime(tempRemaining);
        }
      }
    });
  };

  useEffect(() => {
    startTimer();
  }, [createdTime]);

  // console.log("count down", timerSeconds);

  return (
    <Box>
      {remainingTime ? (
        <Chip label={remainingTime}></Chip>
      ) : (
        <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <Chip label={"00:00:00"}></Chip>
          <Typography sx={{ml:1, color:'error.main'}}>This Job is Expired! Try another</Typography>
        </Box>
      )}
    </Box>
  );
}

export default CountDownTimer;
