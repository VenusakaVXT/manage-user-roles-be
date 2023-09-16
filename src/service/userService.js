import mySql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import bluebird from 'bluebird'
import { user, password } from '../connect/connect'

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

// Instead of executing the callback async, we execute each command line sync
const getListUsers = async () => {
    // create the connection, specify bluebird as Promise
    const connection = await mySql.createConnection({
        host: 'localhost',
        user: user,
        password: password,
        database: 'role_management',
        Promise: bluebird
    })

    let users = []

    // Get data
    // connection.query(
    //     'SELECT * FROM users',
    //     function (err, results, fields) {
    //         if (err) {
    //             console.error(err)
    //             return users
    //         }
    //         users = results
    //         return users
    //     }
    // )

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users')
        return rows
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    createNewUser,
    getListUsers
}