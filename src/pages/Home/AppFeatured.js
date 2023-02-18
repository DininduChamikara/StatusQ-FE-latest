import PropTypes from "prop-types";
// import Slider from "react-slick";
import { m } from "framer-motion";
import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
// _mock_
// components
import Slider from "react-slick";
import MotionContainer from "../../components/animate/MotionContainer";
import { varFade } from "../../components/animate/variants";
import CarouselArrows from "../../components/carousel/CarouselArrows";
import CarouselDots from "../../components/carousel/CarouselDots";
import Image from "./Image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderImage_1 from "../../images/sliderImages/slider_1.png";
import SliderImage_2 from "../../images/sliderImages/slider_2.jpg";
import SliderImage_3 from "../../images/sliderImages/slider_3.png";

// ----------------------------------------------------------------------

const OverlayStyle = styled("div")(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  position: "absolute",
  backgroundColor: alpha(theme.palette.grey[900], 0.64),
}));

// ----------------------------------------------------------------------

const _appFeatured = [
  {
    id: 1,
    title: "A web-based Promotional Services Provider",
    description: "Social media adverising platform to achieve your dreams",
    image: SliderImage_1,
  },
  {
    id: 2,
    title: "A web-based Promotional Services Provider",
    description: "Social media adverising platform to achieve your dreams",
    image: SliderImage_2,
  },
  {
    id: 3,
    title: "A web-based Promotional Services Provider",
    description: "Social media adverising platform to achieve your dreams",
    image: SliderImage_3,
  },
];

export default function AppFeatured() {
  const carouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    speed: 800,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // rtl: Boolean(theme.direction === "rtl"),
    beforeChange: (current, next) => setCurrentIndex(next),
    ...CarouselDots({
      zIndex: 9,
      top: 24,
      left: 24,
      position: "absolute",
    }),
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <Card>
      <Slider ref={carouselRef} {...settings}>
        {_appFeatured.map((item, index) => (
          <CarouselItem
            key={item.id}
            item={item}
            isActive={index === currentIndex}
          />
        ))}
      </Slider>

      <CarouselArrows
        onNext={handleNext}
        onPrevious={handlePrevious}
        spacing={0}
        sx={{
          top: 16,
          right: 16,
          position: "absolute",
          "& .arrow": {
            p: 0,
            width: 32,
            height: 32,
            opacity: 0.48,
            color: "common.white",
            "&:hover": { color: "common.white", opacity: 1 },
          },
        }}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  isActive: PropTypes.bool,
  item: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  }),
};

function CarouselItem({ item, isActive }) {
  const { image, title, description } = item;

  return (
    <Box sx={{ position: "relative" }}>
      <CardContent
        component={MotionContainer}
        animate={isActive}
        action
        sx={{
          bottom: 0,
          width: 1,
          zIndex: 9,
          textAlign: "left",
          position: "absolute",
          color: "common.white",
        }}
      >
        <m.div variants={varFade().inRight}>
          <Typography
            variant="overline"
            component="div"
            sx={{ mb: 1, opacity: 0.48 }}
          >
            StatusQ
          </Typography>
        </m.div>
        <m.div variants={varFade().inRight}>
          <Link component={RouterLink} to="#" color="inherit" underline="none">
            <Typography variant="h5" gutterBottom noWrap>
              {title}
            </Typography>
          </Link>
        </m.div>
        <m.div variants={varFade().inRight}>
          <Typography variant="body2" noWrap>
            {description}
          </Typography>
        </m.div>
      </CardContent>
      <OverlayStyle />
      <Image alt={title} src={image} sx={{ height: { xs: 280, xl: 340 } }} />
    </Box>
  );
}
