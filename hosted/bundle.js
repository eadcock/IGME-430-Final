"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var NoteExpanded = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(props) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sendAjax('GET', '/getUser', {
              id: encodeURIComponent(props.note.owner)
            }, function (res) {
              return (/*#__PURE__*/React.createElement("div", {
                  className: "noteExpanded"
                }, /*#__PURE__*/React.createElement("img", {
                  id: "expandedExitHover",
                  src: "./assets/img/cross-hover.svg",
                  alt: "exit cross when hovered over",
                  onClick: handleExitNote
                }), /*#__PURE__*/React.createElement("img", {
                  id: "expandedExit",
                  src: "./assets/img/cross.svg",
                  alt: "exit cross"
                }), /*#__PURE__*/React.createElement("h2", null, props.note.title), /*#__PURE__*/React.createElement("p", null, props.note.content), /*#__PURE__*/React.createElement("p", {
                  className: "noteAuthor"
                }, "Author: ", props.note.owner), /*#__PURE__*/React.createElement("p", {
                  className: "noteDate"
                }, "Posted on: ", props.note.created))
              );
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function NoteExpanded(_x) {
    return _ref.apply(this, arguments);
  };
}();

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

var DisplayNote = function DisplayNote(note) {
  $('#notes').hide();
  ReactDOM.render( /*#__PURE__*/React.createElement(NoteExpanded, {
    note: note
  }), document.querySelector('#noteExpanded'));
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
        alt: "note face",
        className: "noteFace"
      }), /*#__PURE__*/React.createElement("h3", {
        className: "noteTitle"
      }, " Title: ", note.title, " "), /*#__PURE__*/React.createElement("h3", {
        className: "noteContent"
      }, " Preview: ", note.content, " "))
    );
  });
  return (/*#__PURE__*/React.createElement("div", {
      className: "noteList"
    }, noteNodes)
  );
};

ReactDOM.rend;

var loadNotesFromServer = function loadNotesFromServer() {
  sendAjax('GET', '/getNotes', null, function (data) {
    ReactDOM.render( /*#__PURE__*/React.createElement(NoteList, {
      notes: data.notes
    }), document.querySelector('#notes'));
  });
};

var setup = function setup(csrf) {
  ReactDOM.render( /*#__PURE__*/React.createElement(NoteForm, {
    csrf: csrf
  }), document.querySelector('#makeNote'));
  ReactDOM.render( /*#__PURE__*/React.createElement(NoteList, {
    notes: []
  }), document.querySelector('#notes'));
  $('#noteForm').hide();
  $('#add').click(function () {
    $('#noteForm').show();
  });
  loadNotesFromServer();
};

var getToken = function getToken() {
  sendAjax('GET', '/getToken', null, function (result) {
    setup(result.csrfToken);
  });
};

$(document).ready(function () {
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
