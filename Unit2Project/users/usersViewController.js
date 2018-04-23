showUserLogin(req, res) {
  res.render('viewauth/userlogin');

}

userRegisterForm(req, res) {
  res.render('viewauth/register');
}

createTheUser(req, res) {
  res.redirect()
}

userLogout(req, res){
  res.redirect('/');
}

userDelete(req, res){
  res.redirect('/')


module.exports={
  showUserLogin,
  userRegisterForm,
  createTheUser,
  userLogout,
  userDelete
}
