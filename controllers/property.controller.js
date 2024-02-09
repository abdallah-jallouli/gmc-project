// add_property()
exports.add_property = async (req, res) => {
  const {
    pr_address,
    pr_price,
    pr_description,
    pr_size,
    pr_num_rooms,
    pr_image,
    pr_category,
    pr_availability,
  } = req.body;

  try {
    // new property 
    const newProperty = new Property({
        pr_address,
        pr_price,
        pr_description,
        pr_size,
        pr_num_rooms,
        pr_image,
        pr_category,
        pr_availability,
      });
      // save the new property
      await newProperty.save();
      res.status(200).send(newProperty);
  } catch (error) {
    res.status(504).json({ msg: error.message });
  }
};

//getPropertyDetails()
exports.getPropertyDetails = async (req, res) => {
  try {
    const propertyDetails = await Property.findById(req.params._id);
    res.status(204).send(propertyDetails);
  } catch (error) {
    res.status(504).json({ msg: error.message });
  }
};

// setPropertyAvailability()
exports.setPropertyAvailability = async (req, res) => {
  try {
    const updateAvailability = await User.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    res.status(204).send(updateAvailability);
  } catch (error) {
    res.status(504).json({ msg: error.message });
  }
};

// updatePropertyDetails()
exports.updatePropertyDetails = async (req, res) => {
  try {
    const updatePropertyDetails = await User.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    res.status(204).send(updatePropertyDetails);
  } catch (error) {
    res.status(504).json({ msg: error.message });
  }
};
