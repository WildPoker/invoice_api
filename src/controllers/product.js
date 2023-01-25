/**
 * @module Product This module will handle regarding product route
 */

'use strict'

const response = require('@src/libs/response')
const utils_product = require('@src/services/utils/product')

module.exports = {
  /**
   * @Route This route will handle the get of product
   */
  get_all: async (req, res) => {
    try {
      const products = await utils_product.get_product()

      return response.other(res, 200, { message: 'Successfully retrieved all products', products })
    } catch (error) {
      return response.error(res, 400, 'Fail to request')
    }
  },
  /**
   * @Route This route will handle the get of product
   */
  get: async (req, res) => {
    try {
      const id = req.params.id

      const product = await utils_product.get_product_by_id(id)
      return response.other(res, 200, { message: 'Successfully retrieved a product', product })
    } catch (error) {
      return response.error(res, 400, 'Fail to request')
    }
  }
}
