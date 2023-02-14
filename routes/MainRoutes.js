const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Title'
  })
})

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Title'
  })
})


module.exports = router