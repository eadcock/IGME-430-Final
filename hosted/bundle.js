"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var handleNote = function handleNote(e) {
  e.preventDefault();

  if ($('#noteTitle').val() == '' || $('#noteContent').val() == '') {
    handleError('All fields are required');
    return false;
  }

  sendAjax('POST', $('#noteForm').attr('action'), $('#noteForm').serialize(), function () {
    loadNotesFromServer();
    $('#noteForm').hide();
  });
  return false;
};

var handleExitNote = function handleExitNote(e) {
  ReactDOM.unmountComponentAtNode(document.querySelector('#noteExpanded'));
  $('#noteExpanded').hide();
  $('#notes').show();
};

var NoteExpanded = function NoteExpanded(props) {
  return (/*#__PURE__*/React.createElement("div", {
      className: "noteExpanded"
    }, /*#__PURE__*/React.createElement("h2", null, props.note.title), /*#__PURE__*/React.createElement("img", {
      id: "expandedExitHover",
      src: "./assets/img/cross-hover.svg",
      alt: "exit cross when hovered over",
      onClick: handleExitNote
    }), /*#__PURE__*/React.createElement("img", {
      id: "expandedExit",
      src: "./assets/img/cross.svg",
      alt: "exit cross"
    }), /*#__PURE__*/React.createElement("p", {
      className: "noteContent"
    }, props.note.content), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("p", {
      className: "noteAuthor"
    }, "Author: ", props.account.username), /*#__PURE__*/React.createElement("p", {
      className: "noteDate"
    }, "Posted on: ", new Date(props.note.createdData).toLocaleDateString("en-US"))))
  );
};

var NoteForm = function NoteForm(props) {
  return (/*#__PURE__*/React.createElement("form", {
      id: "noteForm",
      onSubmit: handleNote,
      name: "noteForm",
      action: "/maker",
      method: "POST",
      className: "mainForm"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "name"
    }, "Title: "), /*#__PURE__*/React.createElement("input", {
      id: "noteTitle",
      type: "text",
      name: "title",
      placeholder: "Note Title"
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "age"
    }, "Content: "), /*#__PURE__*/React.createElement("textarea", {
      id: "noteContent",
      name: "content",
      rows: "4",
      cols: "45",
      placeholder: "Note Content"
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "_csrf",
      value: props.csrf
    }), /*#__PURE__*/React.createElement("input", {
      className: "formSubmit",
      type: "submit",
      value: "Make Note"
    }))
  );
};

var getAuthor = function getAuthor(id, callback) {
  sendAjax('GET', '/getUser', {
    id: encodeURIComponent(id)
  }, function (res) {
    callback(res);
  });
};

var DisplayNote = function DisplayNote(note) {
  $('#notes').hide();
  getAuthor(note.owner, function (res) {
    console.log(res);
    ReactDOM.render( /*#__PURE__*/React.createElement(NoteExpanded, {
      note: note,
      account: res[note.owner]
    }), document.querySelector('#noteExpanded'));
  });
  $('#noteExpanded').show();
};

var NoteList = function NoteList(props) {
  if (props.notes.length === 0) {
    return (/*#__PURE__*/React.createElement("div", {
        className: "noteList"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "emptyNote"
      }, "No Notes yet"))
    );
  }

  var noteNodes = props.notes.map(function (note) {
    return (/*#__PURE__*/React.createElement("div", {
        key: note._id,
        className: "note",
        onClick: function onClick(e) {
          return DisplayNote(note);
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: "/assets/img/moleskine.svg",
        alt: "notebook",
        className: "notebook"
      }), /*#__PURE__*/React.createElement("h3", {
        className: "noteTitle"
      }, " Title: ", note.title, " "), /*#__PURE__*/React.createElement("h3", {
        className: "noteContent"
      }, " Preview: ", note.content, " "), /*#__PURE__*/React.createElement("h3", {
        className: "noteDate"
      }, " Created: ", new Date(note.createdData).toLocaleDateString("en-US")))
    );
  });
  return (/*#__PURE__*/React.createElement("div", {
      className: "noteList"
    }, noteNodes)
  );
};

var PublicNoteList = function PublicNoteList(props) {
  console.log(props);

  if (props.notes.length === 0) {
    return (/*#__PURE__*/React.createElement("div", {
        className: "noteList"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "emptyNote"
      }, "No Notes yet"))
    );
  }

  var noteNodes = props.notes.map(function (note, i) {
    return (/*#__PURE__*/React.createElement("div", {
        key: note._id,
        className: "note",
        onClick: function onClick(e) {
          return DisplayNote(note);
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: "/assets/img/moleskine.svg",
        alt: "notebook",
        className: "notebook"
      }), /*#__PURE__*/React.createElement("h3", {
        className: "noteTitle"
      }, " Title: ", note.title, " "), /*#__PURE__*/React.createElement("h3", {
        className: "noteContent"
      }, " Preview: ", note.content, " "), /*#__PURE__*/React.createElement("h3", {
        className: "author"
      }, " Author: ", props.authors[note.owner].username, " "))
    );
  });
  return (/*#__PURE__*/React.createElement("div", {
      className: "noteList"
    }, noteNodes)
  );
};

var loadNotesFromServer = function loadNotesFromServer() {
  sendAjax('GET', '/getNotes', null, function (data) {
    ReactDOM.render( /*#__PURE__*/React.createElement(NoteList, {
      notes: data.notes
    }), document.querySelector('#notes'));
  });
};

var setup = function setup(csrf) {
  $('#noteExpanded').hide();
  ReactDOM.render( /*#__PURE__*/React.createElement(NoteList, {
    notes: []
  }), document.querySelector('#notes'));
  $('#noteForm').hide();
  $('#add').on('click', function () {
    ReactDOM.render( /*#__PURE__*/React.createElement(NoteForm, {
      csrf: csrf
    }), document.querySelector('#makeNote'));
    $('#noteForm').show();
  });
  $('#publicLink').on('click', function () {
    sendAjax('GET', '/getPublicNotes', null, function (data) {
      console.log(_toConsumableArray(new Set(data.notes.map(function (e) {
        return e.owner;
      }))).concat().join(','));
      getAuthor(_toConsumableArray(new Set(data.notes.map(function (e) {
        return e.owner;
      }))).concat().join(','), function (authors) {
        ReactDOM.render( /*#__PURE__*/React.createElement(PublicNoteList, {
          notes: data.notes,
          authors: authors
        }), document.querySelector('#notes'));
      });
      $('#privateLink').show();
      $('#publicLink').hide();
    });
  });
  $('#privateLink').on('click', function () {
    loadNotesFromServer();
    $('#privateLink').hide();
    $('#publicLink').show();
  });
  $('#privateLink').hide();
  loadNotesFromServer();
};

var getToken = function getToken() {
  sendAjax('GET', '/getToken', null, function (result) {
    setup(result.csrfToken);
  });
};

$(function () {
  getToken();
});
"use strict";

var handleError = function handleError(message) {
  $('#errorMessage').text(message);
  $('#noteMessage').show();
};

var redirect = function redirect(response) {
  $('#noteMessage').hide();
  window.location = response.redirect;
};

var sendAjax = function sendAjax(type, action, data, success) {
  $.ajax({
    cache: false,
    type: type,
    url: action,
    data: data,
    dataType: 'json',
    success: success,
    error: function error(xhr, status, _error) {
      var messageObj = JSON.parse(xhr.responseText);
      handleError(messageObj.error);
    }
  });
};
