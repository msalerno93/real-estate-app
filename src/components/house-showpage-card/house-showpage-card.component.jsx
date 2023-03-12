//TO SHOW INDIVIDUAL HOUSE WITH ALL NECESSARY INFO
// to be displayed on home-showpage (route)

import { useParams } from "react-router-dom";
import HeroSlider, { Slide } from "hero-slider";
import HOUSE_INFO from "../../houseinfo.json";
import "./house-showpage-card.styles.scss";

const HouseShowpage = () => {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let { houseId } = useParams();

  const id = houseId - 1;
  const imageURL1 = HOUSE_INFO[id].imageURL1;
  const imageURL2 = HOUSE_INFO[id].imageURL2;
  const imageURL3 = HOUSE_INFO[id].imageURL3;
  const imageURL4 = HOUSE_INFO[id].imageURL4;
  const imageURL5 = HOUSE_INFO[id].imageURL5;

  return (
    <div className="showpage-container">
      <div className="showpage-subcontainer">
        <p className="address">{HOUSE_INFO[id].address}</p>
        <p className="city">{HOUSE_INFO[id].city}</p>
        <p className="price">{USDollar.format(HOUSE_INFO[id].price)}</p>
        <HeroSlider
          slidingAnimation="left_to_right"
          orientation="horizontal"
          initialSlide={1}
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
              backgroundImageSrc: imageURL1,
              backgroundAttachment: "fixed",
            }}
          />
          <Slide
            className="slides"
            background={{
              backgroundImageSrc: imageURL2,
              backgroundAttachment: "fixed",
            }}
          />
          <Slide
            className="slides"
            background={{
              backgroundImageSrc: imageURL3,
              backgroundAttachment: "fixed",
            }}
          />
          <Slide
            className="slides"
            background={{
              backgroundImageSrc: imageURL4,
              backgroundAttachment: "fixed",
            }}
          />
          <Slide
            className="slides"
            background={{
              backgroundImageSrc: imageURL5,
              backgroundAttachment: "fixed",
            }}
          />
        </HeroSlider>
        <div className="information">
          <p className="info">Bathrooms: {HOUSE_INFO[id].bathroom}</p>
          <p className="info">Bedrooms: {HOUSE_INFO[id].bedroom}</p>
          <p className="info">Sqft: {HOUSE_INFO[id].size}</p>
          <p className="info">Style: {HOUSE_INFO[id].style}</p>
          <p className="info">Lot Size: {HOUSE_INFO[id].lot} Sqft</p>
          <p className="info">Basement: {HOUSE_INFO[id].basement}</p>
        </div>
        <div>
          <p className="desc">{HOUSE_INFO[id].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HouseShowpage;
