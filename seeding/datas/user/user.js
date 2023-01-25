'use strict'

const mongoose = require('mongoose')

module.exports = [
  {
    _id: mongoose.Types.ObjectId('5fd5b58efbc2f7a33c2ab002'),
    name: 'Sample User',
    username: 'user',
    email: 'sample.user@gmail.com',
    password: '$2b$10$REr.XuN4P3cxJ51cZDdgHuZ7zVNSxZLOiSgM8euAbIOcjihQ75peO', // Azerty123
    user_type: mongoose.Types.ObjectId('5fd5b58efbc2f7a33c2aa002')
  }
]
