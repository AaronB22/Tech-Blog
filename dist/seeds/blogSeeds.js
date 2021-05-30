"use strict";
const Blog = require('../models/Blog');
const BlogData = [
    {
        txtContent: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus quisquam aperiam temporibus? Accusantium, soluta ducimus,',
        user_id: 1,
        title: "Lorem"
    },
    {
        txtContent: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus quisquam aperiam temporibus? Accusantium, soluta ducimus,',
        user_id: 2,
        title: "Cool Title"
    },
    {
        txtContent: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus quisquam aperiam temporibus? Accusantium, soluta ducimus,',
        user_id: 3,
        title: "Awesome"
    },
    {
        txtContent: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus quisquam aperiam temporibus? Accusantium, soluta ducimus,',
        title: "Super Cool Title",
        user_id: 4
    },
];
const seedData = () => Blog.bulkCreate(BlogData, { individualHooks: true });
module.exports = seedData;
