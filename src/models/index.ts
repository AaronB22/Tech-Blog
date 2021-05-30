const User:object= require('./User');
const Blog:object=require('./Blog')

User.hasMany(Blog,{
    foreignKey:'user_id',
    onDelete:'Cascade'
})

Blog.belongsTo(User,{
    foreignKey:'user_id',
})

module.exports = {User, Blog}