const router =require('express').Router();

const dashBoard= require('./dashboard')
const homeRoutes= require('./homeRoutes');
const loginRoutes= require('./logIn')
const blog= require('./blog')

router.use('/', homeRoutes);
router.use('/dashboard', dashBoard)
router.use('/login', loginRoutes)
router.use('/blog' blog)

module.exports = router;