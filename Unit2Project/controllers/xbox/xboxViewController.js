function lookAtBox(req, res) {
  res.render('xboxviews/index', {
    xbox: res.locals.xbox
  })
}

function lookAtOneX(req, res) {
  res.render('xboxviews/show', {
    xbox: res.locals.xbox
  })
}

function makeNewXGame(req, res) {
  xbox = res.locals.newPlay
  res.redirect(`xbox/new/${game.id}`)
}

function editXGame(req, res) {
  xbox = res.locals.xbox
  res.render(`xboxviews/edit`, {
    xbox: res.locals.xbox
  })
}

function deleteGameX(req, res) {
  res.redirect(`xboxviews/index`);
}

module.exports = {
  lookAtBox,
  lookAtOneX,
  makeNewXGame,
  editXGame,
  deleteGameX
}
