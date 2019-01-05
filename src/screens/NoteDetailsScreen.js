import React, { Component } from 'react';
import {connect} from "react-redux"
import { View, Text } from 'react-native';
import NoteDetails from "../components/NoteDetails";
import { deleteNote } from "../store/actions/actionBundle";

class NoteDetailsScreen extends Component {

  // EDIT NOTE
  editNoteHandler = (note)=> {
    this.props.navigation.navigate('NoteForm', {note: note, state:'edit'});
  }
  // DELETE NOTE
  deleteNoteHandler =  (note)=> {
   this.props.onDeleteNote(note.id);
   this.props.navigation.navigate('NoteList');
  }

  render() {
    const {navigation} = this.props;
    const note = navigation.getParam('note', null);
    return (
     <NoteDetails
     note={note}
     onEditNote={this.editNoteHandler}
     onDeleteNote={this.deleteNoteHandler}
     />
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.noteReducer.notes,
    note: state.noteReducer.note
  }
}

const mapDispatchToProps = dispatch => {
  return {
  onDeleteNote: (id)=> dispatch(deleteNote(id)),
 

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetailsScreen);