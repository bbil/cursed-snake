import React from 'react'

import styles from '../styles'

const boxOptions = {
  top: '9%',
  left: '0',
  width: '99%',
  height: '87%',
  border: styles.border,
  style: styles.borderColor('cyan'),
}

const snake = {
  top: '500',
  left: '500',
}

const Board = () => {
  return(
    // @ts-ignore
    <box {...boxOptions}>
    { /*
      // @ts-ignore */}
      <text {...snake}>ooooQ</text>
    { /*
      // @ts-ignore */}
    </box>
  )
}

export default Board
