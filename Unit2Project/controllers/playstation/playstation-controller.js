const playDb = require('../../models/playstation');


//get the PS games to show details when you click on it
function getOne(req, res, next) {
  playDb.getThePGame(req.params.id)
  .then(data => {
    res.locals.playstation = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

//click the add box and you can add a PS game
function createPlayGame(req, res, next) {
  playDb.makePGame(req.params.id)
  .then(data => {
    res.locals.playstation = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

//edit the details of a PS game you just added
function editPlayGame(req, res, next) {
  playDb.editPGame(req.params.id)
  .then(data => {
    res.locals.playstation = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

//update an already existing PS game on the list
function updatePlayGame(req, res, next) {
  playDb.editPGame(req.params.id)
  .then(data => {
    res.redirect(`playstationview/edit`)
  })
  .catch(err => {
    next(err);
  })
}

//get rid of a game if you don't like it!
function destroyPlayGame(req, res, next) {
  playDb.deletePGame(req.params.id)
  .then(() => {
    res.redirect('playstationview/index');
  })
  .catch(err => {
    res.status(500).json({
      message:error.message
    })
  })
}

module.exports = {
  getOne,
  createPlayGame,
  editPlayGame,
  updatePlayGame,
  destroyPlayGame
}
