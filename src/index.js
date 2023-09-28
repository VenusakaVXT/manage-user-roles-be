import express from 'express'
import configViewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'
import initApiRoutes from './routes/api'
import configCors from './config/cors'
import bodyParser from 'body-parser'
// import connection from './config/connectDB'
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

// Fix Cross-origin resource sharing
configCors(app)

// Config view engine
configViewEngine(app)

// Config body-parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Initial routes
initWebRoutes(app)
initApiRoutes(app)

// Test connection
// connection()

app.listen(PORT, () => {
    console.log(`Run project on url localhost:${PORT}`)
})