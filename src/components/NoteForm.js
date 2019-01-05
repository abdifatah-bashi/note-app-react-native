import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Textarea, Input, Button } from 'native-base';

export default class NoteForm extends Component {
  constructor(props) {
    super(props);
    const editNote = this.props.editNote;   
    this.state = {
      
      formControls: {
        id: editNote ? editNote.id : 0, 
        title: editNote ? editNote.title : '', 
        content:  editNote ? editNote.content : '',
      }
    };
  }

  updateInputState =(key, val) =>{
    this.setState( prevState => {
      return {
       formControls:{
         ...prevState.formControls,
         [key]: val 
       }
      }
    })
  }

  clearInputForm =( )=> {
    this.setState(prevState => ({
      formControls: {title: '', content: ''}
    }))
  }

   submitHandler = () => {
    const id = this.state.formControls.id;
    const title = this.state.formControls.title;
    const content = this.state.formControls.content;
    const note = {id, title, content};
    if(title.trim() !== "" && content.trim() !== ""){
   
    const editState = this.props.editNote ? true : false;
    this.clearInputForm();
    if(editState){
     this.props.onEditNote(note);
    } else {
      this.props.onAddNote(note);
    }
     
    }
  }

  render() {
    return (
      <Container>
      <Header />
      <Content>
    
        <Form>
          <Item>
            <Input 
            placeholder="Title" 
            onChangeText={(val )=> this.updateInputState('title', val)}
            value={this.state.formControls.title}
            />
          </Item>
         <Item last>
         <View style={styles.textareaContainer}>

 
         <Textarea 
         placeholder="Write your note here ..." 
         onChangeText={(val )=> this.updateInputState('content', val)}
         value={this.state.formControls.content}
         style={styles.textarea}
         rowSpan={5} bordered />
                 </View>
         </Item>
         <Button block success
          onPress={this.submitHandler} >
            <Text>ADD</Text>
          </Button>
        </Form>
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({

  textareaContainer: {
   flex: 1, 
   justifyContent: 'center',
   alignItems: 'center',
  }, 
  textarea:{
    width: '100%',
    margin: 10, 
    marginRight: 25,
    
  }
 
});