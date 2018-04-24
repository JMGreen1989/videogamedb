const playDb = require('../../models/playstation');

//laying out all the PS games available on the table
function PSlayout(req, res, next) {
  console.log(res)
      playDb.getAllPGames()
    .then(data => {
      res.locals.playstation = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

//get the PS games to show details when you click on it
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

//click the add box and you can add a PS game
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

//edit the details of a PS game you just added
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

//update an already existing PS game on the list
function updatePlayGame(req, res, next) {
  playDb.updatePGame(req.body)
  .then(data => {
    res.redirect(`/playstation/${req.body.id}`)
  })
  .catch(err => {
    next(err);
  })
}

//get rid of a game if you don't like it!
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
