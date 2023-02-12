const router = require("express").Router()

// index
router.get('/', (req, res) => {
  res.send('ello people')
})

//about
router.get('/about', (req, res) => {
  res.send('ello people its about')
})
