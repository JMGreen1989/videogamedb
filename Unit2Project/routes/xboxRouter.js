//defining the express router
const xboxRouter = require('express').Router();
//defining the path to the xbox controller
const xboxController = require('../controllers/xbox/xbox-controller');
//defining the path to the XB view controller
const xboxViewController = require('../controllers/xbox/xboxViewController');


//setting up an error for when something goes wrong
function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occured',
    message: err.message
  })
}

//showing one game when you click
xboxRouter.route('/show')
.get(xboxController.getOneX, xboxViewController.lookAtXGames, sendThisError);

//adding a game when you click add
xboxRouter.route('/:id')
.post(xboxController.createXGame, xboxViewController.makeNewXGame, sendThisError);

//editing an existing game
xboxRouter.route('/edit')
.put(xboxController.editXGame, xboxViewController.editXGame, sendThisError);

//delete a game
xboxRouter.route('/show')
.delete(xboxController.destroyXGame, xboxViewController.deleteXGame);

module.exports = xboxRouter;
