const userRouter    = require('express').Router();
const userService   = require('./userservice');
const usersViewController  = require('../usersViewController');

userRouter.route('/login')
.get(usersViewController.loginPage)
.post(userService.login, usersViewController.handleCreateUser);

userRouter.get('/logout', userservice.logout, usersViewController.handleLogout);

userRouter.use((err, req, res, next) => {
  console.log(err);
  res.json({error: err});
});

module.exports = userRouter;
