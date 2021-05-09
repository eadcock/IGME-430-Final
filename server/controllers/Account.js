const mongoose = require('mongoose');
const models = require('../models');

const { Account } = models;

const loginPage = (req, res) => {
  res.render('login', { csrfToken: req.csrfToken() });
};

const signupPage = (req, res) => {
  res.render('signup', { csrfToken: req.csrfToken() });
};

const premiumPage = (req, res) => {
  res.render('premium', { csrfToken: req.csrfToken() });
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

const login = (req, res) => {
  const username = `${req.body.username}`;
  const password = `${req.body.pass}`;

  if (!username || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  return Account.AccountModel.authenticate(username, password, (err, account) => {
    if (err || !account) {
      return res.status(401).json({ error: 'Wrong username or password' });
    }

    req.session.account = Account.AccountModel.toAPI(account);

    return res.json({ redirect: '/maker' });
  });
};

const signup = (req, res) => {
  req.body.username = `${req.body.username}`;
  req.body.pass = `${req.body.pass}`;
  req.body.pass2 = `${req.body.pass2}`;

  if (!req.body.username || !req.body.pass || !req.body.pass2) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (req.body.pass !== req.body.pass2) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  return Account.AccountModel.generateHash(req.body.pass, (salt, hash) => {
    const accountData = {
      username: req.body.username,
      salt,
      password: hash,
    };

    const newAccount = new Account.AccountModel(accountData);

    newAccount.save().then(() => {
      req.session.account = Account.AccountModel.toAPI(newAccount);
      res.json({ redirect: '/maker' });
    }).catch((err) => {
      console.log(err);

      if (err.code === 11000) {
        return res.status(400).json({ error: 'Username already in use.' });
      }

      return res.status(400).json({ error: 'An error ocurred. ' });
    });
  });
};

const getUser = async (req, res) => {
  req.query.id = `${req.query.id}`;

  // eslint-disable-next-line eqeqeq
  if (!req.query.id) {
    return res.status(400).json({ error: 'An id is required to look up an account' });
  }

  const users = {};

  const ids = [...req.query.id.split(',')];
  console.log(req.query);

  for (let i = 0; i < ids.length; i++) {
    if (!mongoose.Types.ObjectId.isValid(ids[i])) {
      users[ids[i]] = { error: `${ids[i]} is an invalid id` };
    } else {
      // eslint-disable-next-line no-await-in-loop
      await Account.AccountModel.findById(ids[i], (err, account) => {
        if (err) {
          users[ids[i]] = { error: 'An error occurred getting this account' };
        }

        users[account._id] = Account.AccountModel.toAPI(account);
      });
    }
  }

  return res.json(users);
};

const premium = async (req, res) => {
  if (!req.body.upgrade) {
    return res.status(400).json({ error: 'Whether this is an upgrade or downgrade is required.' });
  }

  let result = 'default';
  await Account.AccountModel.findById(mongoose.Types.ObjectId(req.session.account._id),
    async (err, doc) => {
      if (err || !doc) {
        result = { error: 'There was an error getting your account', status: 500 };
      }

      // eslint-disable-next-line no-param-reassign
      doc.premium = req.body.upgrade;
      result = doc;
      await doc.save().then((account) => { req.session.account = Account.AccountModel.toAPI(account); }).catch(() => { result = { error: 'There was an error saving to your account', status: 500 }; });
    });
  req.session.account = Account.AccountModel.toAPI(result);
  if (!result) result = { error: 'There was an error getting your account', status: 500 };
  if (!result || result.error) {
    return res.status(result.status).json(result);
  }
  return res.json(Account.AccountModel.toAPI(result));
};

const getToken = (req, res) => {
  const csrfJSON = {
    csrfToken: req.csrfToken(),
  };

  res.json(csrfJSON);
};

const getSelf = (req, res) => res.json({ account: req.session.account });

module.exports.loginPage = loginPage;
module.exports.login = login;
module.exports.logout = logout;
module.exports.signupPage = signupPage;
module.exports.premiumPage = premiumPage;
module.exports.signup = signup;
module.exports.getToken = getToken;
module.exports.getUser = getUser;
module.exports.premium = premium;
module.exports.getSelf = getSelf;
