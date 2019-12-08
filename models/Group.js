const mongoose=require('mongoose')
const schema=mongoose.Schema
let groupSchema=new schema(
    {
        groupId:{
            type:String,
            default:'',
            unique:true,
            index:true   
        },
        name:{
            type:String,
            default:''
        },
        dateOfCreation:{
            type:Date,
            default:''
        },
        members:{
            type:Array,
            default:[]
        }        
    }
)
mongoose.model("groupSchema",groupSchema)