module.exports = {

userLogin(req, res) {
  res.redirect('/home/index');

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
