//   connecting my controller file to my models file

const boxDb = require('../../models/xbox');


//   this connects with the function in my models
//   and displays all my games

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

//   also connects with my model function but gets one of the games

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

//  this and the corresponding model initiate the add game feature

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

//   for editing the details of a game

function editXBGame(req, res, next) {
  boxDb.updateXGame(req.params.id)
  .then(data => {
    res.locals.xbox = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}


//  after you edit, this should update the game info on screen

function updateXBGame(req, res, next) {
  boxDb.updateXGame(req.body)
  .then(data => {
    res.redirect(`/xbox/${req.body.id}`)
  })
  .catch(err => {
    next(err);
  })
}

//  getting rid of a game

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
  editXBGame,
  updateXBGame,
  destroyXGame
}
