/**
 * @module Product_Acquisition This module will handle regarding product_acquisition route
 */

'use strict'

const response = require('@src/libs/response')
const utils_product_acquisition = require('@src/services/utils/product_acquisition')
const utils_product = require('@src/services/utils/product')

module.exports = {
  /**
   * @Route This route will handle the get of all product_acquisition
   */
  get_all: async (req, res) => {
    try {
      const product_acquisitions = await utils_product_acquisition.get_product_acquisition()

      return response.other(res, 200, { message: 'Successfully retrieved all product_acquisitions', product_acquisitions })
    } catch (error) {
      return response.error(res, 400, 'Fail to request')
    }
  },
  /**
   * @Route This route will handle the get of product_acquisition
   */
  get: async (req, res) => {
    try {
      const id = req.params.id

      const product_acquisition = await utils_product_acquisition.get_product_acquisition_by_id(id)
      return response.other(res, 200, { message: 'Successfully retrieved a product_acquisition', product_acquisition })
    } catch (error) {
      return response.error(res, 400, 'Fail to request')
    }
  },
  /**
   * @Route This route will handle the get of product_acquisition
   */
  create: async (req, res) => {
    try {
      const args = req.body

      const product = await utils_product.get_product_by_id(args.product_id)

      if (!product) {
        return response.other(res, 404, { message: 'Product ID provided does not exist' })
      }

      args.price = product.price * args.quantity
      args.product = product._id

      const created_product_acquisition = await utils_product_acquisition.add_product_acquisition(args)

      const populated_product_acquisition = await utils_product_acquisition.populate_product_acquisition(created_product_acquisition)
      return response.other(res, 200, { message: 'Successfully retrieved a product_acquisition', populated_product_acquisition })
    } catch (error) {
      return response.error(res, 400, 'Fail to request')
    }
  }
}
