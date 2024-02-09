//Attributes: paymentID, amount, paymentDate, paymentMethod, status, etc.
//Methods: processPayment(), verifyPayment(), generateInvoice(), etc.

const mongoose = require('mongoose')
const schema = mongoose.Schema;

const paymentSchema  = new schema({
    paymentID : String,
    amount : Number ,
    paymentDate : Date ,
    paymentMethod : String ,
    status : {
        type : Boolean , 
        default : true
    }
})

module.exports=mongoose.model("Payment",paymentSchema)