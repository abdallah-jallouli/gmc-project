const mongoose = require("mongoose");
const schema = mongoose.Schema;

const propertySchema = new schema({
  pr_user_id : String,
  pr_address: String,
  pr_price: Number,
  pr_description: String,
  pr_size: Number,
  pr_num_rooms: Number,
  pr_image: String,
  pr_type : {
    type : String , 
    categories : ["Buy" , "Rent"],
    default : "Rent"
  },
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

module.exports = mongoose.model("Property", propertySchema);


