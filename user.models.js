const mongoose = require("mongoose");

const { Schema, model } = mongoose

const userModel = new Schema({
    name:{
        type: String,
        required: true
    },
    surName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    }
})

userModel.methods.toJSON = function(){
    const { password, __v, _id, ...user } = this.toObject();
    return user
}

module.exports = model( "user", userModel );
