//making a function for looking the XB games

function lookAtXGames(req, res) {
  res.render('xboxviews/show', {
    xbox: res.locals.xbox
  })
}

//showing one game when you click on it
function showOneXGame(req, res) {
   xbox = res.locals.xbox
  res.render('xboxviews/game', {
    xbox: res.locals.xbox
  })
}

//making a function for when you want to input a game
function makeNewXGame (req, res) {
   xbox = res.locals.xbox
  res.render('xboxviews/new', {
  })
}

//function for editing an exiting game
function updateTheXGame(req, res) {
  xbox = res.locals.xbox
  res.render('xboxviews/edit', {
    xbox: res.locals.xbox
  })
}

//function for deleting a game
function deleteXGame(req, res) {
  res.redirect('xboxviews/show');
}

module.exports = {
  lookAtXGames,
  showOneXGame,
  makeNewXGame,
  updateTheXGame,
  deleteXGame
}
