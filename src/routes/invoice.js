/**
 * The endpoint of the express app
 * @module routes/authentication
 */
'use strict'

const express = require('express')
const router = express.Router()
const ctrl_invoice = require('@src/controllers/invoice')

const { isLoggedIn } = require('@src/middleware/authentication')
/**
 * Route for create invoice
 */
router.post('/invoice', isLoggedIn, ctrl_invoice.create)
/**
 * Route for edit invoice
 */
router.patch('/invoice/:id', isLoggedIn, ctrl_invoice.edit)
/**
 * Route for get all invoice
 */
router.get('/invoice', isLoggedIn, ctrl_invoice.get_all)
/**
 * Route for get invoice
 */
router.get('/invoice/:id', isLoggedIn, ctrl_invoice.get)
/**
 * Route for delete invoice
 */
router.delete('/invoice/:id', isLoggedIn, ctrl_invoice.delete)
module.exports = router
