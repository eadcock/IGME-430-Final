let { Editor }  = require('@tinymce/tinymce-react');
let helper = require('./../helper/helper.js');

let showingCreateForm = false;

let cacheAccount = {};

const handleNote = (e) => {
  e.preventDefault();

  if($('#noteTitle').val() == '' || $('textarea').val() == '') {
    helper.handleError('All fields are required');
    return false;
  }

  helper.sendAjax('POST', $('#noteForm').attr('action'), $('#noteForm').serialize(), () => {
    loadNotesFromServer();

    $('#noteForm').hide();
  });

  return false;
};

const handleExitNote = (e) => {
  loadNotesFromServer();
}

const NoteExpanded = (props) => {
  return (
    <div className="noteExpanded">
      <h2>{props.note.title}</h2>
      <img id='expandedExitHover' src='./assets/img/cross-hover.svg' alt='exit cross when hovered over' onClick={handleExitNote}/>
      <img id='expandedExit' src='./assets/img/cross.svg' alt='exit cross'/>
      <p className="noteContent" dangerouslySetInnerHTML={{__html: props.note.content}}></p>
      <span>
        <p className="noteAuthor">Author: {props.account.username}</p>
        <p className="noteDate">Posted on: {(new Date(props.note.createdData)).toLocaleDateString("en-US")}</p>
      </span>
    </div>
  );
}

