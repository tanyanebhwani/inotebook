import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
    const context  = useContext(noteContext);
    const {deleteNote} = context;
    const {note,updateNote} = props;
  return (
    <div className="card col-md-3">
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
    <p className="card-text">{note.description}</p>
    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id);props.showAlert("Note deleted successfully","success");}}></i>
    <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
  </div>
</div>
  )
}

export default Noteitem
