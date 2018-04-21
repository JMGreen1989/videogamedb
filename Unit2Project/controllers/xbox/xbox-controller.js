const boxDb = require('../../models/xbox');
// const fetch = require('node-fetch');

function XBlayout(req,res,next) {
  console.log('inside ps layout');
    boxDb.getAllXGames()
    .then(data => {
      res.locals.xbox = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}


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
  boxDb.makeXGame(req.params.id)
  .then(data => {
    res.locals.xbox = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}


//update an already existing PS game on the list
function updateXBGame(req, res, next) {
  boxDb.updateXGame(req.params.id)
  .then(data => {
    res.redirect(`xboxview/edit`)
  })
  .catch(err => {
    next(err);
  })
}

//get rid of a game if you don't like it!
function destroyXGame(req, res, next) {
  boxDb.deleteXGame(req.params.id)
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
  XBlayout,
  getOneX,
  createXGame,
  updateXBGame,
  destroyXGame
}
