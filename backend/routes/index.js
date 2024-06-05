const express=require('express')

const router=express.Router()

//token
const authToken = require('../middleware/authToken')
//token

//user
const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
//user

//cart
const addToCartController = require('../controller/user/addToCartController')
const countAddToCartProduct = require('../controller/user/countAddToCartProduct')
const addToCartViewProduct  = require('../controller/user/addToCartViewProduct')
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct')
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

//user add to cart router
router.post("/upload-product",authToken,addToCartController)
router.get("/upload-product",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)
//user add to cart router

module.exports=router