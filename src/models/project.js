"use strict"

import { Model } from "sequelize"

module.exports = (sequelize, DataTypes) => {
    class Project extends Model {
        static associate(models) {
            // relationship n..n
            Project.belongsToMany(models.Users, { through: "ProjectUser" })
        }
    }
    Project.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        startDate: DataTypes.STRING,
        customerId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: "Project",
    })
    return Project
}