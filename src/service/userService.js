import bcrypt from "bcryptjs"
import db from "../models/index"

const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)

const hashPassword = (userPassword) => {
    return bcrypt.hashSync(userPassword, salt)
}

const createNewUser = async (email, username, pass) => {
    let hashUserPassword = hashPassword(pass)

    /*
    const connection = await mySql.createConnection({
        host: "localhost",
        user: user,
        password: password,
        database: "role_management",
        Promise: bluebird
    })

    try {
        const [rows, fields] = await connection.execute(
            "INSERT INTO users(email, username, password, createdAt, updatedAt) VALUES(?, ?, ?, ?, ?)",
            [email, username, hashUserPassword, new Date(), new Date()]
        )
    } catch (err) {
        console.error(err)
    }
    */

    try {
        await db.Users.create({ email, username, password: hashUserPassword })
    } catch (err) {
        console.error(err)
    }
}

const getListUsers = async () => {
    let newUser = await db.Users.findOne({
        where: { id: 1 },
        attributes: ["id", "username", "email"],
        include: {
            model: db.Group,
            attributes: ["name", "description"],
        },
        raw: true,
        nest: true
    })

    let roles = await db.Role.findAll({
        include: {
            model: db.Group,
            where: { id: 1 }
        },
        raw: true,
        nest: true
    })

    console.log(newUser, roles)

    let users = []
    users = await db.Users.findAll()
    return users

    /*
    const connection = await mySql.createConnection({
        host: "localhost",
        user: user,
        password: password,
        database: "role_management",
        Promise: bluebird
    })
    */

    // let users = []

    // connection.query(
    //     "SELECT * FROM users",
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
    try {
        const [rows, fields] = await connection.execute("SELECT * FROM users")
        return rows
    } catch (err) {
        console.error(err)
    }
    */
}

const deleteUser = async (id) => {
    await db.Users.destroy({ where: { id } })

    /*
    const connection = await mySql.createConnection({
        host: "localhost",
        user: user,
        password: password,
        database: "role_management",
        Promise: bluebird
    })

    try {
        const [rows, fields] = await connection.execute(
            "DELETE FROM users WHERE id=?",
            [id]
        )
    } catch (err) {
        console.error(err)
    }
    */
}

const getUserInfoById = async (id) => {
    let users = {}
    users = await db.Users.findOne({
        where: { id }
    })
    return users

    /*
    const connection = await mySql.createConnection({
        host: "localhost",
        user: user,
        password: password,
        database: "role_management",
        Promise: bluebird
    })

    try {
        const [rows, fields] = await connection.execute(
            "SELECT * FROM users WHERE id=?",
            [id]
        )
        return rows
    } catch (err) {
        console.error(err)
    }
    */
}

const updateUserInfo = async (email, username, id) => {
    await db.Users.update({ email, username }, {
        where: { id }
    })

    /*
    const connection = await mySql.createConnection({
        host: "localhost",
        user: user,
        password: password,
        database: "role_management",
        Promise: bluebird
    })

    try {
        const [rows, fields] = await connection.execute(
            "UPDATE users SET email=?, username=? WHERE id=?",
            [email, username, id]
        )
        return rows
    } catch (err) {
        console.error(err)
    }
    */
}

module.exports = {
    createNewUser,
    getListUsers,
    deleteUser,
    getUserInfoById,
    updateUserInfo
}