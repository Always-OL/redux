import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from './Header'
import Content from './Content'
import './index.css'



class Index extends Component {
  // static childContextTypes = {
  //   store: PropTypes.object
  // }

  // getChildContext(){
  //   return {store}
  // }

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
