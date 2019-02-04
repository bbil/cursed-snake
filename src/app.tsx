import React, { Component } from 'react'

import { Store } from 'redux'
import { Provider } from 'react-redux';

import Game from './components/Game'

// Rendering a simple centered box
export default class App extends Component<{store: Store}> {
  render() {
    return (
        <Provider store={this.props.store}>
            <Game />
        </Provider>
    );
  }
}
