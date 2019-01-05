import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createAppContainer, createStackNavigator} from "react-navigation";
import NoteFormScreen from "./src/screens/NoteFormScreen";
import NoteListScreen from './src/screens/NoteListScreen';
import NoteDetailsScreen from './src/screens/NoteDetailsScreen';



const rootStack = createStackNavigator(
  {
    NoteForm: NoteFormScreen,
    NoteList: NoteListScreen,
   NoteDetails: NoteDetailsScreen
    
  },
  {
    initialRouteName: 'NoteList'
  });

  const AppContainer = createAppContainer(rootStack);

export default class App extends Component {
  
  render() {
    return <AppContainer/>
  }
}
