const express = require("express")
const dotenv = require('dotenv')
require('dotenv').config()
require('./config/dbConnect')
const app = express()

//middlewares
//routes
//error handlers middlewares
//listen to server

const PORT = process.env.PORT || 9000
app.listen(PORT, console.log(`Server is up  and running on ${PORT}`))
