import React from "react";
import Feature from "../../feature/Feature";
import image from "../../../images/property-2.jpg";
import image2 from "../../../images/property-3.jpg";
import { Button, IconButton } from "@chakra-ui/react";
import { BiPlay } from "react-icons/bi";

import "./sell.css";

const featuresData = [
  "Smart Home",
  "Beautiful Scene Around",
  "Exceptional lifestyle",
  "Complete 24/7 Security",
];
const Sell = () => {
  // console.log(featuresData)
  return (
    <section id="sell" aria-labelledby="property-label">
      <div className="sell__container">
        <div className="sell__section">
          <div className="sell__image-container">
            <img src={image} alt="sellImage" />
          </div>
          <div className="sell__info-container">
            <div className="sell__title">
              We Specialize In Quality Home Renovations
            </div>
            <div className="sell__description">
              Looking to renovate your home to reflect your style and
              personality? Look no further than our team of experts who
              specialize in quality home renovations to transform your space
              into a dream home you’ll love. From design to execution.
            </div>
            <div className="sell__features">
              {featuresData &&
                React.Children.toArray(
                  featuresData.map((el) => <Feature title={el} />)
                )}
            </div>
          </div>
        </div>
        <div className="sell__section">
          <div className="sell__info-container2">
            <div className="sell__title">
              We Are Experts In Historic Home Renovations
            </div>
            <div className="sell__description">
              Looking to renovate your home to reflect your style and
              personality? Look no further than our team of experts who
              specialize in quality home renovations to transform your space
              into a dream home you’ll love. From design to execution.
            </div>
            <div className="sell__features">
              {featuresData.map((item, index) => (
                <Feature title={item} />
              ))}
            </div>
          </div>
          <div className="sell__image-container">
            <img src={image2} alt="sellImage" />
          </div>
        </div>
        <div className="sell__section">
          <div className="video-card">
            <IconButton
              isRound={true}
              variant="outline"
              colorScheme="blue"
              // aria-label="Call Sage"
              fontSize="20px"
              icon={<BiPlay />}
            />
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Sell;
