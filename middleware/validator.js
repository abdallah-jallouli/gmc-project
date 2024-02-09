
const express = require("express");
const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check('fullName', "This field is required").notEmpty(),
  check('email', "This field is required").notEmpty(),
  check('email', "This field is not valid").isEmail(),
  check('password', "This field is not valid").isLength({ min: 6 }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(406).json({ errors: errors.array() });
};
