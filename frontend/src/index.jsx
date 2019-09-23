import React from 'react'
import ReactDom from 'react-dom'
import App from './main/app'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

const providers = combineReducers({
    fields: () => ({ value: 'Opa' })
})

ReactDom.render(<App />, document.getElementById('app'))