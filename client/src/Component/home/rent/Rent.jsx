import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react"; // Import useTheme hook to access the theme
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./rent.css";
import { useDispatch, useSelector } from "react-redux";
import { getLastPropertys } from "../../../redux/actions/actionProperty";
import PropertyCard from "../../propertyCard/PropertyCard";
import { Link } from "react-router-dom";

const Rent = () => {
  const theme = useTheme(); // Access the theme
  const {propertys}  = useSelector((state) => state.propertyReducer);
  console.log("propertys : ", propertys)

  const dispatch = useDispatch();
  //useeffect
  useEffect(() => {
    dispatch(getLastPropertys());
  }, []);

  return (
    <section id="rent" className="section" aria-labelledby="property-label">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <h2 className="section-title">Best home in your city</h2>
            <p className="section-text">
              Lorem ipsum dolor sit amet consectetur. In quisque scelerisque
              eget id facilisis. Aliquam in libero egestas at dolor sit amet
              consectetur.
            </p>
          </div>

          <div>
            <Link to="/ListPropertys">
              <Button
                color={theme.colors.brand["100"]}
                variant="outline"
                fontSize="xl"
                size="lg"
              >
                <span>Explore More </span>
                <ArrowOutwardIcon />
              </Button>
            </Link>
          </div>
        </div>
        <div className="list">
          {propertys &&
          React.Children.toArray(
            propertys.map((el) => <PropertyCard property={el} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Rent;
