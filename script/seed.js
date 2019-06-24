'use strict'

const db = require('../server/db')
const {User, Shoe, Bike, Activity} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'daniel@email.com', password: '225'})
  ])

  const shoes = await Promise.all([
    Shoe.create({
      name: 'ASICS Flux 5',
      primary: false,
      distance: 1000,
      userId: 1
    }),
    Shoe.create({
      name: 'ASICS Kayano',
      primary: true,
      distance: 900,
      userId: 1
    }),
    Shoe.create({
      name: 'Alpha Bounce',
      primary: false,
      distance: 1277,
      userId: 2
    }),
    Shoe.create({name: 'Swifts', primary: false, distance: 529, userId: 2}),
    Shoe.create({
      name: 'Red Bulls',
      primary: false,
      distance: 12035,
      userId: 3
    }),
    Shoe.create({name: 'Air Walkers', primary: true, distance: 7800, userId: 3})
  ])

  const bikes = await Promise.all([
    Bike.create({name: 'Cycle 7', primary: true, distance: 12000, userId: 1}),
    Bike.create({
      name: 'Speedster',
      primary: true,
      distance: 120000,
      userId: 2
    }),
    Bike.create({
      name: 'Speedster X',
      primary: true,
      distance: 45000,
      userId: 2
    })
  ])

  const activities = await Promise.all([
    Activity.create({
      name: 'Happy Friday',
      distance: 500,
      userId: 1,
      shoeId: 1
    }),
    Activity.create({
      name: 'Happy Saturday',
      distance: 500,
      userId: 1,
      shoeId: 2
    }),
    Activity.create({name: 'Slow Ride', distance: 6000, userId: 1, bikeId: 1}),
    Activity.create({
      name: 'Sunday Training',
      distance: 6000,
      userId: 1,
      bikeId: 1
    }),
    Activity.create({name: 'Casual', distance: 1277, userId: 2, shoeId: 3}),
    Activity.create({
      name: 'Super Casual',
      distance: 529,
      userId: 2,
      shoeId: 4
    }),
    Activity.create({name: 'Training', distance: 45000, userId: 2, bikeId: 2}),
    Activity.create({
      name: 'Training Pt2',
      distance: 45000,
      userId: 2,
      bikeId: 2
    }),
    Activity.create({name: 'Training', distance: 12035, userId: 3, shoeId: 5}),
    Activity.create({name: 'Casual', distance: 3500, userId: 3, shoeId: 6}),
    Activity.create({name: 'Warming Up', distance: 4300, userId: 3, shoeId: 6})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${shoes.length} shoes`)
  console.log(`seeded ${bikes.length} bikes`)
  console.log(`seeded ${activities.length} activities`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
