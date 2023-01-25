/**
 * The endpoint of the express app
 * @module routes/product
 */
'use strict'

const express = require('express')
const router = express.Router()
const ctrl_product = require('@src/controllers/product')

const { isLoggedIn } = require('@src/middleware/authentication')

/**
 * Route for get all products
 */
router.get('/product', isLoggedIn, ctrl_product.get_all)

/**
 * Route for get products
 */
router.get('/product/:id', isLoggedIn, ctrl_product.get)

module.exports = router
