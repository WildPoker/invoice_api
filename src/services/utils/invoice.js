/**
 * The utils function for managing the invoice
 * @module utils/invoice
 */
'use strict'

const path = require('path')
const utils_password = require('@src/services/utils/password')
const utils_email = require('@src/services/utils/email')
const filename = path.basename(__filename, '.js')
const dbs = require('@src/dbs/' + filename)
const Model = require('@src/models/' + filename)
const invoices = require('@seeding/datas/invoice/invoice')

/**
 * Manage the mutations for the question model
 **/
module.exports = {
  /**
   * @param {Object} args - Containing the info of the invoice
   */
  add_invoice: async (args) => {
    // Check if the email is a real one
    const validate_email = utils_email.check_email(args.email)
    if (!validate_email) return { error: 'The email you provided is invalid' }
    // Check if a invoice already exist with the email provided
    const is_email_already_exist = await module.exports.is_invoice_exist_by_email(args.email)
    if (is_email_already_exist) return { error: 'The email you provided is already used' }
    // Check if the password is strong
    const check_password = await utils_password.check_password_strong_enough(args.password)
    if (check_password.error) return check_password

    // Hash the password
    args.password = await utils_password.hash_password(args.password)
    const invoice = new Model(args)
    return dbs.insert(invoice)
  },
  /**
   * Get an invoice by id
   * @param {String} id The id of the invoice to search
   * @return {Object} The invoice found or null
   **/
  get_invoice_by_id: async (id) => {
    // Get the invoice
    const invoice = await dbs.get_invoice_by_id(id)
    if (invoice === null) {
      return { error: 'The id you provided is invalid' }
    }
    return invoice
  },
  /**
   * Get an invoice by invoicename or email
   * @param {String} login The invoicename or email to search
   * @return {Object} The invoice found or null
   **/
  get_invoice_by_login: async (login) => {
    return dbs.get_invoice_by_login(login)
  },
  /**
   * Test the email if a invoice exist in the db with this email
   * @param {String} email The email to test
   * @return {boolean} True if the invoice exist or else False
   **/
  is_invoice_exist_by_email: async (email) => {
    return dbs.test_invoice_by_email(email)
  },
  /**
   * Insert many invoice
   */
  insert_many_invoice: async () => {
    const invoice_list = await dbs.get_all()
    if (invoice_list.length) {
      await module.exports.drop_collection()
    }
    await dbs.insert_many(invoices)
    return invoices
  },
  /**
   * @returns Drop the collection of invoice
   */
  drop_collection: async () => {
    return await dbs.drop_collection()
  },
  /**
   * Test if the invoice is an instance of invoice
   * @param {Object} invoice The object invoice to test
   * @return {boolean} True if it's an object invoice or else false
   **/
  is_instanceof_invoice: (invoice) => {
    return invoice instanceof Model
  }
}
