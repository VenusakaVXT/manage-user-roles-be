import express from 'express'
import { handleRender, handleUsers } from '../controller/TestController'

const router = express.Router()

const initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello World!!!')
    })
    router.get('/about', handleRender)
    router.get('/users', handleUsers)

    return app.use('/', router)
}

export default initWebRoutes