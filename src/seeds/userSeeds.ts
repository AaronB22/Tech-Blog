const User:object= require('../models/User')

const UserData:object=[
    {
        user_name:"Jeb"
    },
    {
        user_name:"Bill"
    },
    {
        user_name:"Bob"
    },
    {
        user_name:"Val"
    },
]
const seedUserData= () => User.bulkCreate(UserData, { individualHooks: true });
module.exports= seedUserData;