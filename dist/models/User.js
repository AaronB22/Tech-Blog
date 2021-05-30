"use strict";
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
class User extends Model {
}
User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            len: [8],
        },
    },
}, {
    // hooks: {
    //     beforeCreate: async (newUserData) => {
    //       newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //       return newUserData;
    //     },
    //   },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});
module.exports = User;
