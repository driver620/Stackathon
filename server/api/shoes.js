const router = require('express').Router()
const {Shoe} = require('../db/models')
module.exports = router

//GET All Shoes
router.get('/', async (req, res, next) => {
  try {
    const shoes = await Shoe.findAll({})
    res.json(shoes)
  } catch (err) {
    next(err)
  }
})

//GET single Shoe based on ID
router.get('/:shoeId', async (req, res, next) => {
  try {
    const shoe = await Shoe.findAll({
      where: {
        id: req.params.shoeId
      }
    })
    res.json(shoe)
  } catch (err) {
    next(err)
  }
})

//GET All Shoes for a single User
router.get('/user/:userId', async (req, res, next) => {
  try {
    const shoes = await Shoe.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(shoes)
  } catch (err) {
    next(err)
  }
})
