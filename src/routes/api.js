import express from 'express'
import APIController from '../controller/APIController'

const router = express.Router()

const initApiRoutes = (app) => {
    // Mock API
    router.get('/test-api', APIController.mockApi)
    router.post('/register', APIController.handleRegister)
    router.post('/login', APIController.handleLogin)

    return app.use('/api/v1/', router)
}

export default initApiRoutes