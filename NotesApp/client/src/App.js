import React from 'react';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import { useState,useEffect } from 'react';
import api from './api'

export default function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() =>
  {
    api.getAllNotes().then(notes => {
            setNotes(notes.data);
        })

  },[])

  const addNote = (note) => {
    setNotes((prevState) => {
      return [...prevState, note];
    });

    api.insertNote(note).then(res => 
    {
     console.log(`Note inserted successfully`)
    })

  };



  const deleteNote = (uid) => {
    const newNotes = notes.filter((note) => {
      return note.uid !== uid;
    });

    if(uid)
    {
      api.deleteNoteById(uid)
    }


    setNotes(newNotes);
    console.log(uid,newNotes)
  };


  return (
    <div>
      <Header />
      <CreateArea toAdd={addNote} />
      <div className="Note-Area">
        {notes.length > 0 && notes.map((note, index) => {
          return (
            <Note
              key={index}
              uid={note.uid}
              title={note.title}
              content={note.content}
              toDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
