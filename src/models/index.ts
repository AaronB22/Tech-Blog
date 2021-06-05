const User:object= require('./User');
const Blog:object=require('./Blog')
const Comments:object= require('./Comments')

User.hasMany(Blog,{
    foreignKey:'user_id',
    onDelete:'Cascade'
})

Blog.belongsTo(User,{
    foreignKey:'user_id',
})

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

module.exports = {User, Blog, Comments}