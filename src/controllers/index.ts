const router =require('express').Router();

const dashBoard= require('./dashboard')
const homeRoutes= require('./homeRoutes');
const loginRoutes= require('./logIn')

router.use('/', homeRoutes);
router.use('/dashboard', dashBoard)
router.use('/login', loginRoutes)

module.exports = router;