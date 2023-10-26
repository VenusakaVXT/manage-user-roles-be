import db from '../models/index'

const getAllUsers = async () => {
    try {
        let users = await db.Users.findAll({
            attributes: ["id", "username", "email", "numPhone", "gender"],
            include: { model: db.Group, attributes: ["name", "description"]}
        })

        if (users) {
            // let data = users.get({ plain: true })
            return {
                errMessage: 'Get data success...',
                errCode: 0,
                data: users
            }
        } else {
            return {
                errMessage: 'Get data success...',
                errCode: 0,
                data: []
            }
        }
    } catch (err) {
        console.error(err)
        return {
            errMessage: 'Something wrongs with service...',
            errCode: 1,
            data: []
        }
    }
}

const createNewUser = async (data) => {
    try {
        await db.Users.create()
    } catch(err) {
        console.error(err)
    }
}

const updateUser = async (data) => {
    try {
        let user = await db.Users.findOne({
            where: { id: data.id }
        })

        if (user) {
            // update user
            
            user.save({

            })
        } else {
            // not found user
        }
    } catch(err) {
        console.error(err)
    }
}

const deleteUser = async (id) => {
    try {
        await db.Users.delete({
            where: {id}
        })
    } catch(err) {
        console.error(err)
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}