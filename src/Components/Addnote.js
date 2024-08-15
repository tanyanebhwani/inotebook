import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const Addnote = (props) => {
  const context = useContext(noteContext);
  const [note, setNote] = useState({ title: "", desc: "", tag: "" });
  if (!context) {
    return <div>Loading...</div>;
  }

  const addNote = context.addNote;

  const style = {
    border: `1px solid black`,
    width: '70%'
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.desc, note.tag);
    props.showAlert("Note added successfully", "success");
    setNote({ title: "", desc: "", tag: "" });
  }
  const clearForm = (e) => {
    e.preventDefault();
    document.getElementById('title').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('tag').value = '';
    setNote({ title: "", desc: "", tag: "" });
  }
  return (
    <div className="container my-3" style={style}>
      <h1 className='add-note-head'>ADD NOTE</h1>
      <form className="my-3" id="addForm">
        <div className="mb-3 my-4">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" onChange={onChange} minLength={3} required value={note.title} />
        </div>
        <div className="mb-3 my-4">
          <label htmlFor="desc" className="form-label">Description</label>
          <input type="text" className="form-control" id="desc" name="desc" onChange={onChange} minLength={5} required value={note.desc} />
        </div>
        <div className="mb-3 my-4">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} value={note.tag} />
        </div>
        <div className="buttons my-4">
          <button type="submit" disabled={note.title.length < 5 || note.desc.length < 5} className="bttn btn-add-note" onClick={handleClick}>Add Note</button>
          <button className="bttn btn-reset" onClick = {clearForm} >Clear</button>
        </div>
      </form>
    </div>
  );
}

export default Addnote;