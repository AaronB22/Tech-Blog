"use strict";
const Comments = require('../models/Comments');
const CommentData = [
    {
        txtContent: 'terstadawdaw dw ',
        user_name: 'Jeb',
        blogs_id: 1
    },
];
const seedData = () => Comments.bulkCreate(CommentData, { individualHooks: true });
module.exports = seedData;
