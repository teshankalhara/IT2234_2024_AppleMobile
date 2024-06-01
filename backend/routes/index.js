const express=require('express')

const router=express.Router()

const authToken = require('../middleware/authToken')

const userSignUpController=require('../controller/userSignUp')
const userSignInController = require('../controller/userSignIn')
const userDetailsController = require('../controller/userDetails')
const userLogout = require('../controller/userLogout')
const allUsers = require('../controller/allUsers')
const updateUser = require('../controller/updateUser')

const updateUser = require('../controller/addToCartController')


router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

//adminPanel
router.get("/all-user", authToken, allUsers)
router.post("/update-user", authToken, updateUser)
//adminPanel

router.post("/upload-product",authToken,addToCartController)

module.exports=router