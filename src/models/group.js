"use strict"

import { Model } from "sequelize"

module.exports = (sequelize, DataTypes) => {
    class Group extends Model {
        static associate(models) {
            // relationship 1..n
            Group.hasMany(models.Users)
            // relationship n..n
            Group.belongsToMany(models.Role, { through: "GroupRole" })
        }
    }
    Group.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: "Group",
    })
    return Group
}