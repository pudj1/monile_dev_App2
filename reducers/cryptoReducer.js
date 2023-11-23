import uuid from 'react-native-uuid'
import { ADD_COIN, REMOVE_COIN } from '../src/actions'

const initialState = {
    coins: [{ amount: '1', selectedCoin: 'Bitcoin', id: uuid.v4() }]
}

const cryptoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COIN:
            return {
                coins: [
                    ...state.coins,
                    action.coin
                ]
            }
        case REMOVE_COIN:
            const index = state.coins.findIndex(
                coin => coin.id === action.coin.id)
            return {
                coins: [
                    ...state.coins.slice(0, index),
                    ...state.coins.slice(index + 1)
                ]
            }
        default:
            return state
    }
}

export default cryptoReducer
