const { Router } = require("express");

const route = Router()

const { 
    questionsControllers,
    answersControllers} = require("../controllers/preguntados.controllers");

route.get("/showAnswers", answersControllers)
route.get("/questions", questionsControllers)

module.exports = route;