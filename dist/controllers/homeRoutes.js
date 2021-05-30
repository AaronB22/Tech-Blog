"use strict";
const routers = require('express').Router();
const { User, Blog } = require('../models');
routers.get('/', async (req, res) => {
    try {
        const getBlogs = await Blog.findAll({
            include: [
                {
                    model: User
                }
            ]
        });
        const getUsers = await User.findAll();
        const user = getUsers.map((users) => users.get({ plain: true }));
        const blog = getBlogs.map((blog) => blog.get({ plain: true }));
        res.render('home', {
            user,
            blog
        });
    }
    finally { }
    try {
    }
    catch (err) {
        res.status(500).json(err);
    }
});
module.exports = routers;
