const express = require('express')
const router = express.Router()

// add product
router.post('add_product', add_product)
// update product
router.post('update_product/:id', update_product)
// delete product 
router.post('delete_product/:id', delete_product)
// get all product
router.get('get_all_product', get_all_product)
