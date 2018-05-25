import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers';
import Header from './src/components/common/Header';
import LibraryList from './src/components/LibraryList';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)} >
      <View style={{ flex: 1 }}>
        <Header headerTitle='React - Redux' />
        <LibraryList />
      </View>
       </Provider>

    );
  }
}

export default App;
