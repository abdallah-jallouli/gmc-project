import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createproperty } from "../../../redux/actions/actionProperty";
import "./addProperty.css";
import { useNavigate } from "react-router-dom";


const UpdateProperty = () => {

    const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [houseDetails, setHouseDetails] = useState({
    pr_address: "",
    pr_price: "",
    pr_description: "",
    pr_size: "",
    pr_num_rooms: "",
    pr_image: "",
    pr_type: "Rent",
    pr_category: "Apartment",
    pr_availability: true,
  });

  ////////////Configuration images
  const fileSelectedHandler = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/upload/up", fd, config);
      console.log(data);

      setHouseDetails((prevDetails) => ({
        ...prevDetails,
        pr_image: data, // Update pr_image field with the returned image data
      }));
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////fin configuration

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHouseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // const handleSubmit = () => {
  //   console.log("House details submitted:", houseDetails);
  // };
  const validateForm = () => {
    const errors = {};
    if (!houseDetails.pr_address) {
      errors.pr_address = "Address is required";
    }
    if (!houseDetails.pr_price) {
      errors.pr_price = "Price is required";
    }
    if (!houseDetails.pr_size) {
      errors.pr_size = "Size is required";
    }
    if (!houseDetails.pr_num_rooms) {
      errors.pr_num_rooms = "Number of rooms is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        await dispatch(createproperty());
        // Clear form fields after successful submission
        setHouseDetails({
          pr_address: "",
          pr_price: "",
          pr_description: "",
          pr_size: "",
          pr_num_rooms: "",
          pr_image: "",
          pr_type: "Rent",
          pr_category: "Apartment",
          pr_availability: true,
        });
        navigate("/profile")
      } catch (error) {
        console.error("Error while submitting:", error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        {/* category */}
        <FormControl id="pr_category">
          <FormLabel className="customFormLabel">Category</FormLabel>
          <Select
            name="pr_category"
            value={houseDetails.pr_category}
            onChange={handleChange}
            className="customSelect"
          >
            <option value="Town House">Town House</option>
            <option value="Apartment">Apartment</option>
            <option value="Farm House">Farm House</option>
          </Select>
        </FormControl>

        {/* type  */}
        <FormControl id="pr_type">
          <FormLabel className="customFormLabel">Category</FormLabel>
          <Select
            name="pr_type"
            value={houseDetails.pr_type}
            onChange={handleChange}
            className="customSelect"
          >
            <option value="Rent">Rent</option>
            <option value="Buy">Buy</option>
          </Select>
        </FormControl>

        {/* address */}
        <FormControl id="pr_address" isInvalid={!!formErrors.pr_address}>
          <FormLabel className="customFormLabel">Address</FormLabel>
          <Input
            type="text"
            name="pr_address"
            value={houseDetails.pr_address}
            onChange={handleChange}
            className="customSelect"
          />
          <FormControl>{formErrors.pr_address}</FormControl>
        </FormControl>

        {/* description */}
        <FormControl id="pr_description">
          <FormLabel className="customFormLabel">Description</FormLabel>
          <Textarea
            name="pr_description"
            value={houseDetails.pr_description}
            onChange={handleChange}
            className="customSelect"
          />
        </FormControl>

        {/* size */}
        <FormControl id="pr_size" isInvalid={!!formErrors.pr_size}>
          <FormLabel className="customFormLabel">Size</FormLabel>
          <Input
            type="number"
            name="pr_size"
            value={houseDetails.pr_size}
            onChange={handleChange}
            className="customSelect"
          />
          <FormControl>{formErrors.pr_size}</FormControl>
        </FormControl>

        {/* number of rooms  */}
        <FormControl id="pr_num_rooms" isInvalid={!!formErrors.pr_num_rooms}>
          <FormLabel className="customFormLabel">Number of Rooms</FormLabel>
          <Input
            type="number"
            name="pr_num_rooms"
            value={houseDetails.pr_num_rooms}
            onChange={handleChange}
            className="customSelect"
          />
          <FormControl>{formErrors.pr_num_rooms}</FormControl>
        </FormControl>

        {/* price */}
        <FormControl id="pr_price" isInvalid={!!formErrors.pr_price}>
          <FormLabel className="customFormLabel">Price</FormLabel>
          <Input
            type="number"
            name="pr_price"
            value={houseDetails.pr_price}
            onChange={handleChange}
            className="customSelect"
          />
          <FormControl>{formErrors.pr_price}</FormControl>
        </FormControl>

        {/* image */}
        <FormControl>
          <FormLabel htmlFor="image" className="customFormLabel">
            Image
          </FormLabel>
          <Input
            id=" image"
            name="image"
            // type="text"
            variant="filled"
            placeholder="image"
            // value={houseDetails.pr_image}
            // onChange={(e) => setImage(e.target.value)}
            type="file"
            onChange={fileSelectedHandler}
            className="customSelect"
          />
        </FormControl>

        <Button
          colorScheme="blue"
          onClick={handleSubmit}
          className="customSelect"
        >
          Submit
        </Button>
      </VStack>
    </Box>
  )
}

export default UpdateProperty