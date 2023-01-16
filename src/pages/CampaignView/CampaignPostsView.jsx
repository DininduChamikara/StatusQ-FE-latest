import {
  Box,
  Card,
  CardHeader,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function CampaignPostsView({ advertisements }) {
  return (
    <Card>
      <CardHeader title="Advertisement Campaign" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Box>
          <Swiper spacebetween={10} slidesPerView={5} grabCursor={true}>
            {advertisements &&
              advertisements.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Paper
                      elevation={6}
                      sx={{
                        height: "100%",
                        width: "200px",
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
                                // onClick={downloadImage(item.file, index)}
                                style={{ borderRadius: "5%" }}
                                src={item.file}
                                width={"100%"}
                                height={300}
                                alt=""
                              />
                              {/* <Divider /> */}
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
                                height: 364,
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
        </Box>
      </Stack>
    </Card>
  );
}

export default CampaignPostsView;
