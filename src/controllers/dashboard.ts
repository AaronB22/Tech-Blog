const router =require('express').Router();
router.get('/newPost', async (req:Request, res:Response)=>{
    res.render('newPost')
})


module.exports= router