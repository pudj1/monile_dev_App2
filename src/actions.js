export const ADD_COIN = 'ADD_COIN'
export const REMOVE_COIN = 'REMOVE_COIN'
import uuid from 'react-native-uuid'

export function addCoin (coin) {
    return {
        type: ADD_COIN,
        coin: {
            ...coin,
            id: uuid.v4()
        }
    }
}

export function removeCoin (coin) {
    return {
        type: REMOVE_COIN,
        coin
    }
}
