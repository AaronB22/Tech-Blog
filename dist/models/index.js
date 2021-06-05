"use strict";
const User = require('./User');
const Blog = require('./Blog');
const Comments = require('./Comments');
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});
Blog.belongsTo(User, {
    foreignKey: 'user_id',
});
// // Comments.belongsTo(Blog,{
// //     foreignKey:' blogs_id'
// // })
// // Blog.hasMany(Comments, {
// //     foreignKey:'blog_id'
// // })
// User.hasMany(Comments,{
//     foreignKey:'user_id',
//     onDelete:'Cascade'
// })
// Comments.belongsTo(User,{
//     foreignKey:'user_id',
//     onDelete:'Cascade'
// })
module.exports = { User, Blog, Comments };
