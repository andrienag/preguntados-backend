const { Router } = require("express");

const route = Router()

const { 
    questionsControllers,
    searchCategoryControllers} = require("../controllers/preguntados.controllers");

route.get("/showsearchCategory", searchCategoryControllers)
route.get("/questions", questionsControllers)

module.exports = route;