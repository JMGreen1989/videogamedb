const userRouter    = require('express').Router();
const userService   = require('./userservice');
const usersViewController  = require('../usersViewController');

userRouter.route('/login')
.get(usersViewController.userLogin)
.post(userService.login, usersViewController.handleCreateUser);

userRouter.get('/logout', userService.logout, usersViewController.userLogout);

userRouter.route('/register')
.get(usersViewController.userRegisterForm);


userRouter.use((err, req, res, next) => {
  console.log(err);
  res.json({error: err});
});

module.exports = userRouter;
