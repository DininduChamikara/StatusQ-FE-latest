/* eslint-disable jsx-a11y/alt-text */
import { useTheme } from "@emotion/react";
import { Avatar, Box, Paper, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewService from "../../api/services/ReviewService";
import testImage from "../../images/profile.jpg";

function Reviews() {
  // const theme = useTheme()

  const [reviewResponses, setReviewResponses] = useState([]);

  useEffect(() => {
    let apiCall = ReviewService.getReviews();
    apiCall.then((response) => {
      if (response) {
        response = response.data;
        setReviewResponses(response.reviews);
      }
    });
  }, []);

 
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold", pb: 1 }}>
        Recent Reviews
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: "flex-start",
          justifycontent: "center",
          flexdirection: "row",
        }}
      >
        {/* just changing slidesPerView = 1 mobile responsiveness working */}
        <Swiper spacebetween={10} slidesPerView={2.8} grabCursor={true} >
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
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Box sx={{ width: "80%" }}>
                      <Box sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                        {review.firstname + " " + review.lastname}
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
                    <Box
                      sx={{
                        width: "20%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Avatar alt="Image" src={testImage} />
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

export default Reviews;
