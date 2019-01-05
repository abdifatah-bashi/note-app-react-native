import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Card, CardItem, Text } from "native-base";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class NoteDetails extends Component {
  
  render() {
    return (
      <Container>
       <Card>
        
         <CardItem>
           <Text> Title: {this.props.note.title} </Text>
         </CardItem>
 
         <CardItem>
         <Text> Phone: { this.props.note.content} </Text>
         </CardItem>
 
         <CardItem>
         <View style={styles.actionContainer}>
         <TouchableOpacity
          onPress={()=> this.props.onEditNote(this.props.note)}>
           <Icon name='pencil' size={30} color='green' style={styles.icon}/>
         </TouchableOpacity>
 
         <TouchableOpacity
          onPress={()=> this.props.onDeleteNote(this.props.note)}>
         <Icon name='trash' size={30} color='red' style={styles.icon}/>
         </TouchableOpacity>
         </View>
     
         </CardItem>
         
       </Card>
      </Container>
     );
   }
 }
 
 const styles = StyleSheet.create({
   actionContainer:{
     flex:1, 
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
   },
   icon:{
     marginHorizontal: 20,
     padding: 5
   }
 });
 