const router = require('express').Router()
const {Bike} = require('../db/models')
module.exports = router

//GET All Bikes
router.get('/', async (req, res, next) => {
  try {
    const bikes = await Bike.findAll({})
    res.json(bikes)
  } catch (err) {
    next(err)
  }
})

//GET single Bike based on ID
router.get('/:bikeId', async (req, res, next) => {
  try {
    const bike = await Bike.findAll({
      where: {
        id: req.params.bikeId
      }
    })
    res.json(bike)
  } catch (err) {
    next(err)
  }
})

//GET All Bikes for a single User
router.get('/user/:userId', async (req, res, next) => {
  try {
    const bikes = await Bike.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(bikes)
  } catch (err) {
    next(err)
  }
})
