const router =require('express').Router();
const {User, Blog, Comments}= require('../models');
const withAuth = require('../utils/auth');


router.get('/:id', withAuth , async(req:Request, res:Response)=>{
    console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY')
 
    try{
        const getBlog= await Blog.findByPk(req.params.id,{
            include:[{
                model:User
            }]
        });
        const getComments= await Comments.findAll({
            where:{blogs_id: req.params.id},})
        
            
            console.log(getComments)
            const comments:object= getComments.map((comments)=>comments.get({plain:true}))
            const blog = getBlog.get({plain :true})
       
          
            console.log('halp')
            res.render('blog', {
                blog,
                comments
            })

    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

router.post('/new', withAuth, async (req:Request, res:Response)=>{
    const comment:object=req.body;
    console.log(comment)
    comment.user_name=req.session.user_name;
    console.log(comment)
    const newComment = Comments.create(comment)
    res.status(200).json()

})


module.exports= router

