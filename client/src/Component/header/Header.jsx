import React from "react";
import "./header.css";
import mainHouse from "../../images/hero.png";
import { MdRealEstateAgent } from "react-icons/md";
import { MdOutlineGite } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const header = () => {
  return (
    <div>
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="conteaner-text">
              <h1 className="headling-large hero-title">
                Find a place where you can be yourself.
              </h1>
              <p className="body-large hero-text">
                If you're looking for a place where you can be yourself, don't
                give up. Keep searching until you find a place that feels like
                home.
              </p>
            </div>

            <form action="./" method="get" className="search-bar">
              <label className="search-item">
                <span className="label-medium lable">Want to</span>

                <select
                  name="want-to"
                  className="search-item-field body-meduim"
                >
                  <option value="buy" selected>
                    Buy
                  </option>
                  <option value="sell">Sell</option>
                  <option value="rent">Rent</option>
                </select>

                <span className="material-symbols-rounded" aria-hidden="true">
                  <MdRealEstateAgent />
                </span>
              </label>

              <label className="search-item">
                <span className="label-medium lable">Property type</span>

                <select
                  name="property-type"
                  className="search-item-field body-meduim"
                >
                  <option value="any" selected>
                    Any
                  </option>
                  <option value="houses">Houses</option>
                  <option value="apartments">Apartments</option>
                  <option value="villa">Villa</option>
                  <option value="townhome">Townhome</option>
                  <option value="bungalow">Bungalow</option>
                  <option value="loft">Loft</option>
                </select>

                <span className="material-symbols-rounded" aria-hidden="true">
                <MdOutlineGite/>
                </span>
              </label>

              <label className="search-item">
                <span className="label-medium lable">Location</span>

                <input
                  type="text"
                  name="location"
                  placeholder="Street, City, Zip..."
                  className="search-item-field body-meduim"
                />

                <span className="material-symbols-rounded" aria-hidden="true">
                  <IoLocationOutline/>
                </span>
              </label>

              <button type="submit" className="search-btn" aria-hidden="true">
                <span className="material-symbols-rounded" aria-hidden="true">
                  search
                </span>

                <span className="label-medium">Search</span>
              </button>
            </form>
          </div>

          <img
            src={mainHouse}
            alt="mainImage"
            width="816"
            height="659"
            role="presentation"
            className="hero-banner"
          />
        </div>
      </section>
    </div>
  );
};

export default header;
