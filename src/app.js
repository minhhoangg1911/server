const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')

const app = express()


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

// init routes
app.get('/', (req, res, next) => {
    console.log('323232')
    const strCompress = 'Hello Factipjs'
    return res.status(500).json({
        message: 'Welcome Fantipjs!',
        metadata: strCompress.repeat(10000)
    })
})

// handling error

module.exports = app 