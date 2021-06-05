const Blog:object= require('../models/Blog');

const BlogData:object=[
    {
        txtContent:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus quisquam aperiam temporibus? Accusantium, soluta ducimus,',
        user_id:1,
        title:"Lorem",
        datePosted:1622680489921
    },
    {
        txtContent:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus quisquam aperiam temporibus? Accusantium, soluta ducimus,',
        user_id:2,
        title:"Cool Title",
        datePosted:1622680489921
    },
    {
        txtContent:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus quisquam aperiam temporibus? Accusantium, soluta ducimus,',
        user_id:3,
        title:"Awesome",
        datePosted:1622680489921
    },
    {
        txtContent:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus quisquam aperiam temporibus? Accusantium, soluta ducimus,',
        title:"Super Cool Title",
        user_id:4,
        datePosted:1622680489921
    },
       
    
]
const seedData= () => Blog.bulkCreate(BlogData, { individualHooks: true });
module.exports= seedData;