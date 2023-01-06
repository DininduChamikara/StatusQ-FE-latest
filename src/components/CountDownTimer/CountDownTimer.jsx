import { Box, Chip } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PromoterCampaignService from "../../api/services/PromoterCampaignService";

function refreshPage() {
  window.location.reload(false);
}

function CountDownTimer({ createdTime, jobId }) {
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const [remainingTime, setRemainingTime] = useState("00:00:00");
  // const [remainingTime, setRemainingTime] = useState();

  const setNumFormat = (num) => {
    let formattedNumber = num.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    return formattedNumber;
  };

  // useEffect(() => {
  //   setRemainingTime(
  //     setNumFormat(timerHours) +
  //       ":" +
  //       setNumFormat(timerMinutes) +
  //       ":" +
  //       setNumFormat(timerSeconds)
  //   );
  // }, [timerHours, timerMinutes, timerSeconds]);

  const ct = new Date(createdTime);

  // change 12 if want to change number of hours
  const expiryDate = ct.getTime() + 12 * 60 * 60 * 1000;

  // console.log(expiryDate);

  let interval;

  const startTimer = () => {
    // const countDownDate = new Date("Jan 5, 2023 ").getTime();
    const countDownDate = expiryDate;

    const tempCurrentTime = new Date().getTime();

    if (countDownDate - tempCurrentTime < 0) {

      const updateStateRequestBody = {
        jobId: jobId,
        state: "EXPIRED",
      };

      const apiCallUpdateState = PromoterCampaignService.updateState(updateStateRequestBody);

      apiCallUpdateState.then((res) => {
        console.log(res);

        // Do refreshing with alert box
        // refreshPage();
        clearInterval(interval.current);
      })
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
        setRemainingTime(
          setNumFormat(hours) +
            ":" +
            setNumFormat(minutes) +
            ":" +
            setNumFormat(seconds)
        );
      }
    });
  };

  useEffect(() => {
    startTimer();
  }, [createdTime]);

  // console.log("count down", timerSeconds);

  return (
    <Box>
      <Chip label={remainingTime}></Chip>
    </Box>
  );
}

export default CountDownTimer;
