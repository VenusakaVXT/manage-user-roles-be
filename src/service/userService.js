import mySql from 'mysql2'
import bcrypt from 'bcryptjs'
import { user, password } from '../connect/connect'

const connection = mySql.createConnection({
    host: 'localhost',
    user: user,
    password: password,
    database: 'role_management'
})

const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)

const hashPassword = (userPassword) => {
    return bcrypt.hashSync(userPassword, salt)
}

const createNewUser = (email, username, password) => {
    let hashUserPassword = hashPassword(password)

    // Insert data
    connection.query(
        'INSERT INTO users(email, username, password) VALUES(?, ?, ?)',
        [email, username, hashUserPassword],
        function (err, results, fields) {
            if (err) {
                console.error(err)
            }
            console.log(results)
        }
    )
}

const getListUsers = () => {
    // Get data
    connection.query(
        'SELECT * FROM users',
        function (err, results, fields) {
            if (err) {
                console.error(err)
            }
            console.log(results)
        }
    )
}

module.exports = {
    createNewUser,
    getListUsers
}