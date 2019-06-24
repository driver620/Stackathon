const Sequelize = require('sequelize')
const db = require('../db')

const Acitvity = db.define('activity', {
  distance: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Acitvity
