/**
 * The endpoint of the express app
 * @module routes/product_acquisition
 */
'use strict'

const express = require('express')
const router = express.Router()
const ctrl_product_acquisition = require('@src/controllers/product_acquisition')

const { isLoggedIn } = require('@src/middleware/authentication')

/**
 * Route for get all product_acquisitions
 */
router.get('/product_acquisition', isLoggedIn, ctrl_product_acquisition.get_all)

/**
 * Route for get product_acquisitions
 */
router.get('/product_acquisition/:id', isLoggedIn, ctrl_product_acquisition.get)

/**
 * Route for get product_acquisitions
 */
router.post('/product_acquisition', isLoggedIn, ctrl_product_acquisition.create)

module.exports = router
