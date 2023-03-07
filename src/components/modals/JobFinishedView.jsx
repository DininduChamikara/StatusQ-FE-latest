import {
  AccountBalanceWallet,
  AccountBox,
  Close,
  RemoveRedEye,
  RestartAlt,
  Send,
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
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientReviewService from "../../api/services/ClientReviewService";
import PromoterCampaignService from "../../api/services/PromoterCampaignService";
import PromoterReviewService from "../../api/services/PromoterReviewService";
import ImagePreviewUploadSS from "../ImagePreview/ImagePreviewUploadSS";

function JobFinishedView({ open, handleClose, setOpen, jobId }) {
  const { userId } = useSelector((state) => state.login);

  const [jobDetails, setJobDetails] = useState();
  const [advertisements, setAdvertisements] = useState();

  const [uploadedSS, setUploadedSS] = useState();

  const [promoterReview, setPromoterReview] = useState();

  useEffect(() => {
    if (jobId) {
      let apiCall = PromoterCampaignService.getJobDetails(jobId);
      apiCall.then((res) => {
        if (res.data.responseCode === "00") {
          console.log("JOB DETAILS", res.data);
          setJobDetails(res.data);
          setAdvertisements(res.data.campaign.selectedAdvertisements);
          setUploadedSS(res.data.promoterCampaign.screenshots);
        }
      });
    }
  }, [jobId]);

  useEffect(() => {
    let apiCall = PromoterReviewService.getPromoterReviewByJobId(jobId);

    apiCall.then((res) => {
      if (res.data.responseCode === "00") {
        setPromoterReview(res.data.promoterReview);
      }
    });
  }, [jobId]);

  // client ratings
  const [starCount, setStarCount] = useState();
  const [reviewDescription, setReviewDescription] = useState("");

  const [reviewSendDisable, setReviewSendDisable] = useState(false);

  const handleOnChangeReviewDescription = (event) => {
    setReviewDescription(event.target.value);
  };

  let date = new Date().toISOString().split("T")[0];

  const requestBody = {
    jobId: jobId,
    promoterId: userId,
    clientId: jobDetails ? jobDetails.promoterCampaign.clientId : "",
    ratingCount: starCount,
    date: date,
    description: reviewDescription,
    state: "ACTIVE",
  };

  const saveClientReview = () => {
    const response = ClientReviewService.saveClientReview({
      ...requestBody,
      jobId: jobId,
      promoterId: jobDetails ? jobDetails.promoterCampaign.promoterId : "",
      clientId: userId,
      ratingCount: starCount,
      date: date,
      description: reviewDescription,
    });

    response.then((res) => {
      if (res.data.responseCode === "00") {
        setReviewSendDisable(true);
      }
    });
  };
  //

  useEffect(() => {
    if (jobId) {
      const response = ClientReviewService.getClientReviewByJobId(jobId);
      response.then((res) => {
        if (res.data.responseCode === "00") {
          setStarCount(res.data.clientReview.ratingCount);
          setReviewDescription(res.data.clientReview.description);
        }
      });
    }
  }, [jobId, open]);

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
            Finished Job Details
          </Typography>

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
          <Card sx={{ width: "55%", px: 2 }}>
            <Box sx={{ my: 1, overflowY: "auto", height: 400 }}>
              <Divider />
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "secondary.main",
                  fontSize: "1.1rem",
                  my: 1,
                }}
              >
                Advertisement Posts
              </Typography>
              <Divider />
              <Box height={10}></Box>
              <Swiper spacebetween={10} slidesPerView={3.3} grabCursor={true}>
                {advertisements &&
                  advertisements.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Paper
                          elevation={6}
                          sx={{
                            height: "100%",
                            width: "170px",
                          }}
                        >
                          <Box sx={{ p: 0.5 }}>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                px: 1,
                              }}
                            >
                              <Typography>Order Index</Typography>
                              <Typography>{index + 1}</Typography>
                            </Box>
                            <Divider />
                            <Box sx={{ mt: 0.5 }}>
                              {item.file ? (
                                <Box>
                                  <img
                                    style={{ borderRadius: "5%" }}
                                    src={item.file}
                                    width={"100%"}
                                    height={250}
                                    alt=""
                                  />
                                  <Box
                                    sx={{
                                      my: 0.5,
                                      height: 60,
                                      overflowY: "auto",
                                    }}
                                  >
                                    <Typography>{item.description}</Typography>
                                  </Box>
                                </Box>
                              ) : (
                                <Box
                                  sx={{
                                    my: 0.5,
                                    height: 314,
                                    overflowY: "auto",
                                  }}
                                >
                                  <Typography>{item.description}</Typography>
                                </Box>
                              )}
                            </Box>
                          </Box>
                        </Paper>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
              <Box height={20}></Box>
              <Divider />
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "secondary.main",
                  fontSize: "1.1rem",
                  my: 1,
                }}
              >
                Uploaded Screenshots
              </Typography>
              <Divider />
              <Box height={10}></Box>
              <ImagePreviewUploadSS
                imagesArr={uploadedSS}
                disableAction={true}
              />
            </Box>

            <Divider />
          </Card>
          {/* <Divider orientation="vertical" flexItem /> */}
          <Box sx={{ width: "45%", px: 1 }}>
            <Card
              sx={{
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflowY: "auto",
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
                      Job Accepted Date : &nbsp;
                    </Typography>
                    {jobDetails ? jobDetails.promoterCampaign.acceptedTime : ""}
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
                      Job Completed Date : &nbsp;
                    </Typography>
                    {jobDetails
                      ? jobDetails.promoterCampaign.completedTime
                      : ""}
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
                      Payment State : &nbsp;
                    </Typography>
                    {jobDetails && jobDetails.promoterCampaign.paymentApproved
                      ? "Approved"
                      : "Not approved yet"}
                  </Typography>
                </Stack>
                <Divider />

                {jobDetails && jobDetails.promoterCampaign.paymentApproved && (
                  <Box>
                    {promoterReview && (
                      <Stack direction="row">
                        <StarBorderOutlined style={{ marginRight: "10px" }} />
                        <Typography variant="body2">
                          <Typography
                            component="span"
                            variant="subtitle2"
                            color="text.primary"
                          >
                            Client Review : &nbsp;
                          </Typography>
                        </Typography>
                        <Rating
                          name="read-only"
                          value={promoterReview.ratingCount}
                          readOnly
                        />
                        <Typography sx={{ mx: 1 }} variant="body2">
                          {promoterReview.description}
                        </Typography>
                      </Stack>
                    )}

                    <Paper
                      elevation={3}
                      sx={{ width: "100%", p: 2, borderRadius: 2, my: 1 }}
                    >
                      <Typography sx={{ mb: 0.5 }}>
                        Would you like to rate the client back?
                      </Typography>
                      <Rating
                        name="simple-controlled"
                        value={starCount}
                        onChange={(event, newValue) => {
                          setStarCount(newValue);
                        }}
                      />
                      <Box sx={{ my: 1 }}>
                        <TextField
                          inputProps={{
                            maxLength: 100,
                          }}
                          id="outlined-multiline-static"
                          multiline
                          fullWidth
                          value={reviewDescription}
                          onChange={handleOnChangeReviewDescription}
                          rows={4}
                          placeholder="Describe your experience (Optional)"
                        />
                      </Box>
                      <Stack
                        sx={{ mt: 3, justifyContent: "flex-end" }}
                        direction="row"
                        spacing={2}
                      >
                        <Button
                          color="primary"
                          onClick={saveClientReview}
                          variant="contained"
                          endIcon={<Send />}
                          disabled={reviewSendDisable}
                        >
                          Send
                        </Button>
                      </Stack>
                    </Paper>
                  </Box>
                )}
              </Stack>
            </Card>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
}

export default JobFinishedView;
