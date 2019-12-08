const mongoose=require('mongoose')
const schema=mongoose.Schema
let updateExpenseSchema=new schema(
    {
        updateId:{
            type:String,
            default:'',
            unique:true,
            index:true   
        },
        name:{
            type:String,
            default:''
        },
        group:{
            type:String,
            default:''
        },
        update:{
            type:Array,
            default:[]
        }        
    }
)
mongoose.model("updateExpenseSchema",updateExpenseSchema)