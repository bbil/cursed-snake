import { Store } from "../redux/store";

export function selectScores(state: Store) {
    return {
        high: state.game.highScore,
        current: state.game.score,
    }
}

export function selectLastButton(state: Store) {
    return state.game.lastButton
}
