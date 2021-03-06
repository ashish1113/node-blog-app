//importing moongoose module
const mongoose =require('mongoose');

//import schema
const Schema = mongoose.Schema;

//defining how are blog is going to look like
let blogSchema = new Schema (
    {
        blogId:{
            type:String,
            unique:true
        },
        title:{
            type:String,
            default : ''
        },
        description:{
            type:String,
            default : ''
        },
        bodyHtml:{
            type:String,
            default : ''
        },
        views:{
            type:Number,
            default : ''
        },
        isPublished:{
            type:Boolean,
            default : false
        },
        category:{
            type:String,
            default : ''
        },
            author:{
            type:String,
            default : ''
        },
        tags:[],
        created:{
            type:Date,
            default :Date.now
        },
        lastModified:{
            type:Date,
            default :Date.now
        }
    }
) 

mongoose.model('Blog',blogSchema)