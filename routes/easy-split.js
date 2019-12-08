const express=require('express')
const userController=new require('../controllers/userController')
const appConfig=require('../config/config')
const auth=new require('../middlewares/auth')
const expenseController=new require('../controllers/expenseController')
const socketLib=require('../libs/socketLib')
let setRoutes=(app)=>{
    let baseUrl=appConfig.apiVersion+'/easy-split'
	app.post(baseUrl+'/login',userController.loginFunction)

	/**
   * @apiGroup Easy-Split-Login
   * @apiVersion  1.0.0
   * @api {post} /api/v1/easy-split/login to login
   * 
   * @apiParam {string} UserName of user. (query params) (required)
   * @apiParam {string} Password of user. (query params) (required)
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Login Successful", status: 200,
	   data:{
				email: "xyz@gmail.com"
				firstName: "Anil"
				lastName: "Kumble"
				mobileNumber: "3595656542321"
				userId: "G_40dMQU0"
				userName: "xyz"
			}}
 */
	app.post(baseUrl+'/signup',userController.signUpFunction)

	 /**
   * @apiGroup Easy-Split-SignUp
   * @apiVersion  1.0.0
   * @api {post} /api/v1/easy-split/signup to signup
   * 
   * @apiParam {string} FirstName of user. (query params) (required)
   * @apiParam {string} LastName of user. (query params) (required)
   * @apiParam {string} UserName of user. (query params) (required)
   * @apiParam {string} Email of user. (query params) (required)
   * @apiParam {string} Password of user. (query params) (required)
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "User created", status: 200,
	   data:{
				createdOn: "2019-10-26T22:34:45.000Z"
				email: "xyz@gmail.com"
				firstName: "Anil"
				lastName: "Kumble"
				mobileNumber: "3595985476325"
				userId: "XufvAhxMG"
				userName: "xyz"
				__v: 0
				_id: "5db4ca0501e1961c489f9c52"
				__proto__: Object
			}}
 */

	app.post(baseUrl+'/logout',auth.isAuthenticated,userController.logout)

	/**
   * @apiGroup Easy-Split-Logout
   * @apiVersion  1.0.0
   * @api {post} /api/v1/easy-split/logout to logout
   * 
   * @apiParam {string} AuthToken of user. (query params) (required)
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Logged out Successfully", status: 200,
	   data:{}
 */

	app.post(baseUrl+'/fetchGroups',auth.isAuthenticated,expenseController.fetchGroups)

	/**
   * @apiGroup Easy-Split
   * @apiVersion  1.0.0
   * @api {post} /api/v1/easy-split/fetchGroups to Fetch Groups
   * @apiParam {string} userId of User. (body params) (required)
   * @apiParam {string} Auth Token. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Groups Fetched Succesfully", status: 200,
	   data:{[{
		groupId:"IDA524"
        name:"Group"
        dateOfCreation:"2018-08-12"
        members:{[
			"IHS654S","HSUD565a"
		]
        }},{
		groupId:"IA524"
        name:"Group 2"
        dateOfCreation:"2018-08-12"
        members:{[
			"IHS654S","UHD565a"
		]
        }
		}
	   ]
	}}
 */

	app.post(baseUrl+'/fetchUsers',auth.isAuthenticated,expenseController.fetchUsers)

	/**
   * @apiGroup Easy-Split
   * @apiVersion  1.0.0
   * @api {post} /api/v1/easy-split/fetchUsers to Fetch Users
   * @apiParam {string} Auth Token. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Users Fetched Succesfully", status: 200,
	   data:{[
		   {
        userId:"UHS565"
        firstName:"XNS"
        lastName:"safas"
        email:"XNS@gmail.com"
        groups:[{"adasdas","asfasfas"}]
        password:"asbasjbas6565asdas"
        userName:"NJKS"
        mobileNumber:"+945654565524"
        createdOn:"2018-08-01"
	},
	{
        userId:"UtS565"
        firstName:"XasNS"
        lastName:"safadas"
        email:"XNasdS@gmail.com"
        groups:[{"das","asfasfas"}]
        password:"aadas4asjbas6565asdas"
        userName:"fdsdfs"
        mobileNumber:"+945485454565"
        createdOn:"2018-08-01"
	}]
	}]}
 */


	app.post(baseUrl+'/createExpense',auth.isAuthenticated,expenseController.createExpense)

/**
   * @apiGroup Easy-Split
   * @apiVersion  1.0.0
   * @api {post} /api/v1/easy-split/createExpense to Create Expense
   * @apiParam {string} Name. (body params) (required)
   * @apiParam {string} Amount. (body params) (required)
   * @apiParam {string[]} Members. (body params) (required)
   * @apiParam {date} Date. (body params) (required)
   * @apiParam {string[]} Members Paid. (body params) (required)
   * @apiParam {string} Group. (body params) (required)
   * @apiParam {string} Created By. (body params) (required)
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Expense Created Succesfully", status: 200,
	   data:{
        expenseId:"HBFHB55",
        name:"Expense 1",
        dateOfCreation:"2018-05-01",
        amount:"2542",
        createdBy:"UDHS5564",
        group:"Group 1",
        members:[
			{
				"UBDHHS5455"
			},
			{
				"UBHBSH8788"
			}
		]
        membersPaid:[
			{
				"UBDHHS5455"
			},
			{
				"UBHBSH8788"
			}
		]}
    }
 */


	app.post(baseUrl+'/fetchExpenses',auth.isAuthenticated,expenseController.fetchExpenses)

		/**
   * @apiGroup Easy-Split
   * @apiVersion  1.0.0
   * @api {post} /api/v1/easy-split/fetchExpenses to Fetch Expenses
   * @apiParam {string} Group Name. (body params) (required)
   * @apiParam {string} Auth Token. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Expenses Fetched Succesfully", status: 200,
	   data:{{
		expenseId:"FHB55",
        name:"Expense 2",
        dateOfCreation:"2018-05-01",
        amount:"2542",
        createdBy:"UDHS5564",
        group:"Group 2",
        members:[
			{
				"UBDHHS5455"
			},
			{
				"UBHBSH8788"
			}
		]
        membersPaid:[
			{
				"UBDHHS5455"
			},
			{
				"UBHBSH8788"
			}
		]

	   },
	   {
		   expenseId:"HBFHB55",
        name:"Expense 1",
        dateOfCreation:"2018-05-01",
        amount:"2542",
        createdBy:"UDHS5564",
        group:"Group 1",
        members:[
			{
				"UBDHHS5455"
			},
			{
				"UBHBSH8788"
			}
		]
        membersPaid:[
			{
				"UBDHHS5455"
			},
			{
				"UBHBSH8788"
			}
		]

	   }

	   }
 */

	app.post(baseUrl+'/fetchExpenseDetails',auth.isAuthenticated,expenseController.fetchExpenseDetails)

		/**
   * @apiGroup Easy-Split
   * @apiVersion  1.0.0
   * @api {post} /api/v1/easy-split/fetchExpenseDetails to Fetch Expense Details
   * @apiParam {string} Auth Token. (body params) (required)
   * @apiParam {string} Expense Name. (body params) (required)
   * @apiParam {string} Group Name. (body params) (required)
   * 
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	   {error: false, message: "Expense Fetched Succesfully", status: 200,
	   data:{
        expenseId:"HBFHB55",
        name:"Expense 1",
        dateOfCreation:"2018-05-01",
        amount:"2542",
        createdBy:"UDHS5564",
        group:"Group 1",
        members:[
			{
				"UBDHHS5455"
			},
			{
				"UBHBSH8788"
			}
		]
        membersPaid:[
			{
				"UBDHHS5455"
			},
			{
				"UBHBSH8788"
			}
		]}
    }
 */

	app.post(baseUrl+'/deleteExpense',auth.isAuthenticated,expenseController.deleteExpense)

		/**
   * @apiGroup Easy-Split
   * @apiVersion  1.0.0
   * @api {post} /api/v1/easy-split/fetchUsers to Fetch Users
   * @apiParam {string} Auth Token. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Expense Deleted Succesfully", status: 200,
	   data:{
        expenseId:"HBFHB55",
        name:"Expense 1",
        dateOfCreation:"2018-05-01",
        amount:"2542",
        createdBy:"UDHS5564",
        group:"Group 1",
        members:[
			{
				"UBDHHS5455"
			},
			{
				"UBHBSH8788"
			}
		]
        membersPaid:[
			{
				"UBDHHS5455"
			},
			{
				"UBHBSH8788"
			}
		]}
    }
 */


	app.post(baseUrl+'/createGroup',auth.isAuthenticated,expenseController.createGroup)

		/**
   * @apiGroup Easy-Split
   * @apiVersion  1.0.0
   * @api {post} /api/v1/easy-split/createGroup to Create Group
   * @apiParam {string} Auth Token. (body params) (required)
   * @apiParam {string} Name. (body params) (required)
   * @apiParam {string[]} Members. (body params) (required)
   * @apiParam {string} Date. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Groups Created Succesfully", status: 200,
	   data:{
		groupId:"IDA524"
        name:"Group"
        dateOfCreation:"2018-08-12"
        members:{[
			"IHS654S","HSUD565a"
		]
        }
	}
 */


	app.post(baseUrl+'/editExpense',auth.isAuthenticated,expenseController.editExpense)

		/**
   * @apiGroup Easy-Split
   * @apiVersion  1.0.0
   * @api {post} /api/v1/easy-split/editExpense to Edit Expense
   * @apiParam {string} Auth Token. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	   {error: false, message: "Expense Edited Succesfully", status: 200,
	   data:{
        expenseId:"HBFHB55",
        name:"Expense 1",
        dateOfCreation:"2018-05-01",
        amount:"2542",
        createdBy:"UDHS5564",
        group:"Group 1",
        members:[
			{
				"UBDHHS5455"
			},
			{
				"UBHBSH8788"
			}
		]
        membersPaid:[
			{
				"UBDHHS5455"
			},
			{
				"UBHBSH8788"
			}
		]}
    }
 */


	app.post(baseUrl+'/updateExpenseHistory',auth.isAuthenticated,expenseController.updateExpenseHistory)

		/**
   * @apiGroup Easy-Split
   * @apiVersion  1.0.0
   * @api {post} /api/v1/easy-split/updateExpenseHistory to Update Expense History
   * @apiParam {string} Auth Token. (body params) (required)
   * @apiParam {string} Expense Name. (body params) (required)
   * @apiParam {string[]} Members. (body params) (required)
   * @apiParam {string} Group Name. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "History Successfully Updated", status: 200,
	   data:{
        updateId:"HHDHS445"
        name:"HSHSS"
        group:"HHAVHD"
        update:[
			"Name of Expense with name BHHVSH has been updated"
		]        
    }
	   }
 */


	app.post(baseUrl+'/fetchExpenseHistory',auth.isAuthenticated,expenseController.fetchExpenseHistory)

		/**
   * @apiGroup Easy-Split
   * @apiVersion  1.0.0
   * @api {post} /api/v1/easy-split/fetchUsers to Fetch Users
   * @apiParam {string} Auth Token. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Expense History Fetched Successfully", status: 200,
	   data:{
        updateId:"HHDHS445"
        name:"HSHSS"
        group:"HHAVHD"
        update:[
			"Name of Expense with name BHHVSH has been updated"
		]        
    }
	   }
 */


	app.post(baseUrl+'/fetchGroupMembers',auth.isAuthenticated,expenseController.fetchGroupMembers)

		/**
   * @apiGroup Easy-Split
   * @apiVersion  1.0.0
   * @api {post} /api/v1/easy-split/fetchGroupMembers to Fetch Group Members
   * @apiParam {string} Auth Token. (body params) (required)
   * @apiParam {string} Group Name. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Members Fetched Succesfully", status: 200,
	   data:{
		   [
			   "BHVHS4412","GHVHV454545"
		   ]
	   }
	}
 */


}
module.exports = {
    setRoutes : setRoutes
}
