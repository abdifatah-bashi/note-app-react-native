import React, { Component } from 'react';
import { View, Text, TouchableOpacity,   StyleSheet, FlatList } from 'react-native';
import CustomList from './CustomList';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class NoteList extends Component {

  // Note selection handler
  noteSelectedHandler = (note) => {
   this.props.onNoteSelected(note);
  }

  render() {
   
    return (
      <View style={styles.container}>
        <View style={styles.addIconContainer} >
        <TouchableOpacity onPress={this.props.onAddNewNote}>
        <Icon name='plus' size={35} color='green' />
        </TouchableOpacity>
       
      </View>
     <FlatList
      data={this.props.notes}
      renderItem={({item}) => 
      <CustomList 
      note={item}
      onNoteSelected={this.noteSelectedHandler}
      />
      }
    />
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
   
 
  },
  addIconContainer: {
  
  
    alignSelf: 'flex-end',
    marginRight: 20,
  
  }
});