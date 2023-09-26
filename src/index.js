import express from 'express'
import configViewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'
import bodyParser from 'body-parser'
// import connection from './config/connectDB'
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL)

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)

    // Pass to next layer of middleware
    next()
})

// Config view engine
configViewEngine(app)

// Config body-parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Initial web routes
initWebRoutes(app)

// Test connection
// connection()

app.listen(PORT, () => {
    console.log(`Run project on url localhost:${PORT}`)
})