"use strict";
const router = require('express').Router();
const { User, Blog } = require('../models');
router.get('/', async (req, res) => {
    res.render('login');
});
router.post('/login', async (req, res) => {
    try {
        console.log(req.body.email, req.body.password);
        const userData = await User.findOne({ where: { email: req.body.email } });
        if (!userData) {
            res.status(404).json({ message: 'Login failed. Wrong Email OR Password.' });
            return;
        }
        if (userData) {
            console.log('true');
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json({ message: 'Welcome!' });
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
router.get('/logOut', async (req, res) => {
    try {
    }
    catch (err) {
        res.status(500).json(err);
    }
});
router.post('/createUser', async (req, res) => {
    try {
        console.log(req.body);
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
router.get('/signUp', async (req, res) => {
    try {
        res.render('signUp');
    }
    catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
