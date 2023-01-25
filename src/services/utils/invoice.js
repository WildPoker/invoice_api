/**
 * The utils function for managing the invoice
 * @module utils/invoice
 */
'use strict'

const path = require('path')
const filename = path.basename(__filename, '.js')
const dbs = require('@src/dbs/' + filename)
const Invoice = require('@src/models/' + filename)

/**
 * Manage the mutations for the question model
 **/
module.exports = {
  /**
   * @param {Object} args - Containing the info of the invoice
   */
  add_invoice: async (args) => {
    return dbs.insert(args)
  },
  /**
   * Get an invoice by id
   * @return {Object[]} The invoice found or null
   **/
  get_invoice: async (id) => {
    return await dbs.get_invoice(id)
  },
  /**
   * @param {Object} args - Containing the info of the invoice
   */
  update_invoice_by_id: async (id, args) => {
    return dbs.update_by_id(id, args)
  },
  /**
   * @param {Object} id - Containing the info of the invoice
   */
  delete_invoice_by_id: async (id) => {
    return dbs.delete_invoice_by_id(id)
  },
  /**
   * Get an invoice by id
   * @param {String} id The id of the invoice to search
   * @return {Object} The invoice found or null
   **/
  get_invoice_by_id: async (id) => {
    const invoice = await dbs.get_invoice_by_id(id)
    if (invoice === null) {
      return { error: 'The id you provided is invalid' }
    }
    return invoice
  },
  /**
   * populate an invoice
   * @return {Object} The invoice found or null
   **/
  populate_invoice: async (data) => {
    return await dbs.populate_invoice(data)
  },
  /**
   * Test if the invoice is an instance of invoice
   * @param {Object} invoice The object invoice to test
   * @return {boolean} True if it's an object invoice or else false
   **/
  is_instanceof_invoice: (invoice) => {
    return invoice instanceof Invoice
  }
}
