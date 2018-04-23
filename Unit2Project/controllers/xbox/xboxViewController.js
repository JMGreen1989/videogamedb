//making a function for looking the XB games

function lookAtXGames(req, res) {
  res.render('/xbox/show', {
    xbox: res.locals.xbox
  })
}

//showing one game when you click on it
function showOneXGame(req, res) {
   xbox = res.locals.xbox
  res.render('/xbox/game', {
    xbox: res.locals.xbox
  })
}

//making a function for when you want to input a game
function makeNewXGame (req, res) {
   xbox = res.locals.xbox
  res.render('/xbox/new', {
  })
}

//function for editing an exiting game
function updateTheXGame(req, res) {
  xbox = res.locals.xbox
  res.render('/xbox/edit', {
    xbox: res.locals.xbox
  })
}

//function for deleting a game
function deleteXGame(req, res) {
  res.redirect('/xbox/show');
}

module.exports = {
  lookAtXGames,
  showOneXGame,
  makeNewXGame,
  updateTheXGame,
  deleteXGame
}
