import db from '../models/index'
import bcrypt from 'bcryptjs'
import { Op } from 'sequelize'

const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)

const hashPassword = (userPassword) => {
    return bcrypt.hashSync(userPassword, salt)
}

const checkEmailExist = async (userEmail) => {
    let user = await db.Users.findOne({
        where: { email: userEmail }
    })

    if (user) {
        return true
    }

    return false
}

const checkPhoneNumExist = async (userPhoneNumber) => {
    let user = await db.Users.findOne({
        where: { numPhone: userPhoneNumber }
    })

    if (user) {
        return true
    }

    return false
}


const registerNewUser = async (rawUserData) => {
    try {
        // Check email, phone are exist
        let isEmailExist = await checkEmailExist(rawUserData.email)
        let isPhoneNumExist = await checkPhoneNumExist(rawUserData.numPhone)

        if (isEmailExist === true) {
            return {
                errMessage: 'Email already exists...',
                errCode: '1' // other than 0
            }
        }

        if (isPhoneNumExist === true) {
            return {
                errMessage: 'Phone number already exists...',
                errCode: '1' // other than 0
            }
        }

        // Hash User Password
        let hashUserPassword = hashPassword(rawUserData.password)

        // Create New User
        await db.Users.create({
            email: rawUserData.email,
            numPhone: rawUserData.numPhone,
            username: rawUserData.username,
            password: hashUserPassword
        })

        return {
            errMessage: 'A user is created successfully!!!',
            errCode: '0'
        }

    } catch (err) {

        console.error(err)

        return {
            errMessage: 'Something wrong in service...',
            errCode: '-2'
        }
    }
}

const checkPassword = (inputPassword, hashPassword) => {
    return bcrypt.compareSync(inputPassword, hashPassword)
}

const handleUserLogin = async (rawUserData) => {
    try {
        let valueLogin = rawUserData.accName
        let user = await db.Users.findOne({
            where: {
                [Op.or]: [
                    { email: valueLogin },
                    { numPhone: valueLogin }
                ]
            }
        })

        // Check that user information is correctly queried when that user logs in
        console.log('check user javascript obj: ', user.get({plain: true}))
        console.log('check user sequelize obj: ', user)
    
        if (user) {
            let isCorrectPassword = checkPassword(rawUserData.password, user.password)
            if (isCorrectPassword === true) {
                return {
                    errMessage: 'OK!',
                    errCode: '0',
                    data: ''
                }
            }
        }

        return {
            errMessage: 'Your email/phone number or password is incorrect!',
            errCode: '1',
            data: ''
        }
        
    } catch(err) {
        console.error(err)

        return {
            errMessage: 'Something wrong in service...',
            errCode: '-2'
        }
    }
}

module.exports = {
    registerNewUser,
    handleUserLogin
}