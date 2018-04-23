const boxDb = require('../../models/xbox');
// const fetch = require('node-fetch');

//laying out all the xbox games availble on the given table
function XBlayout(req,res,next) {
  console.log('inside xb layout');
    boxDb.getAllXGames()
    .then(data => {
      res.locals.xbox = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

//getting one xbox game
function getOneX(req, res, next) {
  boxDb.getOneXGame(req.params.id)
  .then(data => {
    res.locals.xbox = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

//adding a game, if you choose
function createXGame(req, res, next) {
  boxDb.makeXGame(req.body)
  .then(data => {
    res.locals.xbox = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}


//update an already existing xbox game on the list
function updateXBGame(req, res, next) {
  boxDb.updateXGame(req.params.id)
  .then(data => {
    res.redirect('xbox/edit')
  })
  .catch(err => {
    next(err);
  })
}

//get rid of a game if you don't like it!
function destroyXGame(req, res, next) {
  boxDb.deleteXGame(req.params.id)
  .then(() => {
    res.redirect('/xbox/show');
  })
  .catch(err => {
    res.status(500).json({
      message:error.message
    })
  })
}

module.exports = {
  XBlayout,
  getOneX,
  createXGame,
  updateXBGame,
  destroyXGame
}
