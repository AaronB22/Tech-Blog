"use strict";
const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Blog } = require('../models');
const helper = require('../utils/helper');
router.get('/newPost', withAuth, async (req, res) => {
    res.render('newPost');
});
router.get('/', withAuth, async (req, res) => {
    console.log(req.session.user_id);
    const getUser = await User.findByPk(req.session.user_id);
    const getBlog = await Blog.findAll({
        where: { user_id: req.session.user_id }
    });
    const blog = getBlog.map((blog) => blog.get({ plain: true }));
    const user = getUser.get({ plain: true });
    console.log(blog);
    console.log(user);
    res.render('dashboard', {
        user,
        blog
    });
});
router.post('/new', async (req, res) => {
    const blogInfo = req.body;
    blogInfo.user_id = req.session.user_id;
    console.log(blogInfo);
    const newBlog = await Blog.create(blogInfo);
    res.status(200).json(newBlog);
});
router.get('/delete/:id', async (req, res) => {
    const deleteBlog = await Blog.findOne({ where: { id: req.params.id } });
    console.log(deleteBlog);
    await deleteBlog.destroy();
    res.redirect('/dashboard');
});
module.exports = router;
