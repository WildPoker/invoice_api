/**
 * The utils function for managing the product_acquisition
 * @module utils/product_acquisition
 */
'use strict'

const path = require('path')
const filename = path.basename(__filename, '.js')
const dbs = require('@src/dbs/' + filename)
const Product_Acquisition = require('@src/models/' + filename)

/**
 * Manage the mutations for the question model
 **/
module.exports = {
  /**
   * @param {Object} args - Containing the info of the product_acquisition
   */
  add_product_acquisition: async (args) => {
    // Check if the email is a real one
    return dbs.insert(args)
  },
  /**
   * Get an product_acquisition by id
   * @return {Object[]} The product_acquisition found or null
   **/
  get_product_acquisition: async () => {
    return await dbs.get_product_acquisition()
  },
  /**
   * Get an product_acquisition by id
   * @param {String} id The id of the product_acquisition to search
   * @return {Object} The product_acquisition found or null
   **/
  get_product_acquisition_by_id: async (id) => {
    // Get the product_acquisition
    const product_acquisition = await dbs.get_product_acquisition_by_id(id)
    if (product_acquisition === null) {
      return { error: 'The id you provided is invalid' }
    }
    return product_acquisition
  },
  /**
   * populate an product_acquisition
   * @return {Object} The product_acquisition found or null
   **/
  populate_product_acquisition: async (data) => {
    return await dbs.populate_product_acquisition(data)
  },
  /**
   * Test if the product_acquisition is an instance of product_acquisition
   * @param {Object} product_acquisition The object product_acquisition to test
   * @return {boolean} True if it's an object product_acquisition or else false
   **/
  is_instanceof_product_acquisition: (product_acquisition) => {
    return product_acquisition instanceof Product_Acquisition
  }
}
