const { searchCategory, questions } = require("../helpers/api")

const searchCategoryControllers = async (req, res) => {
    const categories = await searchCategory()
    res.json(categories)
}

const questionsControllers = async (req, res) => {
    const amount = req.query.amount
    const category = req.query.category
    const questionsDB = await questions(amount, category);
    res.json(questionsDB);
}

module.exports = {
    questionsControllers,
    searchCategoryControllers
}