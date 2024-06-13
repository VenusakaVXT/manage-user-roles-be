import registerLoginService from "../service/registerLoginService"

const mockApi = (req, res) => {
    return res.status(200).json({ message: "OK", data: "mock api" })
}

const handleRegister = async (req, res) => {
    try {
        if (!req.body.email || !req.body.numPhone || !req.body.password) {
            return res.status(200).json({
                errMessage: "Missing required parameters",
                errCode: "1",
                data: ""
            })
        }

        if (req.body.password && req.body.password.length < 4) {
            return res.status(200).json({
                errMessage: "Your password must have more than 3 letters",
                errCode: "1",
                data: ""
            })
        }

        let dataContainer = await registerLoginService.registerNewUser(req.body)

        return res.status(200).json({
            errMessage: dataContainer.errMessage,
            errCode: dataContainer.errCode,
            data: ""
        })
    } catch {
        return res.status(500).json({
            errMessage: "Error from server...",
            errCode: "-1",
            data: ""
        })
    }
}

const handleLogin = async (req, res) => {
    try {
        let dataLogin = await registerLoginService.handleUserLogin(req.body)

        return await res.status(200).json({
            errMessage: dataLogin.errMessage,
            errCode: dataLogin.errCode,
            data: dataLogin.data
        })
    } catch {
        return res.status(500).json({
            errMessage: "Error from server...",
            errCode: "-1",
            data: ""
        })
    }
}

module.exports = {
    mockApi,
    handleRegister,
    handleLogin
}