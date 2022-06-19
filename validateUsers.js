const User = require("../models/user.models");

const nameValidator = (name = "") => {
    const phrase = new RegExp(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/);
    const validating = phrase.test(name);
    if(!validating){
        throw new Error("Invalid name");
    }else{
        return true;
    }
}
const nameUpdate = async (name = "") => {
    const phrase = new RegExp(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/);
    const validating = phrase.test(name);
    if(!validating && name != ""){
        throw new Error("Invalid name");
    }else{
        return true;
    }
}
const emailValidator = async (email = "") => {
    const phrase = new RegExp(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[c-o-m]{3,}))$/);
    const validating = phrase.test(email);
    if(!validating){
        throw new Error("Invalid email");
    }
    const user = await User.findOne( { email } );
    if(user){
        throw new Error("Email already exists");
    }
    return true;
}

const passwordValidator = (password = "") => {
    const phrase = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}/);
    const validating = phrase.test(password);
    if(!validating){
        throw new Error("Invalid password: its length must be greater than 5 digits, it must contain a lowercase, an uppercase, a number and a special character");
    }else{
        return true;
    }
}
module.exports = {
    nameValidator,
    nameUpdate,
    emailValidator,
    passwordValidator
}