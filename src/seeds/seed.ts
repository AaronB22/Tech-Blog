const sequelize = require('../config/connection');
const UserData= require('./userSeeds')
const BlogData= require('./blogSeeds')

const seedDatabase = async ()=>{
    try{

        await sequelize.sync({force: true});
        await UserData();
        await BlogData();
        
    }
    catch(err){
        console.log(err)
    }
}

seedDatabase()