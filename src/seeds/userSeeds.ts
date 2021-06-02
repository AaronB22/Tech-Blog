const User:object= require('../models/User')

const UserData:object=[
    {
        user_name:"Jeb",
        email:'Jeb@email.com',
        password:'password'
    },
    {
        user_name:"Bill",
        email:'Bill@email.com',
        password:'password'
    },
    {
        user_name:"Bob",
        email:'bob@email.com',
        password:'password'
    },
    {
        user_name:"Val",
        email:'Val@email.com',
        password:'password'
    },
]
const seedUserData= () => User.bulkCreate(UserData, { individualHooks: true });
module.exports= seedUserData;