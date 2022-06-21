const {Schema, model} = require("mongoose");

const AskinGame= new Schema({
    positionQuestion: {
        type: String, 
        default: "" 
    },
    correct_answer: {
        type: String, 
        default: ""
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
      }
})
AskinGame.methods.toJSON = function () {
    const { __v, ...game } = this.toObject();
    return game;
  };
  
  module.exports = model("askinGame", AskinGame);