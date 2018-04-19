function lookAtPlay(req, res) {
  playstation = res.locals.playstation
  res.render('playstationviews/index');
}

function lookAtOneP(req, res) {
  playstation = res.locals.playstation
  res.render('playstationviews/show');
}

function makeNewPGame(req, res) {
  playstation = res.locals.newGame
  res.redirect('playstationviews/new');
}

function editPGame(req, res) {
  playstation = res.locals.playstation
  res.render('playstationviews/edit');
}

function deleteGame(req, res) {
  res.redirect('playstationviews/index');
}

module.exports = {
  lookAtPlay,
  lookAtOneP,
  makeNewPGame,
  editPGame,
  deleteGame
}
