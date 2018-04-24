//   making a function for looking at the PS index page

//   was confused with my syntax at first
//   thankfully Joe Keohan (the TA) went over with me that



//   making a function for looking the PS games
//   renders the show.ejs page in the playstationviews folder

function lookAtPGames(req, res) {
  console.log('inside looking at PS games')
   res.render('playstationviews/show', {
        playstation: res.locals.playstation
    })
}

//   showing you a specific game when you click on it
//   renders the game.ejs page

function showPSGame(req, res) {
  playstation = res.locals.playstation
  res.render('playstationviews/game', {
    playstation: res.locals.playstation
  })
}

//    renders the new.ejs for adding a new game

function makeNewPGame(req, res) {
  playstation = res.locals.playstation
  res.render('playstationviews/new', {
  })
}

//   renders the edit.ejs for ending an existing or added game

function editPsGame(req, res) {
  playstation = res.locals.playstation
  res.render('playstationviews/edit', {
    playstation: res.locals.playstation
  })
}

//   redirects you back to show.ejs after you've deleted something

function deleteGame(req, res) {
  res.redirect('/show');
}

module.exports = {
  lookAtPGames,
  showPSGame,
  makeNewPGame,
  editPsGame,
  deleteGame
}
