import express from 'express'
import handleRender from '../controller/TestController'

const router = express.Router()

const initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello World!!!')
    })

    router.get('/about', handleRender)

    return app.use('/', router)
}

export default initWebRoutes