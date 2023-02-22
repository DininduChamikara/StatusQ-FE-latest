import {
  AccountBalanceWallet,
  AccountBox,
  Close,
  RemoveRedEye,
  RestartAlt,
  Send,
  StarBorderOutlined,
  WorkHistoryOutlined
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
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import PaymentApprovelService from "../../api/services/PaymentApprovelService";
import PromoterCampaignService from "../../api/services/PromoterCampaignService";
import PromoterReviewService from "../../api/services/PromoterReviewService";
import ImagePreviewUploadSS from "../ImagePreview/ImagePreviewUploadSS";

function PaymentApprovel({ open, handleClose, setOpen, jobId }) {
  // Promoter Ratings
  let date = new Date().toISOString().split("T")[0];
  const [starCount, setStarCount] = useState(0);
  const [reviewDescription, setReviewDescription] = useState("");

  const { userId } = useSelector((state) => state.login);

  const handleOnChangeReviewDescription = (event) => {
    setReviewDescription(event.target.value);
  };

  const [jobDetails, setJobDetails] = useState();
  const [advertisements, setAdvertisements] = useState();

  const [uploadedSS, setUploadedSS] = useState();

  const [promoterReviewModalOpened, setPromoterReviewModalOpened] =
    useState(false);

  const handleOnClickApprovePayment = () => {
    const updatePaymentApprovelRequestBody = {
      jobId: jobId,
      paymentApproved: true,
    };

    const paymentApprovelRequestBody = {
      jobId: jobId,
      promoterId: jobDetails ? jobDetails.promoterCampaign.promoterId : "",
      clientId: userId,
      paymentAmount: jobDetails
        ? jobDetails.campaign.selectedAdvertisements.length *
          jobDetails.campaign.viewsFromEach
        : 0,
      paymentType: "CLIENT_TO_PROMOTER",
      state: "ACTIVE",
    };

    const savePaymentApprovelResponse =
      PaymentApprovelService.savePaymentApprovel(paymentApprovelRequestBody);
    savePaymentApprovelResponse.then((res) => {
      if (res.data.responseCode === "00") {
        const apiCallUpdatePaymentApproved =
          PromoterCampaignService.updatePaymentApproved(
            updatePaymentApprovelRequestBody
          );

        apiCallUpdatePaymentApproved.then((res) => {
          setPromoterReviewModalOpened(true);
          setOpen(false);
        });
      }
    });
  };

  useEffect(() => {
    let apiCall = PromoterCampaignService.getJobDetails(jobId);
    apiCall.then((res) => {
      if (res.data.responseCode === "00") {
        setJobDetails(res.data);
        setAdvertisements(res.data.campaign.selectedAdvertisements);
        setUploadedSS(res.data.promoterCampaign.screenshots);
      }
    });
  }, [jobId]);

  const requestBody = {
    jobId: jobId,
    promoterId: jobDetails ? jobDetails.promoterCampaign.promoterId : "",
    clientId: userId,
    ratingCount: starCount,
    date: date,
    description: reviewDescription,
    state: "ACTIVE",
  };

  const savePromoterReview = () => {
    const response = PromoterReviewService.savePromoterReview({
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
        setPromoterReviewModalOpened(false);
        setStarCount(0);
        setReviewDescription("");
      }
    });
  };

  return (
    <>
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
              Promoter's Job Status
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
            <Card sx={{ width: "60%", px: 2 }}>
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
                  Your Advertisement Campaign
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
                                      <Typography>
                                        {item.description}
                                      </Typography>
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
                  Promoter's Uploaded Screenshots
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
                        Promoter ID : &nbsp;
                      </Typography>
                      {jobDetails ? jobDetails.promoterCampaign.promoterId : ""}
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
                        Required payment for approvel : &nbsp;
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
                        Job Accepted : &nbsp;
                      </Typography>
                      {jobDetails
                        ? jobDetails.promoterCampaign.acceptedTime
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
                        Job Completed : &nbsp;
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
                      {jobDetails &&
                      jobDetails.promoterCampaign.paymentApproved === true
                        ? "Approved"
                        : "Not approved yet"}
                    </Typography>
                  </Stack>

                  <Stack spacing={1} direction="row">
                    <Button variant="contained" color="secondary">
                      Declined
                    </Button>
                    <Button
                      disabled={
                        jobDetails &&
                        jobDetails.promoterCampaign.paymentApproved === true
                      }
                      variant="contained"
                      onClick={handleOnClickApprovePayment}
                    >
                      Approved
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </Box>
          </Box>
        </Paper>
      </Modal>
      <Modal
        open={promoterReviewModalOpened}
        onClose={() => {
          setPromoterReviewModalOpened(false);
        }}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={3} sx={{ width: "50%", p: 2, borderRadius: 2 }}>
          <Typography
            sx={{ color: "secondary.main", fontSize: "1.5rem", mb: 1 }}
          >
            Thank you for approving the Payment
          </Typography>
          <Typography sx={{ mb: 0.5 }}>
            How would you rate the promoter?
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
              variant="outlined"
              startIcon={<RestartAlt />}
              onClick={() => {
                setPromoterReviewModalOpened(false);
              }}
            >
              Cancel
            </Button>
            <Button
              color="primary"
              onClick={savePromoterReview}
              variant="contained"
              endIcon={<Send />}
            >
              Send
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </>
  );
}

export default PaymentApprovel;
