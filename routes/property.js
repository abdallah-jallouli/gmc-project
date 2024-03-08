const express = require('express')
const { add_property,getAllPropertys,getOneProperty,getLastPropertys,getUserPropertys,deleteProperty,updateProperty } = require('../controllers/property.controller')
const router = express.Router()




// add property
router.post('/add_property', add_property)

// get all propertys
router.get('/getAllPropertys', getAllPropertys)

//getOneProperty()
router.get('/getOneProperty/:id' , getOneProperty)

//getLastPropertys()
router.get('/getLastPropertys' , getLastPropertys)

//getUserPropertys()
router.get('/getUserPropertys/:userId' , getUserPropertys)

// deleteProperty()
router.post('/deleteProperty/:id', deleteProperty)

//updateProperty()
router.post('updateProperty/:id', updateProperty)

// //setPropertyAvailability()
// router.post('setPropertyAvailability/:id',setPropertyAvailability)



module.exports = router;
