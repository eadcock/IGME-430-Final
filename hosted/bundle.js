"use strict";

var _this = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["ad{i}"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["ad{i}"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["ad{i}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["ad{i}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('@tinymce/tinymce-react'),
    Editor = _require.Editor;

var showingCreateForm = false;

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
  loadNotesFromServer();
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
      className: "tiny",
      name: "content",
      placeholder: "Note Content"
    }), /*#__PURE__*/React.createElement(Editor, {
      apiKey: "fudiy8fe4dx3fx3nl9nzj5rype6w5qxyddbeept35rjkwkx1",
      initialValue: "<p>Initial content</p>",
      init: {
        height: 500,
        menubar: false,
        plugins: ['advlist autolink lists link image', 'charmap print preview anchor help', 'searchreplace visualblocks code', 'insertdatetime media table paste wordcount'],
        toolbar: 'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
      },
      onChange: _this.handleEditorChange
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
    id: encodeURI(id)
  }, function (res) {
    callback(res);
  });
};

var DisplayNote = function DisplayNote(note) {
  getAuthor(note.owner, function (res) {
    console.log(res);
    ReactDOM.render( /*#__PURE__*/React.createElement(NoteExpanded, {
      note: note,
      account: res[note.owner]
    }), document.querySelector('#content'));
  });
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
    var preview = note.content.length > 60 ? note.content.slice(0, 61) + '...' : note.content;
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
      }, " Preview: ", preview, " "), /*#__PURE__*/React.createElement("h3", {
        className: "noteDate"
      }, " Created: ", new Date(note.createdData).toLocaleDateString("en-US")))
    );
  });

  if (noteNodes.length < 5) {
    noteNodes.push( /*#__PURE__*/React.createElement("div", {
      key: $(_templateObject()),
      className: "ad"
    }, /*#__PURE__*/React.createElement("h2", null, "THIS COULD BE YOUR AD")));
  } else {
    for (var i = 1; i < noteNodes.length; i++) {
      if (i % 5 === 0) {
        noteNodes.splice(i, 0, /*#__PURE__*/React.createElement("div", {
          key: $(_templateObject2()),
          className: "ad"
        }, /*#__PURE__*/React.createElement("h2", null, "THIS COULD BE YOUR AD")));
      }
    }
  }

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
    var preview = note.content.length > 60 ? note.content.slice(0, 61) + '...' : note.content;
    var content = /*#__PURE__*/React.createElement("div", {
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
    }, " Preview: ", preview, " "), /*#__PURE__*/React.createElement("h3", {
      className: "author"
    }, " Author: ", props.authors[note.owner].username, " "));
    return content;
  });

  if (noteNodes.length < 5) {
    noteNodes.push( /*#__PURE__*/React.createElement("div", {
      key: $(_templateObject3()),
      className: "ad"
    }, /*#__PURE__*/React.createElement("h2", null, "THIS COULD BE YOUR AD")));
  } else {
    for (var i = 1; i < noteNodes.length; i++) {
      if (i % 5 === 0) {
        noteNodes.splice(i, 0, /*#__PURE__*/React.createElement("div", {
          key: $(_templateObject4()),
          className: "ad"
        }, /*#__PURE__*/React.createElement("h2", null, "THIS COULD BE YOUR AD")));
      }
    }
  }

  return (/*#__PURE__*/React.createElement("div", {
      className: "noteList"
    }, noteNodes)
  );
};

var loadNotesFromServer = function loadNotesFromServer(callback) {
  sendAjax('GET', '/getNotes', null, function (data) {
    ReactDOM.render( /*#__PURE__*/React.createElement(NoteList, {
      notes: data.notes
    }), document.querySelector('#content'));
    callback(data);
  });
};

var setup = function setup(csrf) {
  $('#noteExpanded').hide();
  ReactDOM.render( /*#__PURE__*/React.createElement(NoteList, {
    notes: []
  }), document.querySelector('#content'));
  $('#noteForm').hide();
  $('#add').on('click', function () {
    if (showingCreateForm) {
      loadNotesFromServer(function (_) {
        $('#privateLink').hide();
        $('#publicLink').show();
        showingCreateForm = !showingCreateForm;
      });
    } else {
      ReactDOM.render( /*#__PURE__*/React.createElement(NoteForm, {
        csrf: csrf
      }), document.querySelector('#content'));
      $('#privateLink').show();
      $('#publicLink').show();
      showingCreateForm = !showingCreateForm;
    }
  });
  $('#publicLink').on('click', function () {
    showingCreateForm = false;
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
        }), document.querySelector('#content'));
      });
      $('#privateLink').show();
      $('#publicLink').hide();
    });
  });
  $('#privateLink').on('click', function () {
    showingCreateForm = false;
    loadNotesFromServer(function (_) {
      $('#privateLink').hide();
      $('#publicLink').show();
    });
  });
  $('#privateLink').hide();
  loadNotesFromServer(function () {});
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
