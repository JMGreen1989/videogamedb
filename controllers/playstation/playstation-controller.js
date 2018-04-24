//   connecting my controller file to my models file
const playDb    = require('../../models/playstation');

//   this connects with the function in my models
//   and displays all my games

function PSlayout(req, res, next) {
  // console.log(res)
      playDb.getAllPGames()
    .then(data => {
      res.locals.playstation = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

//   also connects with my model function but gets one of the games

function getOne(req, res, next) {
  playDb.getOnePGame(req.params.id)
  .then(data => {
    res.locals.playstation = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

//  this and the corresponding model initiate the add game feature

function createPlayGame(req, res, next) {
  playDb.makePGame(req.body)
  .then(data => {
    res.locals.playstation = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

//   for editing the details of a game

function editPlayGame(req, res, next) {
  playDb.updatePGame(req.params.id)
  .then(data => {
    res.locals.playstation = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

//  after you edit, this should update the game info on screen

function updatePlayGame(req, res, next){
  console.log("here", req.body)

  playDb.updatePGame(req.body)
  .then(data => {
    res.redirect(`/playstation/${req.body.id}`)
  })
  .catch(err => {
    next(err);
  })
}

//  getting rid of a game

function destroyPlayGame(req, res, next) {
  playDb.deletePGame(req.params.id)
  .then(() => {
    res.redirect('/playstation/show');
  })
  .catch(err => {
    res.status(500).json({
      message:error.message
    })
  })
}

module.exports = {
  PSlayout,
  getOne,
  createPlayGame,
  editPlayGame,
  updatePlayGame,
  destroyPlayGame
}
