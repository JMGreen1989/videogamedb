//   defining the express router

const playRouter = require('express').Router();

//   defining the path to the playstation controller

const playController = require('../controllers/playstation/playstation-controller');

//   defining the path to the PS view controller

const playViewController = require('../controllers/playstation/playstationViewController');


//   setting up an error for when something goes wrong

function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occurred',
    message: err.message
  })
}

//   this gets a posts anything in show.ejs
//   it links the controller and view controller on the PS side
playRouter.route('/show')
.get(playController.PSlayout, playViewController.lookAtPGames, sendThisError)
.post(playController.createPlayGame, playController.PSlayout, playViewController.lookAtPGames);


//   getting one game or deleting it

playRouter.route('/game/:id')
.get(playController.getOne, playViewController.showPSGame, sendThisError)
.delete(playController.destroyPlayGame, playViewController.deleteGame);

//   when you click the add game button, this is the route

playRouter.route('/new')
.get(playViewController.makeNewPGame, sendThisError);

//   for a specific ID this route lets you update a game you made or
//   an already existing one

playRouter.route('/:id')
.delete(playController.destroyPlayGame, playViewController.deleteGame, sendThisError)
.put(playController.updatePlayGame)
.get(playController.PSlayout, playViewController.lookAtPGames, sendThisError);


//   editing and updating game info

playRouter.route('/:id/edit')
.get(playController.getOne, playViewController.editPsGame, sendThisError)
.put(playController.updatePlayGame);



module.exports = playRouter;
