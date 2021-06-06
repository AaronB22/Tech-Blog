const router =require('express').Router();
const withAuth = require('../utils/auth');
const {User, Blog}= require('../models');
const helper= require('../utils/helper')
router.get('/newPost', withAuth, async (req:Request, res:Response)=>{
    res.render('newPost')
})
router.get('/',withAuth, async(req:Request, res:Response)=>{
    console.log(req.session.user_id)
   
    const getUser:object= await User.findByPk(req.session.user_id);

    const getBlog:object= await Blog.findAll({
        where:{user_id:req.session.user_id}
    });

    
    const blog:object= getBlog.map((blog)=>blog.get({plain:true}))
    const user:object = getUser.get({plain :true})
    console.log(blog)
    console.log(user)
    
    res.render('dashboard',{
        user,
        blog
    })
})

router.post('/new', async (req:Request, res:Response)=>{
   const blogInfo:Element= req.body;
   blogInfo.user_id= req.session.user_id;
   console.log(blogInfo)
   const newBlog= await Blog.create(blogInfo);
   res.status(200).json(newBlog)
})

router.get('/delete/:id',async (req:Request, res:Response)=>{
    const deleteBlog= await Blog.findOne({where:{id:req.params.id}})
    console.log(deleteBlog)
    await deleteBlog.destroy()
    res.redirect('/dashboard')
})


module.exports= router