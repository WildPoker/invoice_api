/**
 * The models of the user
 * @module models/user
 */
'use strict'

const mongoose = require('mongoose')
const path = require('path')
const filename = path.basename(__filename, '.js')

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    user_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user_type',
      required: true
    },
    is_active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    collection: filename,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    admin_bro: {
      listProperties: ['username', 'user_type', 'email', 'name', 'password', 'is_active']
    }
  }
)

module.exports = mongoose.model(filename, schema)
