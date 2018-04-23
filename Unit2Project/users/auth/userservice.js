const bcrypt   = require('bcrypt');
const fetch    = require('node-fetch');

const User     = require('../model/theuser');

module.exports = {
  async login(req, res next) {
    try {
      const { username, password} = req.body
      const user = await theuser.findOne(username);
      const areTheyValid = await bycrpt.compare(password, user.password_digest);

      if(!areTheyValid) {
        throw {message: 'Password is Incorrect'};
      }
      req.session.user = user;
      next();
    } catch (err) {
      next(err);
    }
  },

  logout(req, res, next) {
    req.session.destroy(err => next(err));
  },

  loginRequired: [
  (req, res, next) => next(!req.session.user || null),
  (err, req, res, next) => res.sendStatus(404),
  ]
};
