const playRouter = require('express').Router();
const playController = require('../controllers/playstation/playstation-controller');
const playViewController = require('../controllers/playstation/playstationViewController');

// const playRouterDb = require('../models/playstation');

function sendThisError(err, req, res, next) {
  res.status(500).json({
    status: 'an error has occured',
    message: err.message
  })
}

playRouter.route('/')
.get(playController.getAll, playViewController.lookAtPlay, sendThisError)
