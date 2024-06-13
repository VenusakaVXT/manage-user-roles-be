"use strict"

import { Model } from "sequelize"

module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        static associate(models) {
            // relationship 1..1
            Users.belongsTo(models.Group)
            // relationship n..n
            Users.belongsToMany(models.Project, { through: "ProjectUser" })
        }
    }
    Users.init({
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        gender: DataTypes.STRING,
        address: DataTypes.STRING,
        numPhone: DataTypes.STRING,
        groupId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: "Users",
    })
    return Users
}