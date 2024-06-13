"use strict"

import { Model } from "sequelize"

module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        static associate(models) {
            // relationship n..n
            Role.belongsToMany(models.Group, { through: "GroupRole" })
        }
    }
    Role.init({
        url: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "Role",
    })
    return Role
}