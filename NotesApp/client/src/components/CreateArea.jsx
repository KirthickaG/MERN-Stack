import React from 'react';
import { useState,useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { v4 as uuidv4 } from 'uuid';

const CreateArea = (props) => {
  const [note, setNote] = useState({
    uid : '',
    title: '',
    content: '',
  });

  const [isExpand, setIsExpand] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const getuuid = uuidv4();
    setNote((prevState) => ({
      ...prevState,
      [name]: value,
      uid : getuuid
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if(note.title)
    {
        props.toAdd(note);
    }
    else
    {
      window.alert("Empty Note")
    }


    setNote({
      uid : '',
      title: '',
      content: '',
    });
  };

  const handleClick = (e) => {
    setIsExpand(true);
  };


  return (
    <form className="create-note">
      {isExpand ? (
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
      ) : (
        ''
      )}

      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Take a Note..."
        rows={isExpand ? 3 : 1}
        onClick={handleClick}
      />
      <Fab onClick={handleAdd}>
        <AddIcon />
      </Fab>
    </form>
  );
};

export default CreateArea;
