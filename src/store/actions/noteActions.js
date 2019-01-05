import {FETCH_NOTES, ADD_NOTE, EDIT_NOTE, DELETE_NOTE} from "./actionTypes";
import api from "../api/api";

// FETCH ALL NOTE
export const fetchNotes = () => dispatch => {
    api.fetchAllNotes()
        .then(notes => dispatch(
          {
            type: FETCH_NOTES, 
            payload: notes
          }
        ))
      
};

// ADD NOTE
export const addNote = (note) => dispatch => {
  api.addNote(note)
     .then(newNote => dispatch(
        {
          type: ADD_NOTE, 
          payload: newNote
        }
      )
      )
}

// EDIT NOTE
export const editNote = (note) => dispatch => {
  api.editNote(note)
      .then(newNote => dispatch(
        {
          type: EDIT_NOTE, 
          payload: newNote
        }
      )
      )
}

// DELETE NOTE
export const deleteNote = (id) => dispatch => {
  api.deleteNote(id)
      .then(() => dispatch(
      {
        type: DELETE_NOTE, 

      }
      )
      )
  
}
