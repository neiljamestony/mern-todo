const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc  REGISTER USER
//@route POST /api/users/register
//@acess PRIVATE
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if(!name || !email || !password){
        res.status(400).json({ message: 'Please add all fields' })
    }

    // check if user exists
    const userExists = await User.findOne({email})
    if(userExists !== null){
        res.status(400).json({ message: 'User already exists!' })
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // register user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400).json({ message: 'Invalid user data'})
    }
})

//@desc LOGIN USER
//@route POST /api/users/login
//@acess PRIVATE
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // check user
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400).json({ message: 'Invalid credentials'})
    }
})

const getUserInfo = asyncHandler(async (req, res) => {
    const { _id, email, password } = await User.findById(req.user.id)
    res.send({ 
        id: _id,
        email: email,
        password: password
     })
})

// Generate JWT

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })

module.exports = { registerUser, loginUser, getUserInfo }