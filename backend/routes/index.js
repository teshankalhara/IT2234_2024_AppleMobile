const express=require('express')

const router=express.Router()

//token
const authToken = require('../middleware/authToken')
//token

//user
const userSignUpController=require('../controller/userSignUp')
const userSignInController = require('../controller/userSignIn')
const userDetailsController = require('../controller/userDetails')
const userLogout = require('../controller/userLogout')
const allUsers = require('../controller/allUsers')
const updateUser = require('../controller/updateUser')
//user

//cart
const addToCartController = require('../controller/addToCartController')
const countAddToCartProduct = require('../controller/countAddToCartProduct')
const addToCartViewProduct = require('../controller/addToCartViewProduct')
const updateAddToCartProduct = require('../controller/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controller/deleteAddToCartProduct')
//cart

//users
//user router
router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)
//user router
//adminPanel router
router.get("/all-user", authToken, allUsers)
router.post("/update-user", authToken, updateUser)
//adminPanel router
//users

//product router
router.post("/upload-product",authToken,addToCartController)
router.get("/upload-product",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)
//product router

module.exports=router