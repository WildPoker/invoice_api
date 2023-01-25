'use strict'

const mongoose = require('mongoose')

module.exports = [
  {
    _id: mongoose.Types.ObjectId('5fd5b58efbc2f7a33c2ab002'),
    name: 'Sample User',
    username: 'user',
    email: 'sample.user@gmail.com',
    password: '$2a$12$DKMu7LzygASxg8MqsIxbRenQ/FO1Y.E2DVqqY3Dn9qVXn26kN56JW', // Azerty123
    user_type: mongoose.Types.ObjectId('5fd5b58efbc2f7a33c2aa002')
  }
]
