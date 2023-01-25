/**
 * The utils function for managing the product
 * @module utils/product
 */
'use strict'

const path = require('path')
const filename = path.basename(__filename, '.js')
const dbs = require('@src/dbs/' + filename)
const Product = require('@src/models/' + filename)

/**
 * Manage the mutations for the question model
 **/
module.exports = {
  /**
   * Get an product by id
   * @return {Object[]} The product found or null
   **/
  get_product: async () => {
    return await dbs.get_product()
  },
  /**
   * Get an product by id
   * @param {String} id The id of the product to search
   * @return {Object} The product found or null
   **/
  get_product_by_id: async (id) => {
    // Get the product
    const product = await dbs.get_product_by_id(id)
    if (product === null) {
      return { error: 'The id you provided is invalid' }
    }
    return product
  },
  /**
   * Test if the product is an instance of product
   * @param {Object} product The object product to test
   * @return {boolean} True if it's an object product or else false
   **/
  is_instanceof_product: (product) => {
    return product instanceof Product
  }
}
