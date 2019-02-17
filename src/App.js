import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux'
import Header from './Header'
import Content from './Content'
import './index.css'



class Index extends Component {

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
