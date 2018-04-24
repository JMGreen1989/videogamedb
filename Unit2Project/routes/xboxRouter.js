//   defining the express router

const xboxRouter = require('express').Router();

//   defining the path to the playstation controller

const xboxController = require('../controllers/xbox/xbox-controller');

//   defining the path to the PS view controller

const xboxViewController = require('../controllers/xbox/xboxViewController');


//   setting up an error for when something goes wrong

function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occurred',
    message: err.message
  })
}

//   this gets a posts anything in show.ejs
//   it links the controller and view controller on the XB side

xboxRouter.route('/show')
.get(xboxController.XBlayout, xboxViewController.lookAtXGames, sendThisError)
.post(xboxController.createXGame, xboxController.XBlayout, xboxViewController.lookAtXGames);

//   getting a game from the table

xboxRouter.route('/game/:id')
.get(xboxController.getOneX, xboxViewController.showOneXGame, sendThisError)


//   when you click the add game button, this is the route

xboxRouter.route('/new')
.get(xboxViewController.makeNewXGame, sendThisError);

//   for a specific ID this route lets you update a game you made or
//   an already existing one
//   also deletes a game

xboxRouter.route('/:id')
.delete(xboxController.destroyXGame, xboxViewController.deleteXGame, sendThisError)
.get(xboxController.XBlayout, xboxViewController.lookAtXGames, sendThisError);

//   editing and updating game info

xboxRouter.route('/:id/edit')
.get(xboxController.getOneX, xboxViewController.updateTheXGame, sendThisError);


module.exports = xboxRouter;
