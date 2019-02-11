import React from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'

import App from './app'

import { store } from './redux'
import { buttonPress } from './redux/game';

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Cursed Snake'
});

// bind arrow keys
screen.key(['left', 'right', 'up', 'down'], (_, key) => {
  store.dispatch(buttonPress(key.name))
})


// Adding a way to quit the program
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
})

// Rendering the React app using our screen
const component = render(<App store={store} />, screen)

