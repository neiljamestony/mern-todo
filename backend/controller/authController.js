const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../model/User");

//@desc REGISTER USER
//@route POST /api/users/register
//@access PRIVATE

const register = asyncHandler(async (req, res) => {
  const { fname, lname, email, password } = req.body;

  if (!fname && !lname && !email && !password) {
    res.status(400).json({
      msg: "Please fill out all fields",
    });
  }

  if (!fname) {
    res.status(400).json({
      msg: "First name is required!",
    });
  }

  if (!lname) {
    res.status(400).json({
      msg: "Last name is required!",
    });
  }

  if (!email) {
    res.status(400).json({
      msg: "Email is required!",
    });
  }

  if (!password) {
    res.status(400).json({
      msg: "Password is required!",
    });
  }

  // check if email exists

  const isUserExists = await User.find({ email });

  if (isUserExists.length) {
    res.status(400).json({
      msg: "User exists!",
      isSuccess: false,
    });
  } else {
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // register

    const user = await User.create({
      firstName: fname,
      lastName: lname,
      email: email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        fname: user.firstName,
        lname: user.lastName,
        email: user.email,
        isSuccess: true,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({
        msg: "Invalid User Data!",
        isSuccess: false,
      });
    }
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check if existing
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user._id,
      fname: user.firstName,
      lname: user.lastName,
      email: user.email,
      isSuccess: true,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({
      msg: "Invalid Credentials",
      isSuccess: false,
    });
  }
});

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });

module.exports = { register, login };
