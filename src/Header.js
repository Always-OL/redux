import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from './connect'
import { connect } from 'react-redux'

class Header extends Component {
    static propTypes = {
        themeColor: PropTypes.object
    }
    // constructor(){
    //     super()
    //     this.state={
    //         themeColor: ''
    //     }
    // }

    // componentDidMount(){
    //     this.update();
    //     const { store } = this.context
    //     store.subscribe(() => this.update())
    // }

    // update(){
    //     const { store } = this.context;
    //     const state = store.getState();
    //     this.setState({ themeColor: state.themeColor })
    // }

  render () {
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      themeColor: state.themeColor
    }
}

const mapDispatchToProps = (dispatch)=>{
 return{
  onSwitchColor: (color) => {
    dispatch({ type: 'CHANGE_COLOR', themeColor: color })
  }
 }
}
Header = connect(mapStateToProps, mapDispatchToProps)(Header)
export default Header