//making a function for looking the XB games

function lookAtXGames(req, res) {
  res.render('xboxviews/show', {
    xbox: res.locals.xbox
  })
}

//making a function for when you want to input a game
function makeNewXGame(req, res) {
   xbox = res.locals.xbox
  res.render(`xboxviews/new`, {
    xbox: res.locals.xbox
  })
}

//function for editing an exiting game
function editXGame(req, res) {
  xbox = res.locals.xbox
  res.render(`xbox/edit`, {
    xbox: res.locals.xbox
  })
}

//function for deleting a game
function deleteXGame(req, res) {
  res.redirect(`xboxviews/show`);
}

module.exports = {
  lookAtXGames,
  makeNewXGame,
  editXGame,
  deleteXGame
}
