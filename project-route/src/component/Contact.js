import React, { Component } from 'react'
import {Prompt} from 'react-router-dom'
class Contact extends Component {

    constructor(props){
        super(props);
        this.state={
            isChecked: false
        }
    }

    render() {
        return (
            <>
                <h1>Đây là trang contact</h1>
                <button onClick={()=>{this.onAllow(false)}}>Cho phep</button>
                <button onClick={()=>{this.onAllow(true)}}>Khong cho phep</button>
                <Prompt when={this.state.isChecked} message={location => (`${location.pathname}`)} />
            </>
        )
    }

    onAllow = (isChecked) =>{
        this.setState({
            isChecked: isChecked
        })
    }

}

export default Contact;