"use strict";
const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Blog } = require('../models');
const helper = require('../utils/helper');
router.get('/newPost', withAuth, async (req, res) => {
    res.render('newPost');
});
router.get('/', withAuth, async (req, res) => {
    // const date=helper(Date)
    let date = new Date();
    const format_date = (datetime) => {
    };
    const user = await User.findByPk(req.session.user_id);
    const blog = await Blog.findByPk(req.session.user_id);
    res.render('dashboard', {
        user,
        blog
    });
});
router.post('/new', async (req, res) => {
    const blogInfo = req.body;
    blogInfo.user_id = req.session.user_id;
    const newBlog = await Blog.create(blogInfo);
    res.status(200).json(newBlog);
});
module.exports = router;
