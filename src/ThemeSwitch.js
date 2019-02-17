import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './connect'

class ThemeSwitch extends Component {

    static contextTypes = {
        store: PropTypes.object,
        onSwitchColor: PropTypes.func
    }

    static propTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    }

    constructor(){
        super();
        this.state={
            themeColor: ''
        }
    }

    // componentDidMount(){
    //     this.update();
    //     const { store } = this.context;
    //     store.subscribe(()=>this.update())
    // }

    handleSwitchColor(color){
        if(this.props.onSwitchColor){
            this.props.onSwitchColor(color);
        }
    }

    // update(){
    //     const { store } = this.context;
    //     let state = store.getState();
    //     this.setState({themeColor: state.themeColor})
    // }

    // handleSwitchColor(color){
    //     const { store } = this.context
    //     console.log(color)
    //     store.dispatch({type: 'CHANGE_COLOR', themeColor: color})
    // }

    render () {
        return (
        <div>
            <button style={{color: this.props.themeColor}}
                onClick={()=>this.handleSwitchColor('red')}
            >Red</button>
            <button
                onClick={()=>this.handleSwitchColor('blue')}
             style={{color: this.props.themeColor}}>Blue</button>
        </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        themeColor: state.themeColor
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onSwitchColor: (color)=>{
            dispatch({type: 'CHANGE_COLOR', themeColor: color})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)