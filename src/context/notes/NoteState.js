import React from "react";
import noteContext from './noteContext';
import { useState } from "react";
const host = "http://localhost:5000";
const NoteState = (props)=>{
  const notesInitial = [];
      const [notes, setNotes] = useState(notesInitial);
      //getAllNotes
      const getNotes = async()=>{
        try{
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
          method:'GET',
        headers:{
          'Content-type':'application/json',
          'auth-token': localStorage.getItem('token')
        }});
      const json = await response.json();
      setNotes(json);
        }
        catch(error)
        {
          console.log(error);
        }
      }
      //Add a note
      const addNote = async(title,description,tag)=>{
        //TODO:API Call
        const response = await fetch(`${host}/api/notes/addnote`,{
          method:'POST',
        headers:{
          'Content-type':'application/json',
          'auth-token': localStorage.getItem('token')
        },
      body:JSON.stringify({title,description,tag})});
      setNotes(notes.concat(await response.json()));
      };
      //edit note
      const editNote = async(id,title,description,tag)=>{
        //API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
          method:'PUT',
        headers:{
          'Content-type':'application/json',
          'auth-token': localStorage.getItem('token')
        },
      body:JSON.stringify({title,description,tag})});
      const json = await response.json();
      console.log(json,response);
      //Logic to edit in client
      let newNotes = JSON.parse(JSON.stringify(notes)); 
            for(let index = 0; index<newNotes.length; index++)
              {
                const element = newNotes[index];
                if (element._id===id) {
                  newNotes[index].title = title;
                  newNotes[index].description = description;
                  newNotes[index].tag = tag;   
                  break;               
                }
              }
              setNotes(newNotes);
      };
      //delete note
      const deleteNote = async(id)=>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
          method:'DELETE',
        headers:{
          'Content-type':'application/json',
          'auth-token': localStorage.getItem('token')
        },
        });
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
        console.log(response);
      };
    return (
        <noteContext.Provider value={{notes,getNotes,addNote,editNote,deleteNote}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;