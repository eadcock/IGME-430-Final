const mongoose = require('mongoose');
const models = require('../models');

const { Note } = models;

const queryNote = async (req) => {
  const search = { private: false };
  if (req.query.note) {
    search._id = mongoose.Types.ObjectId(req.query.note);
  } else if (req.query.author) {
    search.owner = req.query.author;
  }
  let result;
  await Note.NoteModel.find(search,
    'title content createdData owner',
    { sort: { createdData: -1 } },
    (err, docs) => {
      if (err) {
        console.log(err);
        result = { error: 'An error occurred' };
      }

      result = { notes: docs };
    });
  return result;
};

const makerPage = async (req, res) => {
  if (req.query.note) {
    const result = await queryNote(req, res);
    if (result.error) {
      console.log(result);
      return res.status(400).json(result);
    }
    const app = res.render('app', { csrfToken: req.csrfToken(), notes: result });
    return app;
  }

  return Note.NoteModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occured' });
    }

    const app = res.render('app', { csrfToken: req.csrfToken(), notes: docs });
    return app;
  });
};

const makeNote = (req, res) => {
  if (!req.body.title || !req.body.content) {
    return res.status(400).json({ error: 'Every note must have a title and some content' });
  }

  const noteData = {
    title: req.body.title,
    content: req.body.content,
    owner: req.session.account._id,
    private: false,
  };

  const newNote = new Note.NoteModel(noteData);

  const notePromise = newNote.save();

  notePromise.then(() => res.json({ redirect: '/maker' }));

  notePromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'A note with this title already exists' });
    }

    return res.status(400).json({ error: 'An error occurred' });
  });

  return notePromise;
};

const getNotes = (req, res) => {
  let account = req.session.account._id;
  if (req.query.author) {
    account = req.query.author;
  }
  Note.NoteModel.findByOwner(account, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }

    return res.json({ notes: docs });
  });
};

const getPublicNotes = async (req, res) => {
  const result = await queryNote(req, res);
  if (result.error) {
    console.log(result.error);
    return res.status(400).json({ error: result.error });
  }

  return res.json(result);
};

module.exports.makerPage = makerPage;
module.exports.getNotes = getNotes;
module.exports.getPublicNotes = getPublicNotes;
module.exports.make = makeNote;
