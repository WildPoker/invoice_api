/**
 * Module for managing the dbs for product
 * @module dbs/product
 */
'use strict'

const path = require('path')
const filename = path.basename(__filename, '.js')
const model = require('@src/models/' + filename)

module.exports = {
  /**
   * Call mongodb for adding an product to the database
   * @param {product} product The product to add to the database
   * @return {product} The product added with the id
   **/
  insert: (product) => {
    return model.create(product)
  },
  /**
   * Call mongodb for getting an product by id
   * @param {String} id The id to search
   * @return {product[]} The product found or null
   **/
  get_product: () => {
    return model.find()
  },
  /**
   * Call mongodb for getting an product by id
   * @param {String} id The id to search
   * @return {product} The product found or null
   **/
  get_product_by_id: (id) => {
    return model.findOne({ _id: id })
  },
  /**
   * Update a document in mongodb respecting the condtion
   * @param {Object} filter The condition the document has to respect
   * @param {Object} update The update to apply
   * @return {product} The document updated or null
   **/
  update_by_id: (_id, update) => {
    return model.findOneAndUpdate({ _id: _id }, update, { new: true })
  }
}
