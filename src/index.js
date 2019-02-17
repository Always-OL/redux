import React from 'react'
import App from './App'
import ReactDOM from 'react-dom';
// import { Provider } from './connect'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


function themeReducer (state, action) {
    if(!state){
        return {
          themeColor: 'red'
        }
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
          return { ...state, themeColor: action.themeColor }
        default:
          return state
    }
  }
  
//   /**
//   * 
//   * @param {发生的变化} reducer 
//   */
//   function createStore (reducer) {
//     let state = null
//     const listeners = []
//     const subscribe = (listener) => listeners.push(listener)
//     const getState = () => state
//     const dispatch = (action) => {
//         state = reducer(state, action)
//         listeners.forEach((listener) => listener())
//     }
//     dispatch({});
//     return { getState, dispatch ,subscribe }
//   }
  
const store = createStore(themeReducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);