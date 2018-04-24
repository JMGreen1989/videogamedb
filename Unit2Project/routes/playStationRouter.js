//defining the express router
const playRouter = require('express').Router();
//defining the path to the playstation controller
const playController = require('../controllers/playstation/playstation-controller');
//defining the path to the PS view controller
const playViewController = require('../controllers/playstation/playstationViewController');


//setting up an error for when something goes wrong
function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occurred',
    message: err.message
  })
}

//showing one game when you click

playRouter.route('/show')
.get(playController.PSlayout, playViewController.lookAtPGames, sendThisError)
.post(playController.createPlayGame, playController.PSlayout, playViewController.lookAtPGames);


//showing a game when you click on it
playRouter.route('/game/:id')
.get(playController.getOne, playViewController.showPSGame, sendThisError)
.delete(playController.destroyPlayGame, playViewController.deleteGame);

//adding a game when you click add
playRouter.route('/new')
.get(playViewController.makeNewPGame, sendThisError);

playRouter.route('/:id')
.delete(playController.destroyPlayGame, playViewController.deleteGame, sendThisError)
.put(playController.updatePlayGame)
.get(playController.PSlayout, playViewController.lookAtPGames, sendThisError);


//editing an existing game
playRouter.route('/:id/edit')
.get(playController.getOne, playViewController.editPsGame, sendThisError)
.put(playController.updatePlayGame);



module.exports = playRouter;
