const express = require("express")
const app = express()
PORT = 5000

app.use(express.json())

// routers
const mainRouters = require('./routes/MainRoutes')
app.use(mainRouters)
//LISTENING
app.listen(PORT, console.log('express is working'))