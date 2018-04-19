//making a function for looking at the PS index page

//was confused with my syntax at first
//thankfully Joe Keohan (the TA) went over with me that
//for res.render to render something you need to put the
//path as a string and res.locals as an object within the render function

function lookAtPlay(req, res) {
  res.render('playstationviews/index', {
    playstation: res.locals.playstation
  })
}

//making a function for looking at one PS game
function lookAtOneP(req, res) {
  res.render('playstationviews/show', {
    playstation: res.locals.playstation
  })
}

//making a function for when you want to input a game
function makeNewPGame(req, res) {
  playstation = res.locals.newPlay
  res.redirect(`new/${game.id}`);
}

//function for editing an exiting game
function editPGame(req, res) {
  playstation = res.locals.playstation
  res.render(`playstationviews/edit`, {
    playstation: res.locals.playstation
  })
}

//function for deleting a game
function deleteGame(req, res) {
  res.redirect(`playstationviews/index`);
}

module.exports = {
  lookAtPlay,
  lookAtOneP,
  makeNewPGame,
  editPGame,
  deleteGame
}
