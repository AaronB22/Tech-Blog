"use strict";
const User = require('../models/User');
const UserData = [
    {
        user_name: "Jeb"
    },
    {
        user_name: "Bill"
    },
    {
        user_name: "Bob"
    },
    {
        user_name: "Val"
    },
];
const seedUserData = () => User.bulkCreate(UserData, { individualHooks: true });
module.exports = seedUserData;
