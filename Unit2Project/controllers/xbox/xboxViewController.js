function lookAtBox(req, res) {
  xbox = res.locals.xbox
  res.render('xboxviews/index');
}

function lookAtOneX(req, res) {
  xbox = res.locals.xbox
  res.render('xboxviews/show');
}

function makeNewXGame(req, res) {
  xbox = res.locals.newGame
  res.redirect('xboxviews/new');
}

function editXGame(req, res) {
  xbox = res.locals.xbox
  res.render('xboxviews/edit');
}

function deleteGameX(req, res) {
  res.redirect('xboxviews/index');
}

module.exports = {
  lookAtBox,
  lookAtOneX,
  makeNewXGame,
  editXGame,
  deleteGameX
}
