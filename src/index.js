import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoutes from './routes/web'
import bodyParser from 'body-parser'
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

// Config view engine
configViewEngine(app)

// Config body-parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Initial web routes
initWebRoutes(app)

app.listen(PORT, () => {
    console.log(`Run project on url localhost:${PORT}`)
})