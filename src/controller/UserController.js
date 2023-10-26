import userAPIService from '../service/userAPIService'

const read = async (req, res) => {
    try {
        let users = await userAPIService.getAllUsers()

        return res.status(200).json({
            errMessage: users.errMessage,
            errCode: users.errCode,
            data: users.data
        })
    } catch (err) {
        console.error(err)
        return res.status(500).json({
            errMessage: 'Error from server...',
            errCode: '-1',  
            data: ''
        })
    }
}

const create = async (req, res) => {
    try {

    } catch (err) {
        console.error(err)
        return res.status(500).json({
            errMessage: 'Error from server...',
            errCode: '-1',
            data: ''
        })
    }
}

const update = (req, res) => {
    try {

    } catch (err) {
        console.error(err)
        return res.status(500).json({
            errMessage: 'Error from server...',
            errCode: '-1',
            data: ''
        })
    }
}

const deleted = (req, res) => {
    try {

    } catch (err) {
        console.error(err)
        return res.status(500).json({
            errMessage: 'Error from server...',
            errCode: '-1',
            data: ''
        })
    }
}

module.exports = {
    read,
    create,
    update,
    deleted
}