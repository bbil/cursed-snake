import React from 'react'

import Header from '../Header'
import Board from '../Board'

import styles from '../styles'

const boxOptions = {
  label: 'snake',
  top: 'center',
  left: 'center',
  width: '100%',
  height: '100%',
  border: styles.border,
  style: styles.borderColor('blue'),
}

const Game = () => {

    return(
      // @ts-ignore
      <box {...boxOptions}>
        <Header />
        <Board />
      { /*
        // @ts-ignore */}
      </box>
    )
}

export default Game
