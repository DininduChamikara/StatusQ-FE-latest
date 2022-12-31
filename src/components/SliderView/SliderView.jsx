import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import image_slider_1 from '../../images/instruction_1.jpg';

function SliderView() {

  const images = [
    { url: image_slider_1 },
    { url: image_slider_1 },
    { url: image_slider_1 },
    { url: image_slider_1 },
  ];

  return (
    <SimpleImageSlider
      className="image-slider"
      width={800}
      height={450}
      images={images}
      showBullets={true}
      showNavs={true}
    />
  );
}

export default SliderView;
