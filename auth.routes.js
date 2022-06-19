const { Router } = require("express");
const { check } = require("express-validator");
const route = Router()

const { login, register } = require("../controllers/auth.controllers");
const { 
    nameValidator, 
    passwordValidator, 
    emailValidator } = require("../helpers/validateUsers");
const validateFields = require("../middlewares/validateFields");

route.post('/login', [
    check("email", "You must enter the email").not().isEmpty(),
    check("password", "You must enter the password").not().isEmpty(),
    validateFields
],login)

route.post('/register', [
    check("email", "Please enter the email").not().isEmpty(),
    check("password", "Please enter the password").not().isEmpty(),
    check("name").custom(nameValidator),
    check("surName").custom(nameValidator),
    check("email").custom(emailValidator),
    check("password").custom(passwordValidator),
    validateFields
],register)

module.exports = route;