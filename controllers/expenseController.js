const mongoose=require('mongoose')
const response=require('../libs/responseLib')
const logger=require('../libs/loggerLib')
const cookie=require('cookies')
const expense=mongoose.model('expenseSchema');
const groupSchema=mongoose.model('groupSchema')
const userSchema=mongoose.model('User')
const updateExpenseSchema=mongoose.model('updateExpenseSchema')
const shortId=require('shortid')
let createGroup=(req,res)=>{
    return new Promise((resolve,reject)=>{
        if(req.body.name && req.body.date && req.body.members){
            groupSchema.findOne({'name':req.body.name},(err,data)=>{
                console.log("data is"+data)
                if(err){
                    let apiResponse=response.generate(true,"Some error Occured",null)
                    reject(apiResponse)
                    res.send(apiResponse)   
                }
                else{
                    if(data==null){
                        let newGroup=new groupSchema({
                            groupId:shortId.generate(),
                            name:req.body.name,
                            dateOfCreation:req.body.date,
                            members:req.body.members
                        })
                        newGroup.save((err,newGroup)=>{
                            if(err){
                                console.log(err)
                                logger.error(err.message, 'groupController: createGroup', 10)
                                let apiResponse = response.generate(true, 'Failed to Create Group', 500, null)
                                reject(apiResponse)
                            }
                            else{
                                let newGroupObj=newGroup.toObject()
                                resolve(newGroupObj)
                                let apiResponse=response.generate(false,"Group Created Succesfully",200,newGroupObj)
                                res.send(apiResponse)
                            }
                        })
                    }
                    else{
                    let apiResponse=response.generate(true,"Group with the same name already exist.Please change the name",data)
                    reject(apiResponse)
                    res.send(apiResponse)
                    }                    
                }
            })
        }
        else{
            logger.error('Field Missing During Creating Group', 'expenseController: createGroup()', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
        }
    })
}


let createExpense=(req,res)=>{
    console.log("request"+req.body)
    return new Promise((resolve,reject)=>{
        if(req.body.name && req.body.date && req.body.amount && req.body.members && req.body.membersPaid && req.body.members && req.body.group){
            expense.findOne({'name':req.body.name,'group':req.body.group},(err,data)=>{
                if(err){
                    let apiResponse=response.generate(true,"Some error Occured",null)
                    reject(apiResponse)
                    res.send(apiResponse)   
                }
                else{
                    if(data==null){
                        let newExpense=new expense({
                            expenseId:shortId.generate(),
                            name:req.body.name,
                            dateOfCreation:req.body.date,
                            amount:req.body.amount,
                            members:req.body.members,
                            membersPaid:req.body.membersPaid,
                            group:req.body.group,
                            createdBy:req.body.createdBy
                        })
                        newExpense.save((err,newExpense)=>{
                            if(err){
                                console.log(err)
                                logger.error(err.message, 'expenseController: createExpense', 10)
                                let apiResponse = response.generate(true, 'Failed to create Expense', 500, null)
                                reject(apiResponse)
                            }
                            else{
                                let newExpenseObj=newExpense.toObject()
                                resolve(newExpenseObj)
                                let apiResponse=response.generate(false,"Expense Created Succesfully",200,newExpenseObj)
                                res.send(apiResponse)
                            }
                        })
                    }
                    else{
                    let apiResponse=response.generate(true,"Expense with the same name already exist in this group.Please change the name",data)
                    reject(apiResponse)
                    res.send(apiResponse)
                    }                    
                }
            })
        }
        else{
            logger.error('Field Missing During Creating Group', 'expenseController: createExpense()', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
        }
    })
}



let fetchExpenses=(req,res)=>{
    return new Promise((resolve,reject)=>{
        expense.find({'group':req.body.groupName},(err,expenses)=>{
            if(err){
                reject()
            }else{
                console.log("Expense Details"+expenses)
            resolve()
            let apiResponse=response.generate(false,"Issue Fetched Succesfully",200,expenses)
            res.send(apiResponse)
            }
        })
    })
}

let fetchExpenseDetails=(req,res)=>{
    return new Promise((resolve,reject)=>{
        expense.findOne({'group':req.body.groupName,'name':req.body.expenseName},(err,expenseDetails)=>{
            if(err){
                reject()
            }else{
                console.log("Expense Details"+expenseDetails)
            resolve()
            let apiResponse=response.generate(false,"Expense Fetched Succesfully",200,expenseDetails)
            res.send(apiResponse)
            }
        })
    })
}

let fetchUsers=(req,res)=>{
    return new Promise((resolve,reject)=>{
        userSchema.find((err,users)=>{
            if(err){
                reject()
            }else{
            resolve()
            console.log("User",users)
            let apiResponse=response.generate(false,"Users Fetched Succesfully",200,users)
            res.send(apiResponse)
            }
        })
    })
}

let fetchGroupMembers=(req,res)=>{
    console.log("Name"+req.body.groupName)
    return new Promise((resolve,reject)=>{
        groupSchema.findOne({'name':req.body.groupName},(err,group)=>{
            if(err){
                reject()
            }else{
            resolve()
            console.log("Members",group)
            let apiResponse=response.generate(false,"Members Fetched Succesfully",200,group.members)
            res.send(apiResponse)
            }
        })
    })
}

let fetchGroups=(req,res)=>{
    console.log("User is"+req.body.userId)
    return new Promise((resolve,reject)=>{
        groupSchema.find({'members':req.body.userId},(err,groups)=>{
            if(err){
                reject()
            }else{
            resolve()
            let apiResponse=response.generate(false,"Groups Fetched Succesfully",200,groups)
            res.send(apiResponse)
            }
        })
    })
}


let editExpense=(req,res)=>{
    return new Promise((resolve,reject)=>{
        expense.findOneAndUpdate({'name':req.body.name,'group':req.body.groupName},{'name':req.body.name,'amount':req.body.amount,'members':req.body.members,'membersPaid':req.body.membersPaid,'dateOfCreation':req.body.date},(err,data)=>{
            if(err){
                reject()
            let apiResponse=response.generate(true,"Expense not Edited",500,null)
            res.send(apiResponse)
            }
            else{
            resolve()
            let apiResponse=response.generate(false,"Expense Edited Successfully",404,data)
            res.send(apiResponse)
            }
        })
    })
}


let updateExpenseHistory=(req,res)=>{
    console.log("Update Expense")
    return new Promise((resolve,reject)=>{
        if(req.body.name && req.body.updatesArray && req.body.group){
            expense.findOne({'name':req.body.name,'group':req.body.group},(err,data)=>{
                if(err){
                    let apiResponse=response.generate(true,"Some error Occured",null)
                    reject(apiResponse)
                    res.send(apiResponse)   
                }
                else{
                    if(data!=null){
                        let updateExpense=new updateExpenseSchema({
                            updateId:shortId.generate(),
                            name:req.body.name,
                            group:req.body.group,
                            update:req.body.updatesArray
                        })
                        updateExpense.save((err,newUpdate)=>{
                            if(err){
                                console.log(err)
                                logger.error(err.message, 'expenseController: updateExpenseHistory', 10)
                                let apiResponse = response.generate(true, 'Failed to Update Expense History', 500, null)
                                reject(apiResponse)
                            }
                            else{
                                let newUpdateObj=newUpdate.toObject()
                                resolve(newUpdateObj)
                                let apiResponse=response.generate(false,"History Successfully Updated",200,newUpdateObj)
                                res.send(apiResponse)
                            }
                        })
                    }
                    else{
                    let apiResponse=response.generate(true,"No expense exist with the given name",null)
                    reject(apiResponse)
                    res.send(apiResponse)
                    }                    
                }
            })
        }
        else{
            logger.error('Field Missing During Updating Expense History', 'expenseController: updateExpenseHistory()', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
        }
    })
}

let fetchExpenseData=(req,res)=>{
    return new Promise((resolve,reject)=>{
        issue.findOne({'name':req.body.name,'group':req.body.group},(err,data)=>{
            if(err){
                reject()
            let apiResponse=response.generate(true,"Expense not Fetched",500,null)
            res.send(apiResponse)
            }
            else if(data==null){
            let apiResponse=response.generate(false,"Expense doesnot exist",404,null)
            res.send(apiResponse)
            resolve()
            }
            else{
            resolve()
            let apiResponse=response.generate(false,"Expense Fetched Successfully",200,data)
            res.send(apiResponse)
            }
        })
    })
}


let fetchExpenseHistory=(req,res)=>{
    return new Promise((resolve,reject)=>{
        updateExpenseSchema.find({'name':req.body.expenseName,'group':req.body.groupName},(err,data)=>{
            if(err){
                reject()
            let apiResponse=response.generate(true,"Expense History not Fetched",500,null)
            res.send(apiResponse)
            }
            else if(data==null){
            let apiResponse=response.generate(false,"Expense doesnot exist",404,null)
            res.send(apiResponse)
            resolve()
            }
            else{
            resolve()
            let apiResponse=response.generate(false,"Expense History Fetched Successfully",200,data)
            res.send(apiResponse)
            }
        })
    })
}


let deleteExpense=(req,res)=>{
    deleteExpenseData=()=>{
    return new Promise((resolve,reject)=>{
        expense.findOneAndRemove({'name':req.body.expenseName,'group':req.body.groupName},(err,data)=>{
            if(err){
                reject()
            let apiResponse=response.generate(true,"Expense not Deleted",404,null)
            res.send(apiResponse)
            }
            else{
            resolve()
            }
        })
    })
    }
    deleteExpenseHistory=()=>{
        return new Promise((resolve,reject)=>{
            updateExpenseSchema.findOneAndRemove({'name':req.body.expenseName,'group':req.body.groupName},(err,data)=>{
                if(err){
                    reject()
                let apiResponse=response.generate(true,"Expense not Deleted",404,null)
                res.send(apiResponse)
                }
                else{
                resolve()
                }
            })
        })
    }
    deleteExpenseData(req,res)
    .then(deleteExpenseHistory)
    .then((resolve)=>{
        let apiResponse=response.generate(false,"Expense Deleted Successfully",200,resolve)
        res.send(apiResponse)
    })
}


module.exports={
    createExpense:createExpense,
    createGroup:createGroup,
    fetchExpenseData:fetchExpenseData,
    deleteExpense:deleteExpense,
    fetchExpenses:fetchExpenses,
    fetchGroups:fetchGroups,
    fetchUsers:fetchUsers,
    fetchExpenseDetails:fetchExpenseDetails,
    editExpense:editExpense,
    updateExpenseHistory:updateExpenseHistory,
    fetchExpenseHistory:fetchExpenseHistory,
    fetchGroupMembers:fetchGroupMembers
}