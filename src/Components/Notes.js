import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({ id:"",title: "", description: "", tag: "" });
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const updateNote = (note) => {
    ref.current.click();
    setNote({id:note._id,
      title:note.title,
      description:note.description,
      tag:note.tag});    
  }

  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      getNotes();
    }
    else
    {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  const handleClick = (e) => {
    editNote(note.id, note.title, note.description, note.tag);
    e.preventDefault();
    refClose.current.click();
    props.showAlert("Note updated successfully","success");
  }

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);

  if (!context) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row my-3">
      <Addnote showAlert = {props.showAlert}/>
      <Button className="d-none" variant="primary" onClick={handleShow} ref={ref}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} minLength={3} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">Tag</label>
              <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" ref = {refClose} onClick={handleClose}>
            Close
          </Button>
          <Button disabled={note.title.length<3||note.description.length<5}variant="primary" onClick={handleClick} >
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="containter row my-3">
      <h2>Your Notes</h2>
      <div className="container">
      {notes.length===0 && 'No notes to display'}
      </div>
      {notes.map((note) => {
        return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>;
      })}
    </div>
    </div>
  );
}

export default Notes;
