"use strict";
const User = require('./User');
const Blog = require('./Blog');
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});
Blog.belongsTo(User, {
    foreignKey: 'user_id',
});
module.exports = { User, Blog };
