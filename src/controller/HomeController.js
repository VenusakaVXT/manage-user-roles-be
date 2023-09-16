import userService from '../service/userService'

const handleRender = (req, res) => {
    const myName = 'VENUS'
    return res.render('home.ejs', { myName })
}

const handleUsers = (req, res) => {
    return res.render('user.ejs')
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email
    let username = req.body.username
    let password = req.body.password
    
    userService.createNewUser(email, username, password)

    // Log list user
    userService.getListUsers()

    return res.send('Add User...')
}

module.exports = {
    handleRender,
    handleUsers,
    handleCreateNewUser
}