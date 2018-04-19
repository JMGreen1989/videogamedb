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

playRouter.route('/')
.get(playController.getAll, playViewController.lookAtPlay, sendThisError)
