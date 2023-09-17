import mySql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import bluebird from 'bluebird'
import { user, password } from '../connect/connect'

const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)

const hashPassword = (userPassword) => {
    return bcrypt.hashSync(userPassword, salt)
}

const createNewUser = async (email, username, pass) => {
    let hashUserPassword = hashPassword(pass)

    const connection = await mySql.createConnection({
        host: 'localhost',
        user: user,
        password: password,
        database: 'role_management',
        Promise: bluebird
    })

    // Insert data
    try {
        const [rows, fields] = await connection.execute(
            'INSERT INTO users(email, username, password) VALUES(?, ?, ?)',
            [email, username, hashUserPassword]
        )
    } catch (err) {
        console.error(err)
    }
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

    // Get data
    // let users = []

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

const deleteUser = async (id) => {
    const connection = await mySql.createConnection({
        host: 'localhost',
        user: user,
        password: password,
        database: 'role_management',
        Promise: bluebird
    })

    // Delete data
    try {
        const [rows, fields] = await connection.execute(
            'DELETE FROM users WHERE id=?',
            [id]
        )
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    createNewUser,
    getListUsers,
    deleteUser
}