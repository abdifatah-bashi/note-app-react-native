import React, { Component } from 'react';
import {connect} from "react-redux";
import { View, Text } from 'react-native';
import NoteList from "../components/NoteList";
import {fetchNotes, deleteNote } from "../store/actions/actionBundle";


 class NoteListScreen extends Component {
 
  componentDidMount(){    
    this.props.fetchNotes();
   
  } 

  addNewNoteHandler =()=> {
    this.props.navigation.navigate('NoteForm');
  }
  
  noteSelectedHandler = (note) => {
   this.props.navigation.navigate('NoteDetails', {note});
  }

  componentWillReceiveProps(nextProps){
    this.props.fetchNotes();
  }

  render() {
    return (
      <NoteList
        notes={this.props.notes}
        onAddNewNote={this.addNewNoteHandler}
        onNoteSelected={this.noteSelectedHandler}
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
  fetchNotes: ()=> dispatch(fetchNotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteListScreen);

