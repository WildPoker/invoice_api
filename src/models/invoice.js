/**
 * The models of the invoice
 * @module models/invoice
 */
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

const schema = new mongoose.Schema(
  {
    invoice_number: {
      type: Number,
      required: true
    },
    invoice_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    products_acquisition: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product_acquisition'
      }
    ],
    total_amount: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    collection: filename,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

module.exports = mongoose.model(filename, schema)
