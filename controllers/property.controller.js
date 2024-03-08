const Property = require("../models/Property");

// add_property()
exports.add_property = async (req, res) => {
  const {
    pr_user_id,
    pr_address,
    pr_price,
    pr_description,
    pr_size,
    pr_num_rooms,
    pr_image,
    pr_type,
    pr_category,
    pr_availability,
  } = req.body;

  try {
    // new property 
    const newProperty = new Property({
        pr_user_id,
        pr_address,
        pr_price,
        pr_description,
        pr_size,
        pr_num_rooms,
        pr_image,
        pr_type,
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

//get all propertys
exports.getAllPropertys = async (req, res) => {
  try {
    const allPropertys = await Property.find();
    allPropertys
      ? res.status(201).json(allPropertys)
      : res.status(401).json({ msg: "getAll error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//getOneProperty()
exports.getOneProperty = async (req, res) => {
  try {
    const propertyDetails = await Property.findById(req.params.id);
    res.status(200).json(propertyDetails)
  } catch (error) {
    res.status(504).json({ msg: error.message });
  }
};


//getLastPropertys()
exports.getLastPropertys = async (req, res) => {
  try {
    const lastPropertys = await Property.find().sort({ _id: -1 }).limit(12); 
    res.status(201).json(lastPropertys);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//getUserPropertys()
exports.getUserPropertys = async (req, res) => {
  try {
    const userId = req.params.userId; 
    const userPropertys = await Property.find({ pr_user_id: userId });
    res.status(200).json(userPropertys); 
  } catch (error) {
    res.status(500).json({ msg: error.message }); 
  }
};

// deleteProperty()
exports.deleteProperty = async (req, res) => {
  try {
    const deleteProperty = await Property.findByIdAndDelete(req.params.id);
    if (!deleteProperty) {
      return res.status(404).json({ msg: "Property not found" });
    }
    // res.status(200).json({ msg: "Property Deleted Successfully" });
    res.status(200).json({ msg: "Property Deleted Successfully", id: req.params.id });

  } catch (error) {
    res.status(500).json({ msg: error.message });
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

// updateProperty()
exports.updateProperty = async (req, res) => {
  try {
    const updateProperty = await User.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    res.status(204).send(updateProperty);
  } catch (error) {
    res.status(504).json({ msg: error.message });
  }
};