//
const NoteForm = (props) => {
  return (
    <form id="noteForm"
          onSubmit={handleNote}
          name="noteForm"
          action="/maker"
          method="POST"
          className="mainForm"
    >
      <label htmlFor="noteTitle">Title: </label>
      <input id="noteTitle" type="text" name="title" placeholder="Note Title"/>
      <label htmlFor="content">Content: </label>
      <Editor
        textareaName="content"
        apiKey="fudiy8fe4dx3fx3nl9nzj5rype6w5qxyddbeept35rjkwkx1"
        initialValue="<p>Initial content</p>"
        init={{
          setup: (e) => {
            e.on('change', (inst) => {
              inst.getBody().innerHTML = inst.getBody().innerHTML.replace("/<\/?script>/", "");
              e.save();
            });
          },
          height: 500,
          width: 900,
          menubar: false,
          plugins: [
            'advlist autolink lists link image', 
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
      />
      <input type="hidden" name="_csrf" value={props.csrf}/>
      <input className="formSubmit" type="submit" value="Make Note"/>
    </form>
  )
};

const getAuthor = (id, callback) => {
  helper.sendAjax('GET', '/getUser', { id: encodeURI(id) }, (res) => {
    callback(res);
  });
};

const DisplayNote = (note) => {
  if(typeof(note) === Array) note = note[0];
  getAuthor(note.owner, (res) => {
    ReactDOM.render(
      <NoteExpanded note={note} account={res[note.owner]}/>, document.querySelector('#content')
    );
  });
}

const NoteList = (props) => {
  if(props.notes.length === 0) {
    return (
      <div className="noteList">
        <h3 className="emptyNote">No Notes yet</h3>
      </div>
    );
  }

  const noteNodes = props.notes.map((note) => {
    let preview = note.content;
    if(new RegExp('<[^>]*>').test(preview)) {
      preview = $(preview).text();
    }
    preview = preview.length > 60 ? (preview.slice(0, 61) + '...') : preview;
    return (
      <div key={note._id} className="note" onClick={(e) => DisplayNote(note)}>
        <img src="/assets/img/moleskine.svg" alt="notebook" className="notebook" />
        <h3 className="noteTitle"> Title: {note.title} </h3>
        <h3 className="noteContent"> Preview: {preview} </h3>
        <h3 className="noteDate"> Created: {(new Date(note.createdData)).toLocaleDateString("en-US")}</h3>
      </div>
    );
  });

  if(!props.user.account.premium) {
    if(noteNodes.length < 5) {
      noteNodes.push(<div key={$`ad{i}`} className="ad"><h2>THIS COULD BE YOUR AD</h2></div>);
    } else {
      for(let i = 1; i < noteNodes.length; i++) {
        if(i % 5 === 0) {
          noteNodes.splice(i, 0, (<div key={$`ad{i}`} className="ad"><h2>THIS COULD BE YOUR AD</h2></div>));
        }
      }
    }
  }

  return (
    <div className="noteList">
      {noteNodes}
    </div>
  );
};

const PublicNoteList = (props) => {
  if (props.notes.length === 0) {
    return (
      <div className="noteList">
        <h3 className="emptyNote">No Notes yet</h3>
      </div>
    );
  }

  const noteNodes = props.notes.map((note, i) => {
    let preview = note.content;
    if(new RegExp('<[^>]*>').test(preview)) {
      preview = $(preview).text();
    }
    preview = preview.length > 60 ? (preview.slice(0, 61) + '...') : preview;
    let content = (
      <div key={note._id} className="note" onClick={(e) => DisplayNote(note)}>
        <img src="/assets/img/moleskine.svg" alt="notebook" className="notebook" />
        <h3 className="noteTitle"> Title: {note.title} </h3>
        <h3 className="noteContent"> Preview: {preview} </h3>
        <h3 className="author"> Author: {props.authors[note.owner].username} </h3>
      </div>
    );
    return content;
  });

  if(!props.user.account.premium) {
    if(noteNodes.length < 5) {
      noteNodes.push(<div key={$`ad{i}`} className="ad"><h2>THIS COULD BE YOUR AD</h2></div>);
    } else {
      for(let i = 1; i < noteNodes.length; i++) {
        if(i % 5 === 0) {
          noteNodes.splice(i, 0, (<div key={$`ad{i}`} className="ad"><h2>THIS COULD BE YOUR AD</h2></div>));
        }
      }
    }
  }
  
  return (
    <div className="noteList">
      {noteNodes}
    </div>
  );
}

const loadNotesFromServer = (callback) => {
  helper.sendAjax('GET', '/getNotes', null, (data) => {
    console.log(cacheAccount);
    ReactDOM.render(
      <NoteList notes={data.notes} user={cacheAccount}/>, document.querySelector('#content')
    );
    if(callback) callback(data);
  });
};

const loadNotefromServer = (callback, id) => {
  if(id)
  {
    id = { id: encodeURI(id) };
  } 
     
  helper.sendAjax('GET', '/note', id, (data) => {
    DisplayNote(data.notes);
    if(callback) callback(data);
  });
};

const loadNotesFromServerByUser = (callback, author) => {
  helper.sendAjax('GET', '/user', { author: encodeUIR(author) }, (data) => {
    ReactDOM.render(
      <NoteList notes={data.notes} user={cacheAccount}/>, document.querySelector('#content')
    );
    if(callback) callback(data);
  })
}

const setup = (csrf) => {
  helper.fetchAccount((data) => {
    cacheAccount = data;
    ReactDOM.render(
      <a href="/premium">{data.account.premium ? 'Manage Premium' : 'Get Premium'}</a>, document.querySelector('#premium')
    );

    ReactDOM.render(
      <NoteList notes={[]} user={data.account} />, document.querySelector('#content')
    );

    let params = new URLSearchParams(window.location.search);
    if (params.has('note')) {
      loadNotefromServer(() => {}, params.get('note'));
    } else if (params.has('author')) {
      loadNotesFromServerByUser(() => {}, params.get('author'));
    } else {
      loadNotesFromServer(() => {});
    }
  });

  $('#noteExpanded').hide();

  $('#noteForm').hide();

  $('#add').on('click', () => {
    if(showingCreateForm) {
      loadNotesFromServer((_) => {
        $('#privateLink').hide();
        $('#publicLink').show();
        showingCreateForm = !showingCreateForm;
      });
    } else {
      ReactDOM.render(
        <NoteForm csrf={csrf} />, document.querySelector('#content')
      );
      $('#privateLink').show();
      $('#publicLink').show();
      showingCreateForm = !showingCreateForm;
    }
  });

  $('#publicLink').on('click', () => {
    showingCreateForm = false;
    helper.sendAjax('GET', '/getPublicNotes', null, (data) => {
      getAuthor([...[...new Set(data.notes.map((e) => e.owner))]].join(','), (authors) => {
        ReactDOM.render(
          <PublicNoteList notes={data.notes} user={cacheAccount} authors={authors}/>, document.querySelector('#content')
        );
      });
      $('#privateLink').show();
      $('#publicLink').hide();
    });
  });

  $('#privateLink').on('click', () => {
    showingCreateForm = false;
    loadNotesFromServer((_) => {
      $('#privateLink').hide();
      $('#publicLink').show();
    });
  });

  $('#privateLink').hide();

  
};

const getToken = () => {
  helper.sendAjax('GET', '/getToken', null, (result) => {
    setup(result.csrfToken);
  });
};

$(() => {
  getToken();
});