//making a function for looking at the PS index page
function lookAtPlay(req, res) {
  playstation = res.locals.playstation
  res.render('playstationviews/index');
}

//making a function for looking at one PS game
function lookAtOneP(req, res) {
  playstation = res.locals.playstation
  res.render('playstationviews/show');
}

//making a function for when you want to input a game
function makeNewPGame(req, res) {
  playstation = res.locals.newGame
  res.redirect('playstationviews/new');
}

//function for editing an exiting game
function editPGame(req, res) {
  playstation = res.locals.playstation
  res.render('playstationviews/edit');
}

//function for deleting a game
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
