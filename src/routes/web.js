import express from 'express'
import HomeController from '../controller/HomeController'
import APIController from '../controller/APIController'

const router = express.Router()

const initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello World!!!')
    })
    router.get('/about', HomeController.handleRender)
    router.get('/users', HomeController.handleUsers)
    router.post('/users/create-user', HomeController.handleCreateNewUser)
    router.post('/delete-user/:id', HomeController.handleDeleteUser)
    router.get('/update-user/:id', HomeController.getUpdateUserPage)
    router.post('/users/update-user', HomeController.handleUpdateUser)

    // Mock API
    router.get('/api/test-api', APIController.mockApi)

    return app.use('/', router)
}

export default initWebRoutes