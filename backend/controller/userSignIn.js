const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
const userModel = require('../models/userModel')

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body

        if (!email) {
            throw new Error("Please check email")
        }

        if (!password) {
            throw new Error("Please check password")
        }

        const user = await userModel.findOne({ email })

        if (!user) {
            throw new Error("User not found")
        }

        const checkPassword = await bcrypt.compare(password, user.password)//not using await not working timeout

        //console.log('checkPassword:', checkPassword)

        if(checkPassword){
            const tokenData={
                _id:user._id,
                email:user.email,
            }
            const token=await jwt.sign(tokenData,process.env.TOKEN_SECRET_KEY,{expiresIn:60*60})
        
            const tokenOption={
                httpOnly:true,
                secure:true
            }

            res.cookie("token",token).json({
                message:"Login OK!",
                data:token,
                success:true,
                error:false
            })
        }else{
            throw new Error("Check the Password")
        }

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = userSignInController