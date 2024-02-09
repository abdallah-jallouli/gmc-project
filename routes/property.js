const express = require('express')
const { getPropertyDetails, setPropertyAvailability, updatePropertyDetails, add_property } = require('../controllers/property.controller')
const router = express.Router()




// add property
router.post('add_property', add_property)

// // delete property 
// router.post('delete_property/:id', delete_property)
// // get all property
// router.get('get_all_property', get_all_property)

//getPropertyDetails()
router.get('getPropertyDetails' , getPropertyDetails)

//setPropertyAvailability()
router.post('setPropertyAvailability/:id',setPropertyAvailability)

//updatePropertyDetails()
router.post('updatePropertyDetails/:id', updatePropertyDetails)