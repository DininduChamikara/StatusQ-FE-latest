import {
  AccountBalanceWallet,
  AccountBox,
  Close,
  RemoveRedEye,
  StarBorderOutlined,
  WorkHistoryOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { saveAs } from "file-saver";
import React, { useEffect, useState } from "react";
import ClientReviewService from "../../api/services/ClientReviewService";
import PromoterCampaignService from "../../api/services/PromoterCampaignService";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
import ImagePreviewUploadSS from "../ImagePreview/ImagePreviewUploadSS";

const downloadImage = (imgUrl, index) => {
  const currentTime = new Date().getTime();
  const filename = "AD_" + index + "_" + currentTime;

  saveAs(imgUrl, filename);
};

function JobCompleteView({ open, handleClose, setOpen, jobId }) {
  const [jobDetails, setJobDetails] = useState();
  const [advertisements, setAdvertisements] = useState();
  const [acceptedTime, setAcceptedTime] = useState();

  const [uploadingSS, setUploadingSS] = useState([]);

  const [clientRatingsAvg, setClientRatingsAvg] = useState(0.0);

  const handleOnClickSubmitAsCompleted = () => {
    const tempCurrentTime = new Date();
    const updateStateRequestBody = {
      jobId: jobId,
      state: "COMPLETED",
      acceptedTime: acceptedTime,
      completedTime: tempCurrentTime,
      screenshots: uploadingSS,
    };

    const apiCallUpdateState = PromoterCampaignService.updateState(
      updateStateRequestBody
    );

    apiCallUpdateState.then((res) => {
      setOpen(false);
      // Do refreshing with alert box
      // refreshPage();
    });
  };

  useEffect(() => {
    if (jobId) {
      let apiCall = PromoterCampaignService.getJobDetails(jobId);
      apiCall.then((res) => {
        if (res.data.responseCode === "00") {
          console.log("JOB DETAILS", res.data);
          setJobDetails(res.data);
          setAdvertisements(res.data.campaign.selectedAdvertisements);
          setAcceptedTime(res.data.promoterCampaign.acceptedTime);
        }
      });
    }
  }, [jobId]);

  useEffect(() => {
    if (jobDetails) {
      const response = ClientReviewService.getClientReviewsAvarageByClientId(
        jobDetails ? jobDetails.promoterCampaign.clientId : ""
      );
      response.then((res) => {
        if (res.data.responseCode === "00") {
          setClientRatingsAvg(res.data.ratingsAvarage);
        }
      });
    }
  }, [jobDetails]);

  function deleteHandler(item, index) {
    setUploadingSS(uploadingSS.filter((e) => e !== uploadingSS[index]));
    // URL.revokeObjectURL(item);
  }

  const onSelectFile = (event) => {
    const selectedFile = event.target.files[0];

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const imageSS = reader.result;

      setUploadingSS((previousSS) => previousSS.concat(imageSS));
    });

    reader.readAsDataURL(selectedFile);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={3} sx={{ width: "70%", p: 2, borderRadius: 2 }}>
        <Divider />
        <Box
          sx={{
            m: 0.5,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Ongoing Job Details
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ mx: 1, color: "secondary.main" }}>
              Time Remaining
            </Typography>
            {/* <Chip color="secondary" label={"05:59 s"}></Chip> */}
            <CountDownTimer
              createdTime={acceptedTime}
              jobId={jobId}
              jobType={"ONGOING"}
            />
          </Box>

          <IconButton
            onClick={() => {
              setOpen(false);
            }}
          >
            <Close />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", my: 1 }}>
          <Card sx={{ width: "60%", px: 2 }}>
            <Box sx={{ my: 1 }}>
              <ImagePreviewUploadSS
                imagesArr={uploadingSS}
                deleteHandler={deleteHandler}
              />
            </Box>

            <Divider />
            <Box
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{ mx: 0.5, width: 200 }}
                onClick={() => {
                  // eslint-disable-next-line array-callback-return
                  advertisements.map((item, index) => {
                    if (item.file && item.file !== "") {
                      return downloadImage(item.file, index);
                    }
                  });
                }}
                variant="outlined"
              >
                Download Advertisement
              </Button>
              <Button
                sx={{ mx: 0.5, width: 200 }}
                variant="outlined"
                component="label"
              >
                Upload Screenshots
                <input
                  hidden
                  accept="image/*"
                  // multiple
                  type="file"
                  onChange={onSelectFile}
                />
              </Button>
            </Box>
          </Card>
          {/* <Divider orientation="vertical" flexItem /> */}
          <Box sx={{ width: "40%", px: 1 }}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Stack spacing={2} sx={{ px: 3, py: 2 }}>
                <Stack direction="row">
                  <WorkHistoryOutlined style={{ marginRight: "10px" }} />

                  <Typography variant="body2">
                    <Typography
                      component="span"
                      variant="subtitle2"
                      color="text.primary"
                    >
                      Job ID : &nbsp;
                    </Typography>
                    {jobDetails ? jobDetails.promoterCampaign._id : ""}
                  </Typography>
                </Stack>

                <Stack direction="row">
                  <AccountBox style={{ marginRight: "10px" }} />

                  <Typography variant="body2">
                    <Typography
                      component="span"
                      variant="subtitle2"
                      color="text.primary"
                    >
                      Client ID : &nbsp;
                    </Typography>
                    {jobDetails ? jobDetails.promoterCampaign.clientId : ""}
                  </Typography>
                </Stack>

                <Stack direction="row">
                  <AccountBox style={{ marginRight: "10px" }} />

                  <Typography variant="body2">
                    <Typography
                      component="span"
                      variant="subtitle2"
                      color="text.primary"
                    >
                      Platform : &nbsp;
                    </Typography>
                    {jobDetails ? jobDetails.campaign.platform : ""}
                  </Typography>
                </Stack>

                <Stack direction="row">
                  <RemoveRedEye style={{ marginRight: "10px" }} />

                  <Typography variant="body2">
                    <Typography
                      component="span"
                      variant="subtitle2"
                      color="text.primary"
                    >
                      Required Views : &nbsp;
                    </Typography>
                    {jobDetails ? jobDetails.campaign.viewsFromEach : ""}
                  </Typography>
                </Stack>

                <Stack direction="row">
                  <RemoveRedEye style={{ marginRight: "10px" }} />

                  <Typography variant="body2">
                    <Typography
                      component="span"
                      variant="subtitle2"
                      color="text.primary"
                    >
                      Number of Ad posts : &nbsp;
                    </Typography>
                    {jobDetails
                      ? jobDetails.campaign.selectedAdvertisements.length
                      : 0}
                  </Typography>
                </Stack>

                <Stack direction="row">
                  <AccountBalanceWallet style={{ marginRight: "10px" }} />

                  <Typography variant="body2">
                    <Typography
                      component="span"
                      variant="subtitle2"
                      color="text.primary"
                    >
                      Budget : &nbsp;
                    </Typography>
                    Rs. &nbsp;
                    {jobDetails
                      ? jobDetails.campaign.selectedAdvertisements.length *
                        jobDetails.campaign.viewsFromEach
                      : 0}
                    .00
                  </Typography>
                </Stack>

                <Stack direction="row">
                  <StarBorderOutlined style={{ marginRight: "10px" }} />

                  <Typography variant="body2">
                    <Typography
                      component="span"
                      variant="subtitle2"
                      color="text.primary"
                    >
                      Client Ratings : &nbsp;
                    </Typography>
                    {clientRatingsAvg}
                  </Typography>
                </Stack>
              </Stack>

              <Box sx={{ px: 3, py: 1 }}>
                <Stack spacing={1} direction="row">
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={handleOnClickSubmitAsCompleted}
                  >
                    Submit as Completed
                  </Button>
                </Stack>
              </Box>
            </Card>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
}

export default JobCompleteView;
