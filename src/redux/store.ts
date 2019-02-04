import { createStore, combineReducers, AnyAction } from 'redux'

import game, { GameState } from './game'

export interface Store {
    game: GameState
}

const reducer = combineReducers({
    game
})

export const store = createStore<Store, AnyAction, {}, {}>(reducer)
