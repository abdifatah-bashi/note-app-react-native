import { FETCH_NOTES, ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "../actions/actionTypes";

const initialState = {
  notes: [],
  
}

const NoteReducer = (state = initialState, action) => {
  if (action.type === EDIT_NOTE){
    console.log("edit reducer ...");
  }
  switch(action.type){
   

    case FETCH_NOTES: 
    return {
     ...state, 
     notes: action.payload
    }
    case ADD_NOTE: 
    return{
    ...state,
    notes: state.notes.concat(note)
    }

    case EDIT_NOTE:
    return {
      ...state, 
      note: action.payload
    }

    case DELETE_NOTE: 
    return state;

    default: 
    return state;
  }
}

export default NoteReducer;