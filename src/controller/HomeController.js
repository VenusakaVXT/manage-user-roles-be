import mySql from 'mysql2'
import { user, password } from '../connect/connect'

const connection = mySql.createConnection({
    host: 'localhost',
    user: user,
    password: password,
    database: 'role_management'
})

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

    // Get data
    connection.query(
        'INSERT INTO users(email, username, password) VALUES(?, ?, ?)',
        [email, username, password],
        function (err, results, fields) {
            if (err) {
                console.error(err)
            }
            console.log(results)
        }
    )

    return res.send('Add User...')
}

module.exports = {
    handleRender,
    handleUsers,
    handleCreateNewUser
}