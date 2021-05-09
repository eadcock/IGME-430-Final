const models = require('../models');

const { Note } = models;

const makerPage = (req, res) => {
  Note.NoteModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occured' });
    }

    return res.render('app', { csrfToken: req.csrfToken(), notes: docs });
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

const getNotes = (req, res) => Note.NoteModel.findByOwner(req.session.account._id, (err, docs) => {
  if (err) {
    console.log(err);
    return res.status(400).json({ error: 'An error occurred' });
  }

  return res.json({ notes: docs });
});

module.exports.makerPage = makerPage;
module.exports.getNotes = getNotes;
module.exports.make = makeNote;
