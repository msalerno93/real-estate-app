import HeroSlider, { Slide } from "hero-slider";
import "./photo-slider.styles.scss";

import image1 from "../../asset-pics/House1/HousePic.png";
import image2 from "../../asset-pics/House1/HousePic2.png";
import image3 from "../../asset-pics/House1/HousePic3.png";
import image4 from "../../asset-pics/House2/HousePic.png";
import image5 from "../../asset-pics/House2/HousePic2.png";

import React from "react";

const PhotoSlider = () => {
  return (
    <HeroSlider
      className="hero-slider-container"
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 600,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Slide
        className="slides"
        background={{
          backgroundImageSrc: image1,
          backgroundAttachment: "fixed",
        }}
      >
        <p className="title">Realtor Central</p>
        <p className="address">1995 Central Road</p>
        <p className="address">Jersey City NJ 11893</p>
        <p className="address">(516)-555-5555</p>

      </Slide>
      <Slide
        className="slides"
        background={{
          backgroundImageSrc: image2,
          backgroundAttachment: "fixed",
        }}
      >
        <p className="title">Realtor Central</p>
        <p className="address">1995 Central Road</p>
        <p className="address">Jersey City NJ 11893</p>
        <p className="address">(516)-555-5555</p>
      </Slide>
      <Slide
        className="slides"
        background={{
          backgroundImageSrc: image3,
          backgroundAttachment: "fixed",
        }}
      >
        <p className="title">Realtor Central</p>
        <p className="address">1995 Central Road</p>
        <p className="address">Jersey City NJ 11893</p>
        <p className="address">(516)-555-5555</p>
      </Slide>
      <Slide
        className="slides"
        background={{
          backgroundImageSrc: image5,
          backgroundAttachment: "fixed",
        }}
      >
        <p className="title">Realtor Central</p>
        <p className="address">1995 Central Road</p>
        <p className="address">Jersey City NJ 11893</p>
        <p className="address">(516)-555-5555</p>
      </Slide>
      <Slide
        className="slides"
        background={{
          backgroundImageSrc: image4,
          backgroundAttachment: "fixed",
        }}
      >
        <p className="title">Realtor Central</p>
        <p className="address">1995 Central Road</p>
        <p className="address">Jersey City NJ 11893</p>
        <p className="address">(516)-555-5555</p>
      </Slide>
    </HeroSlider>
  );
};

export default PhotoSlider;
