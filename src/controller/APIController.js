const mockApi = (req, res) => {
    return res.status(200).json({
        message: 'OK',
        data: 'mock api'
    })
}

const handleRegister = (req, res) => {
    console.log('check: ', req.body)
}

module.exports = {
    mockApi,
    handleRegister
}