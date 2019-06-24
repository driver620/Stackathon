const User = require('./user')
const Bike = require('./bike')
const Shoe = require('./shoe')
const Activity = require('./activity')

Bike.belongsTo(User)
Shoe.belongsTo(User)
Activity.belongsTo(User)
Activity.belongsTo(Shoe)
Activity.belongsTo(Bike)
User.hasMany(Activity)
User.hasMany(Bike)
User.hasMany(Shoe)

Shoe.hasMany(Activity)
Bike.hasMany(Activity)

module.exports = {
  User,
  Bike,
  Shoe,
  Activity
}

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
