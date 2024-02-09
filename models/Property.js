const mongoose = require("mongoose");
const schema = mongoose.Schema;

const hoductSchema = new schema({
  pr_address: String,
  pr_price: Number,
  pr_description: String,
  pr_size: Number,
  pr_num_rooms: Number,
  pr_image: String,
  pr_category: {
    type: String,
    categories: ["Town House", "Apartment", "Farm House"],
    default: "Apartment",
  },
  pr_availability: {
    type: Boolean,
    default: true,
  },
});

