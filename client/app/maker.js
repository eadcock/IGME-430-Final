const handleNote = (e) => {
  e.preventDefault();

  if($('#noteTitle').val() == '' || $('#noteContent').val() == '') {
    handleError('All fields are required');
    return false;
  }

  sendAjax('POST', $('#noteForm').attr('action'), $('#noteForm').serialize(), () => {
    loadNotesFromServer();

    $('#noteForm').hide();
  });

  return false;
};

const handleExitNote = (e) => {
  ReactDOM.unmountComponentAtNode(document.querySelector('#noteExpanded'));
  $('#noteExpanded').hide();
  $('#notes').show();
}

const NoteExpanded = (props) => {
  return (
    <div className="noteExpanded">
      <h2>{props.note.title}</h2>
      <img id='expandedExitHover' src='./assets/img/cross-hover.svg' alt='exit cross when hovered over' onClick={handleExitNote}/>
      <img id='expandedExit' src='./assets/img/cross.svg' alt='exit cross'/>
      <p className="noteContent">{props.note.content}</p>
      <span>
        <p className="noteAuthor">Author: {props.account.username}</p>
        <p className="noteDate">Posted on: {(new Date(props.note.createdData)).toLocaleDateString("en-US")}</p>
      </span>
      
    </div>
  );
}

const NoteForm = (props) => {
  return (
    <form id="noteForm"
          onSubmit={handleNote}
          name="noteForm"
          action="/maker"
          method="POST"
          className="mainForm"
    >
      <label htmlFor="name">Title: </label>
      <input id="noteTitle" type="text" name="title" placeholder="Note Title"/>
      <label htmlFor="age">Content: </label>
      <textarea id="noteContent" name="content" rows="4" cols="45" placeholder="Note Content"/>
      <input type="hidden" name="_csrf" value={props.csrf}/>
      <input className="formSubmit" type="submit" value="Make Note"/>
    </form>
  )
};

const getAuthor = (id, callback) => {
  sendAjax('GET', '/getUser', { id: encodeURIComponent(id) }, (res) => {
    callback(res);
  });
};

const DisplayNote = (note) => {
  $('#notes').hide();
  
  getAuthor(note.owner, (res) => {
    console.log(res);
    ReactDOM.render(
      <NoteExpanded note={note} account={res[note.owner]}/>, document.querySelector('#noteExpanded')
    );
  });

  $('#noteExpanded').show();
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
    return (
      <div key={note._id} className="note" onClick={(e) => DisplayNote(note)}>
        <img src="/assets/img/moleskine.svg" alt="notebook" className="notebook" />
        <h3 className="noteTitle"> Title: {note.title} </h3>
        <h3 className="noteContent"> Preview: {note.content} </h3>
        <h3 className="noteDate"> Created: {(new Date(note.createdData)).toLocaleDateString("en-US")}</h3>
      </div>
    );
  });

  return (
    <div className="noteList">
      {noteNodes}
    </div>
  );
};

const PublicNoteList = (props) => {
  console.log(props);
  if (props.notes.length === 0) {
    return (
      <div className="noteList">
        <h3 className="emptyNote">No Notes yet</h3>
      </div>
    );
  }

  const noteNodes = props.notes.map((note, i) => {
    return (
      <div key={note._id} className="note" onClick={(e) => DisplayNote(note)}>
        <img src="/assets/img/moleskine.svg" alt="notebook" className="notebook" />
        <h3 className="noteTitle"> Title: {note.title} </h3>
        <h3 className="noteContent"> Preview: {note.content} </h3>
        <h3 className="author"> Author: {props.authors[note.owner].username} </h3>
      </div>
    );
  });

  return (
    <div className="noteList">
      {noteNodes}
    </div>
  );
}

const loadNotesFromServer = () => {
  sendAjax('GET', '/getNotes', null, (data) => {
    ReactDOM.render(
      <NoteList notes={data.notes} />, document.querySelector('#notes')
    );
  });
};

const setup = (csrf) => {
  $('#noteExpanded').hide();

  ReactDOM.render(
    <NoteList notes={[]} />, document.querySelector('#notes')
  );

  $('#noteForm').hide();

  $('#add').on('click', () => {
    ReactDOM.render(
      <NoteForm csrf={csrf} />, document.querySelector('#makeNote')
    );
    $('#noteForm').show();
  });

  $('#publicLink').on('click', () => {
    sendAjax('GET', '/getPublicNotes', null, (data) => {
      console.log([...[...new Set(data.notes.map((e) => e.owner))]].join(','));
      getAuthor([...[...new Set(data.notes.map((e) => e.owner))]].join(','), (authors) => {
        ReactDOM.render(
          <PublicNoteList notes={data.notes} authors={authors}/>, document.querySelector('#notes')
        );
      });
      $('#privateLink').show();
      $('#publicLink').hide();
    });
  });

  $('#privateLink').on('click', () => {
    loadNotesFromServer();
    $('#privateLink').hide();
    $('#publicLink').show();
  });

  $('#privateLink').hide();

  loadNotesFromServer();
};

const getToken = () => {
  sendAjax('GET', '/getToken', null, (result) => {
    setup(result.csrfToken);
  });
};

$(() => {
  getToken();
});