import React from "react";
import avatar1 from "../../../images/avatar-1.jpg";
import avatar2 from "../../../images/avatar-2.jpg";
import avatar3 from "../../../images/avatar-3.jpg";
import avatar4 from "../../../images/avatar-4.jpg";

import story1 from "../../../images/story-1.jpg";
import story2 from "../../../images/story-2.jpg";
import story3 from "../../../images/story-3.jpg";
import story4 from "../../../images/story-4.jpg";
import story5 from "../../../images/story-5.jpg";
import story6 from "../../../images/story-6.jpg";

import storyAvatar1 from "../../../images/story-avatar-1.jpg";
import storyAvatar2 from "../../../images/story-avatar-2.jpg";
import storyAvatar3 from "../../../images/story-avatar-3.jpg";
import storyAvatar4 from "../../../images/story-avatar-4.jpg";
import storyAvatar5 from "../../../images/story-avatar-5.jpg";
import storyAvatar6 from "../../../images/story-avatar-6.jpg";

import { FaStar } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./buy.css";

const Buy = () => {
  const theme = useTheme();

  return (
    <section id="buy" className="section story">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle title-medium">Our Customers</p>
            <h2 className="section-title headline-medium">
              We Help 1000+ Family Find Their True Home
            </h2>

            <ul className="avatar-list">
              <li className="avatar">
                <img
                  src={avatar1}
                  width="120"
                  height="80"
                  loading="lazy"
                  alt="john smith"
                  className="img-cover"
                />
                <img
                  src={avatar2}
                  width="120"
                  height="80"
                  loading="lazy"
                  alt="jahn simth"
                  className="img-cover"
                />
                <img
                  src={avatar3}
                  width="120"
                  height="80"
                  loading="lazy"
                  alt="john smith"
                  className="img-cover"
                />
                <img
                  src={avatar4}
                  width="120"
                  height="80"
                  loading="lazy"
                  alt="jahn simth"
                  className="img-cover"
                />

                <div className="overlay-content">
                  <span className="label-medium">99+</span>
                </div>
              </li>
            </ul>
          </div>
          <Button
            color={theme.colors.brand["100"]}
            variant="outline"
            fontSize="xl"
            size="lg"
          >
            <span>View All Storie</span>
            <ArrowOutwardIcon />
          </Button>
        </div>

        <ul className="story-list">
          {/* Render story cards */}
          {renderStoryCard("Chris Traeger", story1, storyAvatar1)}
          {renderStoryCard("Duke Silver", story2, storyAvatar2)}
          {renderStoryCard("Tsukasa Aoi", story3, storyAvatar3)}
          {renderStoryCard("Freida Varnes", story4, storyAvatar4)}
          {renderStoryCard("Carl Lorthner", story5, storyAvatar5)}
          {renderStoryCard("Marci Senter", story6, storyAvatar6)}
        </ul>
      </div>
    </section>
  );
};

function renderStoryCard(name, backgroundImage, avatarImage) {
  return (
    <li
      className="story-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <a href="#" className="overlay-content">
        <div>
          <h3 className="titel-small">{name}</h3>

          <div className="rating-wrapper">
            {/* Render star icons */}
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className="material-symbols-rounded"
                aria-hidden="true"
              >
                <FaStar />
              </span>
            ))}

            <data className="title-samll rating-text" value="5.0"></data>
          </div>
        </div>

        <figure className="card-avatar">
          <img
            src={avatarImage}
            width="56"
            height="56"
            loading="lazy"
            alt={name}
            className="img-cover"
          />
        </figure>
      </a>
    </li>
  );
}

export default Buy;
