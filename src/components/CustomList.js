import React, { Component } from 'react';
import { View, Text , StyleSheet, TouchableOpacity } from 'react-native';
import {ListItem  } from 'native-base';


export default class CustomList extends Component {

  render() {
    return (
     
     <ListItem  
        onPress={ ()=>this.props.onNoteSelected(this.props.note)}>
          <Text>{this.props.note.title} </Text>
        </ListItem>  
   
    );
  }
}

const styles = StyleSheet.create({

});
