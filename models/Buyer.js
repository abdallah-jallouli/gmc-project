//Attributes: buyerID, preferences, budget, etc.
//Methods: searchProperties(), makeOffer(), viewPropertyDetails(), etc.

const mongoose = require('mongoose')
const schema = mongoose.Schema ; 

// prefereces can be table of type houses (i think)
const buyerSchema = new schema({
    preferences : String ,
    budget : Number 
})

module.exports=mongoose.model("Buyer",buyerSchema)