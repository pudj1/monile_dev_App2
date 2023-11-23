import React from 'react'

import rootReducer from './reducers/index'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Crypto from "./src/Crypto";

const store = createStore(rootReducer)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store} >
                <Crypto />
            </Provider>
        )
    }
}
