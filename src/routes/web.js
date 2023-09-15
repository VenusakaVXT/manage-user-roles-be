import express from 'express'
import { 
    handleRender, 
    handleUsers,
    handleCreateNewUser
} from '../controller/HomeController'

const router = express.Router()

const initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello World!!!')
    })
    router.get('/about', handleRender)
    router.get('/users', handleUsers)
    router.post('/users/create-user', handleCreateNewUser)

    return app.use('/', router)
}

export default initWebRoutes