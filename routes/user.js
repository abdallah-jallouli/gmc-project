const express = require("express");
const router = express.Router();
// const { register, login, auth } = require("../controller/user.controller");
const { registerRules, validator } = require("../middleware/validator");
const verifyAuth = require("../middleware/verifyAuth");
const { register, logIn, auth } = require("../controllers/user.controller");

router.post("/register", register);
router.post("/login", logIn);
router.get("/auth", verifyAuth, auth);

module.exports = router;
