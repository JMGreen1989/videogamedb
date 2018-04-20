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
.get(playController.getOne, playViewController.lookAtPGames, sendThisError);

//adding a game when you click add
playRouter.route('/:id')
.post(playController.createPlayGame, playViewController.makeNewPGame, sendThisError);

//editing an existing game
playRouter.route('/edit')
.put(playController.editPlayGame, playViewController.editPsGame, sendThisError);

//delete a game
playRouter.route('/show')
.delete(playController.destroyPlayGame, playViewController.deleteGame,);


module.exports = playRouter;
