module.exports = function(app, express) {
  app.get('/login', function(req, res) {
  res.render('login');
});

// app.get('/github/auth', passport.authenticate('github', {
//   failureRedirect: '/login'
// }));

// app.get('/github/callback',
//   passport.authenticate('github', {failureRedirect: '/login'}),
//   function(req, res) {
//     var tempPassportSession = req.session.passport;
//     req.session.regenerate(function() {
//       req.session.passport = tempPassportSession;
//       res.redirect('/');
//     });
//   });

// app.get('/logout', function(req, res) {
//   req.session.destroy();
//   res.redirect('/login');
//   });
// }



