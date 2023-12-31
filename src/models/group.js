'use strict'
import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
    class Group extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Relationship 1..n
            Group.hasMany(models.Users)
            // Relationship n..n
            Group.belongsToMany(models.Role, { through: 'GroupRole' })
        }
    }
    Group.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Group',
    })
    return Group
}