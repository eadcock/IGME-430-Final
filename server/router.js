const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/login', mid.requireSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requireSecure, mid.requiresLogout, controllers.Account.login);
  app.get('/getToken', mid.requireSecure, controllers.Account.getToken);
  app.get('/getNotes', mid.requiresLogin, controllers.Note.getNotes);
  app.post('/signup', mid.requireSecure, mid.requiresLogout, controllers.Account.signup);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);
  app.get('/maker', mid.requiresLogin, controllers.Note.makerPage);
  app.post('/maker', mid.requiresLogin, controllers.Note.make);
  app.get('/', mid.requireSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.get('/getUser', mid.requireSecure, controllers.Account.getUser);
  app.get('/getPublicNotes', controllers.Note.getPublicNotes);
};

module.exports = router;
