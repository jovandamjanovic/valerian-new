import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Character from '../containers/Character';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
            <div>
              <Character />
            </div>
      </Provider>
    );
  }
}

export default App;
