/**
 * @module Invoice This module will handle regarding invoice route
 */

'use strict'

const response = require('@src/libs/response')
const rn = require('random-id')
const utils_invoice = require('@src/services/utils/invoice')
const utils_product_acquisition = require('@src/services/utils/product_acquisition')
const utils_authentication = require('@src/services/utils/authentication')

module.exports = {
  /**
   * @Route This route will handle the create of invoice
   */
  create: async (req, res) => {
    const args = req.body
    const rn_length = 6
    const rn_pattern = '000'

    args.invoice_number = rn(rn_length, rn_pattern)
    args.invoice_user = (await utils_authentication.verify_token_from_header(req.headers)).id
    const products_acquisition = await Promise.all(
      args.products_acquisition.map((id) => {
        return utils_product_acquisition.get_product_acquisition_by_id(id)
      })
    )

    args.total_amount = products_acquisition.reduce((a, b) => +a + +b.price, 0)
    const created_product_acquisition = await utils_invoice.add_invoice(args)
    return response.other(res, 200, { message: 'Successfully Created a invoice', created_product_acquisition })
  },
  /**
   * @Route This route will handle the create of invoice
   */
  edit: async (req, res) => {
    const args = req.body
    const invoice_id = req.params.id

    const user_id = (await utils_authentication.verify_token_from_header(req.headers)).id

    const invoice = await utils_invoice.get_invoice_by_id(invoice_id)

    if (invoice.invoice_user.toString() !== user_id) {
      return response.other(res, 403, { message: 'You do not have the authority to edit this invoice' })
    }

    const products_acquisition = await Promise.all(
      args.products_acquisition.map((id) => {
        return utils_product_acquisition.get_product_acquisition_by_id(id)
      })
    )

    args.invoice_id = invoice_id
    args.total_amount = products_acquisition.reduce((a, b) => +a + +b.price, 0)
    const updated_product_acquisition = await utils_invoice.update_invoice_by_id(invoice.id, args)
    console.log(updated_product_acquisition)
    return response.other(res, 200, { message: 'Successfully updated a invoice', updated_product_acquisition })
  },
  /**
   * @Route This route will handle the get of invoice
   */
  get_all: async (req, res) => {
    const invoices = await utils_invoice.get_invoice()

    return response.other(res, 200, { message: 'Successfully retrieved all invoice', invoices })
  },
  /**
   * @Route This route will handle the get of invoice
   */
  get: async (req, res) => {
    const id = req.params.id

    const invoice = await utils_invoice.get_invoice_by_id(id)
    return response.other(res, 200, { message: 'Successfully retrieved a invoice', invoice })
  },
  /**
   * @Route This route will handle the get of invoice
   */
  delete: async (req, res) => {
    const id = req.params.id

    await utils_invoice.delete_invoice_by_id(id)
    return response.other(res, 200, { message: 'Successfully deleted a invoice' })
  }
}
