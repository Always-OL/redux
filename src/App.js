import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header'
import Content from './Content'
import './index.css'


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

/**
* 
* @param {发生的变化} reducer 
*/
function createStore (reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
      state = reducer(state, action)
      listeners.forEach((listener) => listener())
  }
  dispatch({});
  return { getState, dispatch ,subscribe }
}

const store = createStore(themeReducer)

class Index extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext(){
    return {store}
  }

  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

export default Index