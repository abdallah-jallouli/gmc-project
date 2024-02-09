const config = require("config");
const secret = config.get("secret");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyAuth = async (req, res, next) => {
  let token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, secret);
    if (!decoded) return res.status(404).json({ msg: "invalid token" });
    const user = await User.findById(decoded.id);
    if (!user) return res.status(400).json({ msg: "invalid token" });
    else {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = verifyAuth;
