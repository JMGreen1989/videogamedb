const boxDb = require('/models/xbox');

function getAllX(req, res, next) {
  boxDb.getAllBoxGames()
  .then(data => {
    res.locals.xbox = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getOneX(req, res, next) {
  boxDb.getOneBoxGames(req.params.id)
  .then(data => {
    res.locals.xbox = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getAllX,
  getOneX
}
