const AskinGame = require("../models/game.models");
const { questions } = require("../helpers/api");

const answersControllers = async (req, res) => {
  const userId = req.body.id;
  const answer = req.body.answer
  try {
    const postID = await AskinGame.findOne({ userId })
    
    if(postID.correct_answer === answer ){
      res.json({
        done: true
      })
    }else{
      res.json({
        done: false
      })
    }
  } catch (err) {
    res.status(400).json({
      done: false,
      err
    })
  }
};

const questionsControllers = async (req, res) => {
  const userId = req.body.id;
  const categoryPosition = Math.floor(Math.random(9) * 32);
  const positionQuestion = Math.floor(Math.random() * 49);
  const questionsDB = await questions(categoryPosition);
  try {
    const postID = await AskinGame.findOne({ userId })
    if (questionsDB.done) {
      const questionRequest = questionsDB.results[positionQuestion];
      const act = await AskinGame.findByIdAndUpdate(postID._id, {correct_answer: questionRequest.correct_answer, positionQuestion:questionRequest.question})
      res.json(questionRequest);
    } else {
      res.status(400).json(questionsDB);
    }
  } catch (err) {
    res.status(400).json({
      done: false,
      err,
    });
  }
};

module.exports = {
  questionsControllers,
  answersControllers,
};
