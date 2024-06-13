"use strict"

import { Model } from "sequelize"

module.exports = (sequelize, DataTypes) => {
    class ProjectUser extends Model {
        static associate(models) {
            // define association here
        }
    }
    ProjectUser.init({
        projectId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: "ProjectUser",
    })
    return ProjectUser
}