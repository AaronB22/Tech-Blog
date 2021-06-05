const router = require('express').Router();
const {User, Blog}= require('../models');
const bcrypt= require('bcrypt')
const withAuth = require('../utils/auth');

router.get('/', async (req:Request, res:Response)=>{
    res.render('login')
})


router.post('/login', async (req:Request, res:Response)=>{
    try {
        
        // console.log(req.body.email, req.body.password)
        
        const userInfo = await User.findOne({ where: 
            {email: req.body.email} });
            
        const validatePassword= await bcrypt.compare(
            req.body.password,
            userInfo.password
        );
        if (!validatePassword || !userInfo){
            console.log('log in failure')
            res.status(401).json({message:'Incorrect Email or Password'})
            return;
        }   
        
            console.log('true')
            
            // console.log(req.session.logged_in)
             req.session.save(()=>{
                req.session.logged_in = true;
                req.session.user_id = userInfo.id;
                req.session.user_name= userInfo.user_name
                console.log(req.session.user_id)
                console.log(req.session.logged_in)
                res.status(200).json({ message: 'Logged In' });
            })
        
    }
    catch(err){
        res.status(500).json(err)
    }
})
router.get('/logOut',  async (req:Request, res:Response)=>{
    if (req.session.logged_in) {
        console.log('Loggin Out')
        req.session.destroy(() => {
            res.status(200).json()
        });
      } else {
          console.log('Not logged in')
        res.status(200).json()
      }
})

router.post('/createUser', async (req:Request, res:Response)=>{
    try{
        console.log(req.body)
        const userData = await User.create(req.body);
        
        res.status(200).json(userData)
    }
    catch(err){
        res.status(500).json(err)
    }
})

router.get('/signUp', async (req:Request, res:Response)=>{
    try{
        res.render('signUp')
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports= router