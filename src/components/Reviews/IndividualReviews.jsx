/* eslint-disable jsx-a11y/alt-text */
import { Avatar, Box, Paper, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import PromoterReviewService from "../../api/services/PromoterReviewService";
import PromoterService from "../../api/services/PromoterService";
import ReviewService from "../../api/services/ReviewService";

function IndividualReviews({ userId }) {
  const [promoterData, setPromoterData] = useState();
  const [reviewResponses, setReviewResponses] = useState([]);

  useEffect(() => {
    const response = PromoterService.getPromoterByUserId(userId);
    response.then((res) => {
      if (res.data.responseCode === "00") {
        setPromoterData(res.data.promoter);
      }
    });
  }, [userId]);

  useEffect(() => {
    if (promoterData) {
      const apiCall =
        PromoterReviewService.getPromoterReviewsByPromoterId(promoterData._id);
      apiCall.then((response) => {
        if (response) {
          response = response.data.promoterReviews;
          setReviewResponses(response);
        }
      });
    }
  }, [promoterData]);

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold", pb: 1 }}>
        Recent Reviews
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifycontent: "center",
          flexdirection: "row",
        }}
      >
        {/* just changing slidesPerView = 1 mobile responsiveness working */}
        <Swiper spacebetween={10} slidesPerView={ reviewResponses.length < 3 ? reviewResponses.length : 2.8} grabCursor={true}>
          {reviewResponses.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <Paper
                  variant="outlined"
                  // elevation={6}
                  sx={{
                    borderRadius: 2,
                    p: 2,
                    width: "95%",
                    border: 1,
                    borderColor: "primary.main",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "row"}}>
                    <Box sx={{ width: "100%" }}>
                      <Box
                        sx={{ fontSize: "1.1rem", fontWeight: "bold", my: 1 }}
                      >
                        Reviewed by: {review.clientId}
                      </Box>
                      <Box
                        sx={{
                          displey: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Rating
                          name="read-only"
                          value={review.ratingCount}
                          readOnly
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Typography>{review.date}</Typography>
                  <Typography sx={{ my: 1 }}>{review.description}</Typography>
                </Paper>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Paper>
  );
}

export default IndividualReviews;
