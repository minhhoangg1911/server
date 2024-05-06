require('dotenv').config()
const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')

const app = express()

// console.log(`Process`,process.env)

// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// morgan("compile")
// morgan("common")
// morgan("short")
// morgan("tiny")
// morgan("dev")

// init db
require('./dbs/init.mongodb')
// const {checkOverLoad} = require('./helpers/check.connect')
// checkOverLoad()
// init routes
app.get('/', (req, res, next) => {
    
    const strCompress = 'Hello Factipjs'
    return res.status(200).json({
        message: 'Welcome Fantipjs!',
        // metadata: strCompress.repeat(10000)
    })
})

// handling error

module.exports = app 