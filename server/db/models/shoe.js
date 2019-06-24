const Sequelize = require('sequelize')
const db = require('../db')

const Shoe = db.define('shoe', {
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
    type: Sequelize.INTEGER
  }
})

module.exports = Shoe
