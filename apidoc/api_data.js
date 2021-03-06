define({ "api": [
  {
    "group": "Easy_Split",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/easy-split/createExpense",
    "title": "to Create Expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Name.",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Amount.",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "Members.",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "Date.",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "Members",
            "description": "<p>Paid. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Group.",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Created",
            "description": "<p>By. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t  {error: false, message: \"Expense Created Succesfully\", status: 200,\n\t   data:{\n        expenseId:\"HBFHB55\",\n        name:\"Expense 1\",\n        dateOfCreation:\"2018-05-01\",\n        amount:\"2542\",\n        createdBy:\"UDHS5564\",\n        group:\"Group 1\",\n        members:[\n\t\t\t{\n\t\t\t\t\"UBDHHS5455\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"UBHBSH8788\"\n\t\t\t}\n\t\t]\n        membersPaid:[\n\t\t\t{\n\t\t\t\t\"UBDHHS5455\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"UBHBSH8788\"\n\t\t\t}\n\t\t]}\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/easy-split.js",
    "groupTitle": "Easy_Split",
    "name": "PostApiV1EasySplitCreateexpense"
  },
  {
    "group": "Easy_Split",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/easy-split/createGroup",
    "title": "to Create Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Token. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Name.",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "Members.",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Date.",
            "description": "<p>(body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t  {error: false, message: \"Groups Created Succesfully\", status: 200,\n\t   data:{\n\t\tgroupId:\"IDA524\"\n        name:\"Group\"\n        dateOfCreation:\"2018-08-12\"\n        members:{[\n\t\t\t\"IHS654S\",\"HSUD565a\"\n\t\t]\n        }\n\t}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/easy-split.js",
    "groupTitle": "Easy_Split",
    "name": "PostApiV1EasySplitCreategroup"
  },
  {
    "group": "Easy_Split",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/easy-split/editExpense",
    "title": "to Edit Expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Token. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t   {error: false, message: \"Expense Edited Succesfully\", status: 200,\n\t   data:{\n        expenseId:\"HBFHB55\",\n        name:\"Expense 1\",\n        dateOfCreation:\"2018-05-01\",\n        amount:\"2542\",\n        createdBy:\"UDHS5564\",\n        group:\"Group 1\",\n        members:[\n\t\t\t{\n\t\t\t\t\"UBDHHS5455\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"UBHBSH8788\"\n\t\t\t}\n\t\t]\n        membersPaid:[\n\t\t\t{\n\t\t\t\t\"UBDHHS5455\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"UBHBSH8788\"\n\t\t\t}\n\t\t]}\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/easy-split.js",
    "groupTitle": "Easy_Split",
    "name": "PostApiV1EasySplitEditexpense"
  },
  {
    "group": "Easy_Split",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/easy-split/fetchExpenseDetails",
    "title": "to Fetch Expense Details",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Token. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Expense",
            "description": "<p>Name. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Group",
            "description": "<p>Name. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t   {error: false, message: \"Expense Fetched Succesfully\", status: 200,\n\t   data:{\n        expenseId:\"HBFHB55\",\n        name:\"Expense 1\",\n        dateOfCreation:\"2018-05-01\",\n        amount:\"2542\",\n        createdBy:\"UDHS5564\",\n        group:\"Group 1\",\n        members:[\n\t\t\t{\n\t\t\t\t\"UBDHHS5455\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"UBHBSH8788\"\n\t\t\t}\n\t\t]\n        membersPaid:[\n\t\t\t{\n\t\t\t\t\"UBDHHS5455\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"UBHBSH8788\"\n\t\t\t}\n\t\t]}\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/easy-split.js",
    "groupTitle": "Easy_Split",
    "name": "PostApiV1EasySplitFetchexpensedetails"
  },
  {
    "group": "Easy_Split",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/easy-split/fetchExpenses",
    "title": "to Fetch Expenses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Group",
            "description": "<p>Name. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Token. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t  {error: false, message: \"Expenses Fetched Succesfully\", status: 200,\n\t   data:{{\n\t\texpenseId:\"FHB55\",\n        name:\"Expense 2\",\n        dateOfCreation:\"2018-05-01\",\n        amount:\"2542\",\n        createdBy:\"UDHS5564\",\n        group:\"Group 2\",\n        members:[\n\t\t\t{\n\t\t\t\t\"UBDHHS5455\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"UBHBSH8788\"\n\t\t\t}\n\t\t]\n        membersPaid:[\n\t\t\t{\n\t\t\t\t\"UBDHHS5455\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"UBHBSH8788\"\n\t\t\t}\n\t\t]\n\n\t   },\n\t   {\n\t\t   expenseId:\"HBFHB55\",\n        name:\"Expense 1\",\n        dateOfCreation:\"2018-05-01\",\n        amount:\"2542\",\n        createdBy:\"UDHS5564\",\n        group:\"Group 1\",\n        members:[\n\t\t\t{\n\t\t\t\t\"UBDHHS5455\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"UBHBSH8788\"\n\t\t\t}\n\t\t]\n        membersPaid:[\n\t\t\t{\n\t\t\t\t\"UBDHHS5455\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"UBHBSH8788\"\n\t\t\t}\n\t\t]\n\n\t   }\n\n\t   }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/easy-split.js",
    "groupTitle": "Easy_Split",
    "name": "PostApiV1EasySplitFetchexpenses"
  },
  {
    "group": "Easy_Split",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/easy-split/fetchGroupMembers",
    "title": "to Fetch Group Members",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Token. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Group",
            "description": "<p>Name. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Members Fetched Succesfully\", status: 200,\n   data:{\n\t   [\n\t\t   \"BHVHS4412\",\"GHVHV454545\"\n\t   ]\n   }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/easy-split.js",
    "groupTitle": "Easy_Split",
    "name": "PostApiV1EasySplitFetchgroupmembers"
  },
  {
    "group": "Easy_Split",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/easy-split/fetchGroups",
    "title": "to Fetch Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of User. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Token. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t  {error: false, message: \"Groups Fetched Succesfully\", status: 200,\n\t   data:{[{\n\t\tgroupId:\"IDA524\"\n        name:\"Group\"\n        dateOfCreation:\"2018-08-12\"\n        members:{[\n\t\t\t\"IHS654S\",\"HSUD565a\"\n\t\t]\n        }},{\n\t\tgroupId:\"IA524\"\n        name:\"Group 2\"\n        dateOfCreation:\"2018-08-12\"\n        members:{[\n\t\t\t\"IHS654S\",\"UHD565a\"\n\t\t]\n        }\n\t\t}\n\t   ]\n\t}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/easy-split.js",
    "groupTitle": "Easy_Split",
    "name": "PostApiV1EasySplitFetchgroups"
  },
  {
    "group": "Easy_Split",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/easy-split/fetchUsers",
    "title": "to Fetch Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Token. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t  {error: false, message: \"Users Fetched Succesfully\", status: 200,\n\t   data:{[\n\t\t   {\n        userId:\"UHS565\"\n        firstName:\"XNS\"\n        lastName:\"safas\"\n        email:\"XNS@gmail.com\"\n        groups:[{\"adasdas\",\"asfasfas\"}]\n        password:\"asbasjbas6565asdas\"\n        userName:\"NJKS\"\n        mobileNumber:\"+945654565524\"\n        createdOn:\"2018-08-01\"\n\t},\n\t{\n        userId:\"UtS565\"\n        firstName:\"XasNS\"\n        lastName:\"safadas\"\n        email:\"XNasdS@gmail.com\"\n        groups:[{\"das\",\"asfasfas\"}]\n        password:\"aadas4asjbas6565asdas\"\n        userName:\"fdsdfs\"\n        mobileNumber:\"+945485454565\"\n        createdOn:\"2018-08-01\"\n\t}]\n\t}]}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/easy-split.js",
    "groupTitle": "Easy_Split",
    "name": "PostApiV1EasySplitFetchusers"
  },
  {
    "group": "Easy_Split",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/easy-split/fetchUsers",
    "title": "to Fetch Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Token. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t  {error: false, message: \"Expense Deleted Succesfully\", status: 200,\n\t   data:{\n        expenseId:\"HBFHB55\",\n        name:\"Expense 1\",\n        dateOfCreation:\"2018-05-01\",\n        amount:\"2542\",\n        createdBy:\"UDHS5564\",\n        group:\"Group 1\",\n        members:[\n\t\t\t{\n\t\t\t\t\"UBDHHS5455\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"UBHBSH8788\"\n\t\t\t}\n\t\t]\n        membersPaid:[\n\t\t\t{\n\t\t\t\t\"UBDHHS5455\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"UBHBSH8788\"\n\t\t\t}\n\t\t]}\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/easy-split.js",
    "groupTitle": "Easy_Split",
    "name": "PostApiV1EasySplitFetchusers"
  },
  {
    "group": "Easy_Split",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/easy-split/fetchUsers",
    "title": "to Fetch Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Token. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t  {error: false, message: \"Expense History Fetched Successfully\", status: 200,\n\t   data:{\n        updateId:\"HHDHS445\"\n        name:\"HSHSS\"\n        group:\"HHAVHD\"\n        update:[\n\t\t\t\"Name of Expense with name BHHVSH has been updated\"\n\t\t]        \n    }\n\t   }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/easy-split.js",
    "groupTitle": "Easy_Split",
    "name": "PostApiV1EasySplitFetchusers"
  },
  {
    "group": "Easy_Split",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/easy-split/updateExpenseHistory",
    "title": "to Update Expense History",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Token. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Expense",
            "description": "<p>Name. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "Members.",
            "description": "<p>(body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Group",
            "description": "<p>Name. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t  {error: false, message: \"History Successfully Updated\", status: 200,\n\t   data:{\n        updateId:\"HHDHS445\"\n        name:\"HSHSS\"\n        group:\"HHAVHD\"\n        update:[\n\t\t\t\"Name of Expense with name BHHVSH has been updated\"\n\t\t]        \n    }\n\t   }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/easy-split.js",
    "groupTitle": "Easy_Split",
    "name": "PostApiV1EasySplitUpdateexpensehistory"
  },
  {
    "group": "Easy_Split_Login",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/easy-split/login",
    "title": "to login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserName",
            "description": "<p>of user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Password",
            "description": "<p>of user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Login Successful\", status: 200,\n   data:{\n\t\t\temail: \"xyz@gmail.com\"\n\t\t\tfirstName: \"Anil\"\n\t\t\tlastName: \"Kumble\"\n\t\t\tmobileNumber: \"3595656542321\"\n\t\t\tuserId: \"G_40dMQU0\"\n\t\t\tuserName: \"xyz\"\n\t\t}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/easy-split.js",
    "groupTitle": "Easy_Split_Login",
    "name": "PostApiV1EasySplitLogin"
  },
  {
    "group": "Easy_Split_Logout",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/easy-split/logout",
    "title": "to logout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AuthToken",
            "description": "<p>of user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{error: false, message: \"Logged out Successfully\", status: 200,\n data:{}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/easy-split.js",
    "groupTitle": "Easy_Split_Logout",
    "name": "PostApiV1EasySplitLogout"
  },
  {
    "group": "Easy_Split_SignUp",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/easy-split/signup",
    "title": "to signup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "FirstName",
            "description": "<p>of user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "LastName",
            "description": "<p>of user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserName",
            "description": "<p>of user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Email",
            "description": "<p>of user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Password",
            "description": "<p>of user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"User created\", status: 200,\n   data:{\n\t\t\tcreatedOn: \"2019-10-26T22:34:45.000Z\"\n\t\t\temail: \"xyz@gmail.com\"\n\t\t\tfirstName: \"Anil\"\n\t\t\tlastName: \"Kumble\"\n\t\t\tmobileNumber: \"3595985476325\"\n\t\t\tuserId: \"XufvAhxMG\"\n\t\t\tuserName: \"xyz\"\n\t\t\t__v: 0\n\t\t\t_id: \"5db4ca0501e1961c489f9c52\"\n\t\t\t__proto__: Object\n\t\t}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/easy-split.js",
    "groupTitle": "Easy_Split_SignUp",
    "name": "PostApiV1EasySplitSignup"
  }
] });
