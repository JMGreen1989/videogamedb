const boxDb = require('../../models/xbox');


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

function createXGame(req, res, next) {
  playDb.makeXGame(req.params.id)
  .then(data => {
    res.locals.playstation = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

//edit the details of a PS game you just added
function editXGame(req, res, next) {
  playDb.editXGame(req.params.id)
  .then(data => {
    res.locals.playstation = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

//update an already existing PS game on the list
function updateXBGame(req, res, next) {
  playDb.updateXGame(req.params.id)
  .then(data => {
    res.redirect(`xboxview/edit`)
  })
  .catch(err => {
    next(err);
  })
}

//get rid of a game if you don't like it!
function destroyXGame(req, res, next) {
  playDb.deleteXGame(req.params.id)
  .then(() => {
    res.redirect('xboxview/index');
  })
  .catch(err => {
    res.status(500).json({
      message:error.message
    })
  })
}

module.exports = {
  getOneX,
  createXGame,
  editXGame,
  updateXBGame,
  destroyXGame
}
