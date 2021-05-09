const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const _ = require('underscore');

let NoteModel = {};

const convertId = mongoose.Types.ObjectId;
const setName = (name) => _.escape(name).trim();

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    set: setName,
  },

  content: {
    type: String,
    required: true,
    trim: false,
  },

  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
  },

  private: {
    type: Boolean,
    required: true,
  },

  accountsWithAccess: {
    type: [mongoose.Schema.ObjectId],
    requires: false,
    ref: 'Account',
  },

  createdData: {
    type: Date,
    default: Date.now,
  },
});

NoteSchema.statics.toAPI = (doc) => ({
  title: doc.title,
  content: doc.content,
  owner: doc.owner,
  created: doc.createdData,
});

NoteSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return NoteModel.find(search).select('title content owner createdData').lean().exec(callback);
};

NoteModel = mongoose.model('Note', NoteSchema);
module.exports.NoteModel = NoteModel;
module.exports.NoteSchema = NoteSchema;
