const playDb = require('../../models/playstation');

function getAll(req, res, next) {
  playDb.getAllPlayGames()
  .then(data => {
    res.locals.playstation = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getOne(req, res, next) {
  playDb.getOnePlayGames(req.params.id)
  .then(data => {
    res.locals.playstation = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getAll,
  getOne
}
