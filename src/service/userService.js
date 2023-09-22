import mySql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import bluebird from 'bluebird'
import { user, password } from '../connect/connect'
import db from '../models/index'

const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)

const hashPassword = (userPassword) => {
    return bcrypt.hashSync(userPassword, salt)
}

const createNewUser = async (email, username, pass) => {
    let hashUserPassword = hashPassword(pass)

    /*
    // Cmt back to the old one when not using ORM
    const connection = await mySql.createConnection({
        host: 'localhost',
        user: user,
        password: password,
        database: 'role_management',
        Promise: bluebird
    })

    try {
        const [rows, fields] = await connection.execute(
            'INSERT INTO users(email, username, password, createdAt, updatedAt) VALUES(?, ?, ?, ?, ?)',
            [email, username, hashUserPassword, new Date(), new Date()]
        )
    } catch (err) {
        console.error(err)
    }
    */

    // Insert data
    try {
        await db.Users.create({
            email,
            username,
            password: hashUserPassword
        })
    } catch (err) {
        console.error(err)
    }
}

// Instead of executing the callback async, we execute each command line sync
const getListUsers = async () => {
    let users = []
    users = await db.Users.findAll()
    return users

    // create the connection, specify bluebird as Promise
    /*
    const connection = await mySql.createConnection({
        host: 'localhost',
        user: user,
        password: password,
        database: 'role_management',
        Promise: bluebird
    })
    */

    // Get data old
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

    /*
    // Cmt back to the old one when not using ORM
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users')
        return rows
    } catch (err) {
        console.error(err)
    }
    */
}

const deleteUser = async (id) => {
    await db.Users.destroy({
        where: { id }
    })

    /*
    // Cmt back to the old one when not using ORM
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
    */
}

const getUserInfoById = async (id) => {
    const connection = await mySql.createConnection({
        host: 'localhost',
        user: user,
        password: password,
        database: 'role_management',
        Promise: bluebird
    })

    try {
        const [rows, fields] = await connection.execute(
            'SELECT * FROM users WHERE id=?',
            [id]
        )
        return rows
    } catch (err) {
        console.error(err)
    }
}

const updateUserInfo = async (email, username, id) => {
    const connection = await mySql.createConnection({
        host: 'localhost',
        user: user,
        password: password,
        database: 'role_management',
        Promise: bluebird
    })

    try {
        const [rows, fields] = await connection.execute(
            'UPDATE users SET email=?, username=? WHERE id=?',
            [email, username, id]
        )
        return rows
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    createNewUser,
    getListUsers,
    deleteUser,
    getUserInfoById,
    updateUserInfo
}