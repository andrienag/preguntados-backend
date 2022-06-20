const axios = require("axios");

const searchCategory = async () => {
  const instance = axios.create({
    baseURL: "https://opentdb.com/api_category.php",
    timeout: 1000,
  });
  try {
    const { data } = await instance.get();
    const { trivia_categories } = data
    return {
      done: true,
      trivia_categories
    };
  } catch (err) {
    return {
      done: false,
      err,
    };
  }
};

const questions = async (amount = 10, categoryID = 10) => {
  const instance = axios.create({
    baseURL: "https://opentdb.com/api.php",
    timeout: 1000,
    params: {
      amount,
      category: categoryID
    },
  });
  try {
    const { data } = await instance.get();
    const { results } = data
    return {
      done: true,
      results
    };
  } catch (err) {
    return {
      done: false,
      err,
    };
  }
};

module.exports = {
  searchCategory,
  questions,
};