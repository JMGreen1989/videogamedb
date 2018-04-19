//defining the express router
const xboxRouter = require('express').Router();
//defining the path to the xbox controller
const xboxController = require('../controllers/xbox/xbox-controller');
//defining the path to the PS view controller
const xboxViewController = require('../controllers/xbox/xboxViewController');


//setting up an error for when something goes wrong
function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occured',
    message: err.message
  })
}

xboxRouter.route('/')
.get(xboxController.getAllX, xboxViewController.lookAtBox, sendThisError)
