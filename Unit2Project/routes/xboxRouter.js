//defining the express router
const xboxRouter = require('express').Router();
//defining the path to the xbox controller
const xboxController = require('../controllers/xbox/xbox-controller');
//defining the path to the XB view controller
const xboxViewController = require('../controllers/xbox/xboxViewController');


//setting up an error for when something goes wrong
function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occurred',
    message: err.message
  })
}

//showing the games when you click
xboxRouter.route('/show')
.get(xboxController.XBlayout, xboxViewController.lookAtXGames, sendThisError)
.post(xboxController.createXGame, xboxController.XBlayout, xboxViewController.lookAtXGames);

//show one game when you click on it
xboxRouter.route('/game/:id')
.get(xboxController.getOneX, xboxViewController.showOneXGame, sendThisError)


//adding a game when you click add
xboxRouter.route('/new')
.get(xboxViewController.makeNewXGame, sendThisError);


//delete a game
xboxRouter.route('/:id')
.delete(xboxController.destroyXGame, xboxViewController.deleteXGame, sendThisError)
.get(xboxController.XBlayout, xboxViewController.lookAtXGames, sendThisError);

//editing an existing game
xboxRouter.route('/:id/edit')
.get(xboxController.getOneX, xboxController.editXBGame, sendThisError);

module.exports = xboxRouter;
