"use strict";
const sequelize = require('../config/connection');
const UserData = require('./userSeeds');
const BlogData = require('./blogSeeds');
const CommentData = require('./commentSeed');
const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        await UserData();
        await BlogData();
        await CommentData();
    }
    catch (err) {
        console.log(err);
    }
};
seedDatabase();
