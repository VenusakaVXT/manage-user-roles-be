import express from 'express'
import HomeController from '../controller/HomeController'

const router = express.Router()

const initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello World!!!')
    })
    router.get('/about', HomeController.handleRender)
    router.get('/users', HomeController.handleUsers)
    router.post('/users/create-user', HomeController.handleCreateNewUser)
    router.post('/delete-user/:id', HomeController.handleDeleteUser)

    return app.use('/', router)
}

export default initWebRoutes