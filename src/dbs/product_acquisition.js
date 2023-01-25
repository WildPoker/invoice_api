/**
 * Module for managing the dbs for product_acquisition
 * @module dbs/product_acquisition
 */
'use strict'

const path = require('path')
const filename = path.basename(__filename, '.js')
const model = require('@src/models/' + filename)

module.exports = {
  /**
   * Call mongodb for adding an product_acquisition to the database
   * @param {product_acquisition} product_acquisition The product_acquisition to add to the database
   * @return {product_acquisition} The product_acquisition added with the id
   **/
  insert: (product_acquisition) => {
    return model.create(product_acquisition)
  },
  /**
   * Call mongodb for getting an product_acquisition by id
   * @param {String} id The id to search
   * @return {product_acquisition[]} The product_acquisition found or null
   **/
  get_product_acquisition: () => {
    return model.find()
  },
  /**
   * Call mongodb for getting an product_acquisition by id
   * @param {String} id The id to search
   * @return {product_acquisition} The product_acquisition found or null
   **/
  get_product_acquisition_by_id: (id) => {
    return model.findOne({ _id: id })
  },
  /**
   * Update a document in mongodb respecting the condtion
   * @param {Object} filter The condition the document has to respect
   * @param {Object} update The update to apply
   * @return {product_acquisition} The document updated or null
   **/
  update_by_id: (_id, update) => {
    return model.findOneAndUpdate({ _id: _id }, update, { new: true })
  }
}
