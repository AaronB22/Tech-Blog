const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const User:object=require('./User')

class Blog extends Model{}

Blog.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        txtContent:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        title:{
            type:DataTypes.STRING
            allowNull:false,
        },
        user_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'user',
                key:'id'
            }
        },
        datePosted:{
            type: DataTypes.STRING,
            // allowNull:false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
    }
)

module.exports= Blog