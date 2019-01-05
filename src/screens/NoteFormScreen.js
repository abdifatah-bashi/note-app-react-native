import React, { Component } from 'react';
import {connect} from "react-redux";
import { View, Text } from 'react-native';
import NoteForm from '../components/NoteForm';
import { addNote, editNote } from "../store/actions/actionBundle";


 class NoteFormScreen extends Component {
  
  addNoteHandler = (note) => {
   this.props.onAddNote(note);
   this.props.navigation.navigate('NoteList');
  }

  editNoteHandler = (note) => {
   this.props.onEditNote(note);
   this.props.navigation.navigate('NoteList');
  }

  render() {
    const {navigation} = this.props;
    const note = navigation.getParam('note', null);
    return (
    
       <NoteForm
        editNote={note}
        onEditNote={this.editNoteHandler}
        onAddNote={this.addNoteHandler}
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
  onAddNote: (note)=> dispatch(addNote(note)),
  onEditNote: (note)=> dispatch(editNote(note))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteFormScreen);
