//defining the express router
const playRouter = require('express').Router();
//defining the path to the playstation controller
const playController = require('../controllers/playstation/playstation-controller');
//defining the path to the PS view controller
const playViewController = require('../controllers/playstation/playstationViewController');


//setting up an error for when something goes wrong
function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occured',
    message: err.message
  })
}


//showing one game when you click

playRouter.route('/show')
.get(playController.PSlayout, playViewController.lookAtPGames, sendThisError);

//showing a game when you click on it
playRouter.route('/game')
.get(playController.getOne, playViewController.showPSGame, sendThisError);

//adding a game when you click add
playRouter.route('/new')
.get(playController.createPlayGame, playViewController.makeNewPGame, sendThisError);

//editing an existing game
playRouter.route('/:id/edit')
.post(playController.editPlayGame, playViewController.editPsGame, sendThisError);

//delete a game
playRouter.route('/show')
.delete(playController.destroyPlayGame, playViewController.deleteGame);


module.exports = playRouter;
