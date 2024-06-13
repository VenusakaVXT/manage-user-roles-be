import express from "express"
import APIController from "../controller/APIController"
import UserController from "../controller/UserController"

const router = express.Router()

const initApiRoutes = (app) => {
    router.get("/test-api", APIController.mockApi)
    router.post("/register", APIController.handleRegister)
    router.post("/login", APIController.handleLogin)
    router.get("/users/read", UserController.read)
    router.post("/users/create", UserController.create)
    router.put("/users/update", UserController.update)
    router.delete("/users/delete", UserController.deleted)
    return app.use("/api/v1/", router)
}

export default initApiRoutes