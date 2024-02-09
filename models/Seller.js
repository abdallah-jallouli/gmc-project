//Attributes: sellerID, propertiesListed[], etc.
//Methods: listProperty(), removeProperty(), updatePropertyDetails(), etc.

const mongoose = require('mongoose')
const schema = mongoose.Schema;

const sellerSchema = new schema({
    propertiesListed : []
})

module.exports=mongoose.model("Seller",sellerSchema)
