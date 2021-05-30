const routers = require('express').Router();
const {User, Blog}= require('../models')

routers.get('/',async (req:Request, res:Response)=>{
    try{
        const getBlogs= await Blog.findAll({
            include:[
                {
                    model:User
                }
            ]
        })
        const getUsers= await User.findAll()
        const user:object= getUsers.map((users)=>users.get({plain:true}))
        const blog:object= getBlogs.map((blog)=>blog.get({plain:true}))
        
        
        res.render('home',{
            user,
            blog
        })
    },
    catch(err){
        res.status(500).json(err)
    }
  
})

module.exports = routers