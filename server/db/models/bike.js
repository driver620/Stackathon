const Sequelize = require('sequelize')
const db = require('../db')

const Bike = db.define('bike', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  primary: {
    type: Sequelize.BOOLEAN
  },
  distance: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Bike
