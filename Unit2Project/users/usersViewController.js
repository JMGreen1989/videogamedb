module.exports = {

userLogin(req, res) {
  res.render('viewauth/userlogin');

},

userRegisterForm(req, res) {
  res.render('viewauth/register');
},

handleCreateUser(req, res) {
  res.redirect('/playstationviews/show')
},

userLogout(req, res){
  res.redirect('/');
},

userDelete(req, res){
  res.redirect('/playstationviews/show')

},

};
