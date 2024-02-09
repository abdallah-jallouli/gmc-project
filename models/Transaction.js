//Attributes: transactionID, propertyID, buyerID, sellerID, transactionDate, amount, etc.
//Methods: initiateTransaction(), processPayment(), generateReceipt(), etc.

const mongoose = require('mongoose')
const schema = mongoose.Schema;

const transactionSchema = new schema({
    propertyID: String ,
    buyerID : String , 
    sellerID : String , 
    transactionDate : Date , 
    amount : Number , 
})

module.exports=mongoose.model("Transaction",transactionSchema)