const router = require('express').Router()
const {Activity} = require('../db/models')
module.exports = router

//GET All Activites
router.get('/', async (req, res, next) => {
  try {
    const activities = await Activity.findAll({})
    res.json(activities)
  } catch (err) {
    next(err)
  }
})

//GET single Activity based on ID
router.get('/:activityId', async (req, res, next) => {
  try {
    const activity = await Activity.findAll({
      where: {
        id: req.params.activityId
      }
    })
    res.json(activity)
  } catch (err) {
    next(err)
  }
})

//GET All Activities for a single User
router.get('/user/:userId', async (req, res, next) => {
  try {
    const activity = await Activity.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(activity)
  } catch (err) {
    next(err)
  }
})

//GET All Activities for a single shoe
router.get('/shoe/:shoeId', async (req, res, next) => {
  try {
    const activity = await Activity.findAll({
      where: {
        shoeId: req.params.shoeId
      }
    })
    res.json(activity)
  } catch (err) {
    next(err)
  }
})

//GET All Activities for a single bike
router.get('/bike/:bikeId', async (req, res, next) => {
  try {
    const activity = await Activity.findAll({
      where: {
        bikeId: req.params.bikeId
      }
    })
    res.json(activity)
  } catch (err) {
    next(err)
  }
})
