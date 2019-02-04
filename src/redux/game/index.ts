import { Reducer } from 'redux'
import { createAction, getType, ActionType } from 'typesafe-actions'

export const buttonPress = createAction('BUTTON_PRESS',
  resolve => (button: string) => resolve({ button })
)

export interface GameState {
  lastButton: string,
  score: number,
  highScore: number,
}

const initial: GameState = {
  lastButton: '',
  score: 0,
  highScore: 0,
}

const actions = { buttonPress }
type Actions = ActionType<typeof actions>

const gameReducer: Reducer<GameState, Actions> = (state = initial, action) => {
  switch (action.type) {
      case getType(buttonPress): {
          const type = getType(buttonPress)
          const lastButton = action.payload.button
          return { ...state, lastButton }
      }
      default: {
          return state
      }
  }
}

export default gameReducer
