const express = require('express')
const app = express()
const PORT = 5000 || process.env.PORT

//template engine
app.set('view engine', 'ejs')
//static middleware / router 
app.use(express.static('public'))
//router
const mainRoutes = require('./routes/MainRoutes')
const productsRoute = require('./routes/ProductsRoute')
app.use(mainRoutes)
app.use(productsRoute)
//Listening
app.listen(PORT, console.log(`Express working`))