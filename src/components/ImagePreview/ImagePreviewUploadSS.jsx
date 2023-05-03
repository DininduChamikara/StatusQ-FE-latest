import { HighlightOff } from "@mui/icons-material";
import { Box, Divider, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function ImagePreviewUploadSS({ imagesArr, deleteHandler, disableAction }) {
  return (
    <div>
      <Swiper spacebetween={10} slidesPerView={3.3} grabCursor={true}>
        {imagesArr &&
          imagesArr.map((item, index) => {
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
                    {!disableAction && (
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          px: 0,
                        }}
                      >
                        <Typography sx={{ ml: 1 }}>{index + 1}</Typography>
                        <IconButton onClick={() => deleteHandler(item, index)}>
                          <HighlightOff color="error" />
                        </IconButton>
                      </Box>
                    )}

                    <Divider />
                    <Box sx={{ mt: 0.5 }}>
                      <Box>
                        <img
                          style={{ borderRadius: "5%" }}
                          src={item}
                          width={"100%"}
                          height={250}
                          alt=""
                        />
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default ImagePreviewUploadSS;
