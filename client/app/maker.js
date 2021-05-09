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

const NoteExpanded = async (props) => {
  sendAjax('GET', '/getUser', { id: encodeURIComponent(props.note.owner) }, (res) => {
    return (
      <div className="noteExpanded">
        <img id='expandedExitHover' src='./assets/img/cross-hover.svg' alt='exit cross when hovered over' onClick={handleExitNote}/>
        <img id='expandedExit' src='./assets/img/cross.svg' alt='exit cross'/>
        <h2>{props.note.title}</h2>
        <p>{props.note.content}</p>
        <p className="noteAuthor">Author: {props.note.owner}</p>
        <p className="noteDate">Posted on: {props.note.created}</p>
      </div>
    );
  });
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

const DisplayNote = (note) => {
  $('#notes').hide();
  ReactDOM.render(
    <NoteExpanded note={note}/>, document.querySelector('#noteExpanded')
  );
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
        <img src="/assets/img/moleskine.svg" alt="note face" className="noteFace" />
        <h3 className="noteTitle"> Title: {note.title} </h3>
        <h3 className="noteContent"> Preview: {note.content} </h3>
      </div>
    );
  });

  return (
    <div className="noteList">
      {noteNodes}
    </div>
  );
};

ReactDOM.rend

const loadNotesFromServer = () => {
  sendAjax('GET', '/getNotes', null, (data) => {
    ReactDOM.render(
      <NoteList notes={data.notes} />, document.querySelector('#notes')
    );
  });
};

const setup = (csrf) => {
  ReactDOM.render(
    <NoteForm csrf={csrf} />, document.querySelector('#makeNote')
  );

  ReactDOM.render(
    <NoteList notes={[]} />, document.querySelector('#notes')
  );

  $('#noteForm').hide();

  $('#add').click(() => {
    $('#noteForm').show();
  });

  loadNotesFromServer();
};

const getToken = () => {
  sendAjax('GET', '/getToken', null, (result) => {
    setup(result.csrfToken);
  });
};

$(document).ready(() => {
  getToken();
});