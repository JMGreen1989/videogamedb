//making a function for looking at the PS index page

//was confused with my syntax at first
//thankfully Joe Keohan (the TA) went over with me that
//for res.render to render something you need to put the
//path as a string and res.locals as an object within the render function


//making a function for looking the PS games
function lookAtPGames(req, res) {
  console.log('inside looking at PS games')
   res.render('playstationviews/show', {
        playstation: res.locals.playstation
    })
}
//showing you a specific game when you click on it
function showPSGame(req, res) {
  playstation = res.locals.playstation
  res.render('playstationviews/game', {
    playstation: res.locals.playstation
  })
}

//making a function for when you want to input a game
function makeNewPGame(req, res) {
  playstation = res.locals.playstation
  res.render('playstationviews/new', {
  })
}

//function for editing an exiting game
function editPsGame(req, res) {
  playstation = res.locals.playstation
  res.render('playstationviews/edit', {
    playstation: res.locals.playstation
  })
}

//function for deleting a game
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
