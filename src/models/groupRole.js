"use strict"

import { Model } from "sequelize"

module.exports = (sequelize, DataTypes) => {
    class GroupRole extends Model {
        static associate(models) {
            // define association here
        }
    }
    GroupRole.init({
        groupId: DataTypes.INTEGER,
        roleId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: "GroupRole",
    })
    return GroupRole
}