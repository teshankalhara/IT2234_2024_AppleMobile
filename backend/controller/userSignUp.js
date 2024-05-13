const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs')

async function userSignUpController(req, res) {
    try {
        const { email, password, name } = req.body

        //console.log('req.body ', req.body)

        const user = await userModel.findOne({ email })

        //console.log(user)

        if (user) {
            throw new Error("Already exists Email!")
        }

        if (!email) {
            throw new Error("Email Provide")
        }
        if (!password) {
            throw new Error("Password Provide")
        }
        if (!name) {
            throw new Error("Name Provide")
        }

        const salt = bcrypt.genSaltSync(10)
        const hashPassword = await bcrypt.hashSync(password, salt)

        /* const userData = new userModel({
            email,
            password,
            name,
        })*/

        if (!hashPassword) {
            throw new Error("Password Field Error")
        }

        const payload = {
            ...req.body,
            role:"GENERAL",
            password: hashPassword
        }

        //const userData = new userModel(req.body)
        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User Created OK!!"
        })

    } catch (err) {
        //console.log('Error :', err.message);
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = userSignUpController