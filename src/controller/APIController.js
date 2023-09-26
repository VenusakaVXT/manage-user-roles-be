const mockApi = (req, res) => {
    return res.status(200).json({
        message: 'OK',
        data: 'mock api'
    })
}

module.exports = {
    mockApi
}