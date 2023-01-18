const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/User");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  // check the authorization header

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header
      token = req.headers.authorization.split(" ")[1];
      // verify token
      const decoded = jwt.verify(token.process.env.JWT_SECRET);

      // get user from token - i is optional depending on what you put on generating token
      // get all data and except password
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401).json({
        msg: "Not Authorized",
      });
    }
  }

  if (!token) return res.status(401).json({ msg: "Not Authorized, no token" });
});

module.exports = { protect };
