
//   making a function for looking the PS games
//   renders the show.ejs page in the xboxviews folder

function lookAtXGames(req, res) {
  res.render('xboxviews/show', {
    xbox: res.locals.xbox
  })
}

//   showing you a specific game when you click on it
//   renders the game.ejs page

function showOneXGame(req, res) {
   xbox = res.locals.xbox
  res.render('xboxviews/game', {
    xbox: res.locals.xbox
  })
}

//    renders the new.ejs for adding a new game

function makeNewXGame (req, res) {
   xbox = res.locals.xbox
  res.render('xboxviews/new', {
  })
}

//   renders the edit.ejs for ending an existing or added game

function updateTheXGame(req, res) {
  xbox = res.locals.xbox
  res.render('xboxviews/edit', {
    xbox: res.locals.xbox
  })
}

//   redirects you back to show.ejs after you've deleted something

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
