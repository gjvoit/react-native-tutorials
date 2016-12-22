// External imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
// Local file imports
import reducers from './reducers';
import { config } from '../firebasecredentials';
import Login from './components/Login';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Login />
      </Provider>
    );
  }
}

export default App;
