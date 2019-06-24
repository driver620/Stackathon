const Sequelize = require('sequelize')
const db = require('../db')

const Acitvity = db.define('activity', {
  name: {
    type: Sequelize.STRING
  },
  distance: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Acitvity
