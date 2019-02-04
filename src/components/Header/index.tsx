import React from 'react'

import { connect } from 'react-redux'
import styles from '../styles'
import { Store } from '../../redux/store';
import { selectScores, selectLastButton } from '../../selectors/game';

const boxOptions = {
  top: '0',
  left: '0',
  width: '99%',
  height: '10%',
  border: styles.border,
  style: styles.borderColor('magenta'),
}

interface HeaderProps {
  high: number,
  current: number,
  lastButton: string,
}

type Header = React.FunctionComponent<HeaderProps>

const headerContent = (props: HeaderProps) => {
  return `High Score: ${props.high}\nCurrent Score: ${props.current}\t\tLast button: ${props.lastButton}`
}

const Header: Header = (props) => {
  return(
    // @ts-ignore
    <box {...boxOptions}>{headerContent(props)}</box>
  )
}

const mapStateToProps = (state: Store) => {
  return {
    ...selectScores(state),
    lastButton: selectLastButton(state),
  }
}

export default connect(mapStateToProps)(Header)
