import userService from '../service/userService'

const handleRender = (req, res) => {
    const myName = 'VENUS'
    return res.render('home.ejs', { myName })
}

const handleUsers = async (req, res) => {
    // Log list user
    let lstUser = await userService.getListUsers()
    return res.render('user.ejs', {lstUser})
}

const handleCreateNewUser = async (req, res) => {
    let email = req.body.email
    let username = req.body.username
    let password = req.body.password
    
    userService.createNewUser(email, username, password)
    return res.redirect('/users')
}

const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id)
    return res.redirect('/users')
}

module.exports = {
    handleRender,
    handleUsers,
    handleCreateNewUser,
    handleDeleteUser
}