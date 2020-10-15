import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Message from './../combonents/Message'
class MessageContainer extends Component{
    render(){
        let {message} = this.props;
        return (
            <Message message={message} />
        )
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStateToProp = (state)=>{
    return {
        message: state.message,
    }
}

const mapDispatchToProp = (dispatch,action)=>{
    return {
        
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(MessageContainer)